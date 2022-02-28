import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { moviesRoute } from './routes/movies.route.mjs';
import { studiosRoute } from './routes/studios.route.mjs';
import { disney, sony, warner } from '../constants/studio_constants.mjs';
import { v4 } from 'uuid';
import pkg from 'bunyan';

const { createLogger, stdSerializers } = pkg;

config();

const log = createLogger({
    name: 'my-app',
    serializers: stdSerializers
});

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    req.log = log.child({ req_id: v4() }, true);
    req.log.info({ req });
    res.on('finish', () => req.log.info({ res }));
    next();
});
app.use(`${ process.env.BASE_URL }/movies`, moviesRoute);
app.use(`${ process.env.BASE_URL }/studios`, studiosRoute);
app.get('/api/v2/health', (req, res) => res.json({ status: 'UP' }));

app.listen(port, () => console.log(`listening on ${ port }`));

export const api = app;
export const studios = [disney, warner, sony];
