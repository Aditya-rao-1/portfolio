"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { BackgroundCircles } from "./design/Hero";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-800 via-black to-black text-white min-h-screen flex flex-col px-4 sm:px-6 overflow-hidden">

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[90rem] mx-auto pt-32 lg:pt-12 pb-16 gap-16">
        {/* Left: Text Content */}
        <motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="flex-1 w-full lg:w-1/2 px-2 space-y-8 text-center lg:text-left items-center lg:items-start"
>

          <p className="text-xl text-gray-400">🚀 Turning Ideas into Fast, Elegant Web Apps</p>

          <h1 className="text-5xl sm:text-6xl lg:text-6xl font-extrabold leading-snug">
            Building Intelligent <br />
            Solutions with <br />{" "}
            <span
              className="text-blue-400 drop-shadow-md inline-block min-w-[180px]"
            >
              <Typewriter
                words={["Code", "Creativity", "Innovation"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p className="text-2xl text-gray-300 max-w-2xl">
            Hi! I&apos;m Adithya
            <span className="bg-gradient-to-r from-[#44c2ec] to-[#5a6eef] bg-clip-text text-transparent font-semibold">
              , a versatile developer, tech enthusiast, and problem solver.
            </span>
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="me.jpeg"
            alt="Tech Illustration"
            className="w-[120%] max-w-[900px] rounded-xl drop-shadow-xl "
          />
        </motion.div>
      </div>

      <div className="hidden md:block">
        <BackgroundCircles />
      </div>
    </div>
  );
};

export default Hero;
