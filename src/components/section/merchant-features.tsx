import React from "react";
import Paragraph from "../base/paragraph";
import Image from "next/image";
import Button from "../base/button";

const MerchantFeatures = () => {
  return (
    <div className="relative mt-12 rounded-t-[3rem]">
      <Image
        src="/images/hero_feature.png"
        alt="Hero Background"
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute rounded-t-[3rem]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary-blue/80 rounded-t-[3rem]" />

      <div className="relative p-14">
        <div className="bg-[#C4C4C4]/20 border border-primary-white h-[30rem] px-24 py-12 backdrop-blur-md shadow-lg rounded-[3rem]">
          <div className="flex items-center">
            <div
              className="h-[1px] w-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%)",
              }}
            />
            <Paragraph className="font-brineue-bold text-4xl w-[80%] text-center text-primary-white">
              Fitur BRIMerchant
            </Paragraph>
            <div
              className="h-[1px] w-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            />
          </div>
          <Paragraph className="text-center text-sm mt-4 text-primary-white">
            Fitur utama Aplikasi BRIMerchant
          </Paragraph>
          <div className="flex justify-center gap-24 mt-16">
            <div className="space-y-2 text-center">
              <Image
                src="/icons/pendaftaran.svg"
                alt="Pendaftaran QRIS"
                width={150}
                height={150}
              />
              <Paragraph className="font-brineue-bold text-sm text-primary-white">
                PENDAFTARAN QRIS
              </Paragraph>
            </div>
            <div className="space-y-2 text-center">
              <Image
                src="/icons/metode.svg"
                alt="Metode Pembayaran"
                width={150}
                height={150}
              />
              <Paragraph className="font-brineue-bold text-sm text-primary-white">
                METODE PEMBAYARAN
              </Paragraph>
            </div>
            <div className="space-y-2 text-center">
              <Image
                src="/icons/integrasi.svg"
                alt="Integrasi E-Wallet"
                width={150}
                height={150}
              />
              <Paragraph className="font-brineue-bold text-sm text-primary-white">
                INTEGRASI E-WALLET
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="max-w-[70%] flex flex-col items-center justify-center mt-8 mx-auto text-center">
          <Paragraph className="text-lg">
            Aplikasi BRImerchant merupakan one stop app solution yang dapat
            menjawab seluruh kebutuhan merchant BRI mulai dari Merchant
            Onboarding, Monitoring Payment, Complaint Handling, serta fitur
            pendukung
            <br /> produktifitas merchant.
          </Paragraph>
          <Button
            buttonText={"Daftar Sekarang"}
            className={
              "rounded-3xl w-fit mt-8 hidden md:block text-sm px-6 py-2 text-primary-white text-center bg-accent-orange"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MerchantFeatures;
