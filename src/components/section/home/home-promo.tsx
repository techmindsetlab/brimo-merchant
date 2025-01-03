"use client";
import React, { useRef } from "react";
import Paragraph from "../../base/paragraph";
import Button from "../../base/button";
import CarouselItem from "../../base/carousel";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";

interface Props {
  data: {
    id: number;
    title: string;
    image: string;
  }[];
  title?: string;
}

const HomePromo = ({ data, title }: Props) => {
  const carouselRef = useRef<Carousel | null>(null);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/detail-promo`);
  };

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
          {title}
        </Paragraph>
        <div className="mt-6 flex items-center text-primary-blue justify-between">
          <Paragraph>
            Meet the brilliant minds driving innovation and success
            atTechHarbor. Our diverse
            <br /> and skilled team is dedicated to delivering exceptional
            solutions and providing
            <br /> unparalleled support
          </Paragraph>

          {/* DESKTOP RESPONSIVE BUTTON */}
          <div className="gap-5 hidden lg:flex">
            <Button
              onClick={handlePrev}
              buttonText={
                <IoIosArrowRoundBack size={50} className="text-primary-blue" />
              }
              className=""
            />
            <Button
              onClick={handleNext}
              buttonText={
                <IoIosArrowRoundForward
                  size={50}
                  className="text-primary-blue"
                />
              }
              className=""
            />
          </div>
        </div>
        <div className="mt-6">
          <CarouselItem ref={carouselRef}>
            {data.map((item) => (
              <div
                onClick={handleClick}
                key={item.id}
                className="lg:mr-4 cursor-pointer h-[16rem] lg:h-[18rem]"
              >
                <Image
                  src={item.image}
                  alt=""
                  width={1500}
                  height={1000}
                  className="h-[12.5rem] w-full object-cover"
                />
                <Paragraph className="font-brineue-bold text-primary-blue mt-4">
                  {item.title}
                </Paragraph>
              </div>
            ))}
          </CarouselItem>
        </div>

        {/* MOBILE BUTTON RESPONSIVE */}
        <div className="gap-5 lg:hidden justify-center flex">
          <Button
            onClick={handlePrev}
            buttonText={<IoIosArrowRoundBack className="text-primary-blue" />}
            className=""
          />
          <Button
            onClick={handleNext}
            buttonText={
              <IoIosArrowRoundForward className="text-primary-blue" />
            }
            className=""
          />
        </div>
        <div className="flex mt-8 lg:mt-4 pb-8 justify-center">
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
