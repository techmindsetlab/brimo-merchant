import React from "react";
import Paragraph from "../../base/paragraph";
import Image from "next/image";
import Button from "../../base/button";

const MerchantFeatures = () => {
  return (
    <div className="relative mt-20 bg-blue-wavy bg-cover bg-no-repeat">
      <div className="relative mx-8 px-16 xl-wide:py-56 py-36">
        <div className="h-[30rem] px-24 py-14">
          <div className="flex justify-center gap-2 items-center">
            <Paragraph className="font-brineue-bold ml-6 text-4xl text-primary-white">
              Fitur
            </Paragraph>
            <Image
              src="/icons/bri_merchant_white.svg"
              alt=""
              width={220}
              height={220}
            />
          </div>

          <Paragraph className="text-center text-sm mt-4 text-primary-white">
            Fitur utama Aplikasi BRIMerchant
          </Paragraph>
          <div className="flex justify-center gap-32 mt-16">
            <div className="space-y-2 text-center">
              <Image
                src="/icons/phone_handled.svg"
                alt="Pendaftaran QRIS"
                width={200}
                height={200}
              />
              <Paragraph className="font-brineue-bold text-sm uppercase text-primary-white">
                Monitoring
                <br />
                Detail Transaksi
              </Paragraph>
            </div>
            <div className="space-y-2 text-center">
              <Image
                src="/icons/phone_touched.svg"
                alt="Metode Pembayaran"
                width={200}
                height={200}
              />
              <Paragraph className="font-brineue-bold uppercase text-sm text-primary-white">
                Download Laporan
                <br />
                Settlement & Transaksi
              </Paragraph>
            </div>
            <div className="space-y-2 text-center">
              <Image
                src="/icons/2_phone.svg"
                alt="Integrasi E-Wallet"
                width={200}
                height={200}
              />
              <Paragraph className="font-brineue-bold uppercase text-sm text-primary-white">
                User
                <br />
                Management
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
            buttonText={"Lihat Semua Fitur"}
            className={
              "rounded-3xl font-jakarta w-fit mt-8 hidden md:block text-lg px-6 py-2 text-primary-white text-center bg-secondary-blue"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MerchantFeatures;
