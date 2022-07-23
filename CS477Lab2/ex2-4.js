require('http').createServer((req, res) => {
    const img = require('fs').createReadStream('./engineer.jpg');
    img.pipe(res);
}).listen(9090, () => console.log("listening to 9090"));