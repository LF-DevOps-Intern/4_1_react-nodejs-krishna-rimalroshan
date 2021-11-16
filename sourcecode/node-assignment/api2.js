const http = require('http');

const hostname = '127.0.0.1';
const api2_port=7080;


const server2 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Node Js Installed Successfully');
});

server2.listen(api2_port, hostname, () => {
  console.log(`API 2 running at http://${hostname}:${api2_port}/`);
});

