import React from "react";

// Next
import Image from "next/image";

// Components
import * as S from "./StyledComponents";

// Utils
import getImageUrl from "../../utils/getImageUrl";

// import icons
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import Link from "next/link";
import { AiFillYoutube } from "react-icons/ai";

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.BackgroundImage>
        <Image
          src={getImageUrl("/shapes/footerShapePurple.svg", true)}
          layout="fill"
          alt="site logo"
          objectFit="cover"
          loading="lazy"
        />
      </S.BackgroundImage>
      <S.ButtonAndLogoWrapper>
        <S.LogoImageWrapper>
          <Image
            src={getImageUrl("/imgs/secondLogoWithShadow.svg", true)}
            layout="fill"
            alt="site logo"
            objectFit="contain"
            loading="lazy"
          />
        </S.LogoImageWrapper>
        <S.ButtonWrapper>
          <S.ATag href="http://DDVFS.com">GET STARTED
            <S.Message>You will leave doubledice.com by clicking here</S.Message>
          </S.ATag>
          <S.PlayImageWrapper>
            <a href="http://DDVFS.com">
              <S.PlayImageSubWrapper>
                <S.PlayBtn />
              </S.PlayImageSubWrapper>
            </a>
          </S.PlayImageWrapper>
        </S.ButtonWrapper>
      </S.ButtonAndLogoWrapper>
      <S.TextWrapper>
        <S.Text>Go forth and conquer the gaming universe</S.Text>
        <S.SocialLinkWrapper>
          <Link href="https://t.me/doublediceofficial" passHref>
            <a rel="noopener" target="_blank">
              <S.IconWrapper>
                <FaTelegramPlane size={15} color='white' />
              </S.IconWrapper>
            </a>
          </Link>
          <Link href="https://twitter.com/DoubleDice_com" passHref>
            <a rel="noopener" target="_blank">
              <S.IconWrapper>
                <FaTwitter size={15} color='white' />
              </S.IconWrapper>
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UC_tVXK03zhT_YW3BZSiTGlA" passHref>
            <a rel="noopener" target="_blank">
              <S.IconWrapper>
                <AiFillYoutube size={15} color='white' />
              </S.IconWrapper>
            </a>
          </Link>
        </S.SocialLinkWrapper>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default Navbar;
