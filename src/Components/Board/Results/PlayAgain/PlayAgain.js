import React from "react";
import { useDispatch, useSelector } from "react-redux";

//actions
import { selectionActions } from "../../../../ReduxStore/Slices/SelectionSlice";

//styles
import { PlayAgainButton } from "../../styles/Button";
import { PlayAgainContainer } from "../../styles/Container";

function PlayAgain() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.score.message);

  //button that resets the house state in selectionSlice and sets isSelected state scoreSlice
  const playAgainHandler = () => {
    dispatch(selectionActions.pieceIsSelected(false));
    dispatch(
      selectionActions.houseSelection({
        borderColor: null,
        shadowColor: null,
        image: null,
        id: null,
      })
    );
  };

  return (
    <PlayAgainContainer>
      <h1>{message}</h1>
      <PlayAgainButton onClick={playAgainHandler}>Play Again</PlayAgainButton>
    </PlayAgainContainer>
  );
}

export default PlayAgain;
