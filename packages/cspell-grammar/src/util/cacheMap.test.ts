import { create } from './cacheMap';

describe('Validate CacheMap', function() {
    it('test create', () => {
        const loader = (t: string) => t.toUpperCase();
        const cache = create(loader);
        expect(cache.has('hello')).toBe(false);
        expect(cache.get('hello')).toBe('HELLO');
    });

    it('test undefined', () => {
        const loader = () => undefined;
        const cache = create<string, string | undefined>(loader);
        expect(cache.has('hello')).toBe(false);
        expect(cache.get('hello')).toBeUndefined();
    });

    it('test that loader is called only once', () => {
        let n = 0;
        const loader = (t: string) => { ++n; return t.toUpperCase(); };
        const cache = create(loader);
        expect(cache.has('hello')).toBe(false);
        expect(n).toBe(0);
        expect(cache.get('hello')).toBe('HELLO');
        expect(n).toBe(1);
        expect(cache.get('hello')).toBe('HELLO');
        expect(n).toBe(1);
        expect(cache.get('Hello')).toBe('HELLO');
        expect(n).toBe(2);
    });

    it('test that loader is NOT called', () => {
        let n = 0;
        const loader = (t: string) => { ++n; return t.toUpperCase(); };
        const cache = create(loader);
        expect(cache.has('hello')).toBe(false);
        cache.set('hello', 'hello');
        expect(cache.has('hello')).toBe(true);
        expect(n).toBe(0);
        expect(cache.get('hello')).toBe('hello');
        expect(n).toBe(0);
        expect(cache.get('Hello')).toBe('HELLO');
        expect(n).toBe(1);
    });

});
