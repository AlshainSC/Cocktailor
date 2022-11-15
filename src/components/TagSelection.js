import SingularTag from './SingularTag'
import { Link } from 'react-router-dom'


function TagSelection( {cocktails, allTags, selectedCocktails, setSelectedCocktails, wasPressed, setWasPressed, setRandomCocktails } ) {

function handleSubmit(e) {
  setWasPressed(true);
}

function randomCocktail(e) {
  setWasPressed(true)
  setRandomCocktails(true)
}

  return (
    <div>
    <div className="tagContainer">
      {allTags.map((el) => <SingularTag tag={el} selectedCocktails={selectedCocktails} setSelectedCocktails={setSelectedCocktails} cocktails={cocktails} /> )}
    </div>
    <div className="tagButtons">
    <Link to="/">
    <button type="button" name="mixItUp" onClick={handleSubmit} id="mixItUp">Mix it up!</button>
    </Link>
    <button type="button" name="surpriseMe" id="mixItUp" onClick={randomCocktail} >Surprise Me</button>
    </div>
    </div>
  )
}

export default TagSelection