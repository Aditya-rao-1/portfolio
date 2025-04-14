"use client"
import { useRef, useState } from "react";
import { projectsData } from "../constants";
import { BiTask } from "react-icons/bi";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Importing Icons

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center bg-gradient-to-br from-black via-gray-950 to-gray-800 min-h-screen p-10">
      <div className="p-5 pt-10 text-center">
        <h1 className="text-5xl flex gap-3 items-center justify-center font-bold text-white">
        A Glimpse into <span className="text-[#44c2ec]">My Work</span> <BiTask className="text-[#076cfb] text-6xl" />
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 w-full max-w-7xl justify-items-center">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const bounds = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.left;
    const topY = mouseY - bounds.top;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
    cardRef.current.style.transform = `scale3d(1.1, 1.1, 1.1) translate(${center.x / 10}px, ${center.y / 10}px) rotate3d(${center.y / 100}, ${-center.x / 100}, 0, ${Math.log(distance) * 2}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "scale3d(1,1,1)";
  };

  return (
    <div
      ref={cardRef}
      className="relative w-[350px] h-[500px] bg-[#0d0c1d] text-white font-bold p-6 rounded-xl shadow-lg transition-transform duration-300 ease-out hover:shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={project.image} alt={project.title} className="w-full h-[200px] object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
      <p className="text-sm text-gray-400 mt-2">{project.description}</p>
      <div className="flex items-center gap-2 mt-4">
        {project.tags.map((tag: string, i: number) => (
          <span key={i} className="text-sm text-[#8888ff]">#{tag}</span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-3xl hover:text-gray-400 transition" />
        </a>
        <a href={project.hosting} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt className="text-green-400 text-3xl hover:text-green-300 transition" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
