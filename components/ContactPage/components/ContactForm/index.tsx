import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Utils
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

// import getImageUrl from "utils/getImageUrl";

// Components
import * as S from "./StyledComponents";
import ContectUs from "./Sub";
import { TitleColor } from "../../../shared/StyledComponents";

const Contact = () => {
  return (
    <section>
      <S.Row>
        <S.ContactWrapContent>
          <S.ContactTitle>
            <S.SubTitle>Contact Us</S.SubTitle>
            <S.Title>
              Let's Talk Question<TitleColor>.</TitleColor>
            </S.Title>
          </S.ContactTitle>
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
                style={{ height: "125px" }}
              />
            </S.FormGrp>

            <S.CheckBoxGrp>
              <S.Checkbox type="checkbox" />
              <S.CheckboxLable>Don’t show your email address</S.CheckboxLable>
            </S.CheckBoxGrp>

            <S.Button type="button">Send Now</S.Button>
          </S.Form>
        </S.ContactWrapContent>

        <S.ContectInto>
          <S.ContactImgContainer>
            <S.ContactImg src="imgs/contact_img.png" alt="" />
          </S.ContactImgContainer>
          <div>
            <S.Ul>
              <S.Li>
                <S.IconContainer>
                  <MdLocationOn size={16} />
                </S.IconContainer>
                <S.IconText>
                  W84 New Park Lan, New York, NY 4586 United States
                </S.IconText>
              </S.Li>
              <S.Li>
                <S.IconContainer>
                  <BsFillTelephoneFill size={12} />
                </S.IconContainer>
                <S.IconText>+9 (256) 254 9568</S.IconText>
              </S.Li>
              <S.Li>
                <S.IconContainer>
                  <HiMailOpen width={18} height={13} />
                </S.IconContainer>
                <S.IconText>Contact@ info.com</S.IconText>
              </S.Li>
            </S.Ul>
          </div>
          <div>
            <S.SocialUl>
              <S.SocialLi>
                <S.SocialWrapper color="#385594">
                  <FaFacebookF size={20} />
                </S.SocialWrapper>
              </S.SocialLi>
              <S.SocialLi>
                <S.SocialWrapper color="#4eabee">
                  <AiOutlineTwitter size={20} />
                </S.SocialWrapper>
              </S.SocialLi>
              <S.SocialLi>
                <S.SocialWrapper color="#1976d2">
                  <FaLinkedinIn size={20} />
                </S.SocialWrapper>
              </S.SocialLi>
            </S.SocialUl>
          </div>
        </S.ContectInto>
      </S.Row>

      <div style={{ width: "100%", marginTop: "50px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14681.85027620312!2d72.4952314!3d23.0801568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf955692e13272fcf!2sScience%20City%20ahmedabad!5e0!3m2!1sen!2sin!4v1652478372621!5m2!1sen!2sin"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
