import { useCocktailContext } from '../contexts/CocktailProvider'


function CocktailCard({ item }) {

  const { myFavourites, setMyFavourites } = useCocktailContext()


  function handleClick(drink) {
    if (myFavourites.includes(drink)) {
      removeFromFavourites(drink);
    } else {
      addToFavourites(drink);
    }
  }

  function addToFavourites(drink) {
    const newFavouriteCocktails = [...myFavourites]
    if (!newFavouriteCocktails.includes(drink)) {
      newFavouriteCocktails.push(drink);
      setMyFavourites(newFavouriteCocktails);
    }
  }

  function removeFromFavourites(drink) {
    const newFavouriteCocktails = [...myFavourites]
    if (newFavouriteCocktails.includes(drink)) {
      newFavouriteCocktails.splice(newFavouriteCocktails.indexOf(drink), 1)
      setMyFavourites(newFavouriteCocktails);
    }
  }

  function checkIfInFavourite(drink) {
    if (myFavourites.includes(drink)) {
      return true
    } else {
      return false;
    }
  }

  function prettifyInfo(arr) {
    if (arr.length === 1) {
      return arr[0][0].toUpperCase() + arr[0].slice(1).toLowerCase();
    }
    else {
      return arr.map(el => {
        return arr.indexOf(el) === arr.length - 1 ? el.charAt(0).toUpperCase() + el.slice(1).toLowerCase() : el.charAt(0).toUpperCase() + el.slice(1).toLowerCase() + ', ';
      })
    }
  }


  return (
    <div className="cocktailCardWithoutTitle">
      <h1 id="cocktailName">{item.name}</h1>
      <div className="cocktailCardContainer">
        <div className="imageAndDescriptionContainer">
          <div className="cocktailCardImageContainer" >
            <img src={item.image_path} alt="The currently selected cocktail" className="imageOfCurrentlySelectedCocktail" />
          </div>
          <div className="descriptionContainer">
            <div className="heartMeContainer" onClick={() => handleClick(item)}>{checkIfInFavourite(item) ? <h1 className="heartIcon">❤️</h1> : <h1 className="heartIcon">🤍</h1>}</div>
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
              <i><h6 id="recipe"><u>Recipe</u>:</h6></i>
              <li><i>Sour</i> : {item.recipe.sour}</li>
              <li><i>Sweet</i> : {item.recipe.sweet}</li>
              <li><i>Strong</i> : {item.recipe.strong}</li>
              <li><i>Weak</i> : {item.recipe.weak}</li>
              <li><i>Garnish</i> : {item.recipe.garnish}</li>
              <li><i>Glassware</i> : {item.glass}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  )
}

export default CocktailCard