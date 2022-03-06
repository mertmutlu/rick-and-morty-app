import React from "react";
import Character from "../Character";

function CharacterList(props) {
  console.log(props.characters);
  return (
    <div>
      {props.characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  );
}

export default CharacterList;
