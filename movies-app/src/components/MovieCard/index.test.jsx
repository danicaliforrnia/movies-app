import { render } from '../../utils/test-utils';
import MovieCard from './index';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const studios = [
    {
        id: '1',
        name: 'Disney studios',
        shortName: 'Disney',
        logo: 'https://cdn.mos.cms.futurecdn.net/qfFFFhnM8LwZnjpTECN3oB.jpg',
        money: 1000
    },
    {
        id: '2',
        name: 'Warner Bros.',
        shortName: 'Warner',
        logo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z4nxu-626ae303-e830-4b4f-ab8b-4aff7f1bef0f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyYzZmNjg0LWQ0NDctNDQ1Ny04NGZhLTEyMDMzY2ZkNTgxZVwvZDl6NG54dS02MjZhZTMwMy1lODMwLTRiNGYtYWI4Yi00YWZmN2YxYmVmMGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gtKaGVrDg8gzU7QFThusbHJw2d6bKgnDauezUcZo-1A',
        money: 900
    },
    {
        id: '3',
        name: 'Sony Pictures',
        shortName: 'Sony',
        logo: 'https://logoeps.com/wp-content/uploads/2013/05/sony-pictures-entertainment-vector-logo.png',
        money: 700
    }
];

export const handlers = [
    rest.get('/api/v2/studios', (req, res, ctx) => {
        return res(ctx.json(studios), ctx.delay(150));
    })
];

const server = setupServer(...handlers);

describe('MovieCard Component', () => {
    const movie = {
        id: '11',
        name: 'Nightmare before christmas',
        genre: 6,
        img: 'https://www.dimanoinmano.it/img/638590/full/libri-per-ragazzi/infanzia/nightmare-before-christmas.jpg',
        price: 600,
        studioId: '1'
    };

    beforeAll(() => server.listen());

    afterAll(() => {
        jest.resetAllMocks();
        server.close();
    });

    afterEach(() => {
        jest.clearAllMocks();
        server.resetHandlers();
    });

    it('should render correctly', () => {
        const { container, getByText } = render(
            <MovieCard movie={ movie } studios={ studios }/>
        );
        expect(container).toBeInTheDocument();
        expect(getByText(movie.name)).toBeInTheDocument();
        expect(getByText(`Price: ${ movie.price }$`)).toBeInTheDocument();
        expect(getByText(studios[0].name)).toBeInTheDocument();
    });
});
