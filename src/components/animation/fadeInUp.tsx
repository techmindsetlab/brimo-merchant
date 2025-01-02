import React, { useEffect } from "react";
import anime from "animejs";

interface FadeInUpProps {
  duration?: number;
  children: React.ReactNode;
  className: string;
  style?: string;
}

const FadeInUp: React.FC<FadeInUpProps> = ({
  duration = 1000,
  children,
  className,
  style,
}) => {
  useEffect(() => {
    anime({
      targets: `.${className}`,
      opacity: [0, 1],
      translateY: [100, 0],
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

export default FadeInUp;
