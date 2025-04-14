"use client"
import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

export const BackgroundCircles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute w-full h-full">
      <MouseParallax strength={0.1} >
        {/* Ball 1 */}
        <div className="absolute top-[10%] left-[15%]">
          <div
            className={`w-6 h-6 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100 scale-110" : "translate-y-4 opacity-50"
            }`}
          />
        </div>

        {/* Ball 2 */}
        {/* <div className="absolute top-[30%] right-[20%]">
          <div
            className={`w-10 h-10 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-800 ease-out ${
              mounted ? "translate-y-0 opacity-100 scale-125" : "translate-y-4 opacity-50"
            }`}
          />
        </div> */}

        {/* Ball 3 */}
        <div className="absolute bottom-[10%] left-[25%]">
          <div
            className={`w-8 h-8 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-900 ease-out ${
              mounted ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-50"
            }`}
          />
        </div>

        {/* Ball 4 */}
        <div className="absolute top-[50%] left-[43%] transform -translate-x-1/2">
          <div
            className={`w-12 h-12 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-1000 ease-out ${
              mounted ? "translate-y-0 opacity-100 scale-110" : "translate-y-4 opacity-50"
            }`}
          />
        </div>

        {/* Ball 5 */}
        <div className="absolute bottom-[10%] right-[10%]">
          <div
            className={`w-9 h-9 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-1100 ease-out ${
              mounted ? "translate-y-0 opacity-100 scale-115" : "translate-y-4 opacity-50"
            }`}
          />
        </div>

        {/* Ball 6 */}
        <div className="absolute top-[15%] right-[40%]">
          <div
            className={`w-7 h-7 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-1200 ease-out ${
              mounted ? "translate-y-0 opacity-100 scale-105" : "translate-y-4 opacity-50"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
