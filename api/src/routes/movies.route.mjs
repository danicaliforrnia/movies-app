import moviesController from '../controllers/movies.controller.mjs';
import express from 'express';

const router = express.Router();

router.get(
    '',
    async (req, res) => res.json(await moviesController.findAll(req.query))
);

export const moviesRoute = router;
