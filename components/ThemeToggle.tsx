"use client";
import ToggleLogoWhite from "@/assets/togglewhite.png";
import ToggleLogoBlack from "@/assets/toogleblack.png";
import LangWhite from "@/assets/langwhite.png";
import LangBlack from "@/assets/langblack.png";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "tango-ui-cw";

import Image from "next/image";

export default function ThemeToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

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
