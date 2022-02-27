import moviesController from '../controllers/movies.controller.mjs';
import express from 'express';

const router = express.Router();

router.get(
    '',
    async (req, res) => res.json(await moviesController.findAll(req.query))
);

router.get(
    '/:movieId',
    async (req, res) => res.json(await moviesController.findById(req.params.movieId))
);

router.get(
    '/movies-ages',
    async (req, res) => res.json(await moviesController.getAges())
);

export const moviesRoute = router;
