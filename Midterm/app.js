/*eslint-disable*/

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.urlencoded());

//place code below
app.get('/', (req, res, next) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">

        <body>
            <form action="signup" method="post">
                firstname: <input name="firstname" /> <br/>
                lastname: <input  name="lastname" />
                <button>Sign up</button>
            </form>
        </body>
        </html>`
    );
});

app.post('/signup', (req, res, next) => {
    if(req.body.firstname && req.body.lastname) {
        //save to file

        fs.appendFile(path.join(__dirname, 'database.txt'), `,${req.body.firstname}=${req.body.lastname}`, (err) => {
            if(err){
                throw new Error('saved failed');
            } else {
                res.send('saved successfully');
            }
        })

    } else {
        res.send(`
        <!DOCTYPE html>
        <html lang="en">

        <body>
            <form action="signup" method="post">
                firstname: <input name="firstname" /> <br/>
                lastname: <input  name="lastname" />
                <button>Sign up</button>
            </form>
            <p>Firstname and lastname are required</p>
        </body>
        </html>
        `);
    }
});

app.use((req, res, next) => {
    res.status(404).send("URL doesn't exists, try again");
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

app.listen(3000);