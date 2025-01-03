import React from "react";
import Image from "next/image";
import Paragraph from "../../base/paragraph";
import Button from "../../base/button";

const HomeDescription = () => {
  return (
    <div className="grid max-w-screen-2xl mx-auto lg:flex">
      <div className="relative lg:block hidden">
        <Image
          src="/images/bg_blue_description.png"
          alt=""
          width={600}
          className="absolute bottom-6 -z-10 "
          height={600}
        />
        <Image
          src="/images/description_section.png"
          alt=""
          width={600}
          height={600}
        />
      </div>

      <div className="lg:w-[50%] lg:pl-16 px-4">
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
            "rounded-3xl font-jakarta w-fit mt-8 text-md px-6 py-3 text-primary-white text-center bg-primary-blue"
          }
        />
        <div className="grid lg:flex lg:justify-between mt-8">
          <div className="relative bg-secondary-blue h-[9rem] lg:h-[19rem] w-full lg:w-[50%] flex flex-col items-center justify-center rounded-xl text-primary-white font-brineue-bold overflow-hidden">
            {/* Lengkungan Biru Muda */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-primary-blue"
              style={{
                clipPath: "circle(84.6% at 12% 23%)",
              }}
            ></div>

            {/* Konten */}
            <div className="relative flex flex-col items-center justify-center z-10">
              <Paragraph className="text-3xl lg:text-5xl">10K+</Paragraph>
              <Paragraph className="text-2xl mt-2 lg:mt-0 lg:text-xl">
                Total Merchant
              </Paragraph>
            </div>
          </div>
          <div className="w-full lg:w-[45%] gap-2 lg:gap-0 mt-2 lg:mt-0 lg:flex-col flex justify-between h-[19rem]">
            <div className="relative lg:flex-row flex-col w-full h-[80%] lg:h-[48%] gap-3 rounded-xl flex items-center justify-center bg-secondary-blue overflow-hidden">
              <div
                className="absolute top-0 right-0 w-full h-full bg-primary-blue"
                style={{
                  clipPath: "circle(89.5% at 23% 0)",
                }}
              ></div>

              <div className="relative flex flex-col lg:flex-row items-center justify-center z-10">
                <Paragraph className="text-primary-white font-brineue-bold text-3xl">
                  1.000+
                </Paragraph>
                <Paragraph className="font-brineue-bold text-xl text-primary-white lg:ml-3">
                  Transaksi
                  <br />
                  Merchant
                </Paragraph>
              </div>
            </div>

            <div className="relative  flex-col lg:flex-row h-[80%] lg:h-[48%] w-full gap-3 lg:gap-5 rounded-xl flex items-center justify-center bg-secondary-blue overflow-hidden">
              <div
                className="absolute top-0 right-0 w-full h-full bg-primary-blue"
                style={{
                  clipPath: "circle(89.5% at 23% 0)",
                }}
              ></div>

              <div className="relative flex flex-col lg:flex-row items-center justify-center z-10">
                <Paragraph className="text-primary-white font-brineue-bold text-3xl">
                  6.9+
                </Paragraph>
                <Paragraph className="font-brineue-bold text-xl text-primary-white lg:ml-3">
                  Rating
                  <br />
                  Aplikasi
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDescription;
