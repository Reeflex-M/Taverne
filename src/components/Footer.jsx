// les imports
import {useContext} from "react";
import { CharactersContext } from "../context/CharactersContext";

export default function Footer() {
  // La logique
  const {valeurTest} = useContext(CharactersContext)

  return (
    // la vue retournée
    <footer className="p-4 mt-3 border-2 border-top customShadow">
      <div className="container mx-auto text-center">
        <p>Footer de mon Projet Taverne des Fighters !!!</p>
        <p>Valeur Test : {valeurTest}</p>
      </div>
    </footer>
  );
}
