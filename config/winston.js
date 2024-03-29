import winston from 'winston';

export const logConfiguration = (filename) => {
  return {
    transports: [
      new winston.transports.Console({
        level: 'info'
      }),
      new winston.transports.File({
        level: 'info',
        // Create the log directory if it does not exist
        filename
      })
    ],
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'MMM-DD-YYYY HH:mm:ss'
      }),
      winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )
  }
};