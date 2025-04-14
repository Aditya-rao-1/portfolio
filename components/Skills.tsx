"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { FaTools, FaDownload } from "react-icons/fa";
import { skill } from "../constants";
import MagicButton from "./MagicButton";

export default function Skills() {
    const sectionRef = useRef(null);
    const [playCount, setPlayCount] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && playCount < 2) {
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
            className="bg-gradient-to-tr from-black via-gray-950 to-gray-800  min-h-screen flex flex-col justify-center items-center px-5 py-10 relative overflow-hidden"
        >
          <h2 className="text-5xl text-white font-bold flex items-center justify-center mb-15 gap-3">
  The<span className="text-[#44c2ec]">Stack</span>Behind the Scenes
  <FaTools className="text-[#076cfb] ml-3 text-6xl" />
</h2>


        

            {/* Grid of Tech Icons */}
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10">
                {/* First Row */}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-6 justify-center">
                    {skill.slice(0, 11).map((tech) => (
                        <div key={tech.id} className="flex flex-col items-center p-2">
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
                    {skill.slice(11, 19).map((tech) => (
                        <div key={tech.id} className="flex flex-col items-center p-2">
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
            <div className="mt-14 text-center">
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
