import { GrammarDefinition, Pattern, RegexOrString, Capture, PatternName } from './grammarDefinition';
import { isPatternInclude, isPatternMatch, isPatternBeginEnd, scope, captures, endCaptures, isPatternName, isPatternPatterns } from './pattern';
import * as XRegExp from 'xregexp';
import { escapeMatch, MatchOffsetResult, matchesToOffsets } from './regexpUtil';
import { create } from '../util/cacheMap';
// @ts-ignore: Unused Function - only used when logging
import { patternToString } from './pattern';

const maxDepth = 100;
const useLogging = false;

// @ts-ignore: Unused Function
function logInfo(message: string) {
    useLogging && console.log(message);
}

export interface TokenizeLineResult {
    tokens: Token[];
    state: TokenizerState;
}

export interface TokenizerState extends Rule {
    readonly depth: number;
}

export interface Token {
    readonly startIndex: number;
    readonly endIndex: number;
    readonly scopes: string[];
}

export interface TokenizeIterator extends Iterator<string, undefined, string> {
    next: (line: string) => IteratorResult<string>;
    [Symbol.iterator]: () => TokenizeIterator;
}

export interface Rule {
    readonly grammarDef: GrammarDefinition;
    readonly pattern: Pattern;
    readonly end?: RegExp;
    readonly parent?: Rule;
    readonly depth: number;
    readonly scope: string | undefined;
    readonly comment: string;
}

export interface MatchResult {
    match?: RegExpExecArray;
    rule: Rule;
}

export function tokenizeLine(text: string, rule: Rule): TokenizeLineResult {
    // logInfo(`\n${text}\n`);
    const tokens: Token[] = [];
    let offset = 0;
    let end = rule.end;
    let endMatch = end ? exec(text, end, offset) : undefined;
    let endOffset = endMatch ? endMatch.index : text.length;
    while (offset < text.length) {
        // logInfo(`Ends at ${endOffset}/${text.length} [${endMatch ? endMatch[0] : '-'}] ${extractScopes(rule).join(' ')}`);
        const { match, rule: matchingRule } = matchRule(text, offset, rule);
        if (match && match.index < endOffset) {
            // logInfo(`\nMatch at ${match.index} ${match[0]}`);
            if (match.index > offset) {
                tokens.push({ startIndex: offset, endIndex: match.index, scopes: extractScopes(rule) });
            }
            tokens.push(...tokenizeCapture(matchingRule, match, captures(matchingRule.pattern)));
            // logInfo(`Last Scope: ${tokens.length ? tokens[tokens.length - 1].scopes.join(' ') : ''}`);
            offset = match.index + match[0].length;
            const testEndFromOffset = Math.min(offset + (match[0].length ? 0 : 1), text.length);
            const pattern = matchingRule.pattern;
            if (isPatternBeginEnd(pattern)) {
                const endPattern = buildEndRegEx(pattern.end, match);
                rule = {
                    parent: matchingRule,
                    pattern: { patterns: pattern.patterns || [] },
                    grammarDef: matchingRule.grammarDef,
                    depth: matchingRule.depth + 1,
                    scope: pattern.contentName,
                    end: endPattern.regex,
                    comment: `Begin ${rule.depth + 1}: ${pattern.begin} <--> ${pattern.end} # ` + (pattern.name || pattern.comment || ''),
                };
                end = endPattern.regex;
                try {
                    endMatch = end ? exec(text, end, testEndFromOffset + endPattern.offset) : undefined;
                    endOffset = endMatch ? endMatch.index : text.length;
                } catch (e) {
                    console.log(e);
                    endMatch = undefined;
                    endOffset = text.length;
                }
                continue;
            }
        }  else {
            if (offset < endOffset) {
                tokens.push({ startIndex: offset, endIndex: endOffset, scopes: extractScopes(rule) });
            }
            offset = endOffset;
        }

        // We need to pop out and process any applicable ending patterns.

        do {
            rule = findEndRule(rule);
            end = rule.end;
            try {
                endMatch = end ? exec(text, end, offset) : undefined;
                endOffset = endMatch ? endMatch.index : text.length;
            } catch (e) {
                console.log(e);
                endMatch = undefined;
                endOffset = text.length;
            }
            if (offset === endOffset) {
                // process ending rule.
                if (rule.parent && endMatch) {
                    rule = findBoundingRule(rule);
                    tokens.push(...tokenizeCapture(rule, endMatch, endCaptures(rule.pattern)));
                    offset = endMatch.index + endMatch[0].length;
                }
            }
        } while (rule.parent && endMatch && offset >= endOffset);
    }

    return {
        tokens,
        state: rule,
    };
}

export function matchRule(text: string, offset: number, rule: Rule): MatchResult {
    let result: MatchResult | undefined;
    try {
        // logInfo(`${'.'.repeat(rule.depth)}+${rule.depth} ${patternToString(rule.pattern)} test`);
        result = matchRuleInner(text, offset, rule);
        return result;
    } finally {
        // const msg = result
        //     ? (result.match ? `match at ${result.match.index} <${result.match.toString()}>` : 'non-match')
        //     : 'failed';
        // logInfo(`${'.'.repeat(rule.depth)}+${rule.depth} ${patternToString(rule.pattern)} result ${msg}`);
    }
}


