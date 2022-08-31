import React from "react";

//components
import HouseChoice from "./HouseChoice";

//styles
import { PlayersContainer } from "../../../styles/Container";

function House() {
  return (
    <PlayersContainer>
      <h3>House Picked</h3>
      <HouseChoice />
    </PlayersContainer>
  );
}

export default House;
