import { findAll, findById, transfer } from './movies.controller.mjs';

describe('Movies Controller', () => {

    test('it should return a list of movies', async () => {
        const movies = await findAll({});
        expect(movies.length).toBeGreaterThan(0);
    });

    test('it should return a filtered list of movies', async () => {
        const movies = await findAll({ searchBy: 'Nightmare' });
        expect(movies.length).toBeGreaterThan(0);
    });

    test('it should return a movie by id', async () => {
        const movie = await findById('11');
        expect(movie).toBeDefined();
        expect(movie.name).toBe('Nightmare before christmas');
        expect(movie.price).toBe(600);
    });

    test('it should transfer a movie', async () => {
        const movie = await transfer('11', { studio: '2' });
        expect(movie).toBeDefined();
        expect(movie.studioId).toBe('2');
    });

    test('it should throw current movie\'s studio', async () => {
        await expect(() =>
            transfer('13', { studio: '1' })
        ).rejects.toThrowError('The studio is the current movie\'s studio');
    });

    test('it should throw studio not found', async () => {
        await expect(() =>
            transfer('11', { studio: '22' })
        ).rejects.toThrowError('Studio not found');
    });

    test('it should throw insufficient balance', async () => {
        await expect(() =>
            transfer('12', { studio: '2' })
        ).rejects.toThrowError('Insufficient balance to transfer the movie');
    });
});
