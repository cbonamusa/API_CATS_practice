const Cat = require('./cats.schema');

const resp = (element, res, status, errMessage) => {
    if (element == null) {
        return res.status(status).json({error: errMessage });
    }
    res.status(200).json({ results: element });
}

let CatsControllers = {
    resp: (element, res, status, errMessage) => {
        if (element == null) {
            return res.status(status).json({error: errMessage });
        }
        res.status(200).json({ results: element });
    },

    getCats: async (request, response) => {
        try {
            const cats = await Cat.find().lean().exec();
            response.status(200).json({results: cats});
        } catch(e) {
            console.error(e);
            response.status(500).end();
        }
    },

    addOneCat: async (request, response) => {
        try {
            const cats = await Cat.create(request.body);
            response.status(200).json({results: cats});
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },
    getOneCat: async (request, response) => {
        try {
            const cat = await Cat.findOne( {_id: request.params.id}).lean().exec();
            this.resp(cat, response,  404, `Cat ID: ${request.params.id} ,not found, couldn't get`);
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },
    removeOneCat: async (request, response) => {
        try {
            const cat = await Cat.findOneAndRemove({ _id: request.params.id }).lean().exec();
            this.resp(cat, response, 404, `Cat ID: ${request.params.id} ,not found, coudn't remove`);
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },
    updateOneCat: async (request, response) => {
        try {
            const cat = await Cat.updateOne(
                { _id: request.params.id },
                request.body,
                { new: true }
                ).lean().exec();
            this.resp(cat, response, 404, `Cat ID: ${request.params.id} ,not found, couldn't Update`);
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    }
}



module.exports = {
    CatsControllers
}