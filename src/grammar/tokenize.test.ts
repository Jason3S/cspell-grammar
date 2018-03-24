import { expect } from 'chai';
import { GrammarDefinition } from './grammarDefinition';
import * as path from 'path';
import { Rule, tokenizeLine, pairCaptureGroupsToMatchOffsets, Token, mergeTokens } from './tokenize';
import * as XRegExp from 'xregexp';
import { matchesToOffsets } from './regexpUtil';

// cspell:ignore objectliteral

describe('Validate Tokenizer', () => {

    it('tests mergeTokens empty', () => {
        const tokens: Token[] = [];
        const result = mergeTokens(tokens);
        expect(result).to.deep.equal(tokens);
    });

    it('tests mergeTokens single', () => {
        const tokens: Token[] = [{startIndex: 0, endIndex: 20, scopes: ['one']}];
        const result = mergeTokens(tokens);
        expect(result).to.deep.equal(tokens);
    });

    it('tests mergeTokens no overlap', () => {
        const tokens: Token[] = [
            {startIndex: 0,  endIndex: 20, scopes: ['one']},
            {startIndex: 20, endIndex: 30, scopes: ['two']},
            {startIndex: 30, endIndex: 40, scopes: ['three']},
        ];
        const result = mergeTokens(tokens);
        expect(result).to.deep.equal(tokens);
    });

    it('tests mergeTokens overlap', () => {
        const tokens: Token[] = [
            {startIndex: 0,  endIndex: 20, scopes: ['one']},
            {startIndex: 20, endIndex: 30, scopes: ['two']},
            {startIndex: 30, endIndex: 40, scopes: ['three']},
            {startIndex: 25, endIndex: 35, scopes: ['two/three']},
        ];
        const expected: Token[] = [
            {startIndex: 0,  endIndex: 20, scopes: ['one']},
            {startIndex: 20, endIndex: 25, scopes: ['two']},
            {startIndex: 25, endIndex: 35, scopes: ['two/three']},
            {startIndex: 35, endIndex: 40, scopes: ['three']},
        ];
        const result = mergeTokens(tokens);
        expect(result).to.deep.equal(expected);
    });

    it('tests mergeTokens overlap', () => {
        const tokens: Token[] = [
            {startIndex: 0,  endIndex: 20, scopes: ['one']},
            {startIndex: 20, endIndex: 30, scopes: ['two']},
            {startIndex: 30, endIndex: 40, scopes: ['three']},
            {startIndex: 0,  endIndex: 35, scopes: ['one/three']},
        ];
        const expected: Token[] = [
            {startIndex: 0,  endIndex: 35, scopes: ['one/three']},
            {startIndex: 35, endIndex: 40, scopes: ['three']},
        ];
        const result = mergeTokens(tokens);
        expect(result).to.deep.equal(expected);
    });

    it('tests mergeTokens split', () => {
        const tokens: Token[] = [
            {startIndex: 0,  endIndex: 20, scopes: ['one']},
            {startIndex: 20, endIndex: 30, scopes: ['two']},
            {startIndex: 30, endIndex: 40, scopes: ['three']},
            {startIndex: 22, endIndex: 28, scopes: ['two.2']},
        ];
        const expected: Token[] = [
            {startIndex: 0,  endIndex: 20, scopes: ['one']},
            {startIndex: 20, endIndex: 22, scopes: ['two']},
            {startIndex: 22, endIndex: 28, scopes: ['two.2']},
            {startIndex: 28, endIndex: 30, scopes: ['two']},
            {startIndex: 30, endIndex: 40, scopes: ['three']},
        ];
        const result = mergeTokens(tokens);
        expect(result).to.deep.equal(expected);
    });

    it('tests pairCaptureGroupsToMatchOffsets', () => {
        const t = '0 one two three. four 5';
        const m = XRegExp.exec(t, XRegExp('(one).*(two\\s+(three).)\\s+four(?= (\\d))'), 2);
        const mOffsets = matchesToOffsets(m);
        const captureGroups = ['0'];
        const r = pairCaptureGroupsToMatchOffsets(captureGroups, mOffsets);
        expect(r).to.not.be.undefined;
        expect(r.map(r => r.captureGroups)).to.be.deep.equal([['0']]);
        expect(r.map(r => r.begin)).to.be.deep.equal([2]);
        expect(r.map(r => r.end)).to.be.deep.equal([21]);
    });

    it('tests pairCaptureGroupsToMatchOffsets', () => {
        const t = '0 one two three. four 5';
        const m = XRegExp.exec(t, XRegExp('(one).*(two\\s+(three).)\\s+four(?= (\\d))'), 2);
        const mOffsets = matchesToOffsets(m);
        const captureGroups = ['0', '1', '2', '3', '4'];
        const r = pairCaptureGroupsToMatchOffsets(captureGroups, mOffsets);
        expect(r).to.not.be.undefined;
        expect(r.map(r => r.captureGroups)).to.be.deep.equal([['0'], ['0', '1'], ['0', '2'], ['0', '2', '3'], ['4']]);
        expect(r.map(r => t.slice(r.begin, r.end))).to.be.deep.equal([
            'one two three. four',
            'one',
            'two three.',
            'three',
            '5',
        ]);
    });

    it('tests tokenizeLine Javascript', () => {
        let rule = sampleJavascriptGrammarRule;
        const r0 = tokenizeLine('const param = {', rule);
        const r1 = tokenizeLine('    one: 55,', r0.state);
        const r2 = tokenizeLine('    two: 66,', r1.state);
        const r3 = tokenizeLine('    4: "four",', r2.state);
        const r4 = tokenizeLine('};', r3.state);

        expect(r2.tokens[1].scopes).to.be.deep.equal([
            'meta.object-literal.key.js',
            'meta.object.member.js',
            'meta.objectliteral.js',
            'meta.var.expr.js',
            'source.js',
        ].reverse());

        expect(r3.tokens[1].scopes).to.be.deep.equal([
            'constant.numeric.decimal.js',
            'meta.object-literal.key.js',
            'meta.object.member.js',
            'meta.objectliteral.js',
            'meta.var.expr.js',
            'source.js',
        ].reverse());

        expect(r4.tokens).to.not.be.empty;
    });

    it('tests tokenizeLine sampleFakeGrammar', () => {
        const rule = grammarToRule(sampleFakeGrammar);
        const text = `const x = 'it\\'s good'; // comment`;
        const r = tokenizeLine(text, rule);
        const tokens = r.tokens;
        // console.log(r);
        let startIndex = 0;
        for (const t of tokens) {
            expect(t.startIndex).to.equal(startIndex);
            startIndex = t.endIndex;
        }
        const textScope = tokens.map(t => ({ text: text.slice(t.startIndex, t.endIndex), scope: t.scopes.slice(-1)[0]}));
        expect(textScope).to.be.deep.equal([
            {scope: 'scope.js',                                 text: 'const x = '},
            {scope: 'punctuation.definition.string.begin.js',   text: "'"},
            {scope: 'string.quoted.single.js',                  text: 'it'},
            {scope: 'constant.character.escape.js',             text: "\\'"},
            {scope: 'string.quoted.single.js',                  text: 's good'},
            {scope: 'punctuation.definition.string.end.js',     text: "'"},
            {scope: 'scope.js',                                 text: '; '},
            {scope: 'punctuation.definition.comment.js',        text: '//'},
            {scope: 'comment.line.double-slash.js',             text: ' comment'},
        ]);

        // fix sub matches can push out the end of parent matches.
        expect(r.tokens).to.have.length(9);
    });

    it('tests tokenizeLine Javascript', () => {
        const lines = sampleJavascript.split('\n');
        let rule = sampleJavascriptGrammarRule;
        expect(lines).to.be.not.empty;
        for (const line of lines) {
            const r = tokenizeLine(line, rule);
            if (line !== '') {
                expect(r.tokens).to.not.be.empty;
            }
            rule = r.state;
        }
    });

});

