/* eslint-disable*/
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
const PORT = app.get('port');

if (process.env.NODE_ENV === "development") {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
} else if (process.env.NODE_ENV === "production") {
    app.use(express.errorHandler());
}

app.enable('case sensitive routing');

app.use(express.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    console.log('This middleware always run!');
    console.log(req.query);
    next();
});

app.get('/api/:id/:name/:city', (req, res) => {
    console.log(req.params);
    res.end('/api/:id/:name/:city');
});

app.get('/posts', (req, res) => {
    let data = [{
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam ostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
        }
    ];
    res.json(200, data);
});

app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    const html = `
    <!DOCTYPE html>
    <html>
    <body>
    <form action="/product" method="post">
      <input type="text" name="title"><br>
      <input type="submit" value="Submit">
    </form>   
    </body>
    </html>`;
    res.send(html);
});

app.use('/product', (req, res, next) => {
    console.log(req.body); // { title: 'book' }
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>');
});

app.listen(PORT, () => {
    console.log('Your Server is running on ', PORT);
});