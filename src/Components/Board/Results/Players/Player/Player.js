import React from "react";

//components
import PlayerChoice from "./Choice/PlayerChoice";

//styles
import { PlayersContainer } from "../../styles/Container";

function Player() {
  return (
    <PlayersContainer>
      <h3>You Picked</h3>
      <PlayerChoice />
    </PlayersContainer>
  );
}

export default Player;
