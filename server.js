const http = require('http');
const app = require('./app');

const environment = require('./environment');

const port = environment.PORT;

const server = http.createServer(app);

server.listen(port);