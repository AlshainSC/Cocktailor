import { useCocktailContext } from '../contexts/CocktailProvider';
import CocktailCard from './CocktailCard';


function Cocklection() {

  const { cocktails } = useCocktailContext()

  return (
    <div className="listOfCocktails">
    {cocktails.map((el) =>
      <CocktailCard item={el}/>)}
    </div>
  )
}

export default Cocklection