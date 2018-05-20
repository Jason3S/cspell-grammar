import { GrammarDefinition, Pattern, PatternInclude, PatternPatterns } from './grammarDefinition';
import { Token, tokenizeLine, grammarToRule } from './tokenize';
import * as fs from 'fs-extra';
import { isPatternInclude, isPatternPatterns } from './pattern';

export { Token, tokenizeLine } from './tokenize';

export interface Tokenizer {
    tokenize(line: string): Token[];
}

export interface TokenizeLineResult {
    line: string;
    tokens: Token[];
    lineNumber: number;
}

export interface TokenizeTextResult {
    tokenizedLines: TokenizeLineResult[];
}

export type ScopeResolver = (scopeNameRef: string) => Pattern | undefined;

export class Grammar {
    constructor(private grammarDef: GrammarDefinition) {
        // fixup the repository to include $self and $base and ensure it exists.
        const $self: PatternPatterns = { patterns: grammarDef.patterns };
        const base = { $self, $base: $self };
        const repository = grammarDef.repository || base;
        Object.assign(repository, base);
        grammarDef.repository = repository;
    }

    tokenizer(): Tokenizer {
        let rule = grammarToRule(this.grammarDef);

        return {
            tokenize: (line: string) => {
                const r = tokenizeLine(line, rule);
                rule = r.state;
                return r.tokens;
            }
        };
    }

    *tokenizeLines(input: Iterable<string>): IterableIterator<TokenizeLineResult> {
        const tokenizer = this.tokenizer();
        let lineNumber = 0;
        for (const line of input) {
            lineNumber += 1;
            const tokens = tokenizer.tokenize(line);
            yield { line, lineNumber, tokens };
        }
    }

    get grammar(): GrammarDefinition {
        return this.grammarDef;
    }

    /**
     *
     * @param scopeNameRef the name of the scope to look up in the repository. It is of the form
     *                     `scope.ext#reference`
     */
    getReferencePattern(scopeNameRef: string): Pattern | undefined {
        const [scope, reference = '$self'] = scopeNameRef.split('#', 2);
        if (scope !== this.grammarDef.scopeName) {
            return undefined;
        }
        return this.getPattern(reference);
    }

    private getPattern(ref: string): Pattern | undefined {
        const pattern = this.grammarDef.repository[ref];
        return pattern || undefined;
    }

    resolveImports(resolver: ScopeResolver) {
        const self = this;
        function internalResolve(scopeNameRef: string): Pattern | undefined {
            const [scope, reference = ''] = scopeNameRef.split('#', 2);
            return (!scope || scope === '$self' || scope === '$base' )
                ? self.getPattern(reference || scope)
                : resolver(scopeNameRef);
        }

        function resolvePatternInclude(pat: PatternInclude) {
            if (!pat._reference) {
                const refMaybe: Pattern | undefined = internalResolve(pat.include);
                if (!refMaybe) {
                    console.log(`Cannot resolve reference: (${self.grammarDef.scopeName}:${pat.include})`);
                }
                const ref: Pattern = refMaybe || { name: pat.include };
                pat._reference = ref;
            }
        }

        function resolvePatterns(pat: Pattern) {
            if (isPatternInclude(pat)) {
                resolvePatternInclude(pat);
            } else if (isPatternPatterns(pat)) {
                (pat.patterns || []).forEach(p => resolvePatterns(p));
            }
        }

        const repository = this.grammarDef.repository;

        resolvePatterns(this.grammarDef);

        Object.keys(repository)
            .map(key => repository[key])
            .forEach(resolvePatterns);
    }

    static async createFromFile(filename: string): Promise<Grammar> {
        const json = await fs.readFile(filename, 'utf8');
        const grammarDef = JSON.parse(json) as GrammarDefinition;
        return new Grammar(grammarDef);
    }
}

