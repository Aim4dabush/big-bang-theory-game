import React, { useState } from "react";

//components
import RulesModal from "./RulesModal/RulesModal";

//styles
import { RulesButton } from "./styles/Button";

function Rules() {
  const [showRules, setShowRules] = useState(false);

  const showRulesHandler = () => {
    setShowRules(!showRules);
  };

  return (
    <div>
      {showRules && <RulesModal showRulesHandler={showRulesHandler} />}
      <RulesButton onClick={showRulesHandler}>Rules</RulesButton>
    </div>
  );
}

export default Rules;