function matchRuleInner(text: string, offset: number, rule: Rule): MatchResult {
    const { pattern, depth, grammarDef } = rule;
    if ( isPatternInclude(pattern) ) {
        if (depth < maxDepth && grammarDef.repository) {
            const name = pattern.include.slice(1);
            const result = pattern._reference || grammarDef.repository[name];
            if (result) {
                return matchRule(text, offset, {
                    grammarDef,
                    pattern: result,
                    parent: rule,
                    depth: depth + 1,
                    scope: scope(result),
                    comment: 'Include: ' + (pattern.comment || name),
                });
            }
            if (pattern.include === '$self') {
                return matchRule(text, offset, grammarToRule(grammarDef, rule));
            }
            // We do not support including other grammars yet.
            console.log(`Unknown include: (${name})`);
        }
        return { rule }; // Unsupported include, match nothing.
    }
    if ( isPatternMatch(pattern) ) {
        const { regex, sticky } = regExpOrStringToRegExp(pattern.match);
        try {
            const match = exec(text, regex, offset, sticky);
            const scope = extractScopeFromRule(match, rule);
            return { match, rule: { ...rule, scope } };
        } catch (e) {
            console.log(e);
            return { rule };
        }
    }
    if ( isPatternBeginEnd(pattern) ) {
        try {
            const { regex, sticky } = regExpOrStringToRegExp(pattern.begin);
            const match = exec(text, regex, offset, sticky);
            const scope = extractScopeFromRule(match, rule);
            return { match, rule: { ...rule, scope } };
        } catch (e) {
            console.log(e);
            return { rule };
        }
    }
    if ( isPatternName(pattern) ) {
        return { match: exec(text, /.*/, offset, false), rule };
    }

    if ( isPatternPatterns(pattern) ) {
        let best: MatchResult | undefined;
        for (const pat of pattern.patterns) {
            const m = matchRule(text, offset, {
                grammarDef,
                pattern: pat,
                parent: rule,
                depth: depth + 1,
                scope: scope(pat),
                comment: `Nested ${rule.comment}: ` + (pat.name || pat.comment || '*'),
            });
            if (!best) {
                best = m;
            }
            if (m.match) {
                if (m.match.index === offset) {
                    return m;
                }
                if (!best.match || m.match.index < best.match.index) {
                    best = m;
                }
            }
        }
        if (!best) {
            best = {
                match: undefined,
                rule
            };
        }
        return best;
    }

    return {
        match: undefined,
        rule
    };
}

const rBeginningOfLine = /^/;

function exec(str: string, regex: RegExp, pos?: number, sticky?: boolean): RegExpExecArray {
    const r = XRegExp.exec(str, regex, pos, sticky);
    if (!r && regex.source === '(?=^)') {
        const alt = rBeginningOfLine.exec(str)!;
        alt.index = str.length;
        return alt;
    }
    return r;
}

function findBoundingRule(rule: Rule): Rule {
    while (rule.parent && !isPatternBeginEnd(rule.pattern)) {
        rule = rule.parent!;
    }
    return rule;
}

function findEndRule(rule: Rule): Rule {
    while (rule.parent && !rule.end) {
        rule = rule.parent;
    }
    return rule;
}

const matchSlashG = /^\\G/;
const matchNegSlashG = '(?!\\G)';
const noMatch = /(?!)/;

const regExCache = create(_regExpOrStringToRegExp);

function regExpOrStringToRegExp(regex: RegexOrString): { regex: RegExp, sticky?: boolean } {
    return regExCache.get(regex);
}

function _regExpOrStringToRegExp(regex: RegexOrString): { regex: RegExp, sticky?: boolean } {
    try {
        if (typeof regex === 'string') {
            if (matchSlashG.test(regex)) {
                return { regex: XRegExp(regex.replace(matchSlashG, '')), sticky: true };
            }
            return { regex: XRegExp(regex) };
        }
        return { regex: XRegExp(regex) };
    } catch (e) {
        console.log(e);
        return { regex: noMatch};
    }
}

interface EndRegEx {
    regex?: RegExp;
    offset: number;
}

function buildEndRegEx(regex: RegexOrString, match: RegExpExecArray): EndRegEx {
    const offset = 0;
    if (!match) {
        return { offset };
    }
    if (typeof regex === 'string') {
        const subs = escapeMatch(match);
        try {
            if (regex.startsWith(matchNegSlashG)) {
                return { regex: XRegExp('(?=.)|$'), offset: 1 };
            }
            regex = XRegExp.build(regex, subs as any);
        } catch (e) {
            console.log(e);
            regex = noMatch;
        }
    }
    return { regex, offset };
}

function extractScopes(rule: Rule): string[] {
    const values: string[] = [];

    let r: Rule | undefined = rule;

    while (r) {
        const { name = undefined } = r.pattern as PatternName;
        const scope = r.scope || name || undefined;
        if (scope) {
            values.push(...scope.split(' ').reverse());
        }
        r = r.parent;
    }

    return values.reverse();
}

