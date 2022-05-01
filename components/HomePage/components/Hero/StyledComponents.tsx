// Utils
import styled from "styled-components"

export const Wrapper = styled.section`
  position: relative;
  display: flex;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding-top: 23rem;
  z-index: 10;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 60rem;
    padding-top: 0;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 40rem;
    padding-top: 0;
  }
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 4rem;
  
  @media only screen and (max-width: 1220px) {
    font-size: 3.5rem;
  }
  
  @media only screen and (max-width: 1100px) {
    font-size: 3rem;
  }
  
  @media only screen and (max-width: 900px) {
    font-size: 2.3rem;
    text-align: center;
  }
`;

export const Description = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 3rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: 0px;
  bottom: 13%;
  width: 58%;
  height: 100%;
  transform: translateY(-5%);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Span = styled.span`
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    left: 0;
  }
`;
