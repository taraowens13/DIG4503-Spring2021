import MongoClient from 'mongodb';

const URL = "mongodb+srv://TaraOwens:O8X7O6lW9ftvZ3Rs@cluster0.yuzwq.mongodb.net";

class Database {
    constructor(){
          this.connection = null;
          this.database = null;
          this.collection = null;
    }

    async connect(database, collection) {
        this.connection = await MongoClient.connect(URL);
        this.database = this.connection.db(database);
        this.collection = this.database.collection(collection);
}

close() {
    if(this.collection != null) {
      this.connection.close();
    }
}

    async createOne(title, author, description) {
        if(this.collection != null) {
            let createData = {
                title: title,
                author: author,
                description: description
            };
            await this.collection.insertOne(createData);

            return createData;
        }
    }

    async readOne(){
        if (this.collection != null) {
            let findBook = { search: "not found" };
            let results = await this.collection.findOne({
                title: title,
                author: author,
                description: description
            });
            if (results != null){
                findBook = results;
            }
            return findBook;
        }
    }

    async readMany(){
        if (this.collection != null) {
            let findBooks = { search: "not found" };
            let results = await this.collection.findMany({
                title: title,
                author: author,
                description: description
            });
            if (results != null){
                findBooks = results;
            }
            return findBooks;
        }
    }

    async updateOne(ISBN, title, author, description){
        if(this.collection != null) {
            const result = await this.collection.updateOne({"ISBN": ISBN}, {$set: {"title": title, "author": author, "description": description}});
            return {"title": title, "author": author, "description": description};
        } else {
            return "could not be updated";
        }
    }

    async deleteOne(ISBN){
        if(this.collection != null) {
            const result = await this.collection.deleteOne({"ISBN": ISBN});
            return {"deleted": result.deletedCount};
        } else {
            return {"deleted": 0};
        }
    }
}

export default Database;

