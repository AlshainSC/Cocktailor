import { useState } from 'react';




function NavBar( {showDropdown, setShowDropdown} ) {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }


  return (
    <div className="navBar">
    <div className="hamburger">
    <button onClick={handleOpen} className="hamburgerButton">
    <svg viewBox="0 0 100 80" width="40" height="20" style={{fill: 'rgb(255, 255, 255)'}}>
      <rect width="120" height="13" rx="8"></rect>
      <rect y="30" width="120" height="13" rx="8"></rect>
      <rect y="60" width="120" height="13" rx="8"></rect>
    </svg>
    {open ? (
        <ul className="menu">
          <li className="menu-item">
            <h1>Login</h1>
          </li>
          <li className="menu-item">
            <h1>Make me a drink</h1>
          </li>
          <li className="menu-item">
            <h1>My Favorites</h1>
          </li>
          <li className="menu-item">
            <h1>Add a Cocktail</h1>
          </li>
        </ul>
      ) : null}
    </button>
    </div>
    </div>
  )
}

export default NavBar