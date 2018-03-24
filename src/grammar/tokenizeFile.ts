import { TokenizeTextResult, Grammar } from './grammar';
import * as fs from 'fs-extra';

export interface TokenizeFileResult extends TokenizeTextResult {
    filename: string;
}

const defaultEncoding = 'utf8';

export async function tokenizeFile(grammar: Grammar, filename: string, encoding = defaultEncoding): Promise<TokenizeFileResult> {
    const text = await fs.readFile(filename, encoding);

    const tokenizedLines = [...grammar.tokenizeLines(text.split(/\r?\n/))];

    return {
        filename,
        tokenizedLines,
    };
}
