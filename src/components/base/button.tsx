import React from "react";

interface Props {
  buttonText: string | React.ReactNode;
  onClick?: () => void;
  className: string;
}

const button = ({ buttonText, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {buttonText}
    </button>
  );
};

export default button;
