import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";

export const TopToBtm = styled.div`
  position: relative;
`;

export const AiOutlineArrowUps = styled(FaAngleUp)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1000;
  background: #ffffff94;
  border: 3px solid #b163f9;
  color: #b163f9;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  padding: 6px;
  cursor: pointer;
  animation: movebtn 3s ease-in-out infinite;
  transition: all 0.5s ease-in-out;

  &:hover {
    animation: none;
    color: #f78cb7;
    border: 3px solid #f78cb7;
    background: #fff;
  }

  @media only screen and (max-width: 740px) {
    height: 30px;
    width: 30px;
  }
`;