const sampleJavascriptGrammarRule = loadSampleJavascriptGrammar();
const sampleJavascript = `
"use strict";

const param = {
    one: 55,
    two: 66,
    4: 'four',
};

function run(name) {
    const text = name + ' ' + name.toUpperCase();
    console.log(text);
}
`;

// cspell:ignore qstring
const sampleFakeGrammar: GrammarDefinition = {
    name: 'Sample Grammar',
    fileTypes: ['js'],
    scopeName: 'scope.js',
    patterns: [
        { include: '#comment' },
        { include: '#string' },
    ],
    repository: {
        comment: {
            patterns: [
                { include: '#comment-block-definition' },
                { include: '#comment-block' },
                { include: '#comment-line' },
            ]
        },
        'comment-block': {
            begin: '/\\*',
            captures: {
                '0': {
                    name: 'punctuation.definition.comment.js'
                }
            },
            end: '\\*/',
            name: 'comment.block.json'
        },
        'comment-block-definition': {
            begin: '/\\*\\*(?!/)',
            captures: {
                '0': {
                    name: 'punctuation.definition.comment.js'
                }
            },
            end: '\\*/',
            name: 'comment.block.documentation.js'
        },
        'comment-line': {
            captures: {
                '1': {
                    name: 'punctuation.definition.comment.js'
                }
            },
            match: '(//).*$\\n?',
            name: 'comment.line.double-slash.js'
        },
        string: {
            patterns: [
                {
                    include: '#qstring-single'
                },
                {
                    include: '#qstring-double'
                }
            ]
        },
        'qstring-double': {
            name: 'string.quoted.double.js',
            begin: '"',
            beginCaptures: {
                '0': {
                    name: 'punctuation.definition.string.begin.js'
                }
            },
            end: '(")|((?:[^\\\\\\n])$)',
            endCaptures: {
                '1': {
                    name: 'punctuation.definition.string.end.js'
                },
                '2': {
                    name: 'invalid.illegal.newline.js'
                }
            },
            patterns: [
                {
                    include: '#string-character-escape'
                }
            ]
        },
        'qstring-single': {
            name: 'string.quoted.single.js',
            begin: "'",
            beginCaptures: {
                '0': {
                    name: 'punctuation.definition.string.begin.js'
                }
            },
            end: "(\\')|((?:[^\\\\\\n])$)",
            endCaptures: {
                '1': {
                    name: 'punctuation.definition.string.end.js'
                },
                '2': {
                    name: 'invalid.illegal.newline.js'
                }
            },
            patterns: [
                {
                    include: '#string-character-escape'
                }
            ]
        },
        'string-character-escape': {
            name: 'constant.character.escape.js',
            match: '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)'
        },
    },
};


function loadSampleJavascriptGrammar(): Rule {
    const filenameGrammarJavascript = path.join(__dirname, '..', '..', 'fixtures', 'grammar', 'syntax', 'javascript.tmLanguage.json');
    const grammarJavascript = require(filenameGrammarJavascript) as GrammarDefinition;

    return grammarToRule(grammarJavascript);
}

function grammarToRule(grammar: GrammarDefinition): Rule {
    const rule: Rule = {
        parent: undefined,
        pattern: grammar,
        scope: grammar.scopeName,
        grammarDef: grammar,
        depth: 0,
        comment: grammar.name || grammar.scopeName || 'Root',
    };

    return rule;
}
