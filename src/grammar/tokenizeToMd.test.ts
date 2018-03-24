import { expect } from 'chai';
import { create, defaultUpdateFixtures } from './fixtures';
import { Grammar } from './grammar';
import * as cacheMap from './cacheMap';
import { tokenizeFileToMd } from './tokenizeToMd';

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

describe('Validate tokenizeToMd', function () {
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
            const fixtureName = sampleFile + '.md';
            const md = await tokenizeFileToMd(grammar, pathToSource(sampleFile));
            const comp = await fixtureHelper.compare(toFixturePath(fixtureName), md);
            expect(comp.actual).to.be.equal(comp.expected);
        });
    }
});
