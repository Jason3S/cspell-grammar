import * as path from 'path';

const files = [
    "syntax/TypeScript.tmLanguage.json",
    "syntax/go.tmLanguage.json",
    "syntax/javascript.tmLanguage.json",
    "syntax/latex/Bibtex.plist",
    "syntax/latex/DocTeX.plist",
    "syntax/latex/LaTeX Expl3.plist",
    "syntax/latex/LaTeX.plist",
    "syntax/latex/TeX.plist"
];

export function getFilenames(): string[] {
    return files.map(f => path.resolve(path.join(__dirname, '..', f)));
}
