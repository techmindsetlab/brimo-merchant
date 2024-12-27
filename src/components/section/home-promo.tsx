"use client";
import React, { useRef } from "react";
import Paragraph from "../base/paragraph";
import Button from "../base/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PromoCarousel from "../base/carousel";
import Carousel from "react-multi-carousel";

interface Props {
  data: {
    id: number;
    title: string;
    image: string;
  }[];
}

const HomePromo = ({ data }: Props) => {
  const carouselRef = useRef<Carousel | null>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(1);
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next(1);
    }
  };
  return (
    <div className="bg-secondary-blue">
      <div className="max-w-screen-xl pt-12 mx-auto">
        <Paragraph className="font-brineue-bold text-5xl">
          Promo Special/Hot Over
        </Paragraph>
        <div className="mt-6 flex items-center justify-between">
          <Paragraph>
            Meet the brilliant minds driving innovation and success
            atTechHarbor. Our diverse
            <br /> and skilled team is dedicated to delivering exceptional
            solutions and providing
            <br /> unparalleled support
          </Paragraph>
          <div className="gap-3 flex">
            <Button
              onClick={handlePrev}
              buttonText={<FaArrowLeft />}
              className={
                "border border-primary-white hover:bg-accent-orange border-opacity-15 h-fit rounded-full p-2.5"
              }
            />
            <Button
              onClick={handleNext}
              buttonText={<FaArrowRight />}
              className={
                "border border-primary-white hover:bg-accent-orange border-opacity-15 h-fit rounded-full p-2.5"
              }
            />
          </div>
        </div>
        <div className="mt-6">
          <PromoCarousel data={data} carouselRef={carouselRef} />
        </div>
        <div className="flex mt-4 pb-8 justify-center">
          <Button
            buttonText={"Lihat Semua Promo"}
            className={
              "border font-brineue-regular border-primary-white bg-accent-orange border-opacity-15 h-fit rounded-full py-2 px-4"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HomePromo;
