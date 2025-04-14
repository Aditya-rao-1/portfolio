"use client";
import React from "react";
import Nav from "./Nav";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { BackgroundCircles } from "./design/Hero";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-800 via-black to-black text-white min-h-screen flex flex-col px-4 sm:px-6 overflow-hidden">

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[90rem] mx-auto pt-36 pb-16 gap-16">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 w-full lg:w-1/2 text-left space-y-8 px-2"
        >
          <p className="text-xl text-gray-400">🚀 Dynamic Web Magic with Next.js</p>

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
            Hi! I'm Adithya
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
            src="he.webp"
            alt="Tech Illustration"
            className="w-[100%] max-w-[750px] rounded-xl drop-shadow-xl"
          />
        </motion.div>
      </div>

      <BackgroundCircles />
    </div>
  );
};

export default Hero;
