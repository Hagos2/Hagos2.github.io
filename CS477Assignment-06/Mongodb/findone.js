const {MongoClient,objectId }= require('mongodb');
MongoClient.connect('mongodb://127.0.0.1:27017')
.then(client=>{
    client.db('shopping').collection('books')
    .findOne({_id:'62e6ef1688a82cd051cc2a6a'})
    .then(bok=>{
        console.log(bok);
        client.close();
    })
})