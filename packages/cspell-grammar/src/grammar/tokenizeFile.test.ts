import { expect } from 'chai';
import { create, defaultUpdateFixtures } from '../fixtures';
import { Grammar } from './grammar';
import { tokenizeFile } from './tokenizeFile';
import * as cacheMap from '../util/cacheMap';
import * as path from 'path';
import { Registry, ITokenizeLineResult } from 'vscode-textmate';
import * as fs from 'fs-extra';

const updateFixtures = defaultUpdateFixtures;
const fixtureHelper = create();
fixtureHelper.enableWriteBack = updateFixtures;

function pathToSyntax(name: string) {
    return fixtureHelper.resolveFixturePath('grammar', 'syntax', name);
}

function pathToSource(name: string) {
    return fixtureHelper.resolveFixturePath('grammar', 'src', name);
}

function toFixturePath(name: string) {
    return fixtureHelper.relativeFixturePath('grammar', 'tokenized', name);
}

describe('Validate tokenizeFile', function () {
    this.timeout(60000);
    const grammarCache = cacheMap.create((grammarName: string) => {
        return Grammar.createFromFile(pathToSyntax(grammarName));
    });

    function fetchGrammar(name: string) {
        return grammarCache.get(name);
    }

    const tests = [
        ['sample.js', 'javascript.tmLanguage.json'],
        ['sample.ts', 'TypeScript.tmLanguage.json'],
    ];
    tests.length = 0;

    for (const [sampleFile, grammarName] of tests) {
        it(`test tokenizeFile ${sampleFile}`, async () => {
            const grammar = await fetchGrammar(grammarName)!;
            const fixtureName = sampleFile + '.json';
            const tokenizedResult = await tokenizeFile(grammar, pathToSource(sampleFile));
            tokenizedResult.filename = path.basename(tokenizedResult.filename);
            const json = JSON.stringify(tokenizedResult, null, 2);
            const comp = await fixtureHelper.compare(toFixturePath(fixtureName), json);
            expect(comp.actual).to.be.equal(comp.expected);
        });
    }
});

describe('Validate Against vscode-textmate', function () {
    this.timeout(60000);
    const grammarCache = cacheMap.create((grammarName: string) => {
        return Grammar.createFromFile(pathToSyntax(grammarName));
    });

    function fetchGrammar(name: string) {
        return grammarCache.get(name);
    }

    const tests = [
        ['sample.js', 'javascript.tmLanguage.json'],
        ['sample.ts', 'TypeScript.tmLanguage.json'],
    ];

    for (const [sampleFile, grammarName] of tests) {
        it(`test tokenizeFile ${sampleFile}`, async () => {
            const grammar = await fetchGrammar(grammarName)!;
            const tokenizedResult = await tokenizeFile(grammar, pathToSource(sampleFile));

            const vsCodeResults = tokenizeVSCode(pathToSyntax(grammarName), pathToSource(sampleFile));

            for (let i = 0; i < tokenizedResult.tokenizedLines.length; ++i) {
                const a = tokenizedResult.tokenizedLines[i];
                const b = vsCodeResults[i];

                if (a.line === '') {
                    continue;
                }

                const aScopes = a.tokens.map(t => t.scopes.join(' '));
                const bScopes = b.tokens.map(t => t.scopes.join(' '));
                expect(aScopes, `${a.lineNumber} [${a.line}]`).to.be.deep.equal(bScopes);
            }
        });
    }
});

function tokenizeVSCode(grammarFile: string, sampleFile: string) {
    const registry = new Registry();
    const grammar = registry.loadGrammarFromPathSync(grammarFile);
    const fileText = fs.readFileSync(sampleFile, 'utf-8');
    const lines = fileText.split('\n');

    let ruleStack: any = null;
    const results: ITokenizeLineResult[] = [];
    for (const line of lines) {
        const r = grammar.tokenizeLine(line, ruleStack);
        ruleStack = r.ruleStack;
        results.push(r);
    }

    return results;
}
