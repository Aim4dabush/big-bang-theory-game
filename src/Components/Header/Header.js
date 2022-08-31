import React from "react";

//components
import Brand from "./Brand/Brand";
import Score from "./Score/Score";

//styles
import { HeaderContainer } from "./styles/Container";

function Header() {
  return (
    <HeaderContainer>
      <Brand />
      <Score />
    </HeaderContainer>
  );
}

export default Header;
