import { useEffect, useState, useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import Card from "../components/Card";
import { addFetchCharacters } from "../hooks/useContextFunctions";

export default function AllCharacters() {
  const {apiCharacters, setApiCharacters} = useContext(CharactersContext)
  const [bateau, setBateau] = useState(0);

  
  return (
    <div>
      <h1 className="mb-6 text-4xl text-center">Tous les Personnages</h1>
      <p
        className="cursor-pointer"
        onClick={() => {
          setBateau(bateau + 1);
        }}
      >
        Valeur bateau = {bateau}
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {apiCharacters.map((oneCharacter) => (
          <Card key={oneCharacter.id} character={oneCharacter} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="px-4 py-2 my-10 duration-300 bg-blue-200 border-2 border-blue-800 rounded-xl hover:bg-blue-300"
        onClick={()=>addFetchCharacters(setApiCharacters)}
        >Rappeler tous les combattants de l'api</button>
        
      </div>
    </div>
  );
}
