import React from "react";

interface Props {
  color: string;
  className: string;
}

const CustomRectangle = ({ color, className }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1100"
      height="144"
      viewBox="0 0 1100 144"
      fill="none"
    >
      <path
        d="M17.8043 41.4474C21.9633 17.4913 42.7529 0 67.0674 0H1340V144H0L17.8043 41.4474Z"
        fill={color}
      />
    </svg>
  );
};

export default CustomRectangle;
