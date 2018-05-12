import * as fs from 'fs-extra';
import * as plist from 'fast-plist';
import * as yaml from 'js-yaml';
import { GrammarDefinition } from './grammarDefinition';

export async function loadGrammar(pathToGrammar: string): Promise<GrammarDefinition> {
    const grammarContents = await fs.readFile(pathToGrammar, 'utf-8');

    const def = tryPList(grammarContents) || tryJsonOrYaml(grammarContents);

    if (!def || typeof def !== 'object') {
        return Promise.reject(`Unable to load grammar file: "${pathToGrammar}"`);
    }
    return def;
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
