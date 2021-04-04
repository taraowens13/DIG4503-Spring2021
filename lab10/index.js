import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

const d = new Database();

d.connect();

App.use(Express.json());

App.put("/people/create", (req, res) => {
    let sendData = {
        firstName: req.body.firstName,
        LastName: req.body.LastName,
        favoriteColor: req.body.favoriteColor,
        };
        
    d.createOne(sendData);

    res.json(sendData);
    console.log(passData);
});

App.get("/people/:person", (req, res) => {
    let person = req.params.person;

    d.readOne(person);
    
    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});
