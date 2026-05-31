"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { skill } from "../constants";
import gsap from "gsap";

export default function Skills() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [playCount, setPlayCount] = useState(0);

    const skillGroups = [
        { title: "Frontend", subtitle: "Interfaces and motion", items: skill.slice(0, 8) },
        { title: "Backend", subtitle: "Data, APIs, and systems", items: skill.slice(8, 14) },
        { title: "Tools & Platforms", subtitle: "Workflow and delivery", items: skill.slice(14, 19) },
    ];

    const animateIcons = () => {
        // Animate heading
        if (headingRef.current) {
            gsap.fromTo(
                headingRef.current,
                { y: -30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            );
        }

        // Animate icons
        gsap.fromTo(
            iconRefs.current,
            {
                y: 50,
                opacity: 0,
                scale: 0.8,
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.1,
            }
        );
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && playCount < 2) {
                    animateIcons();
                    setPlayCount((prev) => prev + 1);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [playCount]);

    const handleDownload = () => {
        const fileUrl = "/myresume.pdf";
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "My_Resume.pdf";
        link.click();
    };

    return (
        <div
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-tr from-black via-gray-950 to-gray-800 px-5 py-24"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(68,194,236,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(90,110,239,0.08),transparent_28%)]" />
            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center">
            <h2
                ref={headingRef}
                className="mb-5 flex flex-wrap items-center justify-center gap-3 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            >
                The <span className="text-[#44c2ec]">Stack</span> Behind the Scenes 🛠️
            </h2>

            <p className="max-w-3xl text-center text-sm leading-6 text-gray-400 sm:text-base">
                A cleaner view of the technologies I use to build polished interfaces, robust backends, and shipped products.
            </p>

            <div className="mt-12 grid w-full gap-6 lg:grid-cols-3">
                {skillGroups.map((group, groupIndex) => (
                    <div
                        key={group.title}
                        className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-[#44c2ec]">{group.title}</p>
                                <h3 className="mt-2 text-2xl font-semibold text-white">{group.subtitle}</h3>
                            </div>
                            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300">
                                {group.items.length} skills
                            </span>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
                            {group.items.map((tech, i) => {
                                const refIndex = groupIndex === 0 ? i : groupIndex === 1 ? i + 8 : i + 14;

                                return (
                                    <div
                                        key={tech.id}
                                        className="group flex flex-col items-center rounded-2xl border border-white/8 bg-black/20 p-4 transition hover:-translate-y-1 hover:border-[#44c2ec]/30 hover:bg-black/35"
                                        ref={(el) => {
                                            iconRefs.current[refIndex] = el;
                                        }}
                                    >
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 shadow-inner transition-transform duration-300 group-hover:scale-110">
                                            <Image
                                                src={tech.icon}
                                                alt={tech.title}
                                                width={tech.width}
                                                height={tech.height}
                                            />
                                        </div>
                                        <p className="mt-3 text-center text-xs font-medium tracking-wide text-gray-300">
                                            {tech.title}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Resume Button */}
            </div>
        </div>
    );
}
