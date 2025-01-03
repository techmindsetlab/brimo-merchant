import React from "react";
import Paragraph from "../../base/paragraph";
import Image from "next/image";

const HomeFeature = () => {
  return (
    <div className="grid grid-cols-2 lg:flex gap-8">
      <div className="flex flex-col lg:w-[25%] justify-center items-center">
        <div className="w-[80%] z-10 -mb-10">
          <Image
            src="/icons/people_stars.svg"
            className="w-full"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div className="relative bg-secondary-blue text-center h-[15rem] rounded-xl p-2 lg:py-12 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full bg-primary-blue"
            style={{
              clipPath: "circle(87.9% at 7% 20%)",
            }}
          ></div>

          <div className="relative z-10">
            <Paragraph className="font-brineue-bold leading-6 mt-2 text-xl text-primary-white">
              200ribu+ merchant telah bergabung dengan BRImerchant
            </Paragraph>
            <Paragraph className="mt-4 text-[14px] text-primary-white">
              Ribuan merchant telah bergabung
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:w-[25%] justify-center items-center">
        <div className="w-[80%] z-10 -mb-10">
          <Image
            src="/icons/phone_love.svg"
            className="w-full"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div className="relative bg-secondary-blue text-center pt-12 h-full rounded-xl p-5 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full bg-primary-blue"
            style={{
              clipPath: "circle(87.9% at 7% 20%)",
            }}
          ></div>

          <div className="relative z-10">
            <Paragraph className="font-brineue-bold mt-2 text-xl text-primary-white">
              Daftar QRIS Gratis Tanpa Ninggalin Usaha
            </Paragraph>
            <Paragraph className="mt-4 text-[14px] text-primary-white">
              Buka QRIS melalui BRImerchant langsung jadi dalam 5 menit!
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:w-[25%] justify-center items-center">
        <div className="w-[80%] z-10 -mb-10">
          <Image
            src="/icons/phone_comment.svg"
            className="w-full"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div className="relative bg-secondary-blue text-center pt-12 h-full rounded-xl p-5 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full bg-primary-blue"
            style={{
              clipPath: "circle(87.9% at 7% 20%)",
            }}
          ></div>

          <div className="relative z-10">
            <Paragraph className="font-brineue-bold mt-2 text-xl text-primary-white">
              Notifikasi Suara Uang Masuk
            </Paragraph>
            <Paragraph className="mt-4 text-[14px] text-primary-white">
              Pantau semua uang masuk dengan fitur notifikasi suara BRImerchant
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:w-[25%] justify-center items-center">
        <div className="w-[80%] z-10 -mb-10">
          <Image
            src="/icons/phone_hand.svg"
            className="w-full"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div className="relative bg-secondary-blue text-center pt-12 h-full rounded-xl p-5 overflow-hidden">
          {/* Background Lengkungan */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-primary-blue"
            style={{
              clipPath: "circle(87.9% at 7% 20%)",
            }}
          ></div>

          {/* Konten */}
          <div className="relative z-10">
            <Paragraph className="font-brineue-bold mt-2 text-xl text-primary-white">
              Pantau Usaha dari Jauh
            </Paragraph>
            <Paragraph className="mt-4 text-[14px] text-primary-white">
              Pantau performa usaha dalam genggaman dengan dashboard performa
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
