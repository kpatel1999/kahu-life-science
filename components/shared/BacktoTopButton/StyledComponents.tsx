import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";
import { green, sky } from "../../../styles/colors";

export const TopToBtm = styled.div`
  position: relative;
`;

export const AiOutlineArrowUps = styled(FaAngleUp)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1000;
  border: 3px solid ${sky};
  color: ${sky};
  border-radius: 50%;
  height: 35px;
  width: 35px;
  padding: 6px;
  cursor: pointer;
  animation: movebtn 3s ease-in-out infinite;
  transition: all 0.5s ease-in-out;

  &:hover {
    animation: none;
    color: ${green};
    border: 3px solid ${green};
    background: #fff;
  }

  @media only screen and (max-width: 740px) {
    height: 30px;
    width: 30px;
  }
`;
