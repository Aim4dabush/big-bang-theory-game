import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { app } from "../../Firebase/Config";

//component
import PlayerSelection from "./PlayerSelection/PlayerSelection";
import Results from "./Results/Results";

//styles
import { BoardContainer } from "./styles/Container";

export const Pieces = React.createContext({});

function Board() {
  const [pieces, setPieces] = useState([]);
  const isSelected = useSelector((state) => state.selection.isSelected);

  //get pieces collection from firebase
  useEffect(() => {
    app
      .collection("pieces")
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          let data = [];
          snapshot.docs.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });
          setPieces(data);
        }
      });
  }, []);

  return (
    <Pieces.Provider value={{ pieces }}>
      <BoardContainer>
        {!isSelected && <PlayerSelection />}
        {isSelected && <Results />}
      </BoardContainer>
    </Pieces.Provider>
  );
}

export default Board;
