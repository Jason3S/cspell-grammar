import {expect} from 'chai';
import * as syntax from 'cspell-grammar-syntax';
import * as grammarFiles from './grammarFiles';

describe('test grammar file loader', () => {
    it('test loading the syntax files', async () => {
        const files = syntax.getFilenames();
        const grammars = await Promise.all(files.map(grammarFiles.loadGrammar));
        grammars.forEach(g => {
            expect(g).to.not.be.empty;
        });
    });
});
