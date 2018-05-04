/* eslint-disable no-console */
const logger = require('winston');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);
const requestExternalAPI = require('./hooks/calling-external-service');
process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

// queryParamters={id:"1"}
//   const optionss = {
//     port: '80',
//     host: 'jsonplaceholder.typicode.com',
//     method: 'GET',
//     path: '/posts'
//   };
//   console.log(requestExternalAPI(optionss,queryParamters));

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);
