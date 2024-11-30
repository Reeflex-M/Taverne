import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

export function useCharactersManager() {
  const {
    allCharacters,
    setAllCharacters,
    hardCharacters,
    setHardCharacters,
    apiCharacters,
    setApiCharacters,
    localCharacters,
    setLocalCharacters,
  } = useContext(CharactersContext);

  function findCharacterById(id) {
    const sources = [
      { data: hardCharacters, from: "manualDatas" },
      { data: apiCharacters, from: "apiDatas" },
      { data: localCharacters, from: "LocalDatas" },
    ];
    for (const { data, from } of sources) {
      const character = data.find((char) => char.id === id);
      if (character) {
        return { character, from };
      }
    }
  }

  function deleteCharacterFromLocalStorage(id) {
    const storedCharacters =
      JSON.parse(localStorage.getItem("characters")) || [];
    const updatedStoredCharcaters = storedCharacters.filter(
      (char) => char.id !== id
    );
    localStorage.setItem("characters", JSON.stringify(updatedStoredCharcaters));
  }

  function updateCharacter(id, updatedCharacter) {
    const storedCharacters =
      JSON.parse(localStorage.getItem("characters")) || [];
    const characterIndex = storedCharacters.findIndex((char) => char.id === id);
    if (characterIndex !== -1) {
      storedCharacters[characterIndex] = {
        ...storedCharacters[characterIndex],
        ...updatedCharacter,
      };
      localStorage.setItem("characters", JSON.stringify(storedCharacters));
      setLocalCharacters(storedCharacters);
    } else {
      console.error("Personnage non trouvé");
    }
  }

  function deleteCharacter(id) {
    const characterData = findCharacterById(id);

    if (!characterData) {
      console.error("Personnage non trouvé !");
      return;
    }

    const { character, from } = characterData;

    switch (from) {
      case "manualDatas": {
        const updatedCharacters = hardCharacters.filter(
          (char) => char.id !== id
        );
        setHardCharacters(updatedCharacters);
        break;
      }
      case "apiDatas": {
        const updatedCharacters = apiCharacters.filter(
          (char) => char.id !== id
        );
        setApiCharacters(updatedCharacters);
        break;
      }
      case "LocalDatas": {
        const updatedCharacters = localCharacters.filter(
          (char) => char.id !== id
        );
        setLocalCharacters(updatedCharacters);
        deleteCharacterFromLocalStorage(id);
        break;
      }
      default:
        console.error("Provenance inconnu pour le personnage : ", character);
    }
  }

  return { deleteCharacter, findCharacterById , updateCharacter};
}
