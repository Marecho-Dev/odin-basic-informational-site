//HTTP MODULE - functionality for creating HTTP servers and clients
const http = require('http');
const path = require('path');
const fs = require('fs');
//hostname and port define where the server will run. 3000 common port
const hostname = '127.0.0.1';
const port = 3000;


//http.createServer is a callback that will be executed every time the server recieves a new request. req and res
//represent the incoming message(request) and the server response
const server = http.createServer((req, res) => {
    //path.join concats all the strings together..__dirname pulls current directory that the node.js file is in
    //switch do have cases for different req.url that will append them to the end of the directory
    let filePath;
    switch (req.url) {
        case '/':
          filePath = path.join(__dirname, 'index.html');
          break;
        case '/contact-me':
          filePath = path.join(__dirname, 'contact-me.html');
          break;
        case '/about':
          filePath = path.join(__dirname, 'about.html');
          break;
        default:
          filePath = path.join(__dirname, '404.html');
          break;
      }
      fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Ideally, this case should not be hit because we are already handling
                // the default case in our switch statement, but it's a safeguard.
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Not Found');
            } else {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Server Error');
            }
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content, 'utf8');
        }
    });
  });


  //server.listen starts the server making it listen for incoming requests on the port.
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });