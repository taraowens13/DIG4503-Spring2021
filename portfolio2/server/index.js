import Express from 'express';
import CORS from 'cors';

const App = Exress();
const port = 45030;

App.use(CORS());
App.use(Express.json());

