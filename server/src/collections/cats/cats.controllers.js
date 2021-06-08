const Cat = require('./cats.schema');

const resp = (element, res, status, errMessage) => {
    if (element == null) {
        return res.status(status).json({error: errMessage });
    }
    res.status(200).json({ results: element });
}

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
        const cats = await Cat.create(request.body);
        response.status(200).json({results: cats});
    } catch(e) {
        console.error(e);
        response.status(400).end();
    }
}

const getOneCat = async (request, response) => {
    try {
        const cat = await Cat.findOne( {_id: request.params.id}).lean().exec();
        resp(cat, response,  404, `Cat ID: ${request.params.id} ,not found, couldn't get`);
    } catch(e) {
        console.error(e);
        response.status(400).end();
    }
}

const removeOneCat = async (request, response) => {
    try {
        const cat = await Cat.findOneAndRemove({ _id: request.params.id }).lean().exec();
        resp(cat, response, 404, `Cat ID: ${request.params.id} ,not found, coudn't remove`);
    } catch(e) {
        console.error(e);
        response.status(400).end();
    }
}

const updateOneCat = async (request, response) => {
    try {
        const cat = await Cat.updateOne(
            { _id: request.params.id },
            request.body,
            { new: true }
            ).lean().exec();
        resp(cat, response, 404, `Cat ID: ${request.params.id} ,not found, couldn't Update`);
    } catch(e) {
        console.error(e);
        response.status(400).end();
    }
}

module.exports = {
    getCats,
    addOneCat,
    getOneCat,
    removeOneCat,
    updateOneCat
}