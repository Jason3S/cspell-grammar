import { expect } from 'chai';
import * as syntaxRepository from 'cspell-grammar-syntax';
import { Registry } from '.';
import { Registry as VSCodeRegistry, ITokenizeLineResult } from 'vscode-textmate';
import * as Fixtures from '../fixtures';
import * as path from 'path';
import * as seq from 'gensequence';
import { TokenizeLineResult } from './grammar';

const registryPromise = loadRegistry();
const vsCodeRegistry = loadVSCodeRegistry();
const fixtures = Fixtures.create();

describe('Validate against vscode-textmate', function() {

    const tests = [
        ['sample.js', 'source.js'],
        ['sample.ts', 'source.ts'],
        ['sample.go', 'source.go'],
        ['sample.py', 'source.python'],
        ['sample.json', 'source.json'],
        // ['sample.tex', 'text.tex.latex'],
    ];

    function testFile(sampleFile: string, scopeName: string) {
        it(`test tokenizeFile ${sampleFile}`, async () => {
            const fullPath = path.join('grammar', 'src', sampleFile);
            const registry = await registryPromise;
            const text = await fixtures.read(fullPath);
            const tokenizedLines = tokenizeText(registry, text, scopeName);
            const vsCodeResults = tokenizeVSCode(vsCodeRegistry, text, scopeName);

            seq.genSequence(tokenizedLines)
            .combine((a, b) => [a, b!] as [TokenizeLineResult, ITokenizeLineResult], vsCodeResults)
            .forEach(([a, b]) => {
                if (a.line === '') {
                    return;
                }

                const mx = a.line.length;

                const aScopes = a.tokens.map(t => `${t.startIndex}-${t.endIndex} ${t.scopes.join(' ')}`);
                const bScopes = b.tokens.map(t => `${t.startIndex}-${Math.min(t.endIndex, mx)} ${t.scopes.join(' ')}`);
                // const aScopes = a.tokens.map(t => t.scopes.join(' '));
                // const bScopes = b.tokens.map(t => t.scopes.join(' '));
                expect(aScopes, `${a.lineNumber} [${a.line}]`).to.be.deep.equal(bScopes);
            });
        });
    }

    for (const [sampleFile, scopeName] of tests) {
        testFile(sampleFile, scopeName);
    }
});

function* tokenizeVSCode(vsCodeRegistry: VSCodeRegistry, text: string, scopeName: string) {
    const grammar = vsCodeRegistry.grammarForScopeName(scopeName);
    const lines = text.split('\n');

    let ruleStack: any = null;
    for (const line of lines) {
        const r = grammar.tokenizeLine(line, ruleStack);
        ruleStack = r.ruleStack;
        yield r;
    }
}

async function loadRegistry(...optionalGrammarFiles: string[]) {
    const grammarFiles = syntaxRepository.getFilenames().concat(optionalGrammarFiles);
    return Registry.create(grammarFiles);
}

function loadVSCodeRegistry(...optionalGrammarFiles: string[]) {
    const registry = new VSCodeRegistry();
    const grammarFiles = syntaxRepository.getFilenames().concat(optionalGrammarFiles);

    grammarFiles.forEach(file => registry.loadGrammarFromPathSync(file));

    return registry;
}

function* tokenizeText(registry: Registry, text: string, scopeName: string) {
    const grammar = registry.getGrammarForScope(scopeName)!;
    yield *grammar.tokenizeLines(text.split(/\r?\n/));
}
