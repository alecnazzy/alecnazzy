import React from "react";

const ProjectShowcase = ({ title, description }) => {
  return (
    <div className="mx-auto w-80 h-64 text-center mt-5 bg-gray-800 p-7 rounded-2xl">
      <h3 className="text-sky-300 text-xl mb-4">{title}</h3>
      <p className="text-sky-300">{description}</p>
    </div>
  );
};

export default ProjectShowcase;
