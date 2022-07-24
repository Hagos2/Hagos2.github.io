// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     console.log(req.url);
//     const url = req.url;


//     if (url === '/') {
//         fs.createReadStream('index.html').pipe(res);
//     } else if (url === '/signup' && req.method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//             body.push(chunk);
//         });

//         req.on('end', () => {
//             const postData = Buffer.concat(body).toString();
//             console.log(postData);
//             const postDataArr = postData.split('&'); //[firstname=john, lastname=Doe]
//             const firstNameArr = postDataArr[0].split('='); // [firstname, john]
//             const lastnameArr = postDataArr[1].split('='); //[lastname, Doe]

//             if (firstNameArr[0] === 'firstname' && firstNameArr[1] === 'john' && lastnameArr[0] === 'lastname' && lastnameArr[1] === 'smith') {
//                 res.end(`${firstNameArr[1]} ${lastnameArr[1]} already exists! Please try another one!`);
//             } else {
//                 res.end('Signup Successfully');
//             }
//         });
//     } else {
//         res.writeHead(404);
//         res.end('404 Page Not Found');
//     }



// }).listen(3000, () => console.log('listening to 3000'));


const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    console.log(req.url);
    const url = req.url;

    if(url === '/') {
        fs.createReadStream('index.html').pipe(res);
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
            fs.writeFile('message.txt', `${firstNameArr[1]}=${lastnameArr[1]}`, (error)=>{
                if(error) res.end('Try later...');
                else res.end('Sign up successfully');
            });
           
        });
    } 

}).listen(3000, ()=> console.log('listening to 3000'));
























