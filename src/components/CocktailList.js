import CocktailCard from "./CocktailCard"

function CocktailList( { selectedCocktails } ) {
console.log({selectedCocktails})
function onLeftClick () {
}

function onRightClick () {
}


  return selectedCocktails.length && (
    <div className="listOfCocktails">
      <button className="leftArrow" onClick={onLeftClick}>←</button>
        {selectedCocktails.map((cocktail) => <CocktailCard item={cocktail} key={cocktail._id}/>)}
      <button className="rightArrow" onClick={onRightClick}>→</button>
    </div>
  )
}

export default CocktailList