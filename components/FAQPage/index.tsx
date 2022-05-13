import React, { useState } from "react";
import * as MS from "../ContactPage/components/ContactForm/StyledComponents";
import data from "./data";
import SingleQuestion from "./question";

// Components
import * as S from "./StyledComponent";

const FAQPage = () => {
  //   const [questions, setQuestions] = useState(data);
  return (
    <main>
      <S.Container>
        <MS.ContactImgContainer>
          <MS.ContactImg src="imgs/contact_img.png" alt="" />
        </MS.ContactImgContainer>
        <div>
          <S.MainTitle>questions and answers about login</S.MainTitle>
          {data.length && (
            <S.HeaderInfo>
              {data.map((question) => {
                return (
                  <SingleQuestion
                    key={question.id}
                    {...question}
                  ></SingleQuestion>
                );
              })}
            </S.HeaderInfo>
          )}
        </div>
      </S.Container>
    </main>
  );
};

export default FAQPage;
