import MongoClient from 'mongodb';

const URL = "mongodb+srv://TaraOwens:O8X7O6lW9ftvZ3Rs@cluster0.yuzwq.mongodb.net"

MongoClient.connect(URL, { useUnifiedTopology: true })
.then(connection => {
    let database = connection.db();
    let collection = database.collection();
    let cursor = collection.find({year: {$gt: 2010}, rated: "R"});

    cursor.forEach(document => {
        console.log(document.title);
    }, () => {
        connection.close();
    });
})
.catch(error => {
    console.log("Error " + error);
});