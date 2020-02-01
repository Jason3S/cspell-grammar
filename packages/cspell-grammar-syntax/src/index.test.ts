import * as fs from 'fs-extra';
import { getFilenames } from '.';


describe('Index', () => {
    it('test that all the files can be loaded', async () => {
        const tests = getFilenames()
            .map(name => fs.readFile(name, 'utf-8'))
            .map(async pFile => {
                const file = await pFile;
                expect(Object.keys(file)).not.toHaveLength(0);
            });
        return Promise.all(tests);
    });
});
