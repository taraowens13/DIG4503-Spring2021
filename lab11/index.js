import Express from 'express';
import Database from 'Database.js'

const App = Express();
const port = 45030;

App.use(Express.json());

const db = new Database();
db.connect("portfolio2", "TaraOwens");

App.put("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const result = await db.createOne(ISBN, title, author, description);

    res.json(result);
});

App.get("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;

    let get = req.params.ISBN;

    db.readOne(get).then((response) => res.json(response));
    res.json(result);
});

App.post("/books/search", (req, res) => {
    const ISBN = req.params.ISBN;
    res.json({
        URLParameters: req.query
    })
});

App.patch("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;
    
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const result = await db.updateOne(ISBN, title, author, description);

    res.json(result);
});

App.delete("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;

    const result = db.deleteOne(ISBN);

    res.json(result);
});

App.listen(port);