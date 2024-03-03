import React from "react";
import { useState } from "react";
import ProjectShowcase from "../UI/project-showcase";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "GeekText",
      language: "PHP",
      framework: "Laravel",
      description:
        "A collaborative project to build a fullstack e-commerce website for a bookstore.",
    },
    {
      id: 2,
      name: "Inventory Management System",
      language: "Javascript",
      framework: "React",
      description:
        "A system to manage medical supplies and equipment for my Guard Unit",
    },
    {
      id: 3,
      name: "alecnazzy.com",
      language: "Javascript",
      framework: "React",
      description: "My own personal website.",
    },
  ]);

  const [filter, setFilter] = useState({});

  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };

  const filteredProjects = projects.filter((project) => {
    return Object.entries(filter).every(([key, value]) => {
      return project[key].toLowerCase().includes(value.toLowerCase());
    });
  });

  return (
    <div>
      <h1 className=" text-4xl text-gray-800" id="projects">
        Some of my projects
      </h1>

      <select
        value={filter.language || ""}
        onChange={(e) => handleFilterChange("language", e.target.value)}
        className="mt-5 rounded-md p-2"
      >
        <option value="">All languages</option>
        <option value="Javascript">JavaScript</option>
        <option value="PHP">PHP</option>
      </select>

      <ul className="flex flex-row justify-center align-center">
        {filteredProjects.map((project) => (
          <li key={project.id} className="mr-5 ml-5 mb-10">
            <ProjectShowcase
              title={project.name}
              description={project.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
