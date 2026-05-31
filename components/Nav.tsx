"use client";

import React, { useEffect, useRef, useState } from "react";
import { navigation } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Nav = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < 80 || currentScrollY < lastScrollYRef.current);
      lastScrollYRef.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 z-[5000] flex w-fit max-w-[calc(100vw-1rem)] -translate-x-1/2 items-center justify-start gap-2 overflow-x-auto rounded-full border border-white/15 bg-black/55 px-3 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300",
        "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      )}
    >
      {navigation.map((item) => {
        const Icon = item.icon; // Assign the icon component
        return (
          <Link
            key={item.id}
            href={item.url}
            aria-label={item.title}
            className="group flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-white/85 transition-all hover:bg-white/10 hover:text-white"
          >
            <Icon className="text-lg text-[#44c2ec] transition-transform group-hover:scale-110" />
            <span className="block">{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
