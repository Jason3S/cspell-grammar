import { expect } from 'chai';
import { create } from './fixtures';
import * as path from 'path';
import * as fs from 'fs-extra';

const readmePath = 'README.md';

describe('Validate Fixtures', () => {
    it('reading a fixture', async () => {
        const fixtureHelper = create();
        const readme = await fixtureHelper.read(readmePath);
        expect(readme).to.contain('Fixture');
    });

    it('tests writing and reading back a fixture', async () => {
        const text = '\nThis is a test fixture.\n';
        const fixtureHelper = create();
        const testFixturePath = path.join('.tmp', 'fixture_test');
        const testFixtureFile = path.join(testFixturePath, 'test_file.txt');
        const fullFixturePath = path.join(fixtureHelper.fixturesLocation, testFixturePath);
        if (await fs.pathExists(fullFixturePath)) {
            await fs.remove(fullFixturePath);
        }
        await fixtureHelper.write(testFixtureFile, text);
        expect(await fixtureHelper.read(testFixtureFile)).to.be.equal(text);
        await fs.remove(fullFixturePath);
    });

    it('test the compare function', async () => {
        const text = '\nThis is a test fixture.\n';
        const fixtureHelper = create();
        fixtureHelper.enableWriteBack = true;
        const testFixturePath = path.join('.tmp', 'fixture_test2');
        const testFixtureFile = path.join(testFixturePath, 'test_file.txt');
        const fullFixturePath = path.join(fixtureHelper.fixturesLocation, testFixturePath);
        if (await fs.pathExists(fullFixturePath)) {
            await fs.remove(fullFixturePath);
        }
        const compResult = await fixtureHelper.compare(testFixtureFile, text);
        expect(compResult).to.be.deep.equal({
            expected: text,
            actual: text,
        });
        expect(await fixtureHelper.read(testFixtureFile)).to.be.equal(text);

        // Turn off write back to make sure it doesn't get updated.
        fixtureHelper.enableWriteBack = false;

        const compResult2 = await fixtureHelper.compare(testFixtureFile, text + text);
        expect(compResult2).to.be.deep.equal({
            expected: text,
            actual: text + text,
        });

        await fs.remove(fullFixturePath);
    });
});
