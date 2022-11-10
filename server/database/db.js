const Cocktails = [

  {

    name: 'Mojito',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668080015/CocktailPictures/Mojito_mcrftg.jpg',
    spirits: ['rum', 'white rum'],
    dominant_flavours: ['mint'],
    type: 'punch',
    flavour_notes: ['refreshing', 'zesty', 'sour', 'sweet', 'minty','bubbly'],
    preparation: 'built & stirred',
    recipe: {
      sour: '25 ml lime juice',
      sweet: '20 ml simple syrup',
      strong: '50 ml rum',
      weak: 'soda water top up',
      garnish: 'mint sprig'
    },
    glass: 'collins',
    description: 'One of the very first cocktails to ever be made, a refreshing mix of zesty lime and sweet rum with a touch of mint!'


  },
  {
    name: 'Old Fashioned',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668091973/CocktailPictures/Whiskey_Old_Fashioned1_gip1hn.jpg',
    spirits: ['bourbon', 'rye', 'aged spirit'],
    dominant_flavours: ['orange', 'whiskey'],
    type: 'classic cocktail',
    flavour_notes: ['sweet', 'zesty', 'bitter', 'strong'],
    preparation: 'built & stirred',
    recipe: {
      sour: '',
      sweet: '1 cube or 15 ml simple syrup',
      strong: '60 ml bourbon or rye whiskey',
      weak: 'water',
      garnish: 'orange zest and cherry'
    },
    glass: 'rocks glass',
    description: 'The most classic of the classics, simple yet intricate, strong yet sweet and indulgent.'

  },
  {
    name: 'Cosmopolitan',
    image_path: 'https://res.cloudinary.com/dpsujem4q/image/upload/v1668092400/CocktailPictures/Cosmopolitan-Cocktail-RC_hbhvvv.jpg',
    spirits: ['lemon vodka', 'Cointreau', 'triple sec'],
    dominant_flavours: ['lemon', 'lime', 'orange'],
    type: 'martini',
    flavour_notes: ['zesty', 'tart', 'refreshing', 'sour', 'sweet'],
    preparation: 'shaken',
    recipe: {
      sour: '25 ml lime juice',
      sweet: '2 ml simple syrup',
      strong: '50 ml lemon vodka and 20 ml Cointreau or triple sec',
      weak: '15 ml cranberry juice',
      garnish: 'flamed orange zest'
    },
    glass: 'martini glass',
    description: 'A tart cocktail with a beautifully inviting pink hue, strong but also fun to drink, really zesty and fresh'
  },
  {
    name: 'Classic Daiquiri',
    spirits: ['rum', 'dark rum'],
    dominant_flavours: ['lime', 'rum'],
    type: 'daiquiri',
    flavour_notes: ['sour', 'sweet'],
    preparation: 'shaken',
    recipe: {
      sour: '25 ml lime juice',
      sweet: '20 ml simple syrup',
      strong: '60 ml dark rum',
      weak: '',
      garnish: 'lime wheel or zest'
    },
    glass: 'martini glass',

  }

]