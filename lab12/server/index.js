import Express from 'express';
import CORS from 'cors';
import Database from '../Database';

const App = Express();
const port = 45030;

App.use(CORS());
App.use(Express.json());

const db = new Database();
db.connect("lab11", "TaraOwens");

// PUT
App.put("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const result = await db.createOne(ISBN, title, author, description);

    res.json(result);
});

// GET
App.get("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;

    let get = req.params.ISBN;

    db.readOne(get).then((response) => res.json(response));
    res.json(result);
});

// DELETE
App.delete("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;

    const result = db.deleteOne(ISBN);

    res.json(result);
});

App.listen(port, () =>{
    console.log("Server is running!");
});