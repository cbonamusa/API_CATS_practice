const { Router } = require('express');
const centersControllers = require('./centers.controllers');
const catsControllers = require('../cats/cats.controllers');


const centers = Router();

centers.get("/", centersControllers.CenterController.getAllCenters);
centers.post("/", centersControllers.CenterController.addOneCenter);

centers.get("/:centerId", centersControllers.CenterController.findOne);
centers.delete("/:centerId", centersControllers.CenterController.deleteCenter);
centers.put("/:centerId", centersControllers.CenterController.updateOneCenter);
//centers.get("/:centerId/cats", centersControllers.CenterController.getCatsFromCenter);
centers.get("/:centerId/cats", centersControllers.CenterController.getAllCatsFromCenter);

centers.post("/:centerId/cats", centersControllers.CenterController.addCatInCenter);



module.exports = centers;