import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import Statistiques from "./cardComponents/Statistiques";
import { useCharactersManager } from "../hooks/useCharactersManager";

export default function Card({ character }) {
  //  console.table({character})
  const { deleteCharacter } = useCharactersManager();
  const allStat = [
    { stat: "Santé", value: character.health, unit: "PV" },
    { stat: "Magie", value: character.magic, unit: "PM" },
    { stat: "Puissance", value: character.power, unit: "Atk" },
  ];

  return (
    <div
      className={`flex flex-col border-2 border-neutral-500 w-[250px] h-[400px] rounded-xl overflow-hidden ${character.side}Shadow`}
    >
      <div className="w-[250px] h-[250px] overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="object-cover duration-300 hover:scale-105"
        />
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="w-6"></div> {/*espace*/}
          <p className="text-xl font-bold text-center">{character.name}</p>
          <p className="text-xs text-gray-400 opacity-80">{character.from}</p>
        </div>

        <div className="flex flex-col">
          {allStat.map((oneStat, index) => (
            <Statistiques
              key={index}
              stat={oneStat.stat}
              value={oneStat.value}
              unit={oneStat.unit}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {character.from === "LocalDatas" ? (
            <Link to={`/modifier-personnage/${character.id}`}>
              <Buttons color="bg-green-500">Modifier</Buttons>
            </Link>
          ) : (
            <Buttons color="bg-green-500 cursor-not-allowed">
              Non Modifiable
            </Buttons>
          )}

          <Buttons
            color="bg-red-500"
            onClick={() => deleteCharacter(character.id)}
          >
            Supprimer
          </Buttons>
        </div>
      </div>
    </div>
  );
}
