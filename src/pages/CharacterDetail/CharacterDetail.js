import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { API_BASE_URL } from "../../constants";
import "./CharacterDetail.css";

function CharacterDetail() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    getCharacter();
  }, []);

  const getCharacter = async () => {
    const response = await axios.get(
      `${API_BASE_URL}/character/${characterId}`
    );

    setCharacter(response.data);
  };

  if (character?.id == null) {
    return <p>loading</p>;
  }

  return (
    <div className="characterDetail">
      <h1>Character Detail Page</h1>
      <p>
        Selected Character Id, {characterId}, {character.name}
      </p>
      <img src={character.image} alt="characterImage" />
    </div>
  );
}
export default CharacterDetail;
