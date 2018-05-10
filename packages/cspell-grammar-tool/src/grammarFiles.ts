import * as path from 'path';

export function pathToGrammar(filename: string): string {
    return path.join(__dirname, '..', 'grammar', filename);
}
