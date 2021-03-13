import Express from 'express'

const App = Express();
const port = 45030;

const arrayExample = [
    "Hello!",
    "Hey!",
    "Howdy!"
];

App.get("/collection/:resource", (req, res) => {

    let result = "Not found!";

    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});
