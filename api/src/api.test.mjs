import request from 'supertest';
import { api } from './server.mjs';

describe('Health', () => {
    test('It should return 200 OK - GET /api/v2/health', async () => {
        const res = await request(api).get('/api/v2/health');
        expect(res.statusCode).toEqual(200);
    });
});

describe('Movies', () => {
    const uri = '/api/v2/movies';

    test('It should return 200 OK - GET /api/v2/movies', async () => {
        const res = await request(api).get(uri);
        expect(res.statusCode).toEqual(200);
    });

    test('It should return 200 OK - GET /api/v2/movies?searchBy=Adventure', async () => {
        const res = await request(api).get(`${ uri }?searchBy=Adventure`);
        expect(res.statusCode).toEqual(200);
    });

    test('It should return 200 OK - GET /api/v2/movies/11', async () => {
        const res = await request(api).get(`${ uri }/11`);
        expect(res.statusCode).toEqual(200);
    });


    test('It should return 404 Movie Not Found - GET /api/v2/movies/1234', async () => {
        const res = await request(api).get(`${ uri }/1234`);
        expect(res.statusCode).toEqual(404);
    });

    test('It should return 200 OK - PATCH /api/v2/movies/21/studio', async () => {
        const res = await request(api).post(`${ uri }/22/studio`).send({
            studio: '1'
        });
        expect(res.statusCode).toEqual(200);
    });

    test('It should return 500 Error - PATCH /api/v2/movies/1234/studio', async () => {
        const res = await request(api).post(`${ uri }/1234/studio`).send({
            studio: '1'
        });
        expect(res.statusCode).toEqual(500);
    });
});
