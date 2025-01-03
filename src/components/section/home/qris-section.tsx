import React from "react";
import Paragraph from "@/components/base/paragraph";
import Image from "next/image";
import { QRISData } from "@/helpers/const";
import FadeInFromBottom from "@/components/animation/fadeInBottom";

const QRISSection = () => {
  return (
    <div className="grid grid-cols-2 lg:flex gap-3 mt-12 justify-center">
      {QRISData.map((item, index) => (
        <FadeInFromBottom
          key={index}
          duration={400 * index}
          style="flex flex-col lg:w-[25%] items-center"
          className={`qris-item-${index}`}
        >
          <Image
            width={150}
            height={150}
            src={item.icon}
            className="z-10"
            alt=""
          />
          <div className="bg-primary-blue -mt-16 lg:-mt-20 text-center pt-16 lg:pt-20 h-[14rem] px-4 rounded-2xl">
            <Paragraph className="text-primary-white text-md font-brineue-bold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-primary-white text-sm mt-2">
              {item.description}
            </Paragraph>
          </div>
        </FadeInFromBottom>
      ))}
    </div>
  );
};

export default QRISSection;
