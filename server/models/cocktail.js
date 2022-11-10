'use strict';
module.exports = (mongoose) => {
  const Cocktail = new mongoose.Schema({

    name: {
      type: String,
      required: true
    },

    image_path: {
      type: String,
      required: true
    },

    spirits: {
      type: [String],
      required: true
    },

    dominant_flavours: {
      type: [String],
      required: true
    },

    type: {
      type: String,
      required: true
    },

    flavour_notes: {
      type: [String],
      required: true
    },

    preparation: {
      type: String,
      required: true
    },

    recipe: {

      sour: {
        type: String,
        required: true
      },
      sweet: {
        type: String,
        required: true,
      },
      strong: {
        type: String,
        required: true
      },
      weak: {
        type: String,
        required: true
      },
      garnish: {
        type: String,
        required: true
      }
    },

    glass: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    }
  });
  return mongoose.model('Cocktail', Cocktail);
};





