import React, { useContext } from "react";
import { useDispatch } from "react-redux/es/exports";

//actions
import { selectionActions } from "../../../ReduxStore/Slices/SelectionSlice";

//context
import { Pieces } from "../Board";

//styles
import { PentagonImage } from "../styles/Image";
import { PlayerSelectionContainer } from "../styles/Container";
import { Lizard, Paper, Rock, Scissors, Spock } from "../styles/Button";

function PlayerSelection() {
  const dispatch = useDispatch();
  const { pieces } = useContext(Pieces);

  //button that sets scissors piece for the player state in selectionSlice
  const scissorsHandler = () => {
    dispatch(
      selectionActions.playerSelection({
        borderColor: pieces[3].borderColor,
        shadowColor: pieces[3].shadowColor,
        image: pieces[3].image,
        id: pieces[3].id,
      })
    );
    dispatch(selectionActions.pieceIsSelected(true));
  };

  //button that sets spock piece for the player state in selectionSlice
  const spockHandler = () => {
    dispatch(
      selectionActions.playerSelection({
        borderColor: pieces[4].borderColor,
        shadowColor: pieces[4].shadowColor,
        image: pieces[4].image,
        id: pieces[4].id,
      })
    );
    dispatch(selectionActions.pieceIsSelected(true));
  };

  //button that sets paper piece for the player state in selectionSlice
  const paperHandler = () => {
    dispatch(
      selectionActions.playerSelection({
        borderColor: pieces[1].borderColor,
        shadowColor: pieces[1].shadowColor,
        image: pieces[1].image,
        id: pieces[1].id,
      })
    );
    dispatch(selectionActions.pieceIsSelected(true));
  };

  //button that sets lizard piece for the player state in selectionSlice
  const lizardHandler = () => {
    dispatch(
      selectionActions.playerSelection({
        borderColor: pieces[0].borderColor,
        shadowColor: pieces[0].shadowColor,
        image: pieces[0].image,
        id: pieces[0].id,
      })
    );
    dispatch(selectionActions.pieceIsSelected(true));
  };

  //button that sets rock piece for the player state in selectionSlice
  const rockHandler = () => {
    dispatch(
      selectionActions.playerSelection({
        borderColor: pieces[2].borderColor,
        shadowColor: pieces[2].shadowColor,
        image: pieces[2].image,
        id: pieces[2].id,
      })
    );
    dispatch(selectionActions.pieceIsSelected(true));
  };

  return (
    <PlayerSelectionContainer>
      <PentagonImage
        src={process.env.PUBLIC_URL + "/images/bg-pentagon.svg"}
        alt="pentagon"
      />
      <Scissors onClick={scissorsHandler}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/pieces/icon-scissors.svg"}
            alt="scissors"
          />
        </div>
      </Scissors>
      <Spock onClick={spockHandler}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/pieces/icon-spock.svg"}
            alt="spock"
          />
        </div>
      </Spock>
      <Paper onClick={paperHandler}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/pieces/icon-paper.svg"}
            alt="paper"
          />
        </div>
      </Paper>
      <Lizard onClick={lizardHandler}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/pieces/icon-lizard.svg"}
            alt="lizard"
          />
        </div>
      </Lizard>
      <Rock onClick={rockHandler}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/pieces/icon-rock.svg"}
            alt="rock"
          />
        </div>
      </Rock>
    </PlayerSelectionContainer>
  );
}

export default PlayerSelection;
