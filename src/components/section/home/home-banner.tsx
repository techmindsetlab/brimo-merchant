"use client";
import React from "react";
import Image from "next/image";
import Button from "../../base/button";
import FadeInLeft from "../../animation/fadeInLeft";
import FadeInRight from "@/components/animation/fadeInRight";
import FadeInOpacity from "@/components/animation/fadeIn";

const HomeBanner = () => {
  return (
    <FadeInOpacity duration={800} className="home-container" style="flex relative bg-pattern">
      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <FadeInLeft className="banner-title" style="relative" duration={1000}>
          <h1 className="font-brineue-bold text-[3rem] lg:text-[3.5rem] leading-[3rem] lg:leading-[3.5rem]  text-primary-blue">
            Usaha lancar <br />
            transaksi <span className=" text-secondary-blue">praktis</span>{" "}
            <br />
            cairnya gampang
          </h1>
          <Image src="/icons/orange_list.svg" className="absolute -z-10 right-[5rem] -bottom-4" alt="" width={270} height={270} />
        </FadeInLeft>
        <FadeInLeft className="banner-subtitle" duration={1200}>
          <p className="text-primary-blue mt-10 lg:mt-6">Gabung BRImerchant sekarang!</p>
        </FadeInLeft>
        <FadeInLeft className="banner-button" duration={1400}>
          <Button
            buttonText={"Daftar Sekarang"}
            className={
              "rounded-3xl w-fit font-jakarta mt-8 text-lg px-6 py-2 text-primary-white text-center bg-primary-blue"
            }
          />
        </FadeInLeft>
      </div>
      <Image
        src="/images/bg_banner.png"
        alt=""
        className="absolute w-full hidden lg:block -top-24 -right-24"
        width={1700}
        height={1700}
      />
      <div className="hidden lg:flex justify-between z-20 lg:w-[65%]">
        <FadeInRight style="z-20" className="phone-image" duration={1000}>
          <Image
            src="/images/dummy_hero_phone.png"
            alt=""
            className="ml-12"
            width={300}
            height={300}
          />
        </FadeInRight>
        <FadeInRight style="z-10 absolute right-20" className="person-image" duration={1200}>
          <Image
            src="/images/dummy_hero_person.png"
            alt=""
            className=""
            width={440}
            height={300}
          />
        </FadeInRight>
      </div>
    </FadeInOpacity>
  );
};

export default HomeBanner;
