import MongoClient from 'mongodb';

const url = ""

export default class Database {
    constructor(){
          this.connection = null;
          this.database = null;
          this.collection = null;
    }

    async connect() {
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        this.database = this.connection.db("<Database>");
        this.collection = this.database.collection("<Collection>");
}

    async createOne(person) {
        if(this.collection != null) {
            return await this.collection.insertOne(person);
        }
    }

    readOne(person){
        collection.find({"person": "not found"}).limit(100)
    }

    close() {
        if(this.collection != null) {
          this.connection.close();
        }
      }
}
