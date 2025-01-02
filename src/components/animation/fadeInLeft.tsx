import React, { useEffect } from "react";
import anime from "animejs";

interface FadeInLeftProps {
  duration?: number;
  children: React.ReactNode;
  className: string;
  style?: string;
}

const FadeInLeft: React.FC<FadeInLeftProps> = ({
  duration,
  children,
  className,
  style,
}) => {
  useEffect(() => {
    anime({
      targets: `.${className}`,
      opacity: [0, 1],
      translateX: [-100, 0],
      easing: "easeOutQuad",
      duration: duration,
    });
  }, [duration, className]);

  return (
    <div className={`${className} ${style}`} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default FadeInLeft;
