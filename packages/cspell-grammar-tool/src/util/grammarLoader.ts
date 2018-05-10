import { Grammar, GrammarDefinition } from 'cspell-grammar';
import * as fs from 'fs-extra';
import * as plist from 'fast-plist';
import * as yaml from 'js-yaml';

export async function loadGrammar(pathToGrammar: string): Promise<Grammar> {
    const grammarContents = await fs.readFile(pathToGrammar, 'utf-8');

    const def = tryPList(grammarContents) || tryJsonOrYaml(grammarContents);

    if (!def) {
        return Promise.reject(`Unable to load grammar file: "${pathToGrammar}"`);
    }

    return new Grammar(def);
}

function tryPList(content: string): GrammarDefinition | undefined {
    try {
        return plist.parse(content);
    } catch (e) {
    }
    return undefined;
}

function tryJsonOrYaml(content: string): GrammarDefinition | undefined {
    try {
        return yaml.safeLoad(content) as GrammarDefinition;
    } catch (e) {}
    return undefined;
}
