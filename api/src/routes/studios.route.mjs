import express from 'express';
import studiosController from '../controllers/studios.controller.mjs';

const router = express.Router();

router.get(
    '',
    async (req, res) => res.json(await studiosController.findAll())
);

export const studiosRoute = router;
