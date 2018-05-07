/**
 * @see https://manual.macromates.com/en/language_grammars
 */

export interface GrammarDefinition extends PatternPatterns {
    name: string;               // Name of the grammar, should not be part of scope.
    scopeName: Scope;           // The scope to use.
    fileTypes: string[];        // This is an array of file type extensions that the grammar should (by default) be used with.
    patterns: Pattern[];        // Patterns to use for the grammar
    repository?: Repository;    // Dictionary of patterns
}

export type Pattern = PatternMatch | PatternBeginEnd | PatternInclude | PatternPatterns | PatternName;

export interface PatternMatch extends PatternBase {
    name?: Scope;           // the name becomes part of the scope
    comment?: string;       // comment to help with understanding
    match: RegexOrString;   // regex to match against
    captures?: Capture;     // capture groups used to add scope to scopes found in the match
}

export interface PatternBeginEnd extends PatternBase {
    name: Scope;                // the name becomes part of the scope
    comment?: string;           // comment to help with understanding
    begin: RegexOrString;       // regex that marks the beginning of the pattern
    end: RegexOrString;         // regex that marks the end of the pattern (can contain capture expressions)
    captures?: Capture;         // capture groups used to add scope to scopes found in the begin or end match
    beginCaptures?: Capture;    // capture groups used to add scope to scopes found in the begin match
    endCaptures?: Capture;      // capture groups used to add scope to scopes found in the end match
    contentName?: string;       // the scope to apply to the content between the begin and end
    patterns?: Pattern[];       // possible sub patterns.
}

export interface PatternInclude extends PatternBase {
    /**
     * Include a named pattern or grammar
     * Example: "#comment" -- include the "comment" pattern from the repository.
     * Example: "$self" -- to nest the entire grammar.
     * Example: "source.json" -- to include the rules for .json files (not supported)
     */
    include: string;
    comment?: string;           // comment to help with understanding
}

export interface PatternPatterns extends PatternBase {
    patterns: Pattern[];
    comment?: string;           // comment to help with understanding
    scopeName?: Scope;          // the scope to use
}

export interface PatternName extends PatternBase {
    name: Scope;               // the name becomes part of the scope
}

export interface PatternBase {
    name?: Scope;           // the name becomes part of the scope
    comment?: string;       // comment to help with understanding
}

export type RegexOrString = RegExp | string;

export interface Capture {
    [index: string]: Pattern;
    [index: number]: Pattern;
}

export interface Repository {
    [index: string]: Pattern;
}

/**
 * the Scope is used to define a space separated set of scope values to apply if the pattern matches.
 * Example scope: "meta.definition.variable.js variable.other.readwrite.js"
 * The space separated values go from general on the left to specific on the right.
 * All scope values should end in the language.
 */
export type Scope = string;
