import React from "react";
import Paragraph from "@/components/base/paragraph";
import Image from "next/image";
import { EDCData } from "@/helpers/const";
import FadeInFromBottom from "@/components/animation/fadeInBottom";

const EDCSection = () => {
  return (
    <div className="flex gap-3 mt-6 justify-center">
      {EDCData.map((item, index) => (
        <FadeInFromBottom
          key={index}
          duration={400 * index}
          style="flex flex-col w-[25%] items-center"
          className={`edc-item-${index}`}
        >
          <Image
            width={200}
            height={200}
            src={item.icon}
            className="z-10"
            alt=""
          />
          <div className="bg-primary-blue w-full -mt-12 text-center pt-20 h-[14rem] px-4 rounded-2xl">
            <Paragraph className="text-primary-white text-lg font-brineue-bold">
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

export default EDCSection;
