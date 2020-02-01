import { Grammar } from './grammar';
import * as path from 'path';
import * as fs from 'fs-extra';
import { formatTokenizeText } from '../util/display';

const javascriptGrammarFile = path.join(__dirname, '..', '..', 'fixtures', 'grammar', 'syntax', 'javascript.tmLanguage.json');
const sampleJavascriptFile = path.join(__dirname, '..', '..', 'fixtures', 'grammar', 'src', 'sample.js');

const golangGrammarFile = path.join(__dirname, '..', '..', 'fixtures', 'grammar', 'syntax', 'go.tmLanguage.json');
const sampleGolangFile = path.join(__dirname, '..', '..', 'fixtures', 'grammar', 'src', 'sample.go');

const TIMEOUT = 10000;

describe('Validate Grammar', function() {

    it('tests creating a Grammar from a file', async () => {
        const filename = javascriptGrammarFile;
        const grammar = await Grammar.createFromFile(filename);
        expect(grammar).toBeInstanceOf(Grammar);
    }, TIMEOUT);

    it('test tokenizing a GO file', async () => {
        const filename = golangGrammarFile;
        const grammar = await Grammar.createFromFile(filename);
        const sampleFile = sampleGolangFile;
        const file = await fs.readFile(sampleFile, 'utf8');
        for (const s of formatTokenizeText(file, grammar)) {
            output(s);
        }
    }, TIMEOUT);

    it('tests tokenizing a javascript file', async () => {
        const filename = javascriptGrammarFile;
        const grammar = await Grammar.createFromFile(filename);
        const sampleFile = sampleJavascriptFile;
        const file = await fs.readFile(sampleFile, 'utf8');
        const tokenizer = grammar.tokenizer();
        for (const line of file.split('\n')) {
            const tokens = tokenizer.tokenize(line);
            let last = 0;
            for (const t of tokens) {
                expect(t.startIndex).toBe(last);
                expect(t.scopes.length).toBeGreaterThanOrEqual(1);
                expect(t.scopes[0]).toBe('source.js');
                last = t.endIndex;
            }
            expect(last).toBe(line.length);
        }
        for (const s of formatTokenizeText(file, grammar)) {
            output(s);
        }
    }, TIMEOUT);

});

function output(text: string) {
    expect(text).toBeDefined();
    // console.log(text);
}
