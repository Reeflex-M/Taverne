// importons nos besoins

import { createContext, useState, useEffect } from "react";
import {
  addApiCharacters,
  addLocalCharacters,
  addHardCharacters,
} from "../hooks/useContextFunctions";

//  on initialise le context

export const CharactersContext = createContext();

//  on crée le fournisseur/distributeur

const CharactersContextProvider = ({ children }) => {
  // test
  const [valeurTest, setValeurTest] = useState(128);

  function doubleValeurTest() {
    setValeurTest(valeurTest * 2);
  }

  const [hardCharacters, setHardCharacters] = useState([]);
  const [apiCharacters, setApiCharacters] = useState([]);
  const [localCharacters, setLocalCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    addHardCharacters(setHardCharacters);
    addApiCharacters(setApiCharacters);
    addLocalCharacters(setLocalCharacters);
  }, []);

  useEffect(() => {
    setAllCharacters([...hardCharacters, ...apiCharacters, ...localCharacters]);
  }, [hardCharacters, apiCharacters, localCharacters]);

  return (
    <CharactersContext.Provider
      value={{
        valeurTest,
        setValeurTest,
        doubleValeurTest,
        hardCharacters,
        setHardCharacters,
        apiCharacters,
        setApiCharacters,
        localCharacters,
        setLocalCharacters,
        allCharacters,
        setAllCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
