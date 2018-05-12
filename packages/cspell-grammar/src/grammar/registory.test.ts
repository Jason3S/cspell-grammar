import {expect} from 'chai';
import * as syntax from 'cspell-grammar-syntax';
import {Registry} from './registry';

describe('Registry', () => {
    it('Test creating a Registry', async () => {
        const files = syntax.getFilenames();
        const repo = await Registry.create(files);
        expect(repo).to.not.be.undefined;
        expect(repo.getGrammarForFileType('ts')).to.not.be.undefined;
        expect(repo.getGrammarForFileType('$$$')).to.be.undefined;
    });
});
