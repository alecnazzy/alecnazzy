import React, { useState, useEffect, useRef } from "react";

export default function Slider({ title, text }) {
  const [isVisible, setIsVisible] = useState(false);
  const shopTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (shopTextRef.current) {
        const { top } = shopTextRef.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight / 2;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on component mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={shopTextRef}>
      <div class="flex flex-row w-full h-72">
        <div
          class={`text-white w-full text-lg ${
            isVisible ? "w-1/4" : "w-full"
          }  transition-width flex flex-col justify-center items-center`}
        >
          <h1>{title}</h1>
        </div>
        <div
          class={`bg-white ${
            isVisible ? "w-3/4" : "w-0"
          }  transition-width flex flex-col justify-center items-start`}
        >
          <h1 className="text-black text-lg ml-24">{text}</h1>
        </div>
      </div>

      {/*  */}
    </div>
  );
}
