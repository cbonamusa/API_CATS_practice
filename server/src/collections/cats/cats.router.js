const { Router } = require('express');
const catsControllers = require('./cats.controllers');

const cats = Router();

cats.get("/", catsControllers.CatsControllers.getCats);
cats.get("/kittens", catsControllers.CatsControllers.getKittens);
// cats.post("/:centerId", catsControllers.CatsControllers.addOneCatInCenter);
cats.post("/:centerId", catsControllers.CatsControllers.addOneCatInCenterBADWAY);
cats.post("/", catsControllers.CatsControllers.addOneCat);
cats.get("/:catId", catsControllers.CatsControllers.getOneCat);
cats.delete("/:catId", catsControllers.CatsControllers.removeOneCat);
cats.put("/:catId", catsControllers.CatsControllers.updateOneCat);



module.exports = cats;