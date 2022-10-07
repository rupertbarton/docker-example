const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Hello World\n');
});

server.listen(port, () => {
    console.log(`Server running on port :${port}`);
});