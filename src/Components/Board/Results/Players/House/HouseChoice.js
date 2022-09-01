import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//actions
import { selectionActions } from "../../../../../ReduxStore/Slices/SelectionSlice";

//context
import { Pieces } from "../../../Board";

//styles
import { HouseChoiceContainer } from "../../../styles/Container";

function HouseChoice() {
  const dispatch = useDispatch();
  const { pieces } = useContext(Pieces);
  const house = useSelector((state) => state.selection.house);

  //chooses a random piece for the house state in selectionSlice
  useEffect(() => {
    let random = Math.floor(Math.random() * 5);
    dispatch(
      selectionActions.houseSelection({
        borderColor: pieces[random].borderColor,
        shadowColor: pieces[random].shadowColor,
        image: pieces[random].image,
        id: pieces[random].id,
      })
    );
  }, [dispatch, pieces]);

  return (
    <HouseChoiceContainer
      borderColor={house.borderColor}
      shadowColor={house.shadowColor}
    >
      <div>
        <img src={house.image} alt={house.id} />
      </div>
    </HouseChoiceContainer>
  );
}

export default HouseChoice;
