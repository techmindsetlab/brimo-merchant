import React from "react";
import Paragraph from "@/components/base/paragraph";
import Image from "next/image";
import { QRISDinamis } from "@/helpers/const";
import FadeInFromBottom from "@/components/animation/fadeInBottom";

const QRISDinamisSection = () => {
  return (
    <div className="flex gap-3 mt-6 justify-center">
      {QRISDinamis.map((item, index) => (
        <FadeInFromBottom
          key={index}
          duration={400 * index}
          style="flex flex-col w-[25%] items-center"
          className={`qris-dinamis-${index}`}
        >
          <Image
            width={180}
            height={180}
            src={item.icon}
            className="z-10"
            alt=""
          />
          <div className="bg-primary-blue -mt-16 text-center pt-20 h-[17rem] px-4 rounded-2xl">
            <Paragraph className="text-primary-white text-xl font-brineue-bold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-primary-white text-md mt-2">
              {item.description}
            </Paragraph>
          </div>
        </FadeInFromBottom>
      ))}
    </div>
  );
};

export default QRISDinamisSection;
