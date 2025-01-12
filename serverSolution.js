const http = require('http');

const requestListener = (request, response) => {
  try {
    response.writeHead(200);
    response.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  // Optionally, you might want to restart the server here
});

server.listen(8080);