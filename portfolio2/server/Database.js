import MongoClient from 'mongodb';

const URL = "mongodb+srv://TaraOwens:O8X7O6lW9ftvZ3Rs@cluster0.yuzwq.mongodb.net";

export default class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect(database,collection) {
        this.connection = await MongoClient.connect(URL);
        this.database = this.connection.db(database);
        this.collection = this.database.collection(collection);
    }

    close() {
        if(this.connection != null) {
            this.connection.close();
        }
    }

    async create(document) {
        let createdResult = null;

        if(this.collection != null) {
            createdResult = await this.collection.insertOne(document);
        }

        return createdResult;
    }

    async readOne(query) {
        let foundDocument = null;

        if(this.collection != null){
            foundDocument = await this.collection.findOne(query);
        }

        return foundDocument;
    }

    async readMany(query) {
        let foundDocuments = null;

        if(this.collection != null) {
            foundDocuments = await this.collection.find(query).toArray();
        }

        return foundDocuments;
    }

    async update(query, update) {
        let updatedResult = null;

        if(this.collection != null){
            updatedResult = await this.collection.updateMany(query, {$set:update});
        }

        return updatedResult;
    }

    async delete(query) {
        let deletedResult = null;

        if(this.collection != null) {
            deletedResult = await this.collection.deleteMany(query);
        }

        return deletedResult;
    }
}