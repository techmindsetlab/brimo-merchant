"use client";
import React, { useState } from "react";
import Filter from "../../base/filter";
import Paragraph from "../../base/paragraph";
import Button from "../../base/button";
import EDCSection from "./edc-section";
import QRISDinamisSection from "./qris-dinamis-section";
import QRISSection from "./qris-section";

const HomeBenefit = () => {
  const [activeFilter, setActiveFilter] = useState<number>(0);
  const filter = ["EDC", "QRIS Dinamis", "QRIS"];
  return (
    <div className="px-4 lg:px-0">
      <div className="flex flex-col items-center justify-center">
        <Filter
          filter={filter}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <Paragraph
          fontUbuntu
          className="text-3xl text-center text-primary-blue mt-8 font-bold"
        >
          {activeFilter === 0
            ? "Kenapa harus Mendaftar EDC BRI"
            : activeFilter === 1
            ? "Kenapa harus Mendaftar QRIS Dinamis BRI"
            : "Kenapa harus Mendaftar QRIS Statis"}
        </Paragraph>
        {activeFilter === 0 ? (
          <Paragraph className="text-primary-blue text-center font-brineue-regular mt-2">
            Mesin Electronic Data Capture (EDC) yang dapat digunakan untuk
            menerima transaksi pembayaran dengan menggunakan Kartu
            <br /> Debit, Kartu Kredit, Kartu Prepaid, serta QRIS yang tentunya
            memudahkan transaksi, lebih cepat, dan terjaga keamanannya.
          </Paragraph>
        ) : activeFilter === 1 ? (
          <Paragraph className="text-primary-blue text-center font-brineue-regular mt-2">
            Mesin Electronic Data Capture (EDC) yang dapat digunakan untuk
            menerima transaksi pembayaran dengan menggunakan Kartu <br /> Debit,
            Kartu Kredit, Kartu Prepaid, serta QRIS yang tentunya memudahkan
            transaksi, lebih cepat, dan terjaga keamanannya.
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
      {activeFilter === 0 ? (
        <EDCSection />
      ) : activeFilter === 1 ? (
        <QRISDinamisSection />
      ) : (
        <QRISSection />
      )}
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