function extractScopeFromRule(match: RegExpExecArray, rule: Rule): string | undefined {
    const scope = match && rule.pattern && rule.pattern.name;
    if (scope) {
        return substituteScopeMatches(match, scope);
    }
    return undefined;
}

function substituteScopeMatches(match: RegExpExecArray, scope: string): string {
    return scope.replace(/\$\d/g, (s) => match[Number.parseInt(s.slice(1))]);
}

function tokenizeCapture(rule: Rule, match: RegExpExecArray, cap: Capture | undefined): Token[] {
    function substituteMatches(scope: string): string {
        return substituteScopeMatches(match, scope);
    }

    const scopes = extractScopes(rule)
        .map(substituteMatches);
    let startIndex = match.index;
    const endIndex = startIndex + match[0].length;

    const tokens: Token[] = [{ startIndex, endIndex, scopes }];

    if (cap) {
        const text = match.input;
        const captures = pairCaptureGroupsToMatchOffsets([...Object.keys(cap)], matchesToOffsets(match));

        const capturedTokens = captures.map(g => {
            const patterns = g.captureGroups.filter(v => !!cap[v]).map(v => cap[v]);
            const capturedScopes = patterns
                .filter(isPatternName)
                .map(p => p.name.split(' '))
                .reduce((a, b) => a.concat(b), scopes)
                .map(substituteMatches);
            if (!capturedScopes.length) { return []; }
            const pattern = patterns[patterns.length - 1];
            if (isPatternName(pattern)) {
                return [{
                    startIndex: g.begin,
                    endIndex: g.end,
                    scopes: capturedScopes,
                }];
            }
            return tokenizeLine(text.slice(g.begin, g.end), {
                parent: undefined,
                pattern,
                grammarDef: rule.grammarDef,
                depth: 0,
                scope: capturedScopes.join(' '),
                comment: 'Capture: ' + (pattern.name || pattern.comment),
            }).tokens.map(t => ({...t, startIndex: t.startIndex + g.begin, endIndex: t.endIndex + g.begin}));
        }).reduce((a, b) => a.concat(b), []);

        tokens.push(...capturedTokens);
    }
    return mergeTokens(tokens);
}

// mergeTokens will merge overlapping tokens.
// tokens later in the list always win.
export function mergeTokens(tokens: Token[]): Token[] {
    const result: Token[] = [];
    function findStart(startIndex: number) {
        // Search backwards in the result list.
        let p: number;
        for (p = result.length; p > 0 && result[p - 1].endIndex > startIndex; --p) {}
        return p;
    }

    function findEnd(endIndex: number, fromPos: number) {
        let p: number;
        for (p = fromPos; p < result.length && result[p].startIndex < endIndex; ++p) {}
        return p;
    }

    for (const t of tokens.filter(t => t.endIndex > t.startIndex)) {
        const pos = findStart(t.startIndex);
        if (pos === result.length) {
            // Just append
            result.push(t);
            continue;
        }
        const endPos = findEnd(t.endIndex, pos);
        if (endPos === pos) {
            result.splice(pos, 0, t);
            continue;
        }
        const overlappingTokens = result.slice(pos, endPos);

        const newTokens: Token[] = [];
        const front = overlappingTokens[0];
        const back = overlappingTokens[overlappingTokens.length - 1];
        if (front.startIndex < t.startIndex) {
            newTokens.push({
                ...front,
                endIndex: t.startIndex,
            });
        }
        newTokens.push(t);
        if (back.endIndex > t.endIndex) {
            newTokens.push({
                ...back,
                startIndex: t.endIndex,
            });
        }

        result.splice(pos, endPos - pos, ...newTokens);
    }

    return result;
}

export interface CapturedSpan {
    captureGroups: string[];
    begin: number;
    end: number;
}

export function pairCaptureGroupsToMatchOffsets(captureGroups: string[], match: MatchOffsetResult): CapturedSpan[] {
    const filteredGroups = captureGroups
        .filter(g => match.has(g))
        .map(captureGroup => ({ ...match.get(captureGroup)!, captureGroup }));

    const foundMatches: CapturedSpan[] = filteredGroups.map(g => {
        return {
            ...g,
            captureGroups: filteredGroups.filter(sg => sg.end >= g.end && sg.begin <= g.begin).map(sg => sg.captureGroup),
        };
    });

    return foundMatches;
}

export function grammarToRule(grammar: GrammarDefinition, parent?: Rule): Rule {
    if (parent) {
        return {
            parent,
            pattern: { patterns: grammar.patterns },
            scope: undefined,
            grammarDef: grammar,
            depth: parent.depth + 1,
            comment: 'Nested Grammar' + ' ' +  (grammar.name || grammar.scopeName || ''),
        };
    }
    const rule: Rule = {
        parent,
        pattern: grammar,
        scope: grammar.scopeName,
        grammarDef: grammar,
        depth: 0,
        comment: 'Root ' +  (grammar.name || grammar.scopeName || ''),
    };

    return rule;
}
