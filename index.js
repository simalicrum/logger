import winston from 'winston';
import { logConfiguration } from './config/winston.js';

export const createLogger = () => {
  const logger = winston.createLogger(logConfiguration);
  return logger;
}