import MongoClient from 'mongodb';

const URL = "mongodb+srv://TaraOwens:O8X7O6lW9ftvZ3Rs@cluster0.yuzwq.mongodb.net";

export default class Database {
    constructor(){
          this.connection = null;
          this.database = null;
          this.collection = null;
    }

    async connect() {
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        this.database = this.connection.db("lab10");
        this.collection = this.database.collection("people");
}

    async createOne(newPerson) {
        if(this.collection != null) {
            return await this.collection.insertOne(newPerson);
        }
    }

    async readOne(person){
        if (this.collection != null) {
            this.collection.findOne({
                firstName: person,
            });
        }
    }

    close() {
        if(this.collection != null) {
          this.connection.close();
        }
      }
}
