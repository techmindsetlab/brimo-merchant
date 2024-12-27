import React from "react";

interface Props {
  color: string;
  className: string;
  size: number;
  height: number;
}

const CustomRectangle = ({ color, className, size, height }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={height}
      viewBox={`0 0 ${size} ${height}`}
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
