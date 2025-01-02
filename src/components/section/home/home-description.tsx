import React from "react";
import Image from "next/image";
import Paragraph from "../../base/paragraph";
import Button from "../../base/button";

const HomeDescription = () => {
  return (
    <div className="grid lg:flex">
      <div className="relative">
        <Image
          src="/images/bg_blue_description.png"
          alt=""
          width={600}
          className="absolute bottom-6 -z-10 -ml-12"
          height={600}
        />
        <Image
          src="/images/description_section.png"
          alt=""
          width={600}
          height={600}
        />
      </div>

      <div className="w-[50%] lg:pl-16 pl-4">
        <Paragraph className="font-brineue-bold text-[3rem] leading-[3rem] grid text-secondary-blue">
          <span className="text-primary-blue">Kenapa Harus Jadi</span>
          <span>Merchant BRI?</span>
        </Paragraph>
        <Paragraph className="text-lg text-primary-blue mt-6">
          Aplikasi BRImerchant merupakan one stop solution yang dapat menjawab
          <br />
          seluruh kebutuhan merchant BRI mulai dari Merchant Onboarding,
          Monitoring
          <br /> Payment, Complaint Handling, serta fitur pendukung
          produktifitas merchant.
        </Paragraph>
        <Button
          buttonText={"Lihat Selengkapnya"}
          className={
            "rounded-3xl font-jakarta w-fit mt-8 text-sm px-6 py-3 text-primary-white text-center bg-primary-blue"
          }
        />
        <div className="grid lg:flex lg:justify-between mt-8">
          <div className="bg-primary-blue h-[19rem] w-full lg:w-[50%] flex flex-col items-center justify-center rounded-xl text-primary-white font-brineue-bold">
            <Paragraph className="text-3xl lg:text-5xl">10K+</Paragraph>
            <Paragraph className="text-lg lg:text-xl">Total Merchant</Paragraph>
          </div>
          <div className="w-full lg:w-[45%] flex-col flex justify-between h-[19rem]">
            <div className="flex-row h-[48%] gap-3 rounded-xl flex items-center justify-center bg-secondary-blue">
              <Paragraph className="text-primary-white font-brineue-bold text-3xl">
                1.000+
              </Paragraph>
              <Paragraph className="font-brineue-bold text-2xl text-primary-white">
                Transaksi
                <br />
                Merchant
              </Paragraph>
            </div>
            <div className="flex-row h-[48%] gap-5 rounded-xl flex items-center justify-center bg-secondary-blue">
              <Paragraph className="text-primary-white font-brineue-bold text-3xl">
                6.9+
              </Paragraph>
              <Paragraph className="font-brineue-bold text-2xl text-primary-white">
                Rating
                <br />
                Aplikasi
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDescription;
