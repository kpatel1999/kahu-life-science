// Utils
import { BsPlay } from "react-icons/bs";
import styled from "styled-components";
import { lav2, pink } from "../../styles/colors";
// import { lav2, pink } from "";

export const Wrapper = styled.footer`
  position: relative;
  color: white;
  height: 50rem;
  width: 100%;
  max-width: 114rem;
  margin: 0 auto;
  margin-top: 10rem;

  @media only screen and (max-width: 768px) {
    margin-top: 5rem;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  right: 0;
  bottom: -0.3rem;
  width: 70%;
  height: 100%;
  z-index: -1;

  @media only screen and (max-width: 768px) {
    width: 110%;
  }
`;

export const ButtonAndLogoWrapper = styled.div`
  position: absolute;
  left: 10rem;
  top: 60%;
  transform: translateY(-50%);
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    top: 44%;
    left: 29%;
  }
`;

export const LogoImageWrapper = styled.div`
  position: relative;
  width: 30rem;
  height: 30rem;

  @media only screen and (max-width: 900px) {
    width: 25rem;
    height: 25rem;
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  right: 5rem;
  top: 64%;
  transform: translateY(-50%);
  width: 35vw;
  max-width: 50rem;

  @media only screen and (max-width: 768px) {
    top: 80%;
    width: 60vw;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const PlayImageWrapper = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 3px solid ${lav2};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  a {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 900px) {
    width: 4rem;
    height: 4rem;
  }

  @media only screen and (max-width: 768px) {
    border: 3px solid #f3e6ff;
  }
`;

export const PlayImageSubWrapper = styled.div`
  color: #a65efa;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    color: #f3e6ff;
  }
`;

export const PlayBtn = styled(BsPlay)`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  margin-right: -0.2rem;

  @media only screen and (max-width: 768px) {
    color:#fff;
  }
`;

export const Text = styled.p`
  font-size: 4rem;
  text-align: center;

  @media only screen and (max-width: 1220px) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 1100px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 900px) {
    font-size: 2.3rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  transform: translateY(-5rem);
`;

export const ATag = styled.a`
  background: linear-gradient(90deg, #cc66ff, 60%, #8951fd);
  width: 20rem;
  font-size: 2rem;
  text-transform: uppercase;
  border-radius: 5rem;
  color: white;
  margin-right: 3rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
    width: 15rem;
  }
`;

export const Message = styled.span`
  visibility: hidden;
  width: 128%;
  font-size: 12px;
  background-color: #1a1a1b;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 7px 0px;
  position: absolute;
  z-index: 1;
  bottom: 116%;
  left: 0%;
  margin-left: -60px;
  text-transform: capitalize;

  ${ATag}:hover & {
    visibility: visible;
  }
`;

export const SocialLinkWrapper = styled.div`
  /* position: absolute;
  right: 20%;
  top: 77%; */
  margin-top: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: auto;
  width: fit-content;
  margin-top: 6rem;
  @media only screen and (max-width: 1200px) {
    top: 75%;
  }
  @media only screen and (max-width: 600px) {
    right: 15%;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid ${pink};
  border-radius: 50%;
  transition: all 0.4s ease-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
