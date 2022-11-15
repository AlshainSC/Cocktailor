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
    flavour_notes: ['sweet', 'zesty', 'bitter', 'strong, orange, whiskey'],
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
    flavour_notes: ['zesty', 'tart', 'refreshing', 'sour', 'sweet', 'lemon', 'lime', 'orange'],
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
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668426233/CocktailPictures/Daiquiri_vypiag.jpg',
    spirits: ['rum', 'dark rum'],
    dominant_flavours: ['lime', 'rum'],
    type: 'daiquiri',
    flavour_notes: ['sour', 'sweet', 'lime', 'rum'],
    preparation: 'shaken',
    recipe: {
      sour: '25 ml lime juice',
      sweet: '20 ml simple syrup',
      strong: '60 ml dark rum',
      weak: '',
      garnish: 'lime wheel or zest'
    },
    glass: 'martini glass',
    description: 'Another classic, simple mixture of lime rum and sugar, the quintessential beach cocktail'
  },
  {
    name: 'French 75',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668426042/CocktailPictures/French75_rh018t.jpg',
    spirits: ['gin'],
    dominant_flavours: ['lemon', 'champagne'],
    type: 'champagne cocktail',
    flavour_notes: ['refreshing', 'sweet', 'zesty', 'lemon', 'champagne'],
    preparation: 'shaken & topped up',
    recipe: {
      sour: '50 ml lemon juice',
      sweet: '20 ml simple syrup',
      strong: '50 ml gin',
      weak: 'champagne top up',
      garnish: 'lemon zest'
    },
    glass: 'coupette',
    description: 'Famously named after the French 75 Field Gun, this Cocktail packs a huge punch while being deceptively sweet and refreshing '
  },
  {
    name: 'Margarita',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668446525/CocktailPictures/Margarita_dszgjg.jpg',
    spirits: ['tequila'],
    dominant_flavours: ['lime', 'tequila'],
    type: 'martina cocktail',
    flavour_notes: ['sour', 'strong', 'salty', 'refreshing'],
    preparation: 'shaken & strained',
    recipe: {
      sour: '35 ml Lime Juice',
      sweet: '2 ml Simple Syrup',
      strong: '50 ml Tequila & 25 ml Cointreau',
      weak: 'N/A',
      garnish: 'Lime Wheel or Zest'
    },
    glass: 'Coupette',
    description: 'A mexican staple, using very little sugar to make a relatively dry low-cal drink that packs a punch - perfect for a hot day'
  },
  {
    name: 'Tom Collins',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668455131/CocktailPictures/TomCollins_tgsxeg.webp',
    spirits: ['gin'],
    dominant_flavours: ['lemon', 'gin'],
    type: 'Longdrink',
    flavour_notes: ['sour', 'lemon', 'gin', 'refreshing'],
    preparation: 'Shaken & Topped Up',
    recipe: {
      sour: '25 ml Lemon Juice',
      sweet: '20 ml Simple Syrup',
      strong: '50 ml Gin',
      weak: 'Soda Top Up',
      garnish: 'Lemon Zest & Cherry'
    },
    glass: 'Highball',
    description: 'A Gin lemonade, timeless, spritzy, fun'
  },
  {
    name: 'Amaretto Sour',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668455421/CocktailPictures/AmarettoSour_hy9e88.webp',
    spirits: ['Amaretto'],
    dominant_flavours: ['lemon', 'Amaretto'],
    type: 'Sour',
    flavour_notes: ['sour', 'sweet', 'lemon', 'eggwhite', 'dessert', 'amaretto'],
    preparation: 'Shaken',
    recipe: {
      sour: '25 ml Lemon Juice',
      sweet: '20 ml Simple Syrup',
      strong: '50 ml Amaretto',
      weak: 'Eggwhite',
      garnish: 'Lemon Zest & Amarena Cherry'
    },
    glass: 'Rocks Glass',
    description: 'The Go-To for dessert cocktails, creamy yet zesty with a nice marcipan finish'
  },
  {
    name: 'Whiskey Sour',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668455848/CocktailPictures/WhiskeySour_g74fxw.webp',
    spirits: ['Whiskey'],
    dominant_flavours: ['lemon', 'Whiskey'],
    type: 'Sour',
    flavour_notes: ['sour', 'sweet', 'lemon', 'eggwhite', 'whiskey'],
    preparation: 'Shaken',
    recipe: {
      sour: '25 ml Lemon Juice',
      sweet: '20 ml Simple Syrup',
      strong: '50 ml Whiskey',
      weak: 'Eggwhite',
      garnish: 'Lemon Zest & Bitters'
    },
    glass: 'Rocks Glass',
    description: 'One of the most popular cocktails out there, simply delicious and can be had with almost any whiskey, try a peated whiskey for a bit more kick!'
  }


]