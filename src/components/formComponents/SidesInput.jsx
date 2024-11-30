import { useState, useEffect } from "react";

export default function SidesInput({side, setSide}) {
  const url = "https://la-taverne.ducompagnon.fr/api/classes";
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchSides();
  }, []);

  async function fetchSides() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error , status : ${response.statuts}`);
      }
      const data = await response.json();
    //   console.log(data);
      setClasses(data);
    } catch (error) {
      console.error("Error fetching sides : ", error);
    }
  }

  return (
    <div>
      <label htmlFor="side" className="mb-2 block">
        Côté de la Force{" "}
      </label>
      <select
        name="side"
        id="side"
        value={side}
        onChange={(e) => setSide(e.target.value)}
        required
        className="border border-gray-300 rounded w-full p-2 mb-4"
      >
        <option value="">🔽Choisissez un côté🔽</option>
        {classes.map((classes) => (
          <option key={classes.id} value={classes.side}>
            {" "}
            {classes.side}
          </option>
        ))}
      </select>
    </div>
  );
}
