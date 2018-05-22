import * as path from 'path';

const files = [
    "syntax/javadoc.tmbundle-master/Syntaxes/JavaDoc.tmLanguage",
    "syntax/latex/Bibtex.plist",
    "syntax/latex/DocTeX.plist",
    "syntax/latex/LaTeX Expl3.plist",
    "syntax/latex/LaTeX.plist",
    "syntax/latex/TeX.plist",
    "syntax/textpow/syntax/source.smarty.json",
    "syntax/vscode/go.tmLanguage.json",
    "syntax/vscode/html.tmLanguage.json",
    "syntax/vscode/java.tmLanguage.json",
    "syntax/vscode/javascript/JavaScript.tmLanguage.json",
    "syntax/vscode/javascript/JavaScriptReact.tmLanguage.json",
    "syntax/vscode/javascript/Regular Expressions (JavaScript).tmLanguage",
    "syntax/vscode/python/MagicPython.tmLanguage.json",
    "syntax/vscode/python/MagicRegExp.tmLanguage.json",
    "syntax/vscode/r.tmLanguage.json",
    "syntax/vscode/TypeScript.tmLanguage.json",
    "syntax/vscode/JSON.tmLanguage.json",
];

export function getFilenames(): string[] {
    return files.map(f => path.resolve(path.join(__dirname, '..', f)));
}
