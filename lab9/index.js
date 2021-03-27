import MongoClient from 'mongodb';

const URL = "mongodb+srv://TaraOwens:O8X7O6lW9ftvZ3Rs@cluster0.yuzwq.mongodb.net";

MongoClient.connect(URL, { useUnifiedTopology: true })
    .then(connection => {
        let database = connection.db("sample_airbnb");

        let collection = database.collection("listingsAndReviews");
        
        let cursor = collection.find({
            beds: { $gte: 5 },
            price: { $lte: 200 },
            "review_scores.review_scores_rating": { $gte: 99 },
        });

        cursor.forEach(document => {
                console.log(document);
            });
    })
    .catch(error => {
        console.log("Error: " + error);
    });
