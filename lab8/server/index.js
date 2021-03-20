import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(CORS());

let names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

//Create
App.put("/people/:person", (req, res) => {
    const name = req.params.name;
    names.push(name);
    res.json({name: name});
});

//Read
App.get("/people/:person", (req, res) => {
    const name = req.params.name;
    const results = names.filter(value => value.includes(name));
    res.json({name: results});
});


//Read
App.get("/search/:name", (req, res) => {
    const name = req.params.name;
    const results = names.filter(value => value.includes(name));
    res.json({name: results});
});

App.listen(port, () => {
    console.log("The server is running");
});