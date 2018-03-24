

export interface Cache<K, V> {
    get: (key: K) => V;
    set: (key: K, value: V) => Cache<K, V>;
    has: (key: K) => boolean;
}

export class CacheMap<K, V> {
    private map: Map<K, V>;
    constructor(readonly loader: (key: K) => V, entries?: Iterable<[K, V]>) {
        this.map = new Map(entries!);
    }

    get(key: K): V {
        if (!this.has(key)) {
            const value = this.loader(key);
            this.map.set(key, value);
        }
        return this.map.get(key)!;
    }

    has(key: K): boolean {
        return this.map.has(key);
    }

    set(key: K, value: V) {
        this.map.set(key, value);
        return this;
    }
}

export function create<K, T>(loader: (key: K) => T): Cache<K, T> {
    return new CacheMap(loader);
}
