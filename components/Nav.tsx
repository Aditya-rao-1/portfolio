"use client";

import React, { useEffect, useState } from "react";
import { navigation } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Nav = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "fixed top-4 inset-x-0 mx-auto flex h-14 max-w-xl sm:w-[70%] w-[90%] rounded-full z-[5000] pr-4 pl-6 py-3 items-center justify-center space-x-4 sm:space-x-6 transition-all duration-300",
        "border border-white/20 backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-lg",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      )}
    >
      {navigation.map((item) => {
        const Icon = item.icon; // Assign the icon component
        return (
          <Link
            key={item.id}
            href={item.url}
            className="relative dark:text-neutral-50 text-neutral-600 items-center flex space-x-2 text-sm sm:text-lg hover:text-yellow-400 transition-all"
          >
            <Icon className="text-xl text-[#44c2ec]" /> {/* Render the icon */}
            <span className="block ">{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
