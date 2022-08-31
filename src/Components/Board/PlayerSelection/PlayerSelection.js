import React from "react";

//styles
import { PentagonImage } from "../styles/Image";
import { PlayerSelectionContainer } from "../styles/Container";
import { Lizard, Paper, Rock, Scissor, Spock } from "../styles/Button";

function PlayerSelection() {
  return (
    <PlayerSelectionContainer>
      <PentagonImage
        src={process.env.PUBLIC_URL + "/images/bg-pentagon.svg"}
        alt="pentagon"
      />
      <Scissor>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/pieces/icon-scissors.svg"}
            alt="scissors"
          />
        </div>
      </Scissor>
      <Spock>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/pieces/icon-spock.svg"}
            alt="spock"
          />
        </div>
      </Spock>
      <Paper>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/pieces/icon-paper.svg"}
            alt="paper"
          />
        </div>
      </Paper>
      <Lizard>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/pieces/icon-lizard.svg"}
            alt="lizard"
          />
        </div>
      </Lizard>
      <Rock>
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
