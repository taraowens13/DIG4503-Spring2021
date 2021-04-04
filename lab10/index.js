import Express from 'express';
import Database from './Database.js';
import Axios from 'axios';

const App = Express();
const port = 45030;

App.use(Express.json());

const d = new Database();

App.put("/people/create", (req, res) => {
    let sendData = {
        firstName: req.body.firstName,
        LastName: req.body.LastName,
        favoriteColor: req.body.favoriteColor,
        };
        
    res.json(sendData); 
    d.createOne(person);
});

App.get("/people/:person", (req, res) => {
    let person = req.params.person;

    d.readOne(person);

    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});
