import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import { API_BASE_URL } from "../../constants";
import "./CharacterDetail.css";

function CharacterDetail() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState();
  const [episodes, setEpisodes] = useState([]);

  const history = useHistory();

  useEffect(() => {
    console.log("first use eff");
    getCharacter();
  }, []);

  useEffect(() => {
    console.log("second use eff");
    console.log(character);

    if (character) {
      getEpisodes();
    }
  }, [character]);

  const getCharacter = async () => {
    const response = await axios.get(
      `${API_BASE_URL}/character/${characterId}`
    );

    setCharacter(response.data);
  };

  const getEpisodes = async () => {
    const episodeResults = [];

    for (const episodeUrl of character.episode) {
      const episodeResult = await getEpisode(episodeUrl);
      episodeResults.push(episodeResult);
    }

    setEpisodes(episodeResults);
  };

  const getEpisode = async (episodeUrl) => {
    const episodeDetail = await axios.get(episodeUrl);
    return episodeDetail.data;
  };

  console.log(episodes);

  if (character?.id == null) {
    return <p>loading</p>;
  }
  const onBackButtonClick = () => {
    history.push("/");
  };
  return (
    <div className="characterDetail">
      <h1>Character Detail Page</h1>
      <p>
        Selected Character Id, {characterId}, {character.name}
      </p>
      <img src={character.image} alt="characterImage" />

      <div className="episodeItem">
        <ul>
          {episodes.map((person) => {
            return (
              <li key={person.id}>
                {person.episode} - {person.name} years old
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={onBackButtonClick}>Back</button>
    </div>
  );
}
export default CharacterDetail;
