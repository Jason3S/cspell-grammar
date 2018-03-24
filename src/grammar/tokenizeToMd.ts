import { Grammar, TokenizeLineResult } from './grammar';
import * as fs from 'fs-extra';
import * as path from 'path';

const defaultEncoding = 'utf8';

export function tokenizeLineToMd(tokenizedLine: TokenizeLineResult): string {
    const { line, lineNumber, tokens } = tokenizedLine;
    const lineText = line ? ('```' + line + '```') : '*blank line*';
    const parts = [
        `**${lineNumber}:** ${lineText}`,
        ''
    ];
    if (tokens.length) {
        parts.push('| text | scope |');
        parts.push('| -- | -- |');

        for (const t of tokens) {
            parts.push(`| \`\`\` ${line.slice(t.startIndex, t.endIndex)} \`\`\` | ${t.scopes.join(' ')} |`);
        }
        parts.push('');
    }
    return parts.join('\n');
}

export function *tokenizeTextToMd(grammar: Grammar, text: string) {
    for (const t of grammar.tokenizeLines(text.split(/\r?\n/))) {
        yield tokenizeLineToMd(t);
    }
}

export async function tokenizeFileToMd(grammar: Grammar, filename: string, encoding = defaultEncoding): Promise<string> {
    const text = await fs.readFile(filename, encoding);

    const name = path.basename(filename);

    return [
        `# ${name}`,
        '',
        ...tokenizeTextToMd(grammar, text),
        ''
    ].join('\n');
}
