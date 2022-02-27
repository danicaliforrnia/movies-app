import { movieConstructor } from '../helpers.mjs';
import { disney, sony, warner } from '../../constants/studio_constants.mjs';

const moviesController = {
    findAll: async (queryParams) => {
        let allMovies = [];
        [disney, warner, sony].forEach(singleStudio => {
            singleStudio.movies.map(movie => {
                allMovies.push(movieConstructor(movie, singleStudio));
            });
        });
        return allMovies;
    }
};

export default moviesController;
