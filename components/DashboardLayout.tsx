"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DashboardLayout = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from('.hero-title', {
        scrollTrigger: {
          trigger: '.hero-title',
          start: 'top 80%',
        },
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        scrollTrigger: {
          trigger: '.hero-subtitle',
          start: 'top 80%',
        },
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate each card on scroll
      gsap.utils.toArray('.card').forEach((card, i) => {
        gsap.from(card as Element, {
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          delay: i * 0.1,
        });
      });
      
    }, containerRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div
      id="about"
      ref={containerRef}
      className="bg-gradient-to-br from-black via-gray-950 to-gray-800 min-h-screen py-10 px-5"
    >
      {/* Header */}
      <div className="p-5 pt-10 text-center">
        <h1 className="hero-title text-5xl flex flex-wrap gap-3 items-center justify-center font-bold text-white">
          Passion Beyond <span className="text-[#44c2ec]">Pixels</span>
        </h1>
        <p className="hero-subtitle mt-2 text-gray-400 text-lg flex items-center justify-center gap-2">
          <span>Crafting Experiences That Matter</span>💡
        </p>
      </div>


      {/* Responsive Grid Section */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 mt-5">
        {/* Left Card */}
        <aside className="card hidden lg:flex flex-col overflow-hidden rounded-[22px] border border-dark-400 bg-gradient-to-b from-[#0a0915] via-[#0d0c1d] to-[#1d1b3b]">
          <div className="h-[350px] w-full bg-cover bg-center">
            <img
              src="tech.png"
              alt="tech visual"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-white text-center text-xl xl:text-2xl px-5 mt-12 leading-snug">
            Fueled by <span className="text-[#44c2ec]">curiosity</span> — I dive
            deep into tech, love solving challenges, and build tools that
            empower others.
          </h1>
        </aside>

        {/* Middle Column */}
        <div className="flex flex-col gap-6">
          <div className="card flex flex-col justify-between gap-4 overflow-hidden rounded-[22px] bg-gradient-to-r from-[#0a0915] via-[#0d0c1d] to-[#1d1b3b] pt-5">
            <h1 className="text-white text-center text-xl xl:text-2xl px-6 leading-snug max-w-[500px] self-center">
              <span className="text-[#44c2ec]">Creative developer</span> — blending logic and design to craft things that are both useful and beautiful.
            </h1>
            <figure className="flex w-full justify-center flex-wrap gap-4 px-4 pb-4">
              <img src="interact-1.webp" alt="interact-1" className="w-[90%] md:w-[45%] object-contain rotate-[5.681deg]" />
              <img src="interact-2.webp" alt="interact-2" className="w-[90%] md:w-[45%] object-contain rotate-[-2.479deg]" />
            </figure>
          </div>

          <div className="card flex flex-col justify-between gap-4 overflow-hidden rounded-[22px] bg-gradient-to-r from-[#0a0915] via-[#0d0c1d] to-[#1d1b3b] pt-5">
            <h1 className="text-white text-center text-xl xl:text-2xl px-6 leading-snug max-w-[500px] self-center">
              <span className="text-[#44c2ec]">Project-based learning</span> — I build by doing, creating real-world solutions to sharpen my skills.
            </h1>
            <figure className="flex w-full justify-center flex-wrap gap-4 px-4 pb-4">
              <img src="quiz-1.webp" alt="quiz-1" className="w-[90%] md:w-[45%] object-contain rotate-[5.681deg]" />
              <img src="quiz-2.webp" alt="quiz-2" className="w-[90%] md:w-[45%] object-contain rotate-[-2.479deg]" />
            </figure>
          </div>
        </div>

        {/* Right Card */}
        <aside className="card hidden lg:flex flex-col rounded-[22px] border border-dark-400 bg-gradient-to-b from-[#0a0915] via-[#0d0c1d] to-[#1d1b3b] pt-10">
          <h1 className="text-white text-center text-xl xl:text-2xl px-6 leading-snug">
            Join a <span className="text-[#44c2ec]">private community</span> — connect, grow, and stay inspired with like-minded creators.
          </h1>
          <figure className="flex h-full items-end justify-center px-4 pb-4">
            <img src="world.png" alt="world" className="w-[80%] max-w-[348px] object-contain" />
          </figure>
        </aside>
      </div>

      {/* Bottom Two Cards */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <aside className="card flex flex-col overflow-hidden bg-gradient-to-r from-[#0a0915] via-[#0d0c1d] to-[#1d1b3b] rounded-xl pt-10">
          <header className="flex flex-col gap-4 px-6">
            <h1 className="text-white text-xl md:text-2xl leading-snug max-w-[500px]">
              A <span className="text-[#44c2ec]">personalized path</span> — tailored for growth with hands-on projects and expert insight.
            </h1>
          </header>
          <div className="h-[250px] w-full bg-cover bg-bottom">
            <img src="/path.png" alt="Learning path visual" className="h-full w-full object-cover" />
          </div>
        </aside>

        <aside className="card flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gradient-to-r from-[#0a0915] via-[#0d0c1d] to-[#1d1b3b] rounded-xl p-6 gap-6">
          <div className="flex-shrink-0 w-full md:w-[300px]">
            <img src="/a1.png" alt="a1 visual" className="w-full h-auto object-contain" />
          </div>
          <div className="flex-1">
            <h1 className="text-white text-xl md:text-xl lg:text-2xl leading-snug max-w-[600px]">
              Beyond the screen — I care about <span className="text-[#44c2ec]">user experience</span>,
              <span className="text-[#44c2ec]"> accessibility</span>, and
              building <span className="text-[#44c2ec]"> meaningful things</span>.
            </h1>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
