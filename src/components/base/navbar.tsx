"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLink } from "@/helpers/const";
import Button from "./button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed w-full z-40 top-0 start-0 transition-all duration-300 ${
        isScrolled ? "bg-primary-white/60 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/brimo_merchant_logo.png"
            width={150}
            height={150}
            alt="BRIMO MERCHANT LOGO"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button
            buttonText={"Daftar Sekarang"}
            className={
              "rounded-3xl hidden md:block text-sm px-6 py-2 text-primary-white text-center bg-accent-orange"
            }
          />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary-blue rounded-lg md:hidden "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
            {navLink.map((item, index) => (
              <li className="" key={index}>
                <a
                  href={item.href}
                  className="py-2 px-3 font-brineue-bold rounded md:bg-transparent md:text-primary-blue md:p-0"
                  aria-current="page"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
