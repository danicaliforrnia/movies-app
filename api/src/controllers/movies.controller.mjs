import { movieConstructor } from '../helpers.mjs';
import { disney, GENRE_STRING, sony, warner } from '../../constants/studio_constants.mjs';
import { studios } from '../server.mjs';

export const findAll = async (queryParams) => {
    let allMovies = [];
    if (queryParams.searchBy) {
        studios.forEach(singleStudio =>
            singleStudio.movies
                .map(movie => movieConstructor(movie, singleStudio))
                .filter(movie =>
                    movie.name.toLowerCase().includes(queryParams.searchBy.toLowerCase())
                    || GENRE_STRING[movie.genre].toLowerCase().includes(queryParams.searchBy.toLowerCase())
                    || movie.price === +queryParams.searchBy
                )
                .forEach(movie => allMovies.push(movie))
        );
    } else {
        studios.forEach(singleStudio =>
            singleStudio.movies.map(movie => movieConstructor(movie, singleStudio)).forEach(movie => allMovies.push(movie))
        );
    }
    return allMovies;
};

export const findById = async (movieId) => {
    const movie = [
        ...disney.movies,
        ...warner.movies,
        ...sony.movies
    ].find(movie => movie.id === movieId);

    if (!movie) {
        throw new Error(`Movie not found`);
    }

    return movie;
};

export const transfer = async (movieId, { studio: studioId }) => {
    const movie = await findById(movieId);
    const currentStudio = studios.find(studio => studio.movies.findIndex(movie => movie.id === movieId) !== -1);

    if (currentStudio.id === studioId) {
        throw new Error(`The studio is the current movie's studio`);
    }

    const newStudioIndex = studios.findIndex(studio => studio.id === studioId);

    if (newStudioIndex === -1) {
        throw new Error(`Studio not found`);
    }

    if (studios[newStudioIndex].money <= movie.price) {
        throw new Error(`Insufficient balance to transfer the movie`);
    }

    currentStudio.movies.splice(currentStudio.movies.findIndex(movie => movie.id === movieId), 1);

    studios[newStudioIndex].movies.push(movie);

    currentStudio.money = currentStudio.money + movie.price;
    studios[newStudioIndex].money = studios[newStudioIndex].money - movie.price;

    return movieConstructor(movie, studios[newStudioIndex]);
};
