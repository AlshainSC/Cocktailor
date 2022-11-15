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
  },
  {
    name: 'Basil Smash',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668539349/CocktailPictures/BasilSmash_opeyjw.jpg',
    spirits: ['Gin'],
    dominant_flavours: ['lemon', 'basil', 'gin'],
    type: 'Sour',
    flavour_notes: ['sour', 'sweet', 'lemon', 'basil', 'gin'],
    preparation: 'Shaken',
    recipe: {
      sour: '25 ml Lemon Juice',
      sweet: '20 ml Basil Syrup',
      strong: '50 ml Gin',
      weak: 'N/A',
      garnish: 'Lemon Zest & Basil Leaf'
    },
    glass: 'Rocks Glass',
    description: 'The new kid on the block, hugely popular cocktail made of simple ingredients, basil and lemon are an amazing combination!'
  },
  {
    name: 'Sweet Manhattan',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668541412/CocktailPictures/SweetManhattan_ka98hr.jpg',
    spirits: ['Whiskey', 'Sweet Vermouth', 'Bitters'],
    dominant_flavours: ['whiskey', 'vermouth', 'bitters'],
    type: 'Martini Cocktail',
    flavour_notes: ['strong', 'tart', 'vermouth', 'whiskey'],
    preparation: 'Stirred',
    recipe: {
      sour: 'N/A',
      sweet: '15 ml Sweet Vermouth',
      strong: '50 ml Whiskey',
      weak: 'Bitters',
      garnish: 'Orange Zest and Cherry'
    },
    glass: 'Coupette',
    description: 'Another traditional cocktail, first served in New York, strong a little bit bitter and oh so delicious.'
  },
  {
    name: 'Pornstar Martini',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668542128/CocktailPictures/PornstarMartini_coosul.jpg',
    spirits: ['Vanilla Vodka', 'Passoa'],
    dominant_flavours: ['Passion Fruit', 'Vanilla'],
    type: 'Martini Cocktail',
    flavour_notes: ['fruity', 'Passion Fruit', 'delicious', 'vanilla'],
    preparation: 'Shaken',
    recipe: {
      sour: '25 ml Lime Juice',
      sweet: '10 ml Vanilla Syrup',
      strong: '50 ml Vanilla Vodka',
      weak: '50ml Passion Fruit Syrup',
      garnish: 'Half a Passion Fruit and a Shot Glass of Champagne'
    },
    glass: 'Coupette',
    description: 'The guilty pleasure amongst bar-goers, bright orange, tropical and easy to enjoy, one of my favourites.'
  },
  {
    name: 'Pina Colada',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668544485/CocktailPictures/PinaColada_ukmnrg.webp',
    spirits: ['Rum', 'Malibu'],
    dominant_flavours: ['Pineapple', 'Coconut'],
    type: 'Punch',
    flavour_notes: ['fruity', 'Pineapple', 'Creamy', 'Coconut'],
    preparation: 'Blended',
    recipe: {
      sour: '20 ml Lime Juice',
      sweet: '20 ml Simple Syrup',
      strong: '50 ml Rum',
      weak: '50ml Pineapple Juice & 20ml Pineapple Puree',
      garnish: 'Pineapple Slice and Cherry'
    },
    glass: 'Hurricane',
    description: 'The ultimate tropical cocktail, enjoyed on beaches and cruises all around the world, creamy and satisfying'
  },
  {
    name: 'Aviation',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668545188/CocktailPictures/Aviation_scfg3i.jpg',
    spirits: ['Gin', 'Maraschino Liquor', 'Creme de Violette'],
    dominant_flavours: ['Gin', 'Floral'],
    type: 'Martini Cocktail',
    flavour_notes: ['Gin', 'Lemon', 'Floral'],
    preparation: 'Shaken & Strained',
    recipe: {
      sour: '20 ml Lemon Juice',
      sweet: '2 ml Simple Syrup',
      strong: '50 ml Gin & 5ml Creme de Violette',
      weak: 'N/A',
      garnish: 'Cherry'
    },
    glass: 'Martini Glass',
    description: 'Alluring cocktail with a violette hue with intricate floral notes and a strong finish'
  },
  {
    name: 'New York Sour',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668546254/CocktailPictures/NewYorkSour_zo0suw.jpg',
    spirits: ['Whiskey', 'Red Wine'],
    dominant_flavours: ['Whiskey', 'Red Wine'],
    type: 'Sour',
    flavour_notes: ['Whiskey', 'Lemon', 'Red Wine'],
    preparation: 'Shaken & Strained',
    recipe: {
      sour: '25ml Lemon Juice',
      sweet: '20ml Simple Syrup',
      strong: '50ml Whiskey & Float Red Wine',
      weak: 'Egg White',
      garnish: 'No Garnish'
    },
    glass: 'Rocks Glass',
    description: 'A variation on the whiskey sour, looks gorgeous in the glass and very fun to drink, zesty and also a bit fruity'
  },
  {
    name: 'Cuba Libre',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668546660/CocktailPictures/CubaLibre_xxi9sy.jpg',
    spirits: ['Rum'],
    dominant_flavours: ['Rum', 'Coke'],
    type: 'Longdrink',
    flavour_notes: ['Rum', 'Coca Cola', 'Lime'],
    preparation: 'Built',
    recipe: {
      sour: '25ml Lime Juice',
      sweet: '15ml Simple Syrup',
      strong: '50ml Rum',
      weak: 'Coca Cola',
      garnish: 'Lime Wheel'
    },
    glass: 'Highball',
    description: 'Simple yet delicious and easy to make at home, the timeless combination of rum and coke with a bit of lime!'
  },
  {
    name: 'Negroni',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668546999/CocktailPictures/Negroni_urtj7x.webp',
    spirits: ['Gin', 'Sweet Vermouth', 'Campari'],
    dominant_flavours: ['Gin', 'Campari'],
    type: 'Classic Cocktail',
    flavour_notes: ['Gin', 'Bitter', 'Campari'],
    preparation: 'Stirred',
    recipe: {
      sour: 'N/A',
      sweet: 'N/A',
      strong: '35ml Gin, 35ml Campari, 35ml Sweet Vermouth',
      weak: 'Water',
      garnish: 'Orange Zest'
    },
    glass: 'Rocks Glass',
    description: 'The italian maestro, an unforgettable combination of sweet, bitter and strong.'
  },
  {
    name: 'Vodka Martini',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668547296/CocktailPictures/VodkaMartini_kz8c1w.jpg',
    spirits: ['Vodka', 'Dry Vermouth'],
    dominant_flavours: ['Gin', 'Dry Vermouth'],
    type: 'Martini Cocktail',
    flavour_notes: ['Gin', 'Strong', 'Zesty'],
    preparation: 'Stirred',
    recipe: {
      sour: 'N/A',
      sweet: 'N/A',
      strong: '60ml Vodka 10ml Dry Vermouth',
      weak: 'Water',
      garnish: 'Lemon Zest'
    },
    glass: 'Martini Glass',
    description: 'The most iconic of cocktails, a simple mix of vodka and vermouth makes for a super strong drink with a lot of history.'
  },
  {
    name: 'Espresso Martini',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668547574/CocktailPictures/EspressoMartini_j6gaqe.jpg',
    spirits: ['Vodka', 'Kahlua'],
    dominant_flavours: ['Vodka', 'Coffee'],
    type: 'Martini Cocktail',
    flavour_notes: ['Coffee', 'Vodka', 'Creamy'],
    preparation: 'Shaken & Strained',
    recipe: {
      sour: 'N/A',
      sweet: '20ml Vanilla Syrup',
      strong: '50ml Vodka & 25ml Kahlua',
      weak: '50ml Coffee',
      garnish: '3 Coffee Beans'
    },
    glass: 'Martini Glass',
    description: 'You HAVE to try this drink, frothy, full-bodied, sweet and soooooo good!'
  },
  {
    name: 'Sazerac',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668547812/CocktailPictures/Sazerac_ofwhub.jpg',
    spirits: ['Whiskey', 'Cognac', 'Bitters', 'Absinthe'],
    dominant_flavours: ['Whiskey', 'Cognac'],
    type: 'Classic Cocktail',
    flavour_notes: ['Whiskey', 'Cognac', 'Bitters'],
    preparation: 'Stirred',
    recipe: {
      sour: 'N/A',
      sweet: '10ml Sugar Syrup',
      strong: '40ml Whiskey & 40ml Cognac, 3 Dashes of Peychauds Bitters',
      weak: 'Water',
      garnish: 'Spritz of Absinthe and Lemon Zest'
    },
    glass: 'Rocks Glass',
    description: 'Originally from New Orleans this Mardi Grass staple has been around for a long time and is still kicking it with the best.'
  },
  {
    name: 'Sidecar',
    image_path:'https://res.cloudinary.com/dpsujem4q/image/upload/v1668548079/CocktailPictures/sidecar_q0pehj.webp',
    spirits: ['Cognac', 'Cointreau'],
    dominant_flavours: ['Orange', 'Cognac'],
    type: 'Martini Cocktail',
    flavour_notes: ['Cognac', 'Orange'],
    preparation: 'Shaken & Strained',
    recipe: {
      sour: '25ml Lemon Juice',
      sweet: '5ml Simple Syrup',
      strong: '50ml Cognac & 25ml Cointreau',
      weak: 'N/A',
      garnish: 'Sugar Rim'
    },
    glass: 'Martini Glass',
    description: 'A variation on the brandy crusta, refreshing and zesty, lovely sour note and warm finish.'
  }
]