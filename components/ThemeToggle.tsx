"use client";
import { useEffect, useState } from "react";
import ToggleLogoWhite from "@/assets/togglewhite.png";
import ToggleLogoBlack from "@/assets/toogleblack.png";
import LangWhite from "@/assets/langwhite.png";
import LangBlack from "@/assets/langblack.png";
import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const current = saved || (prefersDark ? "dark" : "light");
    setTheme(current);
    document.documentElement.classList.toggle("dark", current === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  const toggleLang = () => {
    const segments = pathname.split("/");
    const lang = segments[1];

    const nextLang = lang === "en" ? "zh" : "en";

    // 替换掉路径中的语言部分
    segments[1] = nextLang;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <>
      <div className="px-2 py-1 flex items-center gap-4">
        <div onClick={toggleLang}>
          <div className="w-[23px] h-[23px]">
            <Image
              src={theme === "light" ? LangBlack : LangWhite}
              alt="Lang Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div onClick={toggleTheme}>
          <div className="w-[21px] h-[21px]">
            <Image
              src={theme === "light" ? ToggleLogoBlack : ToggleLogoWhite}
              alt="Toggle Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
