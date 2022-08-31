import React from "react";
import { useSelector } from "react-redux";

//styles
import { ScoreContainer } from "../styles/Container";

function Score() {
  const score = useSelector((state) => state.score);
  return (
    <ScoreContainer>
      <div>
        <h3>Score</h3>
        <h1>{score.score}</h1>
      </div>
    </ScoreContainer>
  );
}

export default Score;
