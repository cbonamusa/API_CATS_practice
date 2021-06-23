const Cat = require('./cats.schema');
const CenterSchema = require('../centers/centers.schema');


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

    getKittens:  async (request, response) => {
        try {
            const kittens = await Cat.find({
                age: { $lte: 3 } //months vs years
            }).lean().exec();
            response.status(200).json({results: kittens});
        } catch(e) {
            console.error(e);
            response.status(500).end();
            
        }
    },
    
    getCenterFromCat: async (request, response) => {
        try {
            const cats = await Cat.find({centerName: request.params.centerName}).populate('center');
            response.status(200).json({results: cats});
        } catch(e) {
            console.error(e);
            response.status(500).end();
        }
    },
    //Add one cat without center
    addOneCat: async (request, response) => {
        try {
            const newCat = await Cat.create(request.body);
            response.status(200).json({results:newCat});
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },
    /* This is the bad way but WORKS  */
    addOneCatInCenterBADWAY: async (request, response) => {
        try {
            const newCat = new Cat(request.body);
            await newCat.save();
            const center = await CenterSchema.findById({_id: request.params.centerId})
            center.cats.push(newCat);
            await center.save();
            response.status(200).json({results:newCat});
     
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },
    /* Test to better way - does not work */
    addOneCatInCenter: async (request, response) => {
        Cat.create(request.body)
        .then(newCat => {
            return CenterSchema.findOneAndUpdate({ _id: request.params.id }, {$push: {cats: newCat._id}}, { new: true });
        })
        .then(center => {
          response.status(200).json({results:center});
        })
        .catch(e => {
            console.error(e);
            response.status(400).end();
        });
    },

    getOneCat: async(request, response) => {
        try {
            const cat = await Cat.find( {_id: request.params.catId}).populate('centers').exec();
            CatsControllers.resp(cat, response,  404, `Cat ID: ${request.params.catId} ,not found, couldn't get`);
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },

    removeOneCat: async (request, response) => {
        try {
            const cat = await Cat.findOneAndRemove({ _id: request.params.catId }).lean().exec();
            CatsControllers.resp(cat, response, 404, `Cat ID: ${request.params.catId} ,not found, coudn't remove`);
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    },

    updateOneCat: async(request, response) => {
        try {
            const cat = await Cat.updateOne(
                { _id: request.params.catId },
                request.body,
                { new: true }
                ).lean().exec();
            CatsControllers.resp(cat, response, 404, `Cat ID: ${request.params.catId} ,not found, couldn't Update`);
        } catch(e) {
            console.error(e);
            response.status(400).end();
        }
    }
}



module.exports = {
    CatsControllers
}