import React from "react";

// Components
import * as S from "./StyledComponents";
import Hero from "./components/Hero";
import Patnears from "./components/Patnears";
import VisionMission from "./components/VisionMission";
import CountUp from "./components/Counter";
import Slider from "./components/Slider";
import ImageSlider from "./components/ImageSlider";

const Homepage = () => {
  return (
    <S.Wrapper>
      <Slider />
      {/* <Hero /> */}
      <Patnears />
      <CountUp />
      <ImageSlider />
      <VisionMission />
    </S.Wrapper>
  );
};

export default Homepage;
