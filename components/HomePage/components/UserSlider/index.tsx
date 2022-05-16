import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import styled from "styled-components";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const SectionCenter = styled.div`
  margin: 0 auto;
  margin-bottom: 10rem;
  height: 450px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const UserSlider = () => {
  return (
    <SectionCenter>
      <AwesomeSlider
        infinite
        mobileTouch
        transitionDelay={2}
        animation="cubeAnimation"
      >
        <div> Text1 </div>
        <div> Text2 </div>
        <div> Text3 </div>
        <div> Text4 </div>
        <div> Text5 </div>
      </AwesomeSlider>
    </SectionCenter>
  );
};

export default UserSlider;

const Title = styled.p`
  text-transform: capitalize;
  margin-bottom: 0.75rem;
  color: red;
`;

const Text = styled.p`
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;
  color: var(--clr-grey-5);
`;

const PersonImage = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid var(--clr-grey-8);
  box-shadow: var(--dark-shadow);
`;

const SFaQuoteRight = styled(FaQuoteRight)`
  font-size: 3rem;
  margin-top: 1rem;
  color: var(--clr-primary-5);
`;

const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const Span = styled.span`
  font-size: 0.85em;
  color: var(--clr-primary-5);
  margin-right: 1rem;
  font-weight: 700;
`;

const Articale = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: var(--transition);
`;
