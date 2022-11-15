import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import { getAllCocktails } from './services/services';
import './App.css';
import { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import CocktailList from './components/CocktailList';
import TagSelection from './components/TagSelection'
import MyFavorites from './components/MyFavorites';
import LandingPage from './components/LandingPage';


function App() {

  const [cocktails, setCocktails] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [selectedCocktails, setSelectedCocktails] = useState([])


  async function getAndSet (){

    const items = await getAllCocktails()
    setCocktails(items)
    const fetchedTags = [];
    items.forEach((el) => fetchedTags.push(el.flavour_notes))
    const uniqueFetchedTags = [...new Set([].concat(...fetchedTags))]
    setAllTags(uniqueFetchedTags)
  }

  useEffect(() => {

  getAndSet();

  }, [] )





  return (
    <Router>
      <div className="app">
      <NavBar />
      </div>
      <MainContainer cocktails={cocktails} setCocktails={setCocktails} selectedCocktails={selectedCocktails} setSelectedCocktails={setSelectedCocktails} allTags={allTags} setAllTags={setAllTags} />
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/makemeadrink" element={<MainContainer cocktails={cocktails} setCocktails={setCocktails} selectedCocktails={selectedCocktails} setSelectedCocktails={setSelectedCocktails} allTags={allTags} setAllTags={setAllTags} />}></Route>
        <Route exact path="/myfavourites" element={<MyFavorites />}></Route>
        <Route exact path ="/addadrinktothemenu" element={<CocktailList />}></Route>
        <Route exact path ="/searchcocktails" element={<CocktailList />}></Route>
        <Route exact path ="/randomcocktail" element={<CocktailList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
