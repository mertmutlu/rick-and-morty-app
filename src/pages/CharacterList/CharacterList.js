import React, { useEffect, useState } from "react";
import axios from "axios";

import Character from "./components/Character";

import { API_BASE_URL } from "../../constants";
import "./CharacterList.css";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const response = await axios.get(`${API_BASE_URL}/character`);

    console.log(response);
    setCharacters(response.data.results);
    setIsLoading(false);
  };

  if (isLoading) {
    return <div style={{ backgroundColor: "red" }}>Loading!! </div>;
  }

  return (
    <div className="characterList">
      {characters.map((character) => {
        return (
          <Character
            key={character.id}
            character={character}
            species={character.species}
          />
        );
      })}
    </div>
  );
}

export default CharacterList;
