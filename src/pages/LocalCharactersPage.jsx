import { useState, useEffect, useContext } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { CharactersContext } from "../context/CharactersContext";

export default function LocalCharactersPage() {
  const { localCharacters } = useContext(CharactersContext);
  // console.log(localCharacters)
  return (
    <div>
      <h1 className="mb-6 text-4xl text-center">Les Combattants Locaux</h1>

      <div className="flex justify-center my-8">
        <Link to="/creer-un-personnage">
          <button className="px-4 py-2 mx-auto duration-300 border-2 border-neutral-800 bg-neutral-200 rounded-xl hover:bg-neutral-300">
            Créer un personnage
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {localCharacters.map((oneCharacter) => (
          <Card key={oneCharacter.id} character={oneCharacter} />
        ))}
      </div>
    </div>
  );
}
