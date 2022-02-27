import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { moviesRoute } from './src/routes/movies.route.mjs';

config();

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(`${ process.env.BASE_URL }/movies`, moviesRoute);

app.get('/api/v2/health', (req, res) => res.json({ status: 'UP' }));

app.listen(port, () => console.log(`listening on ${ port }`));

export const api = app;
