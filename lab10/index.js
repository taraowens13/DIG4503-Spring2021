import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

const d = new Database();

d.connect();

App.use(Express.json());

App.put("/people/create", (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.LastName;
    let favColor = req.body.favoriteColor;
        
    d.createOne(firstName, lastName, favColor).then((response) => res.json(response));

});

App.get("/people/:person", (req, res) => {
    let search = req.params.person;

    d.readOne(search).then((response) => res.json(response));
});

App.listen(port, () => {
    console.log("Server running!");
});
