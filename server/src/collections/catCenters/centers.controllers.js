const CenterSchema = require('./centers.schema');
const CatSchema = require('../cats/cats.schema');


let CenterController = {
    findOne: async (request,response) => {
        try {
            const center = await CenterSchema.find({_id: request.params.centerId}).lean().exec();
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
           // const newCenter = await CenterSchema.create(request.body);
            const newCenter = new CenterSchema(request.body);
            const saveCenter = await newCenter.save()
            response.status(200).json({results: saveCenter});
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },
    updateOneCenter: async (request,response) => {
        try {
            const updateCenter = await CenterSchema.updateOne(
                { _id: request.params.centerId },
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
            const deleteCenter = await CenterSchema.findOneAndRemove({_id: request.params.centerId}).lean().exec();
            response.status(200).json({results: deleteCenter});
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },

    getCatsFromCenter: async (request, response) => {
        try {
            const {centerId} = request.params;
            const getCats = await CenterSchema.findById(centerId).exec();
            response.status(200).json({results: getCats});
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },
    getAllCatsFromCenter: async (request, response) => {
        try {
            const getCats = await CenterSchema.find({_id:request.params.id}).populate("cats").lean().exec();
            response.status(200).json({results: getCats});
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },
    /*
    addCatInCenter: async (request, response) => {
        try {
            const {centerId} = request.params;
            const newCat = new CatSchema(request.body);
            const center = await CenterSchema.findById(centerId);
            newCat.center = center;
            await newCat.save();
            center.cats.push(newCat);
            await center.save();
            response.status(200).json({results: newCat});
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    }, */
    addCatInCenter02: async (request, response) => {
        try {
            const catsInCenter = await CenterSchema.aggregate(
                [
                    {
                        $lookup: {
                            from: 'cat',
                            localField: "cats",
                            foreignField: "_id",
                            as: "catsInCenter"
                        }
                    },
                    { $unwind: "$catsInCenter"}
                ]
            );
            response.status(200).json({results: catsInCenter});

        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    }
}

module.exports = {
    CenterController
}