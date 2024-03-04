import React from "react";
import { useState } from "react";
import CardFlip from "./ui/card-flip";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "GeekText",
      description:
        "A collaborative project to build a fullstack e-commerce website for a bookstore.",
      stack: ["PHP", "Laravel", "MySQL"],
    },
    {
      id: 2,
      name: "alecnazzy.com",
      description: "My own personal website.",
      stack: ["JavaScript", "React", "Tailwind"],
    },
  ]);

  const [filter, setFilter] = useState({});
  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };

  const filteredProjects = projects.filter((project) => {
    let include = true;

    if (filter.stack) {
      include = project.stack.includes(filter.stack);
    }

    return include;
  });

  return (
    <div id="projects">
      <h1 className="text-5xl text-gray-800">Some of my projects</h1>

      <select
        value={filter.stack || ""}
        onChange={(e) => handleFilterChange("stack", e.target.value)}
        className="mt-5 rounded-md p-2"
      >
        <option value="">All stacks</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="PHP">PHP</option>
        <option value="Laravel">Laravel</option>
      </select>

      <ul className="flex flex-row flex-wrap justify-center align-center mt-5">
        {filteredProjects.map((project) => (
          <li key={project.id} className="mr-5 ml-5 mb-10">
            <CardFlip
              title={project.name}
              description={project.description}
              stack={project.stack}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
