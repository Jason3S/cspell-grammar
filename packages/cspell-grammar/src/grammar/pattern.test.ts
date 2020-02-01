import { Pattern } from './grammarDefinition';
import { isPatternInclude, isPatternBeginEnd, isPatternMatch, isPatternPatterns, patternToString } from './pattern';

describe('Verify pattern.ts', () => {
    const patterns: Pattern[] = [
        { include: 'scope.ts' },
        { name: 'word', match: /\w+/ },
        { name: 'comment', begin: /\/\*/, end: /\*\// },
        { patterns: [] },
    ];
    it('tests isPatternInclude', () => {
        const result = patterns.map(isPatternInclude);
        expect(result).toEqual([true, false, false, false]);
    });

    it('tests isPatternMatch', () => {
        const result = patterns.map(isPatternMatch);
        expect(result).toEqual([false, true, false, false]);
    });

    it('tests isPatternBeginEnd', () => {
        const result = patterns.map(isPatternBeginEnd);
        expect(result).toEqual([false, false, true, false]);
    });

    it('tests isPatternPatterns', () => {
        const result = patterns.map(isPatternPatterns);
        expect(result).toEqual([false, false, false, true]);
    });

    it('tests patternToString', () => {
        const result = patterns.map(patternToString);
        expect(result).toEqual([
            'PatternInclude: ? (scope.ts)',
            'PatternMatch: word (/\\w+/)',
            'PatternBeginEnd: comment (/\\/\\*/)',
            'PatternPatterns: ? [0]',
        ]);
    });
});
