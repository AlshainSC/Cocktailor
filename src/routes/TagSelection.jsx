import SingularTag from './SingularTag'
import { Link } from 'react-router-dom'
import { useCocktailContext } from '../contexts/CocktailProvider'

function TagSelection( ) {

const { allTags, selectedCocktails, setSelectedCocktails, cocktails, mixItUpPressed, setMixItUpPressed, randomButtonPressed, setRandomButtonPressed } = useCocktailContext()

function handleMixClick() {
  setMixItUpPressed(!mixItUpPressed);
}

function handleRandomClick() {
  setRandomButtonPressed(!randomButtonPressed);

}

  return (
    <div>
    <div className="tagContainer">
      {allTags.map((el) => <SingularTag tag={el} selectedCocktails={selectedCocktails} setSelectedCocktails={setSelectedCocktails} cocktails={cocktails} /> )}
    </div>
    <div className="tagButtons">
    <Link to="/cocktaillist">
    <button type="button" name="mixItUp" id="mixItUp" onClick={handleMixClick}>Mix it up!</button>
    </Link>
    <Link to="/cocktaillist">
    <button type="button" name="surpriseMe" id="mixItUp" onClick={handleRandomClick}>Surprise Me</button>
    </Link>
    </div>
    </div>
  )
}

export default TagSelection