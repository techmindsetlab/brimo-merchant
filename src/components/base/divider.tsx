"use client";
import { merchantIcon } from "@/helpers/const";
import React from "react";
import Image from "next/image";
import FadeInRight from "../animation/fadeInRight";

const Divider = () => {
  return (
    <div className="bg-primary-white flex justify-between py-12 z-20 w-full">
      {merchantIcon.map((item, index) => (
        <FadeInRight key={index} duration={index * 200} className="image-merchant-icon">
          <Image  width={150} height={100} src={item} alt="" />
        </FadeInRight>
      ))}
    </div>
  );
};

export default Divider;
