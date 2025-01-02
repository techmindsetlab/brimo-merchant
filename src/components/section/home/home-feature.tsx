import React from "react";
import Paragraph from "../../base/paragraph";
import Image from "next/image";

const HomeFeature = () => {
  return (
    <div className="grid lg:flex gap-8">
      <div className="flex flex-col w-[25%] justify-center items-center">
        <div className="w-[80%] z-10 -mb-10">
          <Image
            src="/icons/people_stars.svg"
            className="w-full"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div className="bg-secondary-blue text-center py-12 h-full rounded-xl p-5">
          <Paragraph className="font-brineue-bold leading-6 mt-2 text-xl">
            200ribu+ merchant telah bergabung dengan BRImerchant
          </Paragraph>
          <Paragraph className="mt-4 text-[14px]">
            Ribuan merchant telah bergabung
          </Paragraph>
        </div>
      </div>

      <div className="flex flex-col w-[25%] justify-center items-center">
        <div className="w-[80%] z-10 -mb-10">
          <Image
            src="/icons/people_stars.svg"
            className="w-full"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div className="bg-primary-blue text-center pt-12 h-full rounded-xl p-5">
          <Paragraph className="font-brineue-bold mt-2 text-xl">
            Daftar QRIS Gratis Tanpa Ninggalin Usaha
          </Paragraph>
          <Paragraph className="mt-4 text-[14px]">
            Buka QRIS melalui BRImerchant langsung jadi dalam 5 menit!
          </Paragraph>
        </div>
      </div>

      <div className="flex flex-col w-[25%] justify-center items-center">
        <div className="w-[80%] z-10 -mb-10">
          <Image
            src="/icons/people_stars.svg"
            className="w-full"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div className="bg-secondary-blue text-center pt-12 h-full rounded-xl p-5">
          <Paragraph className="font-brineue-bold mt-2 text-xl">
            Notifikasi Suara Uang Masuk
          </Paragraph>
          <Paragraph className="mt-4 text-[14px]">
            Pantau semua uang masuk dengan fitur notifikasi suara BRImerchant
          </Paragraph>
        </div>
      </div>

      <div className="flex flex-col w-[25%] justify-center items-center">
        <div className="w-[80%] z-10 -mb-10">
          <Image
            src="/icons/people_stars.svg"
            className="w-full"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div className="bg-primary-blue text-center pt-12 h-full rounded-xl p-5">
          <Paragraph className="font-brineue-bold mt-2 text-xl">
            Pantau Usaha dari Jauh
          </Paragraph>
          <Paragraph className="mt-4 text-[14px]">
            Pantau performa usaha dalam genggaman dengan dashboard performa
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
