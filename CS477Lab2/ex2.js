const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    let image = fs.readFileSync('./engineer.jpg');
    res.end(image, 'binary');
});

server.listen(8080);

