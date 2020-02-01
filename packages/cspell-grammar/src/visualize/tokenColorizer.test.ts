import { createDefaultColorMap, createScopeColorizer, createColorizer, createDefaultColorApplicator, ColorApplicator } from './tokenColorizer';
import { Token } from '..';

describe('Validate tokenColorizer', () => {
    it('createDefaultColorMap', () => {
        const map = createDefaultColorMap(createDefaultColorApplicator());
        expect(map.defaultColorizer('hello')).toBe('hello');
    });

    it('test createScopeColorizer default', () => {
        const colorizer = createScopeColorizer();
        expect(colorizer('hello', 'title')).toEqual(expect.stringContaining('hello'));
    });

    it('test createScopeColorizer', () => {
        const colorizer = createScopeColorizer();
        expect(colorizer('hello', 'title')).toBe('hello');
    });

    it('test createScopeColorizer', () => {
        const applicator = createDefaultColorApplicator();
        const map = createDefaultColorMap(wrapColorApplicator(applicator));
        const colorizer = createScopeColorizer(map);
        expect(colorizer('hello', 'title')).toEqual(expect.stringContaining('hello'));
        expect(colorizer('hello', 'title')).not.toBe('hello');
    });

    it('test createColorizer', () => {
        const scopeColorizer = createScopeColorizer();
        const colorizer = createColorizer(scopeColorizer);
        const line = 'var a := 5;';
        const tokens: Token[] = [
            {
                startIndex: 0,
                endIndex: 4,
                scopes: ['source.x'],
            },
            {
                startIndex: 4,
                endIndex: 5,
                scopes: ['source.x'],
            },
            {
                startIndex: 5,
                endIndex: 6,
                scopes: ['source.x', 'variable.source.x'],
            },
            {
                startIndex: 7,
                endIndex: 9,
                scopes: ['source.x'],
            },
        ];
        const r = colorizer(line, tokens);
        expect(r).toBe(line);
    });

    function wrapColorApplicator(app: ColorApplicator): ColorApplicator {
        function makeWrapper(fn: (...text: string[]) => string, app: ColorApplicator): ColorApplicator {
            const wrapper = Object.setPrototypeOf(fn, app);
            const colors: (keyof ColorApplicator)[] = ['yellow', 'green', 'red', 'blue', 'dim'];
            for (const key of colors) {
                doGetter(wrapper, key);
            }
            return wrapper;
        }

        function doGetter(wrapper: ColorApplicator, key: keyof ColorApplicator) {
            Object.defineProperty(wrapper, key, {
                get: () => makeWrapper((...text: string[]) => `${key}[${wrapper(...text)}]`, wrapper)
            });
        }

        const wrapper = makeWrapper((...text: string[]) => text.join(''), app);
        return wrapper;
    }
});
