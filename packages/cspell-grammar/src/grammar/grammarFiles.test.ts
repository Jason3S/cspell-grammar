import * as syntax from 'cspell-grammar-syntax';
import * as grammarFiles from './grammarFiles';

describe('test grammar file loader', () => {
    it('test loading the syntax files', async () => {
        const files = syntax.getFilenames();
        const grammars = await Promise.all(files.map(grammarFiles.loadGrammar));
        grammars.forEach(g => {
            expect(Object.keys(g)).not.toHaveLength(0);
        });
    });

    it('tests failing to load the syntax files', async () => {
        const files = [ __filename];
        return Promise.all(files.map(grammarFiles.loadGrammar)).then(
            () => expect(false).toBe(true),
            (msg) => expect(msg).toBe(`Unable to load grammar file: "${__filename}"`),
        );
    });
});
