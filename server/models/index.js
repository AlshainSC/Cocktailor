'use strict';
const mongoose = require('mongoose');
const db ={};
(async function bootstrap () {
    try {
    await mongoose.connect('mongodb+srv://AScharpf:mitmoGitmo826@cocktails.owdv3ht.mongodb.net/?retryWrites=true&w=majority', () => {
      console.log('Connected to your database');
      db.cocktails = require('./cocktail')(mongoose);
    });
  } catch (e) {
    console.log(e.message);
  }
})();

db.mongoose = mongoose;

module.exports = db;