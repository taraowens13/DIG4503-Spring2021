import Database from './Database.js';

const db = new Database();

async function dbFunctionality() {
    await db.connect("portfolio2", "TaraOwens");
    await db.create({exampleField: "A value!"});
    //await db.create({exampleField: "A value!"});
    //await db.create({exampleField: "A value!"});
    //await db.readMany({exampleField: "A value!"});
    //await db.update({exampleField: "A value!"}, {exampleField: "Another!"});
    await db.delete({exampleField: "A value!"});
    db.close();
}

dbFunctionality();

