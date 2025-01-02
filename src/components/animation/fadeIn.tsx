import React, { useEffect } from "react";
import anime from "animejs";

interface FadeInOpacityProps {
  duration?: number;
  children: React.ReactNode;
  className: string;
  style?: string;
}

const FadeInOpacity: React.FC<FadeInOpacityProps> = ({
  duration = 1000,
  children,
  className,
  style,
}) => {
  useEffect(() => {
    anime({
      targets: `.${className}`,
      opacity: [0, 1],
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

export default FadeInOpacity;
