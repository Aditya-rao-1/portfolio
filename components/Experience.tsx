"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { experienceData } from "../constants";

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActiveIndex(0);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-gray-800 px-5 py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#44c2ec]">Experience</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Timeline of <span className="text-[#44c2ec]">work and impact</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg text-gray-400">
            Selected roles and internships that shaped my work across AI, automation, and full-stack product development.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#44c2ec] via-white/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experienceData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.company}-${item.role}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`relative flex md:items-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                >
                  <div className="absolute left-4 top-7 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#050816] bg-[#44c2ec] shadow-[0_0_30px_rgba(68,194,236,0.45)] md:left-1/2 md:top-1/2 md:-translate-y-1/2" />

                  <div
                    className={`ml-10 w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    } ${activeIndex === index ? "ring-1 ring-[#44c2ec]/40" : ""}`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xl font-bold text-white">{item.company}</p>
                        <p className="mt-1 text-sm font-medium text-[#44c2ec]">{item.role}</p>
                      </div>
                      <div className="flex flex-col items-start gap-2 sm:items-end">
                        <span className="inline-flex w-fit rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-300">
                          {item.location}
                        </span>
                        <span className="text-sm font-medium text-gray-300">{item.date}</span>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {item.bullets.map((bullet) => (
                        <div key={bullet} className="flex gap-3 text-sm sm:text-base text-gray-300">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#44c2ec]" />
                          <p>{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}