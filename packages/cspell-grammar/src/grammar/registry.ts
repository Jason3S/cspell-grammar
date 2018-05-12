import { Grammar } from './grammar';
import { loadGrammar } from './grammarFiles';

export class Registry {
    private scopeMap = new Map<string, Grammar>();
    private fileTypeMap = new Map<string, Grammar>();

    constructor(private grammars: Grammar[]) {
        this.grammars.forEach(g => this.scopeMap.set(g.grammar.scopeName, g));
        this.grammars.forEach(g => this.fileTypeMap.set(g.grammar.scopeName.replace(/^.*\./, ''), g));
        this.grammars.forEach(g => (g.grammar.fileTypes || [])
            .map(t => this.normalizeFileType(t))
            .forEach(t => this.fileTypeMap.set(t, g)));
        this.grammars.forEach(g => g.resolveImports(scopeNameRef => {
            const [scope] = scopeNameRef.split('#', 2);
            const refGrammar = this.scopeMap.get(scope);
            return refGrammar && refGrammar.getReferencePattern(scopeNameRef);
        }));
    }

    public normalizeFileType(fileType: string) {
        return fileType.replace(/^\./, '');
    }

    public getGrammarForFileType(fileType: string) {
        return this.fileTypeMap.get(this.normalizeFileType(fileType));
    }

    static async create(grammarFileNames: string[]): Promise<Registry> {
        const pGrammars = grammarFileNames
            .map(loadGrammar)
            .map(async def => new Grammar(await def));
        const grammars = await Promise.all(pGrammars);
        return new Registry(grammars);
    }
}
