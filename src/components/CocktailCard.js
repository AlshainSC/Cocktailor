
function CocktailCard( {item, index} ) {
  let position = "";
  if (index === 0) position = "leftCocktail";
  else if (index === 1) position = "middleCocktail";
  else if (index === 2) position = "rightCocktail";
  return (
    <div className={position} >
      <div className="cocktailCardImageContainer">
        <img src={item.image_path} alt="The currently selected cocktail" className="imageOfCurrentlySelectedCocktail"/>
      </div>
    <div className="cocktailCardTextContainer">
      <h1>{item.name}</h1>
      <h6>{item.spirits}</h6>
      <h6>{item.dominant_flavours}</h6>
      <h6>{item.type}</h6>
      <h6>{item.flavour_notes}</h6>
      <h6>{item.preparation}</h6>
      <h6>Recipe:</h6>
      <h6>{item.recipe.sour}</h6>
      <h6>{item.recipe.sweet}</h6>
      <h6>{item.recipe.strong}</h6>
      <h6>{item.recipe.weak}</h6>
      <h6>{item.recipe.garnish}</h6>
      <h6>{item.glass}</h6>
    </div>

      <div>
        <h6>{item.description}</h6>
      </div>
    </div>

  )
}

export default CocktailCard