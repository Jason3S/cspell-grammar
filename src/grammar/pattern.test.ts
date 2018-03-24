import { Pattern } from './grammarDefinition';
import { isPatternInclude, isPatternBeginEnd, isPatternMatch, isPatternPatterns } from './pattern';
import { expect } from 'chai';

describe('Verify pattern.ts', () => {
    const patterns: Pattern[] = [
        { include: 'scope.ts' },
        { name: 'word', match: /\w+/ },
        { name: 'comment', begin: /\/\*/, end: /\*\// },
        { patterns: [] },
    ];
    it('tests isPatternInclude', () => {
        const result = patterns.map(isPatternInclude);
        expect(result).to.be.deep.equal([true, false, false, false]);
    });

    it('tests isPatternMatch', () => {
        const result = patterns.map(isPatternMatch);
        expect(result).to.be.deep.equal([false, true, false, false]);
    });

    it('tests isPatternBeginEnd', () => {
        const result = patterns.map(isPatternBeginEnd);
        expect(result).to.be.deep.equal([false, false, true, false]);
    });

    it('tests isPatternPatterns', () => {
        const result = patterns.map(isPatternPatterns);
        expect(result).to.be.deep.equal([false, false, false, true]);
    });

});
