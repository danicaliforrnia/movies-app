import { findAll } from './studios.controller.mjs';

describe('Studios Controller', () => {

    test('it should return a list of studios', async () => {
        const studios = await findAll();
        expect(studios.length).toBe(3);
    });
});
