const mongoose = require('mongoose');
const configuration = require('./config/index');

const connect = () => {
    return mongoose.connect(configuration.mongourl(), {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    });
};

module.exports = {
    connect,
}