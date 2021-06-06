const Cat = require('./cats.schema');

const getCats = async (request, response) => {
    try {
        const cats = await Cat.find().lean().exec();
        response.status(200).json({results: cats});
    } catch(e) {
        console.error(e);
        response.status(500).end();
    }
}

const addOneCat = async (request, response) => {
    try {
        const cat = await Cat.create(request.body);
        response.status(200).json({results: cat});
    } catch(e) {
        console.error(e);
        response.status(400).end();
    }
}

module.exports = {
    getCats,
    addOneCat
}