const { Router } = require('express');
const catsControllers = require('./cats.controllers');

const cats = Router();

cats.get("/", catsControllers.getCats);
cats.post("/", catsControllers.addOneCat);

cats.get("/:cat", catsControllers.getOneCat);
cats.delete("/:cat", catsControllers.removeOneCat);
cats.put("/:cat", catsControllers.updateOneCat);



module.exports = cats;