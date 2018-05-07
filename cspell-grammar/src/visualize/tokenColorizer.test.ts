import chalk from 'chalk';
import { expect } from 'chai';
import { createDefaultColorMap, createScopeColorizer } from './tokenColorizer';

describe('Validate tokenColorizer', () => {
    it('createDefaultColorMap', () => {
        const ctx = new chalk.constructor({level: 0});
        const map = createDefaultColorMap(ctx);
        expect(map.defaultColorizer('hello')).to.be.equal('hello');
    });

    it('test createScopeColorizer default', () => {
        const colorizer = createScopeColorizer();
        expect(colorizer('hello', 'title')).to.contain('hello');
    });

    it('test createScopeColorizer level 0', () => {
        const ctx = new chalk.constructor({level: 0});
        const map = createDefaultColorMap(ctx);
        const colorizer = createScopeColorizer(map);
        expect(colorizer('hello', 'title')).to.equal('hello');
    });

    it('test createScopeColorizer level 3', () => {
        const ctx = new chalk.constructor({level: 3});
        const map = createDefaultColorMap(ctx);
        const colorizer = createScopeColorizer(map);
        expect(colorizer('hello', 'title')).to.contain('hello');
        expect(colorizer('hello', 'title')).to.not.equal('hello');
    });
});
