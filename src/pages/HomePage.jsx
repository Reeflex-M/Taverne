import Card from "../components/Card";
import {useContext, useEffect} from "react";
import { CharactersContext } from "../context/CharactersContext";
import {nanoid} from 'nanoid'


export default function HomePage() {
  const {valeurTest, setValeurTest, doubleValeurTest, hardCharacters } = useContext(CharactersContext)

  // useEffect(()=>{
  //   console.log(hardCharacters)

  // }, [hardCharacters])

  return (
    <>
      <h1 className="m-10 font-bold">
          Coucou Les Fighters !!!
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {hardCharacters.map((oneCharacter) => (
            <Card key={oneCharacter.id} character={oneCharacter} />
          ))}
        </div>

        <p className="mt-6">Notre valeur Test est de : {valeurTest}</p>
        <button className="p-4 m-4 text-white rounded-lg bg-neutral-500"
        onClick={()=>setValeurTest(valeurTest+5)}
        >Valeur test + 5</button>
        <button className="p-4 m-4 text-white rounded-lg bg-neutral-500"
        onClick={()=>doubleValeurTest()}
        >Double la valeur Test</button>
    </>
  )
}
