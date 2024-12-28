"use client";
import React, { useRef } from "react";
import Paragraph from "../base/paragraph";
import Image from "next/image";
import CarouselItem from "../base/carousel";
import Carousel from "react-multi-carousel";
import { stepMerchant } from "@/helpers/const";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../base/button";

interface Props {
  containerStyle: string;
}

const HomeMerchantStep = ({ containerStyle }: Props) => {
  const stepRef = useRef<Carousel | null>(null);

  const handlePrev = () => {
    if (stepRef.current) {
      stepRef.current.previous(1);
    }
  };

  const handleNext = () => {
    if (stepRef.current) {
      stepRef.current.next(1);
    }
  };
  return (
    <div className={containerStyle}>
      <Paragraph className="text-center font-brineue-bold text-accent-orange text-4xl">
        Langkah Mudah Jadi
      </Paragraph>
      <div className="flex justify-center -mt-6">
        <Image
          src="/images/brimo_merchant_logo.png"
          alt=""
          width={230}
          height={230}
        />
      </div>
      <CarouselItem ref={stepRef}>
        {stepMerchant.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-full mt-6 mr-3 rounded-[20px] p-5 shadow-sm bg-tertiary-blue items-center justify-center gap-4"
          >
            <Image src={item.image} alt="" width={170} height={170} />
            <div className="flex items-center justify-center relative w-full">
              <Paragraph className="text-center w-[40%] leading-5 text-primary-blue font-brineue-bold text-md">
                {item.title}
              </Paragraph>
              <Image
                src={item.icon}
                alt=""
                width={20}
                height={20}
                className="right-0 absolute"
              />
            </div>

            <Paragraph className="text-center text-primary-blue text-sm">
              {item.description}
            </Paragraph>
          </div>
        ))}
      </CarouselItem>
      <div className="gap-6 mt-12 justify-center flex">
        <Button
          onClick={handlePrev}
          buttonText={
            <FaArrowLeft
              size={25}
              className="text-accent-orange group-hover:text-primary-white transition-colors duration-200"
            />
          }
          className={
            "border border-accent-orange hover:bg-accent-orange border-opacity-15 h-fit rounded-full p-2.5 group"
          }
        />
        <Button
          onClick={handleNext}
          buttonText={
            <FaArrowRight
              size={25}
              className="text-accent-orange group-hover:text-primary-white transition-colors duration-200"
            />
          }
          className={
            "border border-accent-orange hover:bg-accent-orange border-opacity-15 h-fit rounded-full p-2.5 group"
          }
        />
      </div>
    </div>
  );
};

export default HomeMerchantStep;
