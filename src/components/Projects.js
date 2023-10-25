import React from "react";
import {
    AiFillGithub,
    AiFillShopping,
    AiOutlineOrderedList,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Projects = () => {
  const projects = [
    {
      name: "E-commerce Website",
      description: "An online store with secure payment processing",
      icon: <AiFillShopping className="w-16 h-16" />,
    },
    {
      name: "Task Management App",
      description: "A productivity tool for organizing tasks",
      icon: <AiOutlineOrderedList className="w-16 h-16" />,
    },
    {
      name: "Portfolio Website",
      description: "This website you're currently exploring",
      icon: <CgProfile className="w-16 h-16" />,
    },
  ];

  const renderProjects = (projects) => {
    return projects.map((project, index) => (
      <div
        key={index}
        className="bg-white mx-6 rounded-md p-4 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
      >
        <div className="flex flex-col items-center">
          <div className="text-3xl text-cyan-600">{project.icon}</div>
          <h2 className="text-2xl font-semibold mt-2">{project.name}</h2>
          <p className="text-gray-600 text-center mt-2">
            {project.description}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <section
      id="projects"
      className="flex flex-col min-h-screen py-20 gap-2 lg:gap-10"
    >
      <div className="flex flex-col text-center gap-2">
        <div className="relative mx-6">
          <div className="before:absolute before:right-0 before:top-0 before:h-1.5 before:w-2/3 before:bg-cyan-400 after:absolute after:left-0 after:bottom-0 after:h-1.5 after:w-2/3 after:bg-cyan-400 py-6 lg:py-8">
            <h2 className="font-semibold text-2xl sm:text-4xl md:text-6xl">
              My Projects
            </h2>
          </div>
        </div>

        <p className="text-xl sm:text-2xl">
          Curious to
          <span className="p-text-main text-cyan-400"> see </span> my work?
        </p>

        {/* github link */}
        <a
          className="rounded-md px-8 py-2 border border-solid text-white mx-auto hover:border-cyan-500 hover:text-cyan-500 duration-200"
          href="https://github.com/willyvcodes"
          target="_blank"
          rel="noreferrer"
        >
          <span className="flex items-center gap-1">
            <AiFillGithub />
            Github
          </span>
        </a>
      </div>

      {/* project links */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-14 lg:justify-center">
        {renderProjects(projects)}
      </div>
    </section>
  );
};

export default Projects;
