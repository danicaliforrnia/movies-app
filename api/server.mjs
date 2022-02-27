import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { moviesRoute } from './src/routes/movies.route.mjs';
import { studiosRoute } from './src/routes/studios.route.mjs';
import { disney, sony, warner } from './constants/studio_constants.mjs';

config();

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(`${ process.env.BASE_URL }/movies`, moviesRoute);
app.use(`${ process.env.BASE_URL }/studios`, studiosRoute);
app.get('/api/v2/health', (req, res) => res.json({ status: 'UP' }));

app.listen(port, () => console.log(`listening on ${ port }`));

export const api = app;
export const studios = [disney, warner, sony];
