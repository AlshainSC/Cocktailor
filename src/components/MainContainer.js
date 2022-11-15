import CocktailList from "./CocktailList"
import TagSelection from "./TagSelection"
import SingularTag from "./SingularTag"
import { useState } from 'react'

function MainContainer( {cocktails, setCocktails, selectedCocktails, setSelectedCocktails, allTags, setAllTags} ) {

  const [wasPressed, setWasPressed] = useState(false)
  const [randomCocktails, setRandomCocktails] = useState(false)

  const tagsProps = {
    cocktails, allTags, selectedCocktails, setSelectedCocktails, wasPressed, setWasPressed, setRandomCocktails
  }
  return (
    <div className="mainContainer">
    <h1 id="cocktailorTitle">COCKTAILOR</h1>
      {!wasPressed ? <TagSelection {...tagsProps}/> : <CocktailList selectedCocktails={randomCocktails ? [cocktails[Math.floor(Math.random() * 6)]] : selectedCocktails} />}
    </div>
  )
}

export default MainContainer