import { useState } from 'react'
import MyFavorites  from './MyFavorites';
import { Link }  from 'react-router-dom';

function NavBar() {

  const [showDropdown, setShowDropdown] = useState(false);

  const navigationItems = [
    "Make Me A Drink",
    "My Favourites",
    "Add A Drink To The Menu",
    "Search Cocktails"
  ]

  return (
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
        <Link to={item.replace(/ /g,"").toLowerCase()}>
          <li className="navBarListItems">{item}</li>
        </Link>
      ))}
    </ul>
    </div>
    </div>

  )
}

export default NavBar