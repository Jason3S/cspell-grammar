import chalk, { Chalk } from 'chalk';
import { Grammar } from './grammar';

type ColorMap = [RegExp, Chalk][];

const colorMap: ColorMap = [
    [/ keyword/, chalk.yellow],
    [/ entity.name/, chalk.blue],
    [/ variable/, chalk.greenBright],
    [/ string/, chalk.yellowBright],
    [/comment/, chalk.dim.green],
    [/ punctuation/, chalk.yellow],
    [/support.function/, chalk.greenBright],
    [/^source$/, chalk.gray]
];

export function colorize(text: string, scopes: string): string {
    for (const [reg, fn] of colorMap) {
        if (reg.test(scopes)) {
            return fn(text);
        }
    }
    return text;
}

export function *formatTokenizeText(text: string, grammar: Grammar, colorizer: (text: string, scopes: string) => string = colorize) {
    for (const tr of grammar.tokenizeLines(text.split('\n'))) {
        const {line: rawLine, lineNumber, tokens} = tr;
        const line = rawLine.replace(/\t/g, ' ');
        yield `${lineNumber} ${line}`;
        const results = tokens.map(t => ({ text: line.slice(t.startIndex, t.endIndex), scopes: t.scopes.join(' ')}));
        const w = Math.max(...results.map(t => t.text.length));
        for (const {text, scopes} of results) {
            yield `  ${colorizer(text.padEnd(w + 2), scopes)} => ${scopes}`;
        }
        yield '';
    }
}
