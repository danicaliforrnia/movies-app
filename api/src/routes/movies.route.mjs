import express from 'express';
import { findAll, findById, getAges, transfer } from '../controllers/movies.controller.mjs';

const router = express.Router();

router.get(
    '',
    async (req, res) => res.json(await findAll(req.query))
);

router.get(
    '/:movieId',
    async (req, res) => res.json(await findById(req.params.movieId))
);

router.patch(
    '/:movieId/studio',
    async (req, res) => {
        try {
            req.log.info(`Transferring movie ${ req.params.movieId } to ${ req.body.studio }`);
            return res.json(await transfer(req.params.movieId, req.body));
        } catch (e) {
            return res.status(500).json({
                message: e.message
            });
        }
    });

router.get(
    '/movies-ages',
    async (req, res) => res.json(await getAges())
);

export const moviesRoute = router;
