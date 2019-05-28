import { join } from 'path';

const logs = join(__dirname, '../logs/app.log');

const winstonOptions = {
  file: {
    level: 'info',
    filename: logs,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

export default winstonOptions;
