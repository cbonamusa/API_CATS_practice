const CenterSchema = require('./centers.schema');

let CenterController = {
    findOne: async (request,response) => {
        try {
            const center = await CenterSchema.find({centerName: request.params.centerName}).lean().exec();
            response.status(200).json({ results: center });       
         } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },
    getAllCenters: async (request,response) => {
        try {
            const center = await CenterSchema.find().exec();
            response.status(200).json({ results: center });       
         } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },
    addOneCenter: async (request,response) => {
        try {
            const newCenter = await CenterSchema.create(request.body);
            response.status(200).json({results: newCenter});
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },
    updateOneCenter: async (request,response) => {
        try {
            const updateCenter = await CenterSchema.updateOne(
                { _id: request.params.id },
                request.body,
                { new: true }
                ).lean().exec();
            response.status(200).json({results: updateCenter});
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },
    deleteCenter: async (request, response) => {
        try {
            const deleteCenter = await CenterSchema.findOneAndRemove({centerName: request.params.centerName}).lean().exec();
            response.status(200).json({results: deleteCenter});
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },
    getCatsFromCenter: async (request, response) => {
        try {
            const getCats = await CenterSchema.find({centerName: request.params.centerName}).populate('cats');
            response.status(200).json({results: getCats});
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    }
}

module.exports = {
    CenterController
}