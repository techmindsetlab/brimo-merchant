import React from "react";
import Paragraph from "@/components/base/paragraph";
import Accordion from "../base/accordion";

interface Props {
  items: {
    title: string;
    content: string;
  }[];
}

const HomeFAQ = ({ items }: Props) => {
  return (
    <div className="mb-36 mt-24">
      <Paragraph className="font-brineue-bold mb-6 text-center text-[3rem] text-secondary-blue leading-[3.5rem]">
        FAQ
      </Paragraph>
      <Accordion items={items} allowMultiple={false} />
    </div>
  );
};

export default HomeFAQ;
