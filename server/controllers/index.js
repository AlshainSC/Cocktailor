'use strict';

const db = require('../models');

exports.getAllCocktails = async (_, res) =>  {
  try {
    const allCocktails = await db.cocktails.find();
    res.send(allCocktails);
    res.status(200);
  } catch (e) {
    res.status(500);
    console.log(e);
  }
};
exports.postOneCocktail = async (req, res) => {
  try {
    const newCocktail = new db.cocktails({
      name: req.body.name,
      image_path: req.body.image_path,
      spirits: [...req.body.spirits],
      dominant_flavours: [...req.body.dominant_flavours],
      type: req.body.type,
      flavour_notes: [... req.body.flavour_notes],
      preparation: req.body.preparation,
      recipe: {
        sour: req.body.recipe.sour,
        sweet: req.body.recipe.sweet,
        strong: req.body.recipe.strong,
        weak: req.body.recipe.weak,
        garnish: req.body.recipe.garnish
      },
      glass: req.body.glass,
      description: req.body.description
    });
    console.log('You added the cocktail:' + newCocktail);
    await newCocktail.save();
    res.status(201);
    res.send(newCocktail);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};



