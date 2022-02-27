const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://evgeniy:okByNvKWpIOHJgrc@abiturcluster.fu9aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(client => {
            console.log('connected!');
            callback(client);
        }).catch(err => {
            console.log(err);
        });
}

module.exports = mongoConnect;