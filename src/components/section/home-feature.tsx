import React from "react";
import Paragraph from "../base/paragraph";
import Button from "../base/button";
import Image from "next/image";

const HomeFeature = () => {
  return (
    <div className="flex gap-8">
      <div className="w-[45%]">
        <Paragraph className="font-brineue-bold text-[3rem] leading-[3.5rem]">
          <span className="text-secondary-blue">Kenapa Harus</span>
          <br />
          <span className="text-accent-orange">Jadi Merchant BRI?</span>
        </Paragraph>
        <Paragraph className="text-primary-blue mt-3">
          Nikmati kemudahan menerima pembayaran dari berbagai metode
          <br /> QRIS, kartu debit/kredit, hingga e-wallet semuanya dalam satu
          <br /> platform yang mudah digunakan.
        </Paragraph>
        <Paragraph className="text-primary-blue mt-4">
          BRI Merchant untuk solusi pembayaran yang lengkap, aman, dan
          <br /> mempermudah pengelolaan usaha Anda di era digital!
        </Paragraph>
        <Button
          buttonText={"Lihat Selengkapnya"}
          className={
            "rounded-3xl w-fit mt-8 font-bold text-sm px-6 py-3 text-primary-white text-center bg-accent-orange"
          }
        />
      </div>
      <div className="w-[50%] grid gap-4 grid-cols-2">
        <div className="bg-primary-blue mt-4 rounded-xl p-5">
          <Image
            src="/icons/hifi_icon.svg"
            className="-ml-3"
            alt=""
            width={70}
            height={70}
          />
          <Paragraph className="font-brineue-bold mt-2 text-xl">
            Daftar QRIS Tanpa
            <br /> Ninggalin Usaha
          </Paragraph>
          <Paragraph className="mt-4 text-[14px]">
            Anda dapat daftar QRIS melalui aplikasi BRImerchant dan jadi dalam
            waktu 5<br /> menit!
          </Paragraph>
        </div>
        <div className="bg-secondary-blue h-fit rounded-xl p-5 ">
          <Image
            src="/icons/bell_icon.svg"
            className=""
            alt=""
            width={70}
            height={70}
          />
          <Paragraph className="font-brineue-bold mt-2 text-xl">
            Notifikasi Suara Uang
            <br /> Masuk
          </Paragraph>
          <Paragraph className="mt-4 text-[14px]">
            Protect your investment and travel with peace of mind with
            comprehensive travel insurance options tailored to your specific.
          </Paragraph>
        </div>
        <div className="bg-secondary-blue h-fit rounded-xl p-5">
          <Image
            src="/icons/coin_icon.svg"
            className="-ml-3"
            alt=""
            width={70}
            height={70}
          />
          <Paragraph className="font-brineue-bold text-xl">Gratis!</Paragraph>
          <Paragraph className="mt-4 text-[14px]">
            Pembuatan QRIS di BRImerchant tidak
            <br /> dipungut biaya apapun
          </Paragraph>
        </div>
        <div className="bg-primary-blue -mt-2 rounded-xl p-5">
          <Image
            src="/icons/card_icon.svg"
            alt=""
            width={70}
            height={70}
          />
          <Paragraph className="font-brineue-bold mt-4 text-xl">
            Uang Masuk Lebih Pasti
          </Paragraph>
          <Paragraph className="mt-4 text-[14px]">
            Dengan QRIS Dinamis di BRImerchant,
            <br /> atur sendiri nominal yang perlu dibayar
            <br /> oleh pelanggan
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
