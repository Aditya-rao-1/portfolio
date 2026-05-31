"use client";
import { useEffect, useRef, useState } from "react";
import { Project, projectsData } from "../constants";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateLayout = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const visibleCards = containerWidth >= 1280 ? 3 : containerWidth >= 768 ? 2 : 1;
  const gap = containerWidth >= 768 ? 40 : 24;
  const cardWidth = Math.max(
    280,
    Math.min(400, containerWidth ? (containerWidth - gap * (visibleCards - 1)) / visibleCards : 360)
  );
  const cardStep = cardWidth + gap;
  const maxIndex = Math.max(0, projectsData.length - visibleCards);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
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
      className="relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-gray-800 px-5 py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#44c2ec]">Projects</p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Selected <span className="text-[#44c2ec]">work</span> with impact
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg text-gray-400">
            A curated set of products, automation tools, and AI systems that reflect both technical depth and visual polish.
          </p>
        </div>

        {/* Slider Container */}
        <div ref={containerRef} className="relative mt-14 h-[560px] w-full">
          {/* Clip wrapper: keeps cards clipped while allowing arrows outside */}
          <div className="relative z-10 h-full w-full overflow-hidden">

            {/* Cards Wrapper */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                gap: `${gap}px`,
                transform: `translateX(-${safeIndex * cardStep}px)`,
              }}
            >
              {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} cardWidth={cardWidth} />
              ))}
            </div>

          </div>

          {/* Left Arrow */}
          {safeIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-3 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/80 md:left-0 md:-translate-x-1/2"
              aria-label="Previous projects"
            >
              <FaChevronLeft size={22} />
            </button>
          )}


          {/* Right Arrow */}
          {safeIndex < maxIndex && (
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-3 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/80 md:right-0 md:translate-x-1/2"
              aria-label="Next projects"
            >
              <FaChevronRight size={22} />
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, cardWidth }: { project: Project; cardWidth: number }) => {
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
      style={{ width: `${cardWidth}px` }}
      className="group relative flex h-[540px] flex-shrink-0 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-transform duration-300 ease-out hover:shadow-[0_24px_80px_rgba(68,194,236,0.12)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(68,194,236,0.18),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 flex h-full flex-col">
        <img
          src={project.image}
          alt={project.title}
          className="h-[190px] w-full rounded-[20px] object-cover ring-1 ring-white/10"
        />
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-[#44c2ec]/25 bg-[#44c2ec]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#7fe0f6]">
            Featured
          </span>
          <span className="text-xs text-gray-400">Project</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-white">{project.title}</h3>
        <p className="mt-2 max-h-[88px] overflow-hidden text-sm leading-6 text-gray-300">{project.description}</p>
        <div className="mt-3 flex max-h-[54px] flex-wrap items-start gap-2 overflow-hidden">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.14em] text-gray-200">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-6">
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white transition hover:border-[#44c2ec]/50 hover:text-[#44c2ec]">
            <FaGithub className="text-xl" />
          </a>
          {project.hosting && (
            <a href={project.hosting} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-[#44c2ec]/40 hover:bg-white/10">
              <FaExternalLinkAlt className="text-sm text-[#44c2ec]" />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
