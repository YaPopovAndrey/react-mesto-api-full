/* eslint-disable linebreak-style */
const winston = require('winston');
const expressWinston = require('express-winston');

module.exports.reqLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: 'req.log' }),
  ],
  format: winston.format.json(),
});

module.exports.errLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: 'err.log' }),
  ],
  format: winston.format.json(),
});
