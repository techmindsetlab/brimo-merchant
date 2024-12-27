"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import Paragraph from "./paragraph";

interface Props {
  data: {
    id: number;
    title: string;
    image: string;
  }[];
  carouselRef: React.RefObject<Carousel | null>;
}

const PromoCarousel = ({ data, carouselRef }: Props) => {
  return (
    <Carousel
      ref={carouselRef}
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {data.map((item) => (
        <div key={item.id} className="mr-4 h-[18rem]">
          <Image src={item.image} alt="" width={1000} height={1000} />
          <Paragraph className="font-brineue-bold mt-4">{item.title}</Paragraph>
        </div>
      ))}
    </Carousel>
  );
};

export default PromoCarousel;
