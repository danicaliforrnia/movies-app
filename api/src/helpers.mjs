import { GENRE_STRING } from '../constants/studio_constants.mjs';

export const movieConstructor = (movie, studio) => {
    //Set url property to img
    if (movie.url) {
        Object.defineProperty(movie, 'img',
            Object.getOwnPropertyDescriptor(movie, 'url'));
        delete movie['url'];
    }
    //Map position id to string
    else if (typeof movie.position === 'number') {
        movie['position'] = GENRE_STRING[movie.price];
    }
    //Add studioId from parent object
    Object.defineProperty(movie, 'studioId',
        Object.getOwnPropertyDescriptor(studio, 'id'));

    return movie;
};
