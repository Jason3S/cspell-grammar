import { create } from './cacheMap';
import { expect } from 'chai';

describe('Validate CacheMap', function() {
    it('test create', () => {
        const loader = (t: string) => t.toUpperCase();
        const cache = create(loader);
        expect(cache.has('hello')).to.be.false;
        expect(cache.get('hello')).to.be.equal('HELLO');
    });

    it('test undefined', () => {
        const loader = () => undefined;
        const cache = create<string, string | undefined>(loader);
        expect(cache.has('hello')).to.be.false;
        expect(cache.get('hello')).to.be.undefined;
    });

    it('test that loader is called only once', () => {
        let n = 0;
        const loader = (t: string) => { ++n; return t.toUpperCase(); };
        const cache = create(loader);
        expect(cache.has('hello')).to.be.false;
        expect(n).to.be.equal(0);
        expect(cache.get('hello')).to.be.equal('HELLO');
        expect(n).to.be.equal(1);
        expect(cache.get('hello')).to.be.equal('HELLO');
        expect(n).to.be.equal(1);
        expect(cache.get('Hello')).to.be.equal('HELLO');
        expect(n).to.be.equal(2);
    });
});
