import winston from 'winston';
import winstonOptions from '../config/winston';

const winstonLogger = winston.createLogger({
  transports: [
    new winston.transports.File(winstonOptions.file),
    new winston.transports.Console(winstonOptions.console),
  ],
  exitOnError: false,
});


winstonLogger.stream = {
  write(message) {
    winstonLogger.info(message);
  },
};

export default winstonLogger;
