import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//actions
import { scoreActions } from "../../../ReduxStore/Slices/ScoreSlice";
import { selectionActions } from "../../../ReduxStore/Slices/SelectionSlice";

//components
import House from "./Players/House/House";
import PlayAgain from "./PlayAgain/PlayAgain";
import Player from "./Players/Player/Player";

//styles
import { ResultsContainer } from "../styles/Container";

function Results() {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.selection.player.id);
  const house = useSelector((state) => state.selection.house.id);

  //updates score state and message state in scoreSlice based on win/lose/tie conditions between player and house
  useEffect(() => {
    if (house) {
      if (player === "scissors") {
        if (house === "scissors") {
          dispatch(scoreActions.tie(0));
        } else if (house === "paper" || house === "lizard") {
          dispatch(scoreActions.win(1));
        } else {
          dispatch(scoreActions.lose(1));
        }
      }
      if (player === "spock") {
        if (house === "spock") {
          dispatch(scoreActions.tie(0));
        } else if (house === "scissors" || house === "rock") {
          dispatch(scoreActions.win(1));
        } else {
          dispatch(scoreActions.lose(1));
        }
      }
      if (player === "paper") {
        if (house === "paper") {
          dispatch(scoreActions.tie(0));
        } else if (house === "rock" || house === "spock") {
          dispatch(scoreActions.win(1));
        } else {
          dispatch(scoreActions.lose(1));
        }
      }
      if (player === "lizard") {
        if (house === "lizard") {
          dispatch(scoreActions.tie(0));
        } else if (house === "paper" || house === "spock") {
          dispatch(scoreActions.win(1));
        } else {
          dispatch(scoreActions.lose(1));
        }
      }
      if (player === "rock") {
        if (house === "rock") {
          dispatch(scoreActions.tie(0));
        } else if (house === "scissors" || house === "lizard") {
          dispatch(scoreActions.win(1));
        } else {
          dispatch(scoreActions.lose(1));
        }
      }
    }
  }, [dispatch, player, house]);

  return (
    <ResultsContainer>
      <Player />
      <PlayAgain />
      <House />
    </ResultsContainer>
  );
}

export default Results;
