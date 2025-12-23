"use client";
import { useRef, useState } from "react";
import { projectsData } from "../constants";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const handleNext = () => {
    if (currentIndex < projectsData.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      id="projects"
      className="flex flex-col items-center bg-gradient-to-br from-black via-gray-950 to-gray-800 min-h-screen p-10"
    >
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl flex flex-wrap gap-3 items-center justify-center font-bold text-white text-center">
          A <span className="text-[#44c2ec]">Glimpse</span> into My Work 🚀
        </h1>
      </div>

      {/* Slider Container */}
      <div className="relative w-full max-w-7xl mt-12 h-[500px]">

        {/* Clip wrapper: keeps cards clipped while allowing arrows outside */}
        <div className="w-full h-full overflow-hidden">

          {/* Cards Wrapper */}
          <div
            className="flex gap-10 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 440}px)`,
            }}
          >
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

        </div>

        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-[-75px] top-1/2 
               -translate-y-1/2 
               bg-black/80 p-5 rounded-full 
               text-white hover:bg-black 
               transition z-50"
          >
            <FaChevronLeft size={36} />
          </button>
        )}


        {/* Right Arrow */}
        {currentIndex < projectsData.length - visibleCards && (
          <button
            onClick={handleNext}
            className="absolute right-[-75px] top-1/2 
               -translate-y-1/2 
               bg-black/80 p-5 rounded-full 
               text-white hover:bg-black 
               transition z-50"
          >
            <FaChevronRight size={36} />
          </button>
        )}

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
      className="relative w-[400px] h-[500px] bg-[#0d0c1d] text-white font-bold p-6 rounded-xl shadow-lg transition-transform duration-300 ease-out hover:shadow-2xl flex-shrink-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[200px] object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
      <p className="text-sm text-gray-400 mt-2">{project.description}</p>
      <div className="flex items-center gap-2 mt-4">
        {project.tags.map((tag: string, i: number) => (
          <span key={i} className="text-sm text-[#8888ff]">
            #{tag}
          </span>
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
