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
      <div
        className={`bg-white text-black h-72 flex flex-col justify-center items-start transition-transform duration-1000 ${
          isVisible ? "translate-x-0" : "translate-x-full origin-left"
        }`}
      >
        <h1 className="text-black text-4xl ml-8 mb-4">{title}</h1>
        <p className="text-gray-700 text-lg ml-8">{text}</p>
      </div>
    </div>
  );
}
