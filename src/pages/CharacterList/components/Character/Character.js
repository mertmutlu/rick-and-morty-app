import React from "react";
import { useHistory } from "react-router-dom";

function Character(props) {
  const history = useHistory();

  const onCharacterClick = () => {
    history.push(`/character/${props.character.id}`);
  };

  return (
    <div style={{ width: 300, display: "inline-grid", alignItems: "center" }}>
      <img
        src={props.character.image}
        onClick={onCharacterClick}
        alt="characterImage"
      />
      {props.character.name}
    </div>
  );
}

export default Character;
