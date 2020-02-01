import { colorizeFile, analyze } from './application';
import { create, defaultUpdateFixtures } from './fixtures';
import * as cacheMap from './util/cacheMap';
import { Scope, createColorizer } from 'cspell-grammar';
import stripAnsi = require('strip-ansi');

const forceFixtureUpdate = false;
const updateFixtures = defaultUpdateFixtures || forceFixtureUpdate;
const fixtureHelper = create();
fixtureHelper.enableWriteBack = updateFixtures;

describe('Validate Application', () => {
    const tests = [
        'sample.js',
        'sample.ts',
    ];

    const scopeCache = cacheMap.create((scope: string) => {
        const tail = scope.split(' ').pop() || '';
        const kind = tail.split('.').shift() || '';
        return (text: string) => `${kind}[${text}]`;
    });

    function colorizeScope(text: string, scope: Scope): string {
        return scopeCache.get(scope)(text);
    }

    it('Tests analyze a file', async () => {
        const output: string[] = [];
        const filePath = require.resolve('./application');
        await analyze(filePath, line => output.push(line + '\n'));
        expect(output.length).toBeGreaterThan(0);
    });

    it('Tests colorizing a file', async () => {
        const output: string[] = [];
        const filePath = require.resolve('./application');
        await colorizeFile(filePath, line => output.push(line + '\n'), createColorizer(colorizeScope));
        expect(output.length).toBeGreaterThan(0);
    });

    tests.forEach((file) =>
        it('Tests colorizing a file', async () => {
            const output: string[] = [];
            const filePath = fixtureHelper.resolveFixturePath('grammar', 'src', file);
            const fixturePath = fixtureHelper.relativeFixturePath('application', 'colorize', file + '.txt');
            await colorizeFile(filePath, line => output.push(line + '\n'), createColorizer(colorizeScope));
            const result = await fixtureHelper.compare(fixturePath, output.join(''));
            expect(result.actual).toEqual(result.expected);
        })
    );

    tests.forEach(file =>
        it('tests analyzing a file', async () => {
            const output: string[] = [];
            const filePath = fixtureHelper.resolveFixturePath('grammar', 'src', file);
            const fixturePath = fixtureHelper.relativeFixturePath('application', 'analyze', file + '.txt');
            await analyze(filePath, line => output.push(line + '\n'));
            const result = await fixtureHelper.compare(fixturePath, stripAnsi(output.join('')));
            expect(result.actual).toEqual(result.expected);
        })
    );

    it('tests failing to find a grammar for colorize', async () => {
        const filename = 'sample.unknown_ext';
        const filePath = fixtureHelper.resolveFixturePath('grammar', 'src', filename);
        await colorizeFile(filePath, () => {}).then(
            () => // 'Should not get here'
            expect(true).toBe(false),
            (msg) => expect(msg).toBe(`Unable to find grammar that matches file: ${filename}`)
        );
    });

    it('tests failing to find a grammar for analyse', async () => {
        const filename = 'sample.unknown_ext';
        const filePath = fixtureHelper.resolveFixturePath('grammar', 'src', filename);
        await analyze(filePath, () => {}).then(
            () => // 'Should not get here'
            expect(true).toBe(false),
            (msg) => expect(msg).toBe(`Unable to find grammar that matches file: ${filename}`)
        );
    });
});
