const mongoClient = require('mongodb').MongoClient;

let _db;
function mongoConnect(callback){
     mongoClient.connect('mongodb://127.0.0.1:27017')
    .then(client => {
        _db = client.db('library');
       callback();    
    }).catch(err => console.log(err))
}

function getDB(){
    if(_db){
        return _db;
    } else {
        throw new Error('Database connection failed')
    }
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
