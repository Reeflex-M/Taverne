import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCharactersManager } from "../hooks/useCharactersManager";
import SidesInput from "../components/formComponents/SidesInput";
import GenericInput from "../components/formComponents/GenericInput";
import ImagesInput from "../components/formComponents/ImagesInput";
import { toast } from "sonner";

export default function ModifyCharacterPage() {
  const { id } = useParams();
  const navigate=useNavigate()
  console.log(id);

  const { findCharacterById, updateCharacter } = useCharactersManager();
//   console.log(findCharacterById(id));



  const [character, setCharacter] = useState({
    name: "",
    image: "",
    health: "",
    magic: "",
    power: "",
    side: "",
  });


  useEffect(()=>{
    const foundCharacter = findCharacterById(id)
    console.log("foundCharacter", foundCharacter)

    if(!foundCharacter){
        toast.error("Personnage non trouvé")
        navigate("/")
    } else{
        setCharacter(foundCharacter.character)
        
    }
    
  }, [])

  function handleChange(e) {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave(e) {
    e.preventDefault();

    updateCharacter(character.id, character);
    toast.success("Peronnage modifié avec succés")
    navigate("/combattants-locaux")
    
  }

  return (
    <div>
      <h1 className="mb-6 text-4xl text-center">Modifions {character.name}</h1>

      <form
        onSubmit={handleSave}
        className="p-4 border border-gray-300 rounded"
      >
        <GenericInput
          constante={character.name}
          callback={(value) =>
            handleChange({ target: { name: "name", value } })
          }
          title="Nom"
          type="text"
        />

        <ImagesInput
          image={character.image}
          setImage={(value) =>
            handleChange({ target: { name: "image", value } })
          }
        />

        <GenericInput
          constante={character.health}
          callback={(value) =>
            handleChange({ target: { name: "health", value } })
          }
          title="Santé"
          type="number"
        />
        <GenericInput
          constante={character.magic}
          callback={(value) =>
            handleChange({ target: { name: "magic", value } })
          }
          title="Magie"
          type="number"
        />
        <GenericInput
          constante={character.power}
          callback={(value) =>
            handleChange({ target: { name: "power", value } })
          }
          title="Puissance"
          type="number"
        />

        <SidesInput
          side={character.side}
          setSide={(value) => handleChange({ target: { name: "side", value } })}
        />
        <button
          type="submit"
          className="p-2 text-white duration-300 bg-blue-500 rounded hover:opacity-90"
        >
          Modifier le personnage
        </button>
      </form>
    </div>
  );
}
