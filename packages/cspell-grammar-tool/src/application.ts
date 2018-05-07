
import { createColorizer } from './visualize/tokenColorizer';
import { Grammar } from 'cspell-grammar';
import { tokenizeFile } from 'cspell-grammar';
import { Token } from 'cspell-grammar';

export type Emitter = (line: string) => void;

export type Colorizer = (line: string, tokens: Token[]) => string;

export async function colorizeFile(
    pathToGrammar: string,
    pathToFile: string,
    emitter: Emitter,
    colorizer: Colorizer = createColorizer(),
): Promise<void> {
    const grammar = await Grammar.createFromFile(pathToGrammar);
    const result = await tokenizeFile(grammar, pathToFile);

    result.tokenizedLines.forEach(value => {
        emitter(colorizer(value.line, value.tokens));
    });
}
