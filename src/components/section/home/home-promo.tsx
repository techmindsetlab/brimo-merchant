"use client";
import React, { useRef } from "react";
import Paragraph from "../../base/paragraph";
import Button from "../../base/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CarouselItem from "../../base/carousel";
import Carousel from "react-multi-carousel";
import Image from "next/image";

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
    <div className="bg-primary-white">
      <div className="max-w-screen-xl px-4 pt-12 mx-auto">
        <Paragraph className="font-brineue-bold text-primary-blue text-5xl">
          Promo Special/Hot Over
        </Paragraph>
        <div className="mt-6 flex items-center text-primary-blue justify-between">
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
              buttonText={
                <FaArrowLeft className="text-primary-blue hover:text-primary-white" />
              }
              className={
                "border border-primary-blue hover:bg-primary-blue border-opacity-15 h-fit rounded-full p-2.5"
              }
            />
            <Button
              onClick={handleNext}
              buttonText={
                <FaArrowRight className="text-primary-blue hover:text-primary-white" />
              }
              className={
                "border border-primary-blue hover:bg-primary-blue border-opacity-15 h-fit rounded-full p-2.5"
              }
            />
          </div>
        </div>
        <div className="mt-6">
          <CarouselItem ref={carouselRef}>
            {data.map((item) => (
              <div key={item.id} className="mr-4 h-[18rem]">
                <Image src={item.image} alt="" width={1000} height={1000} />
                <Paragraph className="font-brineue-bold text-primary-blue mt-4">
                  {item.title}
                </Paragraph>
              </div>
            ))}
          </CarouselItem>
        </div>
        <div className="flex mt-4 pb-8 justify-center">
          <Button
            buttonText={"Lihat Semua Promo"}
            className={
              "border font-jakarta border-primary-white bg-primary-blue border-opacity-15 h-fit rounded-full py-3 px-4"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HomePromo;