import React from "react";
import Image from "next/image";
import Paragraph from "@/components/base/paragraph";
import { FaCheck } from "react-icons/fa6";
import HomeFAQ from "@/components/section/home/home-faq";
import { FAQDummy, promoDummy } from "@/helpers/dummy";
import HomePromo from "@/components/section/home/home-promo";

const DetailPromo = () => {
  const dummyData = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, id.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, id.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, id.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, id.",
  ];
  return (
    <div>
      <Image
        src="/images/dummy_promo_header.png"
        alt=""
        width={1000}
        height={1000}
        className="max-w-screen-xl w-full mx-auto mt-24"
      />
      <div className="max-w-screen-xl px-4 mx-auto">
        <Paragraph className="font-brineue-bold text-[3rem] leading-[3rem] text-primary-blue mt-12">
          Jadi Merchant BRI
          <br /> Lebih Mudah dengan BRIMerchant
        </Paragraph>
        <Paragraph fontUbuntu className="text-primary-blue mt-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          <br />
          inventore nobis ratione! Consequuntur sint itaque asperiores velit in
          veritatis et?
        </Paragraph>
        <Paragraph
          className="font-bold text-primary-blue mt-6 italic"
          fontUbuntu
        >
          Berlaku hingga : 25 Desember 2025
        </Paragraph>
      </div>

      {/* SYARAT DAN KETENTUAN SECTION */}
      <div className="bg-blue-wavy bg-cover bg-no-repeat h-[55rem]">
        <div className="max-w-screen-xl mx-auto px-4">
          <Paragraph className="font-brineue-bold text-[3rem] leading-[3rem] text-primary-white pt-56">
            Syarat & Ketentuan
          </Paragraph>
          <Paragraph fontUbuntu className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            <br />
            dignissimos odio sed mollitia at adipisci, eius expedita blanditiis
            velit veritatis.
          </Paragraph>
          <div>
            {dummyData.map((data, index) => (
              <div key={index} className="flex items-center gap-2 mt-8">
                <div className="bg-accent-orange w-fit rounded-full p-2">
                  <FaCheck color="white" />
                </div>
                <Paragraph className="font-bold" fontUbuntu>
                  {data}
                </Paragraph>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HomePromo title="Promo Special" data={promoDummy} />

      {/* FAQ SECTION */}
      <div className="max-w-screen-xl mt-24 px-4 mx-auto">
        <HomeFAQ items={FAQDummy} />
      </div>
    </div>
  );
};

export default DetailPromo;
