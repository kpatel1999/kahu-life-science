import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./question";

// Components
import * as S from "./StyledComponent";

const FAQPage = () => {
  //   const [questions, setQuestions] = useState(data);
  return (
    <main>
      <S.Container>
        <S.MainTitle>questions and answers about login</S.MainTitle>
        {data.length && (
          <S.HeaderInfo>
            {data.map(question => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </S.HeaderInfo>
        )}
      </S.Container>
    </main>
  );
};

export default FAQPage;
