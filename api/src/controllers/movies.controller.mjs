import { movieConstructor } from '../helpers.mjs';
import { disney, movieAge, sony, warner } from '../../constants/studio_constants.mjs';

const moviesController = {
    findAll: async (queryParams) => {
        let allMovies = [];
        [disney, warner, sony].forEach(singleStudio => {
            singleStudio.movies.map(movie => {
                allMovies.push(movieConstructor(movie, singleStudio));
            });
        });
        return allMovies;
    },
    findById: async (movieId) => {
        return [
            ...disney.movies,
            ...warner.movies,
            ...sony.movies
        ].find(movie => movie.id === movieId);
    },
    getAges: async () => movieAge
};

export default moviesController;
