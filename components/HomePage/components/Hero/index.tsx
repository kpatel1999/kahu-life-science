import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Utils
// import getImageUrl from "utils/getImageUrl";

// Components
import * as S from "./StyledComponents";
import getImageUrl from "../../../../utils/getImageUrl";
// import BlackButton from "components/shared/BlackButton";

const Hero = () => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.Title>
          The decentralized pooled betting/gaming metaverse. Play the games or
          open your own rooms.
        </S.Title>
        <S.Description>
          The games you know and love in a pooled betting, “no-house” setup for
          true-probability based best returns. Sports betting, political races,
          card games (poker, blackjack, etc),casino games (roulette, craps,
          etc.), dice games and much more. <S.Span>All in one place.</S.Span>
        </S.Description>
        {/* <Link href="/games" passHref>
          <a>
            <S.ButtonWrapper>
              <BlackButton>
                Preview what<span>&apos;</span>s coming
              </BlackButton>
            </S.ButtonWrapper>
          </a>
        </Link> */}
      </S.TitleContainer>
      <S.ImageWrapper>
        <S.ImageContainer>
          <Image
            src={getImageUrl("/imgs/homepageMainImage.svg", true)}
            layout="fill"
            alt="site logo"
            objectFit="contain"
            loading="lazy"
          />
        </S.ImageContainer>
      </S.ImageWrapper>
    </S.Wrapper>
  );
};

export default Hero;
