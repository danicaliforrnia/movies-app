import express from 'express';
import { findAll } from '../controllers/studios.controller.mjs';

const router = express.Router();

router.get(
    '',
    async (req, res) => res.json(await findAll())
);

export const studiosRoute = router;
