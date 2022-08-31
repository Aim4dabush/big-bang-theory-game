import React from "react";

//components
import House from "./Players/House";
import PlayAgain from "./PlayAgain/PlayAgain";
import Player from "./Players/Player";

//styles
import { ResultsContainer } from "../styles/Container";

function Results() {
  return (
    <ResultsContainer>
      <Player />
      <PlayAgain />
      <House />
    </ResultsContainer>
  );
}

export default Results;
