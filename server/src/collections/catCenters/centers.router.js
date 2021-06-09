const { Router } = require('express');
const centersControllers = require('./centers.controllers');
const catsControllers = require('../cats/cats.controllers');


const centers = Router();

centers.get("/", centersControllers.CenterController.getAllCenters);
centers.post("/", centersControllers.CenterController.addOneCenter);

centers.get("/:centerName", centersControllers.CenterController.findOne);
centers.delete("/:centerName", centersControllers.CenterController.deleteCenter);
centers.put("/:id", centersControllers.CenterController.updateOneCenter);
centers.get("/:centerName/cats", centersControllers.CenterController.getCatsFromCenter);


module.exports = centers;