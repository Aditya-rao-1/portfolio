"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { skill } from "../constants";
import MagicButton from "./MagicButton";
import gsap from "gsap";

export default function Skills() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    const buttonRef = useRef<HTMLDivElement | null>(null); // ✅ Button ref
    const [playCount, setPlayCount] = useState(0);

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

        // Animate resume button
        if (buttonRef.current) {
            gsap.fromTo(
                buttonRef.current,
                { y: 20, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.6, delay: 0.5, ease: "power2.out" }
            );
        }
    };

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
            className="bg-gradient-to-tr from-black via-gray-950 to-gray-800 py-24 flex flex-col justify-center items-center px-5 relative overflow-hidden"
        >
            <h2
                ref={headingRef}
                className="text-3xl sm:text-4xl md:text-5xl text-white font-bold text-center mb-10 gap-3 flex flex-wrap justify-center items-center"
            >
                The <span className="text-[#44c2ec]">Stack</span> Behind the Scenes 🛠️
            </h2>

            <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10">
                {/* First Row */}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-6 justify-center">
                    {skill.slice(0, 11).map((tech, i) => (
                        <div
                            key={tech.id}
                            className="flex flex-col items-center p-2"
                            ref={(el) => {
                                iconRefs.current[i] = el;
                            }}
                        >
                            <div className="hover:scale-110 transition-transform duration-300">
                                <Image
                                    src={tech.icon}
                                    alt={tech.title}
                                    width={tech.width}
                                    height={tech.height}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 justify-center">
                    {skill.slice(11, 19).map((tech, i) => (
                        <div
                            key={tech.id}
                            className="flex flex-col items-center p-2"
                            ref={(el) => {
                                iconRefs.current[i + 11] = el; // ✅ Offset index
                            }}
                        >
                            <div className="hover:scale-110 transition-transform duration-300">
                                <Image
                                    src={tech.icon}
                                    alt={tech.title}
                                    width={tech.width}
                                    height={tech.height}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Resume Button */}
            <div className="mt-10 text-center" ref={buttonRef}>
                <MagicButton
                    title="Download my Resume"
                    icon={<FaDownload />}
                    position="right"
                    handleClick={handleDownload}
                />
            </div>
        </div>
    );
}
