import {
    Capture,
    Pattern,
    PatternBeginEnd,
    PatternInclude,
    PatternMatch,
    PatternName,
    PatternPatterns,
} from './grammarDefinition';

export function isPatternInclude(pattern: Pattern): pattern is PatternInclude {
    const { include = undefined } = pattern as PatternInclude;
    return include !== undefined;
}

export function isPatternMatch(pattern: Pattern): pattern is PatternMatch {
    const { match = undefined } = pattern as PatternMatch;
    return match !== undefined;
}

export function isPatternBeginEnd(pattern: Pattern): pattern is PatternBeginEnd {
    const { begin = undefined, end = undefined } = pattern as PatternBeginEnd;
    return begin !== undefined && end !== undefined;
}

export function isPatternPatterns(pattern: Pattern): pattern is PatternPatterns {
    const { patterns = undefined } = pattern as PatternPatterns;
    return patterns !== undefined;
}

export function isPatternName(pattern: Pattern): pattern is PatternName {
    const { name = undefined } = pattern as PatternName;
    return name !== undefined
        && !isPatternMatch(pattern)
        && !isPatternBeginEnd(pattern)
        && !isPatternInclude(pattern)
        && !isPatternPatterns(pattern);
}

export function scope(pattern: Pattern): string | undefined {
    if (isPatternMatch(pattern) || isPatternBeginEnd(pattern)) {
        return pattern.name;
    }
    if (isPatternPatterns(pattern)) {
        return pattern.scopeName;
    }
    return undefined;
}

export function captures(pattern: Pattern): Capture | undefined {
    if (isPatternMatch(pattern)) {
        return pattern.captures;
    }
    if (isPatternBeginEnd(pattern)) {
        return pattern.beginCaptures || pattern.captures;
    }
    return undefined;
}

export function endCaptures(pattern: Pattern): Capture | undefined {
    if (isPatternBeginEnd(pattern)) {
        return pattern.endCaptures || pattern.captures;
    }
    return undefined;
}

export function patternToString(pattern: PatternMatch | PatternBeginEnd | PatternInclude | PatternPatterns | PatternName): string {
    if (isPatternMatch(pattern)) {
        return `PatternMatch: ${pattern.name || '?'} (${pattern.match.toString().slice(0, 120)})`;
    }
    if (isPatternBeginEnd(pattern)) {
        return `PatternBeginEnd: ${pattern.name || '?'} (${pattern.begin.toString().slice(0, 120)})`;
    }
    if (isPatternPatterns(pattern)) {
        return `PatternPatterns: ${pattern.name || '?'} [${pattern.patterns.length}]`;
    }
    if (isPatternInclude(pattern)) {
        return `PatternInclude: ${pattern.name || '?'} (${pattern.include})`;
    }
    // pattern name
    return `PatternName: ${pattern.name || '?'}`;
}
