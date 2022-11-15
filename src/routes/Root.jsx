import {  Outlet, Link } from "react-router-dom";
import { useCocktailContext } from '../contexts/CocktailProvider'




export default function Root() {


  const { showDropdown, setShowDropdown, setSelectedCocktails, setMixItUpPressed, setRandomButtonPressed } = useCocktailContext()

  function normalState() {

    setSelectedCocktails([]);
    setMixItUpPressed(false);
    setRandomButtonPressed(false);
    
  }

  const navigationItems = [
    ["Home", ""],
    ["Make Me A Drink", "tagselection"],
    ["My Favourites", "myfavorites"],
    ["Cocklection", "cocklection"],
  ]

  return (
    <>
      <div className="navBar">
    <div className="hamburger">
    <button type="button" onClick={() => setShowDropdown(!showDropdown)} className="hamburgerButton">
    <svg viewBox="0 0 100 80" width="40" height="20" style={{fill: 'rgb(255, 255, 255)'}}>
      <rect width="120" height="13" rx="8"></rect>
      <rect y="30" width="120" height="13" rx="8"></rect>
      <rect y="60" width="120" height="13" rx="8"></rect>
    </svg>
    </button>
      <ul className={showDropdown ? "active" : "notActive"}>
      {navigationItems.map((item) => (
        <Link to={item[1]} onClick={normalState}>
          <li className="navBarListItems">{item[0]}</li>
        </Link>
      ))}
    </ul>
    </div>
    </div>
    <div className="mainContainer">
    <h1 id="cocktailorTitle">COCKTAILOR</h1>
      <Outlet />
    <hr className="divider"></hr>
    <footer></footer>
    </div>
    </>
  );
}