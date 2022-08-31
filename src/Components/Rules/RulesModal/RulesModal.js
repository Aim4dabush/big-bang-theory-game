import React, { Fragment } from "react";
import ReactDOM from "react-dom";

//styles
import { Backdrop } from "../styles/Backdrop";
import { ImageModal } from "../styles/Modal";

function RulesModal({ showRulesHandler }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={showRulesHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ImageModal
          src={process.env.PUBLIC_URL + "/images/image-rules-bonus.svg"}
          alt="rules"
          onClick={showRulesHandler}
        />,
        document.getElementById("rules-root")
      )}
    </Fragment>
  );
}

export default RulesModal;
