import { useCocktailContext } from '../contexts/CocktailProvider';
import CocktailCard from './CocktailCard';


function Cocklection() {

  const { cocktails } = useCocktailContext()

  return (
    <div className="listOfCocktails">
      <div className="rowOne">
        {cocktails.slice(0, 7).map((el) =>
          <CocktailCard item={el} />)}
      </div>
      <div className="rowOne">
        {cocktails.slice(7, 14).map((el) =>
          <CocktailCard item={el} />)}
      </div>
      <div className="rowOne">
        {cocktails.slice(14, 21).map((el) =>
          <CocktailCard item={el} />)}
      </div>
    </div>
  )
}

export default Cocklection