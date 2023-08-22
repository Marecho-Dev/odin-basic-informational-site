//HTTP MODULE - functionality for creating HTTP servers and clients
const http = require('http');

//hostname and port define where the server will run. 3000 common port
const hostname = '127.0.0.1';
const port = 3000;


//http.createServer is a callback that will be executed every time the server recieves a new request. req and res
//represent the incoming message(request) and the server response
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  });


  //server.listen starts the server making it listen for incoming requests on the port.
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });