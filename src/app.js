import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import logger from 'morgan';
import winstonLogger from './helpers/winstonLogger';
import indexRouter from './routes/routes';

const helmet = require('helmet');
const compression = require('compression');

const app = express();

app.use(logger('combined', { stream: winstonLogger.stream }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.disable('x-powered-by');

app.use('/', indexRouter);

export default app;
