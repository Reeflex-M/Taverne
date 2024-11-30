import { useContext, useState } from "react";
import SidesInput from "../components/formComponents/SidesInput";
import ImagesInput from "../components/formComponents/ImagesInput";
import GenericInput from "../components/formComponents/GenericInput";
import { toast } from "sonner";
import { nanoid } from "nanoid";
import { CharactersContext } from "../context/CharactersContext";

export default function CreateCharacter() {
  const{setLocalCharacters} = useContext(CharactersContext)
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [health, setHealth] = useState("");
  const [magic, setMagic] = useState("");
  const [power, setPower] = useState("");
  const [side, setSide] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // création personnage
    const newCharacter = {
      id:nanoid(6),
      name,
      image,
      health: parseInt(health), //convertir en entier
      magic: parseInt(magic), //convertir en entier
      power: parseInt(power), //convertir en entier
      side,
      from:"LocalDatas"
    };
    if(name.length<3){
        toast.error("Nom trop court, il faut au moins 3 caractères")
        return
    }

    console.log(newCharacter);

    const oldCharacters = JSON.parse(localStorage.getItem("characters")) || [];
    const oldLength = oldCharacters.length;
    oldCharacters.push(newCharacter);

    localStorage.setItem("characters", JSON.stringify(oldCharacters));
    const newLength = oldCharacters.length;
    if (newLength > oldLength) {
      toast.success("Personnage créé avec succés.");
    } else {
      toast.error("Erreur lors de la création du personnage");
    }
    setLocalCharacters(oldCharacters)

    setName("");
    setImage("");
    setHealth("");
    setPower("");
    setMagic("");
    setSide("");
  }

  return (
    <div>
      <h1 className="mb-6 text-4xl text-center">Création d'un personnage</h1>

      <form
        onSubmit={handleSubmit}
        className="p-4 border border-gray-300 rounded"
      >
        <GenericInput
          constante={name}
          callback={setName}
          title="Nom"
          type="text"
        />

        <ImagesInput image={image} setImage={setImage} />

        <GenericInput
          constante={health}
          callback={setHealth}
          title="Santé"
          type="number"
        />
        <GenericInput
          constante={magic}
          callback={setMagic}
          title="Magie"
          type="number"
        />
        <GenericInput
          constante={power}
          callback={setPower}
          title="Puissance"
          type="number"
        />

        <SidesInput side={side} setSide={setSide} />
        <button
          type="submit"
          className="p-2 text-white duration-300 bg-blue-500 rounded hover:opacity-90"
        >
          Créer le personnage
        </button>
      </form>
    </div>
  );
}
