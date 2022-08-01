const mongoClient=require('mongodb').MongoClient;
mongoClient.connect('mongodb://localhost:27017')
.then(client=>{
    console.log('connected....');
const db=client.db('shopping');
db.collection('books').find().toArray()
.then(boks=>{
    console.log(boks);
    client.close();
});
}).catch(error=>console.log(error));