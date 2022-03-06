import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterList from "./components/CharacterList";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCartoon();
  }, []);

  const getCartoon = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );

    console.log(response);
    setCharacters(response.data.results);
    setIsLoading(false);
  };

  if (isLoading) {
    return <div style={{ backgroundColor: "red" }}>Loadıng!! </div>;
  }

  return (
    <div className="App">
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
