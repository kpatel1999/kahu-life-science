/* section */

import styled from "styled-components";

export const HeaderInfo = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: var(--max-width);


  // @media screen and (min-width: 992px) {
  //   width: 95vw;
  // }
`;

/*
  =============== 
  Questions
  ===============
  */

// main {
//   min-height: 100vh;
//   /* using flex because of better browser support */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

export const Container = styled.div`
  margin: 8rem auto;
  background: #fff;
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  max-width: 920px;
  display: grid;
  gap: 1rem 2rem;

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
`;

export const MainTitle = styled.h3`
  font-size: 2.75rem;
  line-height: 1.2;
  font-weight: 500;

  @media only screen and (mix-width: 740px) {
    font-size: 1.75rem;
  }
`;

// .container h3 {
//   line-height: 1.2;
//   font-weight: 500;
// }

export const Question = styled.article`
  padding: 1rem 1.5rem;
  border: 2px solid #eae6eb;
  
  margin-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: var(--light-shadow);
`;

// .question
export const Title = styled.h4`
  font-size: 1rem;
  text-transform: none;
  line-height: 1.5;
`;

// .question
export const Info = styled.p`
  color: green;
  margin-bottom: 0;
  margin-top: 0.5rem;
`;
// .question
export const Header = styled.header`
  display: flex;
  color: green;
  margin-bottom: 0;
  margin-top: 0.5rem;
  justify-content: space-between;
`;

// .question header h4 {
export const HeaderTitle = styled.h4`
  margin-bottom: 0;
`;

export const Button = styled.button`
  // background: transparent;
  // border-color: transparent;
  width: 2rem;
  height: 1.5rem;
  background: var(--clr-grey-special);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--clr-red-special);
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
`;
