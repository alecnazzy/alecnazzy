import React from "react";
import { useState } from "react";
import CardFlip from "./UI/card-flip";
import ProjectShowcase from "./UI/project-showcase";

export default function Projects() {
  const [projects, setProjects] = useState([
    // {
    //   id: 1,
    //   name: "alecnazzy.com",
    //   description: "My own personal website.",
    //   stack: ["React", "Tailwind CSS"],
    // },
    {
      id: 1,
      title: "Gandalf's Dispensary",
      description:
        "Gandalf's Dispensary is a fictional ecommerce store where fans of J.R.R. Tolkien's Middle-earth can browse and purchase a variety of pipeweed products and more inspired by the tales of hobbits, wizards, and adventures in the Shire.",
      stack: ["React", "Express", "MongoDB"],
      image: "/images/gandalf1.png",
      link: "https://gandalfs-pipeweed-dispensary.onrender.com/",
      stack: "React, Express, MongoDB",
    },
  ]);

  return (
    <div id="projects" className="mt-32 mb-36 w-screen">
      <h1 className="text-5xl font-mono mb-16">Some of my projects</h1>

      <ul className=" mt-5">
        {projects.map((project) => (
          <li
            key={project.id}
            className="mr-5 ml-5 mb-24 flex flex-col justify-center align-center items-center"
          >
            <ProjectShowcase
              children={{
                title: project.title,
                description: project.description,
                image: project.image,
                link: project.link,
                stack: project.stack,
              }}
            />
          </li>
        ))}
      </ul>

      <a
        href="https://github.com/alecnazzy"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline mt-6"
      >
        Check out my GitHub for more
      </a>
    </div>
  );
}
