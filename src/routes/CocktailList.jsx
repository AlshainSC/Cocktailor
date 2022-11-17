import CocktailCard from "./CocktailCard"
import { useCocktailContext } from '../contexts/CocktailProvider'
import { Link } from 'react-router-dom';


function CocktailList() {

  const { selectedCocktails, cocktails, mixItUpPressed, myFavourites, randomButtonPressed, oneRandomCocktail, setOneRandomCocktail } = useCocktailContext()


  function anotherRandomCocktail() {
    setOneRandomCocktail([cocktails[Math.floor(Math.random() * 21)]])
  }

  if (selectedCocktails.length && mixItUpPressed) {
    return (
      <div className="listOfCocktails">
        {selectedCocktails.map((cocktail) => <CocktailCard item={cocktail} key={cocktail._id} />)}
      </div>
    )
  } else if (randomButtonPressed) {
    return (
      <div className="listOfOneCocktails">
        {oneRandomCocktail.map((cocktail) => <CocktailCard item={cocktail} key={cocktail._id} />)}
        <button type="button" id="anotherOneButton" onClick={() => anotherRandomCocktail()}>Another One!</button>
      </div>
    )
  } else if (myFavourites.length && !selectedCocktails.length) {
    return (
      <div className="listOfCocktails">
        {myFavourites.map((cocktail) => <CocktailCard item={cocktail} key={cocktail._id} />)}
      </div>
    )
  } else {
    return (
      <div className="listOfCocktails">
        <h1 id="ifEmpty">Choose Some Favorites in Cocklection First!</h1>
      </div>
    )
  }
}


export default CocktailList

