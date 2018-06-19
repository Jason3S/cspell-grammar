import { expect } from 'chai';
import { create, defaultUpdateFixtures } from '../fixtures';
import { Grammar } from './grammar';
import { tokenizeFile } from './tokenizeFile';
import * as cacheMap from '../util/cacheMap';
import * as path from 'path';

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

describe('Validate tokenizeFile', async function () {
    const grammarCache = cacheMap.create((grammarName: string) => {
        return Grammar.createFromFile(pathToSyntax(grammarName));
    });

    function fetchGrammar(name: string) {
        return grammarCache.get(name);
    }

    const tests: [string, string, string | undefined][] = [
        ['sample.json', 'jsonSample.yaml', 'sample.json.capture.json'],
        ['sample.json', 'JSON.tmLanguage.json', undefined],
        ['sample.js', 'javascript.tmLanguage.json', undefined],
        ['sample.ts', 'TypeScript.tmLanguage.json', undefined],
        ['sample.json', 'jsonSample.yaml', undefined],
    ];

    function testFile(sampleFile: string, grammarName: string, fixtureName?: string) {
        it(`test tokenizeFile ${sampleFile}`, async () => {
            const grammar = await fetchGrammar(grammarName)!;
            fixtureName = fixtureName || (sampleFile + '.json');
            const tokenizedResult = await tokenizeFile(grammar, pathToSource(sampleFile));
            tokenizedResult.filename = path.basename(tokenizedResult.filename);
            const json = JSON.stringify(tokenizedResult, null, 2);
            const compFull = await fixtureHelper.compare(toFixturePath(fixtureName), json);
            const comp = fixtureHelper.simplifyResult(compFull);
            expect(comp.actual).to.be.equal(comp.expected);
        });
    }

    for (const [sampleFile, grammarName, fixtureName] of tests) {
        testFile(sampleFile, grammarName, fixtureName);
    }
});

