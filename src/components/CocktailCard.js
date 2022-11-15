
function CocktailCard( { item } ) {

function prettifyInfo (arr) {
  if (arr.length === 1) {
    return arr[0][0].toUpperCase() + arr[0].slice(1).toLowerCase();
  }
  else {
  return arr.map(el => {
    return arr.indexOf(el) === arr.length-1 ? el.charAt(0).toUpperCase() + el.slice(1).toLowerCase() : el.charAt(0).toUpperCase() + el.slice(1).toLowerCase() + ', ';
  })
  }
}


  return (
    <div className="cocktailCardWithoutTitle">
    <h1 id="cocktailName">{item.name}</h1>
    <div className="cocktailCardContainer">
      <div className="imageAndDescriptionContainer">
        <div className="cocktailCardImageContainer" >
      <img src={item.image_path} alt="The currently selected cocktail" className="imageOfCurrentlySelectedCocktail"/>
    </div>
    <div className="descriptionContainer">
      <h6 id="cocktailDescription">"{item.description}"</h6>
    </div>
    </div>
    <div className="cocktailCardTextContainer">
    <div className="cocktailInfo">
      <h6><u>Spirits</u>: {prettifyInfo(item.spirits)}</h6>
      <h6><u>Type</u>: {item.type}</h6>
      <h6><u>Flavour Notes</u>: {prettifyInfo(item.flavour_notes)}</h6>
      <h6><u>Preparation</u>: {item.preparation}</h6>
    </div>
      <div className="recipeContainer">
      <ul>
      <h6 id="recipe"><u>Recipe</u>:</h6>
      <li><i>Sour</i> : <a id="moveMeRight">{item.recipe.sour}</a></li>
      <li><i>Sweet</i> : <a id="moveMeRight">{item.recipe.sweet}</a></li>
      <li><i>Strong</i> : <a id="moveMeRight">{item.recipe.strong}</a></li>
      <li><i>Weak</i> : <a id="moveMeRight">{item.recipe.weak}</a></li>
      <li><i>Garnish</i> : <a id="moveMeRight">{item.recipe.garnish}</a></li>
      <li><i>Glassware</i> : <a id="moveMeRight">{item.glass}</a></li>
      </ul>
      </div>
      </div>
      </div>
    </div>


  )
}

export default CocktailCard

// function CocktailCard( { item } ) {
//   return (
//     <div className="middleCocktail" >
//       <div className="cocktailCardImageContainer">
//         <img src={item.image_path} alt="The currently selected cocktail" className="imageOfCurrentlySelectedCocktail"/>
//         <h1 id="cocktailName">{item.name}</h1>
//       </div>
//     <div className="cocktailCardTextContainer">

//       <h6>{item.spirits}</h6>
//       <h6>{item.dominant_flavours}</h6>
//       <h6>{item.type}</h6>
//       <h6>{item.flavour_notes}</h6>
//       <h6>{item.preparation}</h6>
//       <h6>Recipe:</h6>
//       <h6>{item.recipe.sour}</h6>
//       <h6>{item.recipe.sweet}</h6>
//       <h6>{item.recipe.strong}</h6>
//       <h6>{item.recipe.weak}</h6>
//       <h6>{item.recipe.garnish}</h6>
//       <h6>{item.glass}</h6>
//       <h6>{item.description}</h6>
//       </div>
//     </div>

//   )
// }

// export default CocktailCard