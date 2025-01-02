import React from "react";
import Button from "./button";

interface Props {
  filter: string[];
  activeFilter: number;
  setActiveFilter: React.Dispatch<React.SetStateAction<number>>;
}

const Filter = ({ filter, activeFilter, setActiveFilter }: Props) => {
  const handleFilterClick = (index: number) => {
    setActiveFilter(index);
  };

  return (
    <div className="border border-primary-blue flex gap-1 w-fit p-2.5 rounded-[3rem]">
      {filter.map((item, index) => (
        <Button
          key={index}
          className={`py-2.5 px-6 w-fit border rounded-3xl ${
            activeFilter === index
              ? "bg-primary-blue border-primary-blue font-bold text-white"
              : "bg-transparent border-transparent text-primary-black"
          }`}
          onClick={() => handleFilterClick(index)}
          buttonText={item}
        />
      ))}
    </div>
  );
};

export default Filter;
