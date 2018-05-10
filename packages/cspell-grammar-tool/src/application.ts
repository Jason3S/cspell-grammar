
import { createColorizer } from './visualize/tokenColorizer';
import { tokenizeFile, tokenizeToAnsi } from 'cspell-grammar';
import { Token } from 'cspell-grammar';
import { loadGrammar } from './util/grammarLoader';
import * as fs from 'fs-extra';

export type Emitter = (line: string) => void;

export type Colorizer = (line: string, tokens: Token[]) => string;

export async function colorizeFile(
    pathToGrammar: string,
    pathToFile: string,
    emitter: Emitter,
    colorizer: Colorizer = createColorizer(),
): Promise<void> {
    const grammar = await loadGrammar(pathToGrammar);
    const result = await tokenizeFile(grammar, pathToFile);

    result.tokenizedLines.forEach(value => {
        emitter(colorizer(value.line, value.tokens));
    });
}

export async function analyse(
    pathToGrammar: string,
    pathToFile: string,
    emitter: Emitter,
): Promise<void> {
    const grammar = await loadGrammar(pathToGrammar);
    const text = await fs.readFile(pathToFile, 'utf-8');

    for (const line of tokenizeToAnsi.tokenizeText(grammar, a => a, text)) {
        emitter(line);
    }
}
