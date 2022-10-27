import winston from 'winston';

export const logConfiguration = {
  transports: [
    new winston.transports.Console({
      level: 'warn'
    }),
    new winston.transports.File({
      level: 'info',
      // Create the log directory if it does not exist
      filename: 'logs/gsc2dropbox.log'
    })
  ],
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'MMM-DD-YYYY HH:mm:ss'
    }),
    winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
  )
};