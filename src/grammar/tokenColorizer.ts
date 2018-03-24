import chalk, { Chalk } from 'chalk';
import { create } from './cacheMap';
import { Scope } from './grammarDefinition';

export type ColorTextFn = (text: string) => string;
export type ColorMap = [RegExp, ColorTextFn][];
const bgColor = '#202020';

export type ScopeColorizer = (text: string, scopes: Scope) => string;

export interface ScopeColorizerDefinition {
    colorMap: ColorMap;
    defaultColorizer: ColorTextFn;
}

const defaultColorDef = createDefaultColorMap(chalk);

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

export function createDefaultColorMap(chalk: Chalk): ScopeColorizerDefinition {
    const baseColor = chalk.bgHex(bgColor);

    const colorMap: ColorMap = [
        [/ keyword/, baseColor.yellow],
        [/ entity.name/, baseColor.blue],
        [/ variable/, baseColor.greenBright],
        [/ string/, baseColor.yellowBright],
        [/comment/, baseColor.dim.green],
        [/ punctuation/, baseColor.yellow],
        [/support.function/, baseColor.greenBright],
        [/^source$/, baseColor.gray],
        [/^title$/, baseColor.dim],
    ];

    const defaultColorizer = baseColor.dim;

    return {
        colorMap,
        defaultColorizer,
    };
}
