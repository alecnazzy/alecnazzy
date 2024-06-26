import React, { useState, useEffect } from "react";

export default function HeaderAnimate({ headers }) {
  const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeaderIndex((index) => (index + 1) % headers.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [headers]);

  const animatedHeader = headers[currentHeaderIndex];

  return (
    <h1 className="overflow-hidden text-5xl font-mono font-bold">
      {animatedHeader.split("").map((char, index) => (
        <span
          className="animate-text-animate inline-block"
          key={`${char}-${index}`}
          style={{ animationDelay: `${index * 0.07}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
