import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import { getAllCocktails } from './services/services';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [cocktails, setCocktails] = useState([]);
  const [featuredCocktails, setFeaturedCocktails] = useState([])
  const [showDropdown, setShowDropdown] = useState(false);

  async function getAndSet (){

    const items = await getAllCocktails()
    setCocktails(items)
  }

  useEffect(() => {

  getAndSet();

  }, [] )

  function getFeaturedCocktails (arr) {
    return arr.slice(0, 3)
  }



  return (
    <div>
    <NavBar showDropDown={showDropdown} setShowDropdown={() => setShowDropdown(!showDropdown)}/>
    <MainContainer cocktails={cocktails} setCocktails={setCocktails} featuredCocktails={featuredCocktails} setFeaturedCocktails={setFeaturedCocktails} />
    </div>
  );
}

export default App;
