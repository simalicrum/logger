import winston from 'winston';

export { logConfiguration } from './config/winston.js';

export const createLogger = (filename) => {
  const logger = winston.createLogger(logConfiguration(filename));
  return logger;
}