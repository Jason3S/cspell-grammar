import * as syntax from 'cspell-grammar-syntax';
import {Registry} from './registry';

describe('Registry', () => {
    it('Test creating a Registry', async () => {
        const files = syntax.getFilenames();
        const repo = await Registry.create(files);
        expect(repo).toBeDefined();
        expect(repo.getGrammarForFileType('ts')).toBeDefined();
        expect(repo.getGrammarForFileType('$$$')).toBeUndefined();
    });
});
