import React from "react";
import { useSelector } from "react-redux";

//styles
import { PlayerChoiceContainer } from "../../../styles/Container";

function PlayerChoice() {
  const player = useSelector((state) => state.selection.player);

  return (
    <PlayerChoiceContainer
      borderColor={player.borderColor}
      shadowColor={player.shadowColor}
    >
      <div>
        <img
          src={process.env.PUBLIC_URL + `${player.image}`}
          alt={`${player.id}`}
        />
      </div>
    </PlayerChoiceContainer>
  );
}

export default PlayerChoice;
