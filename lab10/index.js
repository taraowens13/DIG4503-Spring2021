import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

App.use(Express.json());

const d = new Database();

// Create
App.put("/people/:create", (req, res) => {
    // Save the request parameter.
    let person = req.params.person;

    d.createOne(person);

    // Return the name just created.
    res.json({person: person});
});

// Read
App.get("/people/:person", (req, res) => {
    // Save the request parameter.
    let person = req.params.person;

    d.readOne(person);

    // Return the default or searched-for result.
    res.json(result);
});

// Delete
App.delete("/people/:person", (req, res) => {
    // Save the request parameter.
    let person = req.params.person;
    // Return the name just deleted (regardless if it worked or not).

    d.deleteMany(person);

    res.json({person: person});
});

App.listen(port, () => {
    console.log("Server running!");
});