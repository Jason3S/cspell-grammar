import chalk from 'chalk';
import {
    createColorizer,
    createDefaultColorMap,
    createScopeColorizer,
    Registry,
    tokenizeFile,
    tokenizeToAnsi,
} from 'cspell-grammar';
import { Token } from 'cspell-grammar';
import * as fs from 'fs-extra';
import * as syntaxRepository from 'cspell-grammar-syntax';
import * as path from 'path';

const DEFAULT_ENCODING = 'utf-8';

export type Emitter = (line: string) => void;

export type Colorizer = (line: string, tokens: Token[]) => string;

const defaultScopeColorizer = createScopeColorizer(createDefaultColorMap(chalk));
const defaultColorizer = createColorizer(defaultScopeColorizer);

export async function colorizeFile(
    pathToFile: string,
    emitter: Emitter,
    colorizer: Colorizer = defaultColorizer,
): Promise<void> {
    const registry = await loadRegistry();
    const grammar = registry.getGrammarForFileType(path.extname(pathToFile));
    if (!grammar) {
        const msg = `Unable to find grammar that matches file: ${path.basename(pathToFile)}`;
        return Promise.reject(msg);
    }
    const result = await tokenizeFile(grammar, pathToFile);

    result.tokenizedLines.forEach(value => {
        emitter(colorizer(value.line, value.tokens));
    });
}

export async function analyse(
    pathToFile: string,
    emitter: Emitter,
): Promise<void> {
    const text = await fs.readFile(pathToFile, DEFAULT_ENCODING);
    const registry = await loadRegistry();
    const grammar = registry.getGrammarForFileType(path.extname(pathToFile));
    if (!grammar) {
        const msg = `Unable to find grammar that matches file: ${path.basename(pathToFile)}`;
        return Promise.reject(msg);
    }

    for (const line of tokenizeToAnsi.tokenizeText(grammar, defaultScopeColorizer, text)) {
        emitter(line);
    }
}

// export async function pListToYaml(
//     plistFilename: string,
// ): Promise<string> {
//     const plistText = await fs.readFile(plistFilename, DEFAULT_ENCODING);
//     return yaml.safeDump(plist.parse(plistText));
// }

// export async function pListToJson(
//     plistFilename: string,
// ): Promise<string> {
//     const plistText = await fs.readFile(plistFilename, DEFAULT_ENCODING);
//     return JSON.stringify(plist.parse(plistText), undefined, 2);
// }

function loadRegistry(...optionalGrammarFiles: string[]) {
    const grammarFiles = syntaxRepository.getFilenames();
    return Registry.create(grammarFiles.concat(optionalGrammarFiles));
}
