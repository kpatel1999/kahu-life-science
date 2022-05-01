import React from "react";

// Components
import * as S from "./StyledComponents";
import Hero from "./components/Hero";
import Patnears from "./components/Patnears";

const Homepage = () => {
  return (
    <S.Wrapper>
      <Hero />
      <Patnears />
    </S.Wrapper>
  );
};

export default Homepage;
