import LogInForm from "./LogInForm"
import CocktailList from "./CocktailList"


function MainContainer( {cocktails, setCocktails} ) {
  return (
    <div className="mainContainer">
    <h1 id="cocktailorTitle">COCKTAILOR</h1>
      <CocktailList cocktails={cocktails} setCocktails={setCocktails} />
       {/* <LogInForm /> */}
    </div>
  )
}

export default MainContainer