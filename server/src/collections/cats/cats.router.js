const { Router } = require('express');
const catsControllers = require('./cats.controllers');

const cats = Router();

cats.get("/", catsControllers.getCats);
cats.post("/", catsControllers.addOneCat);

cats.get("/:id", catsControllers.getOneCat);
cats.delete("/:id", catsControllers.removeOneCat);
cats.put("/:id", catsControllers.updateOneCat);



module.exports = cats;