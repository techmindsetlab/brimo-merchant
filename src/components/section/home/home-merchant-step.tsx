"use client";
import React, { useRef } from "react";
import Paragraph from "../../base/paragraph";
import Image from "next/image";
import CarouselItem from "../../base/carousel";
import Carousel from "react-multi-carousel";
import { stepMerchant } from "@/helpers/const";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../../base/button";

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
      <Paragraph className="text-center font-brineue-bold text-primary-blue text-[3rem]">
        Langkah Mudah Jadi
      </Paragraph>
      <div className="flex justify-center -mt-6">
        <Image
          src="/images/brimo_merchant_logo.png"
          alt=""
          className="-mt-2"
          width={250}
          height={250}
        />
      </div>
      <CarouselItem ref={stepRef}>
        {stepMerchant.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-full rounded-[20px] mx-2 p-5 shadow-card bg-tertiary-blue items-center justify-center gap-4"
          >
            <Image src={item.image} alt="" width={120} height={120} />
            <div className="flex items-center relative w-full">
              <Paragraph className="text-left w-[40%] leading-5 text-primary-blue font-brineue-bold text-md">
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

            <Paragraph className="text-left text-primary-blue text-sm">
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
              className="text-primary-blue group-hover:text-primary-white transition-colors duration-200"
            />
          }
          className={
            "border border-primary-blue hover:bg-primary-blue border-opacity-15 h-fit rounded-full p-2.5 group"
          }
        />
        <Button
          onClick={handleNext}
          buttonText={
            <FaArrowRight
              size={25}
              className="text-primary-blue group-hover:text-primary-white transition-colors duration-200"
            />
          }
          className={
            "border border-primary-blue hover:bg-primary-blue border-opacity-15 h-fit rounded-full p-2.5 group"
          }
        />
      </div>
    </div>
  );
};

export default HomeMerchantStep;