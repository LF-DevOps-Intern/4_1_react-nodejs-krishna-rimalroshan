const http = require('http');

const hostname = '127.0.0.1';
const api1_port = 6080;


const server1 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Node Js');
});

server1.listen(api1_port, hostname, () => {
  console.log(`API 1 running at http://${hostname}:${api1_port}/`);
});


