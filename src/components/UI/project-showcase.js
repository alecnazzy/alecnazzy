import React from "react";

export default function ProjectShowcase({ children }) {
  return (
    <div className="relative group w-3/4">
      <a href={children.link} target="_blank" rel="noopener noreferrer">
        <img
          src={children.image}
          alt={children.title}
          className="h-full object-cover group-hover:opacity-50 group-hover:filter group-hover:brightness-50 group-hover:blur-sm"
        />
        <div className="absolute inset-0 flex flex-col align-center items-center justify-center opacity-0 group-hover:opacity-100">
          <h2 className="text-2xl text-white font-mono text-center p-4 mb-4">
            {children.title.toUpperCase()}
          </h2>
          <p className="text-lg text-white font-mono text-center w-3/4 p-4 mb-4">
            {children.description}
          </p>
          <p className="mt-6">{children.stack.toUpperCase()}</p>
        </div>
      </a>
    </div>
  );
}
