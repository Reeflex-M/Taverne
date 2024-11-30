import { nanoid } from "nanoid";

const pathImg = "src/assets/images/personnages/";

export function addHardCharacters(setHardCharacters) {
    setHardCharacters([
      {
        id: nanoid(6),
        image: pathImg + "heros.jpg",
        name: "Kikisan",
        health: 50,
        magic: 40,
        power: 30,
        from: "manualDatas",
        side: "light",
      },
      {
        id: nanoid(6),
        image: pathImg + "magicienne.jpg",
        name: "Dudulle",
        health: 60,
        magic: 50,
        power: 35,
        from: "manualDatas",
        side: "light",
      },
    ]);
  }

  export async function addApiCharacters(setApiCharacters) {
    const url = "https://la-taverne.ducompagnon.fr/api/personnages";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Pb de connexion au http : ${response.status}`);
      }
      const data = await response.json();
      // console.table(data);
      setApiCharacters(data);
      const charactersWithImgPath = data.map((character) => ({
        ...character,
        image: `${pathImg}${character.image}`,
        from: "apiDatas",
        side: character.side_name,
        id: nanoid(6),
      }));
      setApiCharacters(charactersWithImgPath);
    } catch (error) {
      console.error("Erreur lors de la récupération des données : ", error);
    }
  }

  export function addLocalCharacters(setLocalCharacters) {
    setLocalCharacters(JSON.parse(localStorage.getItem("characters")) || []);
  }

  export function addFetchCharacters(setApiCharacters){
    addApiCharacters(setApiCharacters)
  }