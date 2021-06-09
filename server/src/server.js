const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const configuration = require('./config/index.js');
const db = require('./db');
const catsRouter = require('./collections/cats/cats.router');
const centersRouter = require('./collections/catCenters/centers.router');



app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/cats', catsRouter);
app.use('/centers', centersRouter);


const startServer = async () => {
    try {
        await db.connect();
        app.listen(configuration.port, () => { console.log(`Cats API listening on ${configuration.port}`)});
    } catch (e) {
        console.error(e);
    }
};
startServer();
