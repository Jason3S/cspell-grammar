import { create } from '../util/cacheMap';
import { Scope, Token } from '../grammar';
import { ScopeColorizer, LineColorizer } from './types';

export type ColorTextFn = (text: string) => string;
export type ColorMap = [RegExp, ColorTextFn][];
const bgColor = '#202020';

export interface ScopeColorizerDefinition {
    colorMap: ColorMap;
    defaultColorizer: ColorTextFn;
}

const defaultColorApplicator = createDefaultColorApplicator();
const defaultColorDef = createDefaultColorMap(defaultColorApplicator);

export function createScopeColorizer(colorDef: ScopeColorizerDefinition = defaultColorDef): ScopeColorizer {
    const { colorMap, defaultColorizer } = colorDef;
    const scopeCache = create((scopes: Scope) => {
        for (const [reg, fn] of colorMap) {
            if (reg.test(scopes)) {
                return fn;
            }
        }
        return defaultColorizer;
    });

    function colorize(text: string, scopes: Scope): string {
        const fn = scopeCache.get(scopes)!;
        return fn(text);
    }

    return colorize;
}

export function createColorizer(scopeColorizer = createScopeColorizer(defaultColorDef)): LineColorizer {
    return function(text: string, tokens: Token[]): string {
        const parts: string[] = [];

        let pos = 0;
        for (const token of tokens) {
            if (token.startIndex > pos) {
                parts.push(scopeColorizer(text.slice(pos, token.startIndex), ''));
            }
            parts.push(scopeColorizer(text.slice(token.startIndex, token.endIndex), token.scopes.join(' ')));
            pos = token.endIndex;
        }
        if (pos < text.length) {
            parts.push(scopeColorizer(text.slice(pos), ''));
        }

        return parts.join('');
    };
}

export interface ColorApplicator {
    (...text: string[]): string;
    red: ColorApplicator;
    green: ColorApplicator;
    yellow: ColorApplicator;
    blue: ColorApplicator;
    greenBright: ColorApplicator;
    yellowBright: ColorApplicator;
    dim: ColorApplicator;
    gray: ColorApplicator;
    bgHex: (hex: string) => ColorApplicator;
}

export function createDefaultColorMap(chalk: ColorApplicator): ScopeColorizerDefinition {
    const baseColor = chalk.bgHex(bgColor);

    const colorMap: ColorMap = [
        [/ keyword/, baseColor.yellow],
        [/ entity.name/, baseColor.blue],
        [/ variable/, baseColor.greenBright],
        [/ string/, baseColor.yellowBright],
        [/comment/, baseColor.dim.green],
        [/ punctuation/, baseColor.yellow],
        [/support.function/, baseColor.greenBright],
        [/^source/, baseColor.gray],
        [/^title$/, baseColor.dim],
    ];

    const defaultColorizer = baseColor.dim;

    return {
        colorMap,
        defaultColorizer,
    };
}

export function createDefaultColorApplicator(): ColorApplicator {
    const applicator = ((...text: string[]) => text.join('')) as ColorApplicator;
    applicator.red = applicator;
    applicator.green = applicator;
    applicator.yellow = applicator;
    applicator.blue = applicator;
    applicator.greenBright = applicator;
    applicator.yellowBright = applicator;
    applicator.dim = applicator;
    applicator.gray = applicator;
    applicator.bgHex = function() { return this; };

    return applicator;
}
