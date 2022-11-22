import { createContext, useContext, useState, useEffect } from 'react';
import { getAllCocktails } from '../services/services';

const CocktailContext = createContext(null);

export default function CocktailProvider({ children }) {
  const [cocktails, setCocktails] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [myFavourites, setMyFavourites] = useState([]);
  const [selectedCocktails, setSelectedCocktails] = useState([]);
  const [mixItUpPressed, setMixItUpPressed] = useState(false);
  const [oneRandomCocktail, setOneRandomCocktail] = useState([]);
  const [randomButtonPressed, setRandomButtonPressed] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  async function getAndSet() {
    const items = await getAllCocktails();
    setCocktails(items);
    const fetchedTags = [];
    items.forEach((el) => fetchedTags.push(el.flavour_notes));
    const uniqueFetchedTags = [...new Set([].concat(...fetchedTags))];
    setAllTags(uniqueFetchedTags);
    const randomCocktail = [...items];
    const justTheOne = [randomCocktail[Math.floor(Math.random() * 21)]];
    setOneRandomCocktail(justTheOne);
  }

  useEffect(() => {
    getAndSet();
  }, []);

  return (
    <CocktailContext.Provider
      value={{
        cocktails,
        setCocktails,
        allTags,
        setAllTags,
        selectedCocktails,
        setSelectedCocktails,
        myFavourites,
        setMyFavourites,
        randomButtonPressed,
        setRandomButtonPressed,
        mixItUpPressed,
        setMixItUpPressed,
        showDropdown,
        setShowDropdown,
        oneRandomCocktail,
        setOneRandomCocktail,
        selectedTags,
        setSelectedTags,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
}

export const useCocktailContext = () => useContext(CocktailContext);
