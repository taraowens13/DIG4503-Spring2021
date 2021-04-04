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

    async createOne(firstName, lastName, favColor) {
        if(this.collection != null) {
            let addData = {
                firstName: firstName,
                lastName: lastName,
                favoriteColor: favColor,
            };
            await this.collection.insertOne(addData);

            return addData;
        }
    }

    async readOne(person){
        if (this.collection != null) {
            let findData = { search: "not found" };
            let results = await this.collection.findOne({
                firstName: person,
            });
            if (results != null){
                findData = results;
            }
            return findData;
        }
    }

    close() {
        if(this.collection != null) {
          this.connection.close();
        }
      }
}
