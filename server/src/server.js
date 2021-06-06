const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const configuration = require('./config/index');
const db = require('./db');

const catControllers = require('./collections/cats/cats.controllers');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get("/cats", catControllers.getCats);
app.post("/cats", catControllers.addOneCat);

const startServer = async () => {
    try {
        await db.connect();
        app.listen(configuration.port, () => { console.log(`Cats API listening on ${configuration.port}`)});
    } catch (e) {
        console.error(e);
    }
};
startServer();
