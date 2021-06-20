const { Router } = require('express');
const catsControllers = require('./cats.controllers');

const cats = Router();

cats.get("/", catsControllers.CatsControllers.getCats);
cats.get("/kittens", catsControllers.CatsControllers.getKittens);
cats.post("/:centerId", catsControllers.CatsControllers.addOneCatInCenter);
cats.post("/", catsControllers.CatsControllers.addOneCat);

cats.get("/:id", catsControllers.CatsControllers.getOneCat);
cats.delete("/:id", catsControllers.CatsControllers.removeOneCat);
cats.put("/:id", catsControllers.CatsControllers.updateOneCat);



module.exports = cats;