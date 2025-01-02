"use client";
import React, { useState } from "react";
import Filter from "../../base/filter";
import Paragraph from "../../base/paragraph";
import Image from "next/image";
import { EDCData, statisData } from "@/helpers/const";
import Button from "../../base/button";

const HomeBenefit = () => {
  const [activeFilter, setActiveFilter] = useState<number>(0);
  const filter = ["EDC", "QRIS Dinamis", "QRIS"];
  const filteredData = activeFilter === 0 ? EDCData : statisData;
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Filter
          filter={filter}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <Paragraph
          fontUbuntu
          className="text-3xl text-primary-blue mt-8 font-bold"
        >
          {activeFilter === 0
            ? "Kenapa harus Mendaftar EDC + QRIS Dinamis BRI"
            : "Kenapa harus Mendaftar QRIS Statis"}
        </Paragraph>
        {activeFilter === 0 ? (
          <Paragraph className="text-primary-blue text-center font-brineue-regular mt-2">
            Mesin Electronic Data Capture (EDC) yang dapat digunakan untuk
            menerima transaksi pembayaran dengan menggunakan Kartu
            <br /> Debit, Kartu Kredit, Kartu Prepaid, serta QRIS yang tentunya
            memudahkan transaksi, lebih cepat, dan terjaga keamanannya.
          </Paragraph>
        ) : (
          <Paragraph className="text-primary-blue text-center font-brineue-regular mt-2">
            QRIS atau Quick Response Code Indonesian Standard adalah
            standarisasi pembayaran menggunakan metode QR Code dari
            <br /> Bank Indonesia agar proses transaksi dengan QR Code menjadi
            lebih mudah, cepat, dan terjaga keamanannya.
          </Paragraph>
        )}
      </div>
      <div className="flex gap-3 mt-6 justify-center">
        {filteredData.map((item, index) => (
          <div key={index} className="flex flex-col w-[25%] items-center">
            <Image
              width={250}
              height={250}
              src={item.icon}
              className="z-10"
              alt=""
            />
            <div className="bg-primary-blue -mt-20 text-center pt-20 h-[17rem] px-4 rounded-2xl">
              <Paragraph className="text-primary-white text-xl font-brineue-bold">
                {item.title}
              </Paragraph>
              <Paragraph className="text-primary-white mt-2">
                {item.description}
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          buttonText={"Lihat Semua"}
          className={
            "rounded-3xl w-fit font-jakarta mt-8 hidden md:block text-md px-6 py-2 text-primary-white text-center bg-primary-blue"
          }
        />
      </div>
    </div>
  );
};

export default HomeBenefit;
