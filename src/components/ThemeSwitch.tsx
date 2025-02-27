"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";
import cn from "@/utilities/cn";

const ThemeSwitch = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const getButtonContent = () => {
    if (!mounted)
      return (
        <div className="p-2">
          <SunMoon size={32} aria-hidden="true" />
        </div>
      );

    if (resolvedTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          className="p-2 hover:bg-foreground/5 rounded"
        >
          <Sun size={32} />
        </button>
      );
    }

    if (resolvedTheme === "light") {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="p-2 hover:bg-foreground/5 rounded"
        >
          <Moon size={32} />
        </button>
      );
    }
  };

  return <div className={cn("", className)}>{getButtonContent()}</div>;
};

export default ThemeSwitch;
