"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useModal } from "./context/modal-context";

export const TopNav = () => {
  const { open } = useModal();

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
      <div className="flex h-20 items-center justify-between border-b px-8">
        <p className="text-xl font-bold">Recipe</p>
        <div className="flex items-center gap-4">
          <Button onClick={open}>
            <Plus />
            Add Recipe
          </Button>
          <p>login</p>
        </div>
      </div>
    </nav>
  );
};
