import MongoClient from 'mongodb';

const URL = "mongodb+srv://TaraOwens:O8X7O6lW9ftvZ3Rs@cluster0.yuzwq.mongodb.net";

export default class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect() {
        this.connection = await MongoClient.connect(URL);
        this.database = this.connection.db("portfolio2");
        this.collection = this.database.collection("TaraOwens");
    }

    close() {
        if(this.connection != null) {
            this.connection.close();
        }
    }

    async createOne(title, year, runtime) {
        if(this.collection != null) {
            let addData = {
                title: title,
                year: year,
                runtime: runtime,
            };
            await this.collection.insertOne(addData);

            return addData;
        }
    }

    async readOne(title){
        if (this.collection != null) {
            let findData = { search: "not found" };
            let results = await this.collection.findOne({
                title: title,
            });
            if (results != null){
                findData = results;
            }
            return findData;
        }
    }

    async readMany(title) {
        if (this.collection != null) {
            let findMovie = { search: "not found" };
            let results = await this.collection.findMany({
                title: title
            });
            if (results != null){
                findMovie = results;
            }
            return findMovie;
        }
    }

    async updateOne(id, title, year, runtime) {
        if(this.collection != null) {
            const result = await this.collection.updateOne({"id": id}, {$set: {"title": title, "year": year, "runtime": runtime}});
            return {"title": title, "year": year, "runtime": runtime};
        } else {
            return "could not be updated";
        }
    }

    async deleteOne(id) {
        if(this.collection != null) {
            const result = await this.collection.deleteOne({"id": id});
            return {"deleted": result.deletedCount};
        } else {
            return {"deleted": 0};
        }
    }
}