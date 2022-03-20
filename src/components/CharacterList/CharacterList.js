import React from "react";
import Character from "../Character";

function CharacterList(props) {
  return (
    <div>
      {props.characters.map((character) => {
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
