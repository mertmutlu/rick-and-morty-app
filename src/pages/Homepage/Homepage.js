import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterList from "../../components/CharacterList";

import { API_BASE_URL } from "../../constants";
import "./Homepage.css";

function Homepage() {
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
    <div className="Homepage">
      <CharacterList characters={characters} />
    </div>
  );
}

export default Homepage;
