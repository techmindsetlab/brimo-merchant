import React from "react";
import Image from "next/image";
import Button from "../base/button";

const HomeBanner = () => {
  return (
    <div className="flex bg-pattern">
      <div className="w-[50%] flex flex-col justify-center">
        <h1 className="font-brineue-bold  text-[4.5rem] leading-[4.5rem]  text-secondary-blue">
          Dagangan lancar <br />
          transaksi praktis <br />
          cairnya gampang
        </h1>
        <p className="text-primary-blue mt-4">Gabung BRImerchant sekarang!</p>
        <Button
          buttonText={"Daftar Sekarang"}
          className={
            "rounded-3xl w-fit mt-12 hidden md:block text-sm px-6 py-2 text-primary-white text-center bg-accent-orange"
          }
        />
      </div>

      <div className="flex w-[50%]">
        <Image
          src="/dummy_hero_phone.png"
          alt=""
          className="-mr-32 z-10"
          width={300}
          height={300}
        />
        <Image src="/dummy_hero_person.png" alt="" width={300} height={300} />
        <div className="bg-secondary-blue h-[24rem] mt-14 rounded-r-xl w-20" />
      </div>
    </div>
  );
};

export default HomeBanner;
