import * as XRegExp from 'xregexp';
import { matchesToOffsets } from './regexpUtil';

describe('Validate Tokenizer', () => {
    it('tests matchesToOffsets', () => {
        const t = 'one two three';
        const m = XRegExp.exec(t, XRegExp('(?<first>\\w+) (?<second>\\w+) (?<third>\\w+)'), 0);
        const r = matchesToOffsets(m);
        expect([...r.keys()]).toEqual(expect.arrayContaining(['first', 'second', 'third']));
        expect(r).toEqual(new Map([
            ['0', { begin: 0, end: t.length }],
            ['1', { begin: 0, end: 3 }],
            ['2', { begin: 4, end: 7 }],
            ['3', { begin: 8, end: 13 }],
            ['first',  { begin: 0, end: 3 }],
            ['second', { begin: 4, end: 7 }],
            ['third',  { begin: 8, end: 13 }],
        ]));
    });

    it('tests matchesToOffsets', () => {
        const t = 'one two three';
        const m = XRegExp.exec(t, XRegExp('(?<first>\\w*(?<s1>\\w)) (?<second>\\w+) (?<third>\\w+(?<s2>\\w))'), 0);
        const r = matchesToOffsets(m);
        expect([...r.keys()]).toEqual(expect.arrayContaining(['first', 'second', 'third']));
        expect([...r.entries()]).toEqual([
            ['0', { begin: 0, end: t.length }],
            ['1', { begin: 0, end: 3 }],
            ['2', { begin: 2, end: 3 }],
            ['3', { begin: 4, end: 7 }],
            ['4', { begin: 8, end: 13 }],
            ['5', { begin: 11, end: 12 }],  // <-- Note: it is not possible to guess the exact match offset.
            ['first',  { begin: 0, end: 3 }],
            ['s1',     { begin: 2, end: 3 }],
            ['second', { begin: 4, end: 7 }],
            ['third',  { begin: 8, end: 13 }],
            ['s2',     { begin: 11, end: 12 }],
        ]);
    });


    it('tests unmatched groups', () => {
        const t = 'one two three';
        const m = XRegExp.exec(t, XRegExp('(?<first>\\w*(?<s1>\\w)) (?:(?<second>\\w+)|(\\d+)) (?<third>\\w+)'), 0);
        const r = matchesToOffsets(m);
        expect([...r.keys()]).toEqual(expect.arrayContaining(['first', 'second', 'third']));
        expect([...r.entries()]).toEqual([
            ['0', { begin: 0, end: t.length }],
            ['1', { begin: 0, end: 3 }],
            ['2', { begin: 2, end: 3 }],
            ['3', { begin: 4, end: 7 }],
            // ['4', { begin: 8, end: 13 }], <-- missing on purpose, part of the OR
            ['5', { begin: 8, end: 13 }],  // <-- Note: it is not possible to guess the exact match offset.
            ['first',  { begin: 0, end: 3 }],
            ['s1',     { begin: 2, end: 3 }],
            ['second', { begin: 4, end: 7 }],
            ['third',  { begin: 8, end: 13 }],
        ]);
    });

});
