import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { API_BASE_URL } from "../../constants";
import "./CharacterDetail.css";

function CharacterDetail() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState();
  const [episodes, setEpisodes] = useState([]);
  const [episodeDetail, setEpisodeDetail] = useState();

  const [trigger, setTrigger] = useState(1);

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
  }, [character, trigger]);

  const getCharacter = async () => {
    const response = await axios.get(
      `${API_BASE_URL}/character/${characterId}`
    );

    setCharacter(response.data);
  };

  const getEpisodes = async () => {
    setEpisodes(character.episode);

    const episodeDetail = await axios.get(`${character.episode[0]}`);
    setEpisodeDetail(episodeDetail.data.episode);
    console.log(episodeDetail.data.episode);
  };
  // console.log(episodes);

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
      <p>Episode Detail {episodeDetail}</p>
      <button
        onClick={() => {
          setTrigger(trigger + 1);
        }}
      >
        trigger
      </button>
    </div>
  );
}
export default CharacterDetail;
