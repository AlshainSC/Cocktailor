import { createContext, useContext, useState, useEffect } from 'react';
import { getAllCocktails } from '../services/services';
import { Cocktail } from '../Types/Type';
//butt
interface Props {
  cocktails: Cocktail[];
  setCocktails: React.Dispatch<React.SetStateAction<Cocktail[]>>;
  allTags: string[];
  setAllTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCocktails: Cocktail[];
  setSelectedCocktails:  React.Dispatch<React.SetStateAction<Cocktail[]>>;
  myFavourites: Cocktail[];
  setMyFavourites: React.Dispatch<React.SetStateAction<Cocktail[]>>
  randomButtonPressed: boolean;
  setRandomButtonPressed: React.Dispatch<React.SetStateAction<boolean>>;
  mixItUpPressed: boolean;
  setMixItUpPressed: React.Dispatch<React.SetStateAction<boolean>>;
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  oneRandomCocktail: Cocktail[];
  setOneRandomCocktail: React.Dispatch<React.SetStateAction<Cocktail[]>>;
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const CocktailContext = createContext<Props | null>(null);

export default function CocktailProvider({ children }: any) {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [myFavourites, setMyFavourites] = useState<Cocktail[]>([]);
  const [selectedCocktails, setSelectedCocktails] = useState<Cocktail[]>([]);
  const [mixItUpPressed, setMixItUpPressed] = useState<boolean>(false);
  const [oneRandomCocktail, setOneRandomCocktail] = useState<Cocktail[]>([]);
  const [randomButtonPressed, setRandomButtonPressed] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  async function getAndSet() {
    const items = await getAllCocktails();
    setCocktails(items);
    const fetchedTags = items.map((el: Cocktail) => el.flavour_notes);
    const uniqueFetchedTags = [...new Set([...fetchedTags])];
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
