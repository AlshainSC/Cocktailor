import CocktailCard from "./CocktailCard"

function CocktailList( {cocktails} ) {

function onLeftClick () {
}

function onRightClick () {
}


  return cocktails.length && (
    <div className="listOfCocktails">
      <button className="leftArrow" onClick={onLeftClick}>←</button>
        {cocktails.map((cocktail, i) => <CocktailCard item={cocktail} index={i} key={cocktail._id}/>)}
      <button className="rightArrow" onClick={onRightClick}>→</button>
    </div>
  )
}

export default CocktailList