import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import logger from 'morgan';
import winstonLogger from './helpers/winstonLogger';
import indexRouter from './routes/routes';

const app = express();

app.use(logger('combined', { stream: winstonLogger.stream }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

export default app;
