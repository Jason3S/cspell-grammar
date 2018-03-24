import * as path from 'path';
import * as fs from 'fs-extra';

export const defaultFixturesLocation = path.join(__dirname, '..', '..', 'fixtures');

export interface FixtureHelper {
    read(path: string): Promise<string>;
    write(path: string, text: string): Promise<void>;
    compare(fixturePath: string, actual: string): Promise<CompareResult>;
    relativeFixturePath(...pathParts: string[]): string;
    resolveFixturePath(...pathParts: string[]): string;
    readonly fixturesLocation: string;
    enableWriteBack: boolean;
}

export interface CompareResult {
    expected: string;
    actual: string;
}

export const defaultUpdateFixtures = false;

export function create(fixturesLocation: string = defaultFixturesLocation): FixtureHelper {

    const helper: FixtureHelper = {
        read,
        write,
        compare,
        relativeFixturePath,
        resolveFixturePath,
        fixturesLocation,
        enableWriteBack: defaultUpdateFixtures,
    };

    function relativeFixturePath(...pathParts: string[]) {
        return path.join(...pathParts);
    }

    function resolveFixturePath(...pathParts: string[]) {
        return path.join(fixturesLocation, ...pathParts);
    }

    function read(...fixturePath: string[]): Promise<string> {
        return fs.readFile(resolveFixturePath(...fixturePath), 'utf8');
    }

    async function write(fixturePath: string, text: string): Promise<void> {
        const filename = resolveFixturePath(fixturePath);
        await fs.ensureDir(path.dirname(filename));
        return fs.writeFile(
            filename,
            text
        );
    }

    async function compare(fixturePath: string, actual: string): Promise<CompareResult> {
        if (helper.enableWriteBack) {
            await write(fixturePath, actual);
        }
        const expected = await read(fixturePath);
        return { expected, actual };
    }

    return helper;
}
