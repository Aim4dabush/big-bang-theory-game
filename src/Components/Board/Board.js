import React from "react";

//component
import PlayerSelection from "./PlayerSelection/PlayerSelection";
import Results from "./Results/Results";

//styles
import { BoardContainer } from "./styles/Container";

function Board() {
  return (
    <BoardContainer>
      <PlayerSelection />
      <Results />
    </BoardContainer>
  );
}

export default Board;
