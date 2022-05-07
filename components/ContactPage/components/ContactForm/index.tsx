import React from 'react';

// Next
import Image from 'next/image';
import Link from 'next/link';

// Utils
// import getImageUrl from "utils/getImageUrl";

// Components
import * as S from './StyledComponents';
import ContectUs from './Sub';

const Contact = () => {
  return (
    <S.Wrapper>
      <S.Row>
        <S.ContactTitle>
          <S.SubTitle>Contact Us</S.SubTitle>
          <S.Title>Let`s Talk Question.</S.Title>
        </S.ContactTitle>
        <S.ContactWrapContent>
          <S.Description>
            The domestic dog is a doiated dendant of the wolf. The dog derived
            from an ancient, extinct wolf, and the modern grey.
          </S.Description>

          <S.Form>
            <S.FormGrp>
              <S.Lable>Your Name *</S.Lable>
              <S.Input type="text" id="name" placeholder="Jon Deo..." />
            </S.FormGrp>

            <S.FormGrp>
              <S.Lable>Your Email *</S.Lable>
              <S.Input type="text" id="email" placeholder="info.example@.com" />
            </S.FormGrp>

            <S.FormGrp>
              <S.Lable>Your Message *</S.Lable>
              <S.TextArea
                name="message"
                id="message"
                placeholder="Opinion..."
                style={{ height: '125px' }}
              />
            </S.FormGrp>

            <S.CheckBoxGrp>
              <S.Checkbox type="checkbox" />
              <S.CheckboxLable>Don’t show your email address</S.CheckboxLable>
            </S.CheckBoxGrp>

            <S.Button type="button">Send Now</S.Button>
          </S.Form>
        </S.ContactWrapContent>
      </S.Row>
    </S.Wrapper>
  );
};

export default Contact;
