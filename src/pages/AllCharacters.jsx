import React from 'react'
import { useContext } from 'react'
import { CharactersContext } from "../context/CharactersContext";
import Card from "../components/Card";

export default function AllCharacters() {

    const{allCharacters}=useContext(CharactersContext)
// console.log(allCharacters)

  return (
    <div>
        <h1 className="mb-6 text-4xl text-center">Tous Nos Combattants</h1>


        <div className="flex flex-wrap justify-center gap-8">
        {allCharacters.map((oneCharacter) => (
          <Card key={oneCharacter.id} character={oneCharacter} />
        ))}
      </div>
    </div>
  )
}
