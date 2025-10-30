"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const TopNav = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [scrollY]);
  return (
    <nav
      className={`sticky top-0 z-10 backdrop-blur-md ${
        scrollY > 100 ? "bg-black/80" : "bg-black"
      }`}
    >
      <div className="h-20 flex items-center justify-between px-8 border-b">
        <p className="text-xl font-bold">Recipe</p>
        <div className="flex items-center gap-4">
          <Button>Add Recipe</Button>
          <p>login</p>
        </div>
      </div>
    </nav>
  );
};
