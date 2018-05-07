import { expect } from 'chai';
import { colorizeFile } from './application';
import { create, defaultUpdateFixtures } from './fixtures';
import * as cacheMap from './util/cacheMap';
import { Scope } from '.';
import { createColorizer } from './visualize';

const forceFixtureUpdate = false;
const updateFixtures = defaultUpdateFixtures || forceFixtureUpdate;
const fixtureHelper = create();
fixtureHelper.enableWriteBack = updateFixtures;

describe('Validate Application', () => {
    const tests = [
        ['sample.js', 'javascript.tmLanguage.json'],
        ['sample.ts', 'TypeScript.tmLanguage.json'],
    ];

    const scopeCache = cacheMap.create((scope: string) => {
        const tail = scope.split(' ').pop() || '';
        const kind = tail.split('.').shift() || '';
        return (text: string) => `${kind}[${text}]`;
    });

    function colorizeScope(text: string, scope: Scope): string {
        return scopeCache.get(scope)(text);
    }

    tests.forEach(([file, grammar]) =>
        it('Tests colorizing a file', async () => {
            const output: string[] = [];
            const grammarPath = fixtureHelper.resolveFixturePath('grammar', 'syntax', grammar);
            const filePath = fixtureHelper.resolveFixturePath('grammar', 'src', file);
            const fixturePath = fixtureHelper.relativeFixturePath('application', 'colorize', file + '.txt');
            await colorizeFile(grammarPath, filePath, line => output.push(line + '\n'), createColorizer(colorizeScope));
            const result = await fixtureHelper.compare(fixturePath, output.join(''));
            expect(result.actual).to.be.equal(result.expected);
        })
    );

});
