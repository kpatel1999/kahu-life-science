import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import Image from "../../../shared/NewImage";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SectionCenter = styled.div`
  text-align: center;
  margin: 4rem 0;
`;

const ImageSlider = () => {
  const images = [
    {
      alt: "slider img 1",
      src: "/imgs/slider/slider_1.svg",
    },
    {
      alt: "slider img 2",
      src: "/imgs/slider/slider_2.svg",
    },
  ];

  return (
    <SectionCenter>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {images.map((image) => (
          <Image
            key={image.alt}
            src={image.src}
            objectPosition="center"
            alt={image.alt}
            height={29.5}
          />
        ))}
      </Carousel>
    </SectionCenter>
  );
};

export default ImageSlider;
