'use strict'
const router = require('express').Router();
const controllers = require('./controllers');
router.get('/', controllers.getAllCocktails);
router.post('/', controllers.postOneCocktail);
module.exports = router;