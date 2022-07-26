const http = require('http');
const fs = require('fs');
http.createServer((req, res)=>{
    console.log(req.url);
    const url = req.url;
    if(url === '/') {
        fs.createReadStream('signup.html').pipe(res);
    }else if(url === '/success' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            const postData = Buffer.concat(body).toString();
            console.log(postData);
const postDataArr = postData.split('&');
const firstNameArr = postDataArr[0].split('=');
const lastnameArr = postDataArr[1].split('=');
fs.writeFile('database.txt', `${firstNameArr[1]}=${lastnameArr[1]}`,
(error)=>{
    if(error) res.end('Try later...');
    else res.end('Sign up successfully');
});
}); }
}).listen(8080, ()=> console.log('listening to 8080'));