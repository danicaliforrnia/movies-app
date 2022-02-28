import express from 'express';
import { findAll, findById, transfer } from '../controllers/movies.controller.mjs';

const router = express.Router();

router.get(
    '',
    async (req, res) => res.json(await findAll(req.query))
);

router.get(
    '/:movieId',
    async (req, res) => {
        try {
            return res.json(await findById(req.params.movieId));
        } catch (e) {
            return res.status(404).json({
                message: e.message
            });
        }
    }
);

router.post(
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

export const moviesRoute = router;
