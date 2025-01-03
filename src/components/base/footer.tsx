import React, { Fragment } from "react";
import Paragraph from "../base/paragraph";
import LocationIcon from "../../../public/icons/location";
import PhoneIcon from "../../../public/icons/phone";
import MailIcon from "../../../public/icons/mail";
import { RiTwitterXFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Button from "../base/button";

const Footer = () => {
  const footerLinks = [
    { id: 1, label: "Privasi", href: "https://bri.co.id/privacy" },
    {
      id: 2,
      label: "Syarat & ketentuan",
      href: "https://bri.co.id/term-of-use",
    },
    {
      id: 3,
      label: "Sitemap",
      href: "https://bri.co.id/term-of-use",
    },
    {
      id: 4,
      label: "Karier",
      href: "https://bri.co.id/term-of-use",
    },
    {
      id: 5,
      label: "CMS BRI",
      href: "https://bri.co.id/term-of-use",
    },
    {
      id: 6,
      label: "E-form BRI",
      href: "https://bri.co.id/term-of-use",
    },
  ];

  const links = [
    { id: 1, label: "Produk BRI", href: "/" },
    { id: 2, label: "Deposit Interest", href: "/" },
    { id: 3, label: "Rates", href: "/" },
    { id: 4, label: "Loan Interest Rest", href: "/" },
    { id: 5, label: "Fees & Rates", href: "/" },
    { id: 6, label: "Whistleblowing System", href: "/" },
    { id: 7, label: "Karier", href: "/" },
  ];

  return (
    <div className="bottom-0 mt-8">
      <div className="flex flex-col relative items-center">
        <Image
          src="/images/footer_images.png"
          alt=""
          width={1000}
          height={1000}
          className="object-cover rounded-t-[3rem] w-full h-full absolute"
        />

        <div className="absolute inset-0 bg-[#DDEFFC] opacity-80 rounded-t-[3rem]" />

        <Paragraph className="text-primary-blue z-10 pt-44 text-lg lg:text-4xl font-brineue-bold">
          Biar #MakinGampangLancarkanBisnis
        </Paragraph>
        <div className="flex items-center z-10 gap-3">
          <Paragraph className="text-primary-blue text-lg lg:text-4xl font-brineue-bold">
            Download
          </Paragraph>
          <Image
            src="/images/brimo_merchant_logo.png"
            alt=""
            width={200}
            height={200}
          />
          <Paragraph className="text-primary-blue text-lg lg:text-4xl font-brineue-bold">
            Sekarang!
          </Paragraph>
        </div>
        <div className="pb-44 relative justify-center top-4 w-[45%] flex z-10 bottom-12">
          <Button
            buttonText={"Download Sekarang"}
            className={
              "rounded-3xl z-10 w-fit h-fit mt-6 hidden md:block text-md px-6 py-2 text-primary-white text-center bg-primary-blue"
            }
          />
          <Image
            src="/icons/download_arrow.svg"
            alt=""
            className="absolute rotate-12 right-16 top-10"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="bg-secondary-blue pt-16">
        <div className="flex justify-between max-w-screen-xl mx-auto">
          <div>
            <div className="h-[5rem]">
              <Paragraph className="font-bold text-[22px] text-primary-white">
                BRI KANTOR PUSAT
              </Paragraph>
              <Paragraph className="text-primary-white font-poppins text-[10px] lg:text-[14px]">
                PT. Bank Rakyat Indonesia (Persero) Tbk.
              </Paragraph>
            </div>
            <div className="flex gap-2">
              <LocationIcon className="mt-1 lg:mt-0.5 w-3 h-3 lg:w-5 lg:h-5" />
              <Paragraph className="text-primary-white font-poppins leading-5 text-[12px] lg:text-[14px]">
                Gedung BRI
                <br />
                Jl. Jenderal Sudirman <br className="md:hidden block" />{" "}
                Kav.44-46
                <br />
                Jakarta 10210
                <br />
                Indonesia
              </Paragraph>
            </div>
          </div>
          <div>
            <div className="h-[5rem]">
              <Paragraph className="font-bold text-[22px] text-primary-white">
                HUBUNGI KAMI
              </Paragraph>
            </div>
            <div className="flex gap-2 items-center">
              <PhoneIcon />
              <Paragraph className="text-[12px] lg:text-[14px] font-poppins text-primary-white">
                1500017
              </Paragraph>
            </div>
            <div className="flex gap-2 items-center">
              <MailIcon />
              <Paragraph className="text-[12px] lg:text-[14px] font-poppins text-primary-white">
                callbri@bri.co.id
              </Paragraph>
            </div>
            <div className="flex gap-2 lg:gap-7 items-center mt-3 lg:mt-10">
              <Link
                href="https://www.facebook.com/BRIofficialpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF width={20} height={20} color="white" />
              </Link>
              <Link
                href="https://x.com/promo_BRI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXFill width={20} height={20} color="white" />
              </Link>
              <Link
                href="https://www.instagram.com/bankbri_id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiInstagram className="w-5 h-5" color="white" />
              </Link>
              <Link
                href="https://www.youtube.com/@BANK_BRI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube className="w-6 h-6" color="white" />
              </Link>
            </div>
          </div>
          <div>
            <div className="h-[5rem]">
              <Paragraph className="font-bold text-[22px] text-primary-white">
                TAUTAN
              </Paragraph>
            </div>
            <div className="flex flex-col">
              {links.map((item) => (
                <Link
                  className="text-[14px] font-poppins"
                  key={item.id}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block lg:block w-[30%]">
            <div className="h-[4rem] text-secondary-blue lg:h-[5rem]">.</div>
            <div className="flex justify-between">
              <div className="hidden font-poppins md:block lg:block">
                <Paragraph className="md:text-[12px] lg:text-[14px] text-white">
                  BRI berizin dan diawasi oleh Otoritas
                  <br />
                  Jasa Keuangan & Bank Indonesia
                </Paragraph>
                <Paragraph className="md:text-[12px] mt-4 lg:text-[14px] text-white">
                  BRI merupakan peserta penjaminan LPS
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between  max-w-screen-xl mx-auto items-center mt-12 md:mt-20">
          <Paragraph className="font-bold font-pp-right-grotesk text-[12px]">
            © 2024 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights
            Reserved.
          </Paragraph>
          <div className="flex justify-center md:justify-end items-center gap-2">
            {footerLinks?.map((item, index) => (
              <Fragment key={item.id}>
                <Link href={item.href} key={index}>
                  <Paragraph
                    fontUbuntu
                    className="font-bold font-pp-right-grotesk text-[12px] text-white"
                  >
                    {item.label}
                  </Paragraph>
                </Link>
                {index !== footerLinks?.length - 1 && (
                  <GoDotFill color="white" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <div className="relative max-w-screen-2xl mx-auto mt-6 pb-3">
          <div
            className="top-0 left-0 w-full h-[1px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)",
            }}
          ></div>

          <Paragraph className="text-white mt-4 text-[8px] font-pp-right-grotesk lg:text-[12px] text-center">
            BRI berizin dan diawasi oleh Otoritas Jasa Keuangan & Bank Indonesia
            BRI merupakan peserta penjaminan LPS
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Footer;
