import { create, defaultUpdateFixtures } from '../fixtures';
import { Grammar } from '../grammar';
import * as cacheMap from '../util/cacheMap';
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

const TIMEOUT = 60000;

describe('Validate tokenizeToMd', function () {
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
            expect(comp.actual).toBe(comp.expected);
        }, TIMEOUT);
    }
});
