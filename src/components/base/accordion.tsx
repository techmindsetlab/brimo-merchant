"use client";
import React, { useState } from "react";
import Paragraph from "./paragraph";
import { IoMdArrowDropdown } from "react-icons/io";

interface AccordionProps {
  items: {
    title: string;
    content: string;
  }[];
  allowMultiple?: boolean;
}

const Accordion = ({ items, allowMultiple = false }: AccordionProps) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (allowMultiple) {
      if (activeIndexes.includes(index)) {
        setActiveIndexes(activeIndexes.filter((i) => i !== index));
      } else {
        setActiveIndexes([...activeIndexes, index]);
      }
    } else {
      setActiveIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="accordion px-16">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-primary-white border mb-4 rounded-[5px] border-gray-100 shadow-accordion overflow-hidden transition-all duration-300"
        >
          <button
            className="w-full text-left p-4 flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <Paragraph fontUbuntu className="text-primary-black">
              {item.title}
            </Paragraph>
            <IoMdArrowDropdown
              size={30}
              color="#898B8E"
              className={`transform transition-transform duration-300 ${
                activeIndexes.includes(index) ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeIndexes.includes(index)
                ? "max-h-[300px] border-t"
                : "max-h-0"
            }`}
          >
            <div className="p-4 text-gray-600">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
