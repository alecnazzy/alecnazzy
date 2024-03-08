import React, { useState, useEffect } from "react";

export default function HeaderAnimate({ headers }) {
  const [header, setHeader] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeader((header) => (header + 1) % headers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [headers]);

  return (
    <h1 className="overflow-hidden text-5xl font-mono font-bold  text-5xl text-gray-800">
      {headers[header].split("").map((char, index) => (
        <span
          className="animate-text-animate inline-block"
          key={`${char}-${index}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
