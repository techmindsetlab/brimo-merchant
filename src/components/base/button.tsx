import React from "react";

interface Props {
  buttonText: string;
  className: string;
}

const button = ({ buttonText, className }: Props) => {
  return (
    <button type="button" className={className}>
      {buttonText}
    </button>
  );
};

export default button;
