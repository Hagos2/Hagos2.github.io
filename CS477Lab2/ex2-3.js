const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    fs.createReadStream("./enginner.jpg").pipe(res);
});

server.listen(9000);