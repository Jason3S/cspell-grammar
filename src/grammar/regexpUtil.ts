import * as XRegExp from 'xregexp';

init();

function init() {
        // Add POSIX character classes like [[:alpha:]] (ASCII-only)
    // cspell:ignore alnum cntrl punct xdigit
    const posix: { [index: string]: string } = {
        alnum: 'A-Za-z0-9',
        alpha: 'A-Za-z',
        ascii: '\\0-\\x7F',
        blank: ' \\t',
        cntrl: '\\0-\\x1F\\x7F',
        digit: '0-9',
        graph: '\\x21-\\x7E',
        lower: 'a-z',
        print: '\\x20-\\x7E',
        punct: '!"#$%& \'()*+,\\-./:;<=>?@[\\\\\\]^_`{|}~',
        space: ' \\t\\r\\n\\v\\f',
        upper: 'A-Z',
        word: 'A-Za-z0-9_',
        xdigit: 'A-Fa-f0-9'
    };

    XRegExp.addToken(
        /\[:([a-z\d]+):]/i,
        function (match: RegExpExecArray) {
            if (!posix[match[1]]) {
                throw new SyntaxError(match[1] + ' is not a valid POSIX character class');
            }
            return posix[match[1]];
        },
        { scope: 'class' }
    );

    const beginEndTokens: { [index: string]: string } = {
        '\\A': '^',
        '\\Z': '$',
        '\\z': '$',
    };

    XRegExp.addToken(
        /\\[AZz]/,
        (s) => beginEndTokens[s[0]]
    );
    XRegExp.addToken(
        /\(\?>/,
        () => '(?:'
    );
}

export interface SubPatternMatch extends Array<string> {
    input?: string;
    [index: number]: string;
}

export function escapeMatch(match: RegExpExecArray | null): SubPatternMatch {
    const result: SubPatternMatch = [];
    if (!match) {
        return result;
    }
    for (const [key, value] of Object.entries(match)) {
        // Nasty cast because the definition of XRegExp.build is wrong.
        result[key as keyof SubPatternMatch] = value ? XRegExp.escape(value) : undefined;
    }
    return result;
}

export interface MatchOffsetResultItem {
    begin: number;
    end: number;
}

export type MatchOffsetResult = Map<string, MatchOffsetResultItem>;

/**
 * Takes the result of a regex.exec and tries to guess the offsets
 * for the captured groups.
 * @param match Results from a regex.exec with optional named groups.
 */
export function matchesToOffsets(match: RegExpExecArray): MatchOffsetResult {
    const m = new Map<string, MatchOffsetResultItem>();
    const text = match.input;
    let offset = match.index;
    const skip = new Set(['input', 'index']);
    for (let i = 0; i < match.length; ++i) {
        const s = match[i];
        if (s === undefined) { continue; }
        let begin = text.indexOf(s, offset);
        if (begin < 0) {
            begin = text.lastIndexOf(s, offset);
        }
        const end = begin + s.length;
        m.set(i.toString(), { begin, end });
        offset = begin;
    }
    // Take care of named groups
    offset = match.index;
    for (const [k, s] of Object.entries(match!)) {
        if (m.has(k) || skip.has(k)) { continue; }
        let begin = text.indexOf(s, offset);
        if (begin < 0) {
            begin = text.lastIndexOf(s, offset);
        }
        if (begin >= 0) {
            const end = begin + s.length;
            m.set(k, { begin, end });
            offset = begin;
        }
    }
    return m;
}

