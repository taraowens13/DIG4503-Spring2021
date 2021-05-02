import Express from 'express';
import Database from './Database.js';
import CORS from 'cors';

const App = Express();
const port = 45030;

const d = new Database();

d.connect();

App.use(CORS());
App.use(Express.json());

App.put("/movies/:id", (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const year = req.body.year;
    const runtime = req.body.runtime;

    d.createOne(id, title, year, runtime).then((response) => res.json(response));
});

App.get("/movies/:id", (req, res) => {
    const search = req.params.title;

    d.readOne(search).then((response) => res.json(response));
});

App.patch("/movies/:id", (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const year = req.body.year;
    const runtime = req.body.runtime;

    const result = d.updateOne(id, title, year, runtime);

    res.json(result);
});

App.delete("/movies/:id", (req, res) => {
    const id = req.params.id;
    const result = d.deleteOne(id);

    res.json(result);
});

App.listen(port, () => {
    console.log("Server is running!");
});

