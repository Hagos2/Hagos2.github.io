let _db;

async function mongoConnect(callback) {
    try{
        const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
        _db = client.db('shopping');
        callback();
    }catch(error) {
        console.log(error)
    }
}

function getDB(){
    if(_db){
        return _db;
    } else {
        throw new Error('Database connection failed');
    }
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;