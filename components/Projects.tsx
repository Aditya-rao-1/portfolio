"use client";

import { Project, projectsData } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const bentoLayout = [
  "xl:col-span-7",
  "xl:col-span-5",
  "xl:col-span-5",
  "xl:col-span-7",
  "xl:col-span-6",
  "xl:col-span-6",
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative overflow-hidden bg-gradient-to-br from-[#040814] via-[#07101d] to-[#030712] px-5 py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#44c2ec]">Projects</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Selected <span className="text-[#44c2ec]">work</span> with impact
          </h2>
          <p className="mt-5 text-base text-gray-400 sm:text-lg">
            A curated set of products, automation tools, and AI systems built to solve real problems with clean UX and powerful engineering.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              className={bentoLayout[index % bentoLayout.length] || "xl:col-span-6"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, className }: { project: Project; className?: string }) => {
  const hasGithub = Boolean(project.github);
  const hasLive = Boolean(project.hosting);

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_20px_60px_rgba(1,5,20,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#44c2ec]/40 hover:shadow-[0_30px_80px_rgba(68,194,236,0.16)]",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(68,194,236,0.16),transparent_36%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black/20">
          <img
            src={project.image}
            alt={project.title}
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="rounded-full border border-[#44c2ec]/25 bg-[#44c2ec]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#99e6ff]">
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/25 text-white transition hover:border-[#44c2ec]/50 hover:text-[#44c2ec]"
              >
                <FaGithub className="text-lg" />
              </a>
            )}
            {hasLive && (
              <a
                href={project.hosting}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#44c2ec]/30 bg-[#44c2ec]/10 text-[#9fe9ff] transition hover:border-[#44c2ec]/60 hover:bg-[#44c2ec]/15"
              >
                <FaExternalLinkAlt className="text-sm" />
              </a>
            )}
          </div>
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-gray-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={`${project.title}-${tag}-${index}`}
              className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Projects;
