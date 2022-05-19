import Image from "next/image";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import * as MS from "../ContactPage/components/ContactForm/StyledComponents";
import linksData from "../Navbar/components/linksData";
import Link from "next/link";

import * as S from "./StyledComponents";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <S.MainFooter>
      <S.DetailsWrapper>
        <Image src="/favicon.ico" height={54} width={54} />
        <Image src="/imgs/logo_text.svg" height={32} width={170} />

        <S.Discription>
          Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor
          incididunt ut labore dolore magna aliqua enim ad minim veniam
          quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis
          aute irure.
        </S.Discription>
        <S.IconWrapper>
          <MS.SocialUl>
            <MS.SocialLi>
              <MS.SocialWrapper color="#385594">
                <FaFacebookF size={20} />
              </MS.SocialWrapper>
            </MS.SocialLi>
            <MS.SocialLi>
              <MS.SocialWrapper color="#fb3958">
                <AiFillInstagram size={20} />
              </MS.SocialWrapper>
            </MS.SocialLi>
            <MS.SocialLi>
              <MS.SocialWrapper color="#4eabee">
                <AiOutlineTwitter size={20} />
              </MS.SocialWrapper>
            </MS.SocialLi>
            <MS.SocialLi>
              <MS.SocialWrapper color="#1976d2">
                <FaLinkedinIn size={20} />
              </MS.SocialWrapper>
            </MS.SocialLi>
          </MS.SocialUl>
        </S.IconWrapper>
      </S.DetailsWrapper>

      {/* <Image src="/imgs/world-map.png" height={50} width={1500} /> */}
      <S.LinkWrapper>
        <div>
          <h4>Quick Links</h4>
          {linksData.map((link, index) => (
            <Link key={index} href={link.url} passHref>
              <S.LinkText>{link.title}</S.LinkText>
            </Link>
          ))}
        </div>

        <div>
          <h4>Contacts</h4>
          <MS.Ul>
            <MS.Li>
              <S.ContactIconWrapper>
                <MdLocationOn size={25} />
              </S.ContactIconWrapper>
              &nbsp;
              <S.LinkText>
                W84 New Park Lan, New York, NY 4586 United States
              </S.LinkText>
            </MS.Li>
            <MS.Li>
              <S.ContactIconWrapper>
                <FaPhoneAlt size={19} />
              </S.ContactIconWrapper>
              &nbsp;
              <a href="tel:+815390757">
                <S.LinkText>+47 333 78 901</S.LinkText>
              </a>
            </MS.Li>
            <MS.Li>
              <S.ContactIconWrapper>
                <HiOutlineMail size={25} />
              </S.ContactIconWrapper>
              &nbsp;
              <a href="mailto:someone@example.com">
                <S.LinkText>info@example.com</S.LinkText>
              </a>
            </MS.Li>
          </MS.Ul>
        </div>
      </S.LinkWrapper>
    </S.MainFooter>
  );
};

export default Footer;
