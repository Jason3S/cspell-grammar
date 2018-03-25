
import { createColorizer } from './visualize/tokenColorizer';
import { Grammar } from '.';
import { tokenizeFile } from './grammar/tokenizeFile';

export type Emitter = (line: string) => void;

export async function colorizeFile(pathToGrammar: string, pathToFile: string, emitter: Emitter): Promise<void> {
    emitter(pathToGrammar + '\n');
    emitter(pathToFile + '\n');

    const grammar = await Grammar.createFromFile(pathToGrammar);
    const result = await tokenizeFile(grammar, pathToFile);
    const colorizer = createColorizer();

    result.tokenizedLines.forEach(value => {
        emitter(colorizer(value.line, value.tokens) + '\n');
    });
}
