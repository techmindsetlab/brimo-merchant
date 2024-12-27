import React from "react";
import Image from "next/image";
import Paragraph from "../base/paragraph";
import Button from "../base/button";

const HomeDescription = () => {
  return (
    <div className="flex">
      <Image src="/images/description_section.png" alt="" width={600} height={600} />
      <div className="pl-20">
        <Paragraph className="font-brineue-bold text-[3rem] leading-[3.5rem]  text-secondary-blue">
          Pakai Aplikasi BRIMerchant
          <br /> Monitoring Usaha Jadi <br />
          Gampang!
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
            "rounded-3xl w-fit mt-8 font-bold text-sm px-6 py-3 text-primary-white text-center bg-accent-orange"
          }
        />
        <div className="flex justify-between mt-8">
          <div className="bg-primary-blue h-56 w-[50%] flex flex-col items-center justify-center rounded-xl text-primary-white font-brineue-bold">
            <Paragraph className="text-5xl">10K+</Paragraph>
            <Paragraph className="text-xl">Total Merchant</Paragraph>
          </div>
          <div className="w-[45%] flex-col flex justify-between h-56">
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
