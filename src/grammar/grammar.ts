import { GrammarDefinition } from './grammarDefinition';
import { Token, tokenizeLine, grammarToRule } from './tokenize';
import * as fs from 'fs-extra';

export interface Tokenizer {
    tokenize(line: string): Token[];
}

export interface TokenizeLineResult {
    line: string;
    tokens: Token[];
    lineNumber: number;
}

export interface TokenizeTextResult {
    tokenizedLines: TokenizeLineResult[];
}

export class Grammar {
    constructor(private grammarDef: GrammarDefinition) {}

    tokenizer(): Tokenizer {
        let rule = grammarToRule(this.grammarDef);

        return {
            tokenize: (line: string) => {
                const r = tokenizeLine(line, rule);
                rule = r.state;
                return r.tokens;
            }
        };
    }

    *tokenizeLines(input: Iterable<string>): IterableIterator<TokenizeLineResult> {
        const tokenizer = this.tokenizer();
        let lineNumber = 0;
        for (const line of input) {
            lineNumber += 1;
            const tokens = tokenizer.tokenize(line);
            yield { line, lineNumber, tokens };
        }
    }

    static async createFromFile(filename: string): Promise<Grammar> {
        const json = await fs.readFile(filename, 'utf8');
        const grammarDef = JSON.parse(json) as GrammarDefinition;
        return new Grammar(grammarDef);
    }
}

