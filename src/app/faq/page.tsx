"use client";
import FadeInOpacity from "@/components/animation/fadeIn";
import Accordion from "@/components/base/accordion";
import Paragraph from "@/components/base/paragraph";
import { FAQDummy } from "@/helpers/dummy";
import React from "react";

const FAQPages = () => {
  const filter = ["Semua", "Produk", "Jadi Merchant"];
  return (
    <div className="mt-24 max-w-screen-xl mx-auto px-4 mb-36">
      <FadeInOpacity duration={1000} className="faq-title" style="mb-6">
        <Paragraph className="font-brineue-bold mb-6 text-center text-[3rem] text-secondary-blue leading-[3.5rem]">
          FAQ
        </Paragraph>
      </FadeInOpacity>
      <ul className="flex w-fit mb-12">
        {filter.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              index === 0
                ? "opacity-100 border-b-4 border-b-accent-orange"
                : "opacity-30 border-b-2 border-b-accent-orange/30"
            } px-6 py-2 text-secondary-blue font-brineue-bold`}
          >
            {item}
          </li>
        ))}
      </ul>
      <Accordion items={FAQDummy} allowMultiple={false} />
    </div>
  );
};

export default FAQPages;
