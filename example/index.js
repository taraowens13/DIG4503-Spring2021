import Express from 'express';

const App = Express();
const port = 45030;

App.get( "/", (req, res) => {
    res.json({status: "works!"});
});

App.put( "/", (req, res) => {
    res.json({status: "put!"});
});

App.patch( "/", (req, res) => {
    res.json({status: "patch!"});
});

App.delete( "/", (req, res) => {
    res.json({status: "delete!"});
});

App.delete( "/", () => {
    res.json({status: "Server running!"});
});