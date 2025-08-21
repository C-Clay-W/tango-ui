"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import LogoBlack from "@/assets/logoblack.png";
import LogoWhite from "@/assets/logowhite.png";
import { useRouter } from "next/navigation";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // 存储当前激活的项
  const router = useRouter();

  useEffect(() => {
    document.title = "Tango UI Doc";
  }, []);

  // 判断是否为暗黑模式
  useEffect(() => {
    localStorage.setItem("theme", "dark");
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
    } else if (storedTheme === "light") {
      setIsDark(false);
    } else {
      // 跟随系统
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
    }

    // 监听 class 变化（可选：保持响应式）
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const style =
    "py-2 pl-5 block rounded-xl text-black dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-gray-800";

  // 处理 li 的点击事件
  const handleClick = (index: number) => {
    setActiveIndex(index); // 设置点击的索引为 active
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 顶部导航栏 */}
      <header className="h-13 min-w-[800px] bg-white dark:bg-[#0a0a0a] flex items-center justify-between px-6  fixed w-full">
        <div className="flex items-center gap-7">
          <Image
            src={isDark ? LogoWhite : LogoBlack}
            alt="Logo"
            width={26}
            height={26}
          />

          <span
            className="relative text-xl font-bold ml-[-5px] mr-3 text-black dark:text-neutral-300 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Tango UI
            <span className="absolute -top-2 -right-9 tracking-[-2px] text-xs bg-black dark:bg-white text-neutral-300 dark:text-black px-[4px] py-[1px] pt-[1px] rounded">
              0.4.3
            </span>
          </span>
          <Link
            href="/en/home/components/button"
            className="text-black dark:text-neutral-300"
          >
            Components
          </Link>
          <Link
            href="/en/home/store"
            className="text-black dark:text-neutral-300"
          >
            Tango Store
          </Link>
          <Link
            href="/en/home/tools/watermark"
            className="text-black dark:text-neutral-300"
          >
            Tools
          </Link>
          <Link
            href="/en/home/log"
            className="text-black dark:text-neutral-300"
          >
            Update Log
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-gray-200  text-gray-500 dark:bg-[#292c33] px-[6px] py-[1px] rounded">
            MVP Verson: <span className="tracking-[-2px]">0.4.3</span> beta
          </span>
          <ThemeToggle />
        </div>
      </header>

      {/* 下方区域：左右布局 */}
      <div className="flex flex-1 mt-13">
        {/* 左侧侧边栏 */}
        <aside className="hidden h-[calc(100vh-3.25rem)] bg-white dark:bg-[#0a0a0a] p-4 pt-15 overflow-auto pb-10 hide-scrollbar sm:hidden md:hidden lg:hidden xl:block xl:w-80 2xl:block 2xl:w-80">
          {/* 准备工作 */}
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5">
            Get Started
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-40 h-10 ${activeIndex === 0 ? "font-bold" : ""}`} // 条件添加背景色
                onClick={() => handleClick(0)}
              >
                <Link href="/en/home/introduction" className={style}>
                  Introduction
                </Link>
              </li>
              <li
                className={`w-40 h-10 ${activeIndex === 1 ? "font-bold" : ""}`} // 条件添加背景色
                onClick={() => handleClick(1)}
              >
                <Link href="/en/home/installation" className={style}>
                  Installation
                </Link>
              </li>
            </ul>
          </nav>

          {/* 样式 */}
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-3">
            Styles
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-32 h-10 ${activeIndex === 18 ? "font-bold" : ""}`}
                onClick={() => handleClick(29)}
              >
                <Link href="/en/home/tangocss" className={style}>
                  Tango Css
                </Link>
              </li>
              <li
                className={`w-27 h-10 ${activeIndex === 30 ? "font-bold" : ""}`}
                onClick={() => handleClick(30)}
              >
                <Link href="/en/home/tangocss/mapping" className={style}>
                  Mapping
                </Link>
              </li>
            </ul>
          </nav>

          {/* 组件 */}
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-5">
            Components
          </div>
          <nav>
            <ul className="space-y-1">
              {[
                "Button",
                "Space",
                "Line",
                "Input",
                "Search",
                "Notice",
                "Tooltip",
                "Layout",
                "Modal",
                "Table",
                "Drawer",
                "Date",
                "Mark",
                "ColorPicker",
                "DatePicker",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`${item.includes("Tooltip") ? "w-27" : "w-25"} ${
                    item.includes("ColorPicker") || item.includes("DatePicker")
                      ? "w-35"
                      : "w-25"
                  } rounded-xl ${activeIndex === index + 2 ? "font-bold" : ""}`}
                  onClick={() => handleClick(index + 2)}
                >
                  <Link
                    href={`/en/home/components/${
                      item.toLowerCase().split(" ")[0]
                    }`}
                    className={style}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 状态管理 */}
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-3">
            State management
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-38 h-10 ${activeIndex === 18 ? "font-bold" : ""}`}
                onClick={() => handleClick(18)}
              >
                <Link href="/en/home/store" className={style}>
                  Tango Store
                </Link>
              </li>
              <li
                className={`w-35 h-10 ${activeIndex === 19 ? "font-bold" : ""}`}
                onClick={() => handleClick(19)}
              >
                <Link href="/en/home/persistent" className={style}>
                  Persistent
                </Link>
              </li>
            </ul>
            {/* 工具 */}
            <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-3">
              Tools
            </div>
            <ul className="space-y-1">
              <li
                className={`w-31 h-10 ${activeIndex === 20 ? "font-bold" : ""}`}
                onClick={() => handleClick(20)}
              >
                <Link href="/en/home/tools/watermark" className={style}>
                  WaterMark
                </Link>
              </li>

              <li
                className={`w-35 h-10 ${activeIndex === 21 ? "font-bold" : ""}`}
                onClick={() => handleClick(21)}
              >
                <Link href="/en/home/tools/prepdf" className={style}>
                  Preview PDF
                </Link>
              </li>

              <li
                className={`w-41 h-10 ${activeIndex === 22 ? "font-bold" : ""}`}
                onClick={() => handleClick(22)}
              >
                <Link href="/en/home/tools/preexcel" className={style}>
                  Preview Excel
                </Link>
              </li>

              <li
                className={`w-38 h-10 ${activeIndex === 23 ? "font-bold" : ""}`}
                onClick={() => handleClick(23)}
              >
                <Link href="/en/home/tools/preword" className={style}>
                  Preview Word
                </Link>
              </li>

              <li
                className={`w-36 h-10 ${activeIndex === 24 ? "font-bold" : ""}`}
                onClick={() => handleClick(24)}
              >
                <Link href="/en/home/tools/preppt" className={style}>
                  Preview PPT
                </Link>
              </li>

              <li
                className={`w-33 h-10 ${activeIndex === 25 ? "font-bold" : ""}`}
                onClick={() => handleClick(25)}
              >
                <Link href="/en/home/tools/exportpdf" className={style}>
                  Export PDF
                </Link>
              </li>

              <li
                className={`w-39 h-10 ${activeIndex === 26 ? "font-bold" : ""}`}
                onClick={() => handleClick(26)}
              >
                <Link href="/en/home/tools/exportexcel" className={style}>
                  Export Excel
                </Link>
              </li>

              <li
                className={`w-37 h-10 ${activeIndex === 27 ? "font-bold" : ""}`}
                onClick={() => handleClick(27)}
              >
                <Link href="/en/home/tools/exportword" className={style}>
                  Export Word
                </Link>
              </li>

              <li
                className={`w-35 h-10 ${activeIndex === 28 ? "font-bold" : ""}`}
                onClick={() => handleClick(28)}
              >
                <Link href="/en/home/tools/exportppt" className={style}>
                  Export PPT
                </Link>
              </li>
            </ul>
          </nav>

          {/* 日志 */}
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-3">
            Update Log
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-40 h-10 ${activeIndex === 17 ? "font-bold" : ""}`}
                onClick={() => handleClick(17)}
              >
                <Link href="/en/home/log" className={style}>
                  Update Log
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* 右侧主内容区 */}
        <main className="flex-1 h-full  p-6 bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300 overflow-auto overflow-x-hidden pb-10 hide-scrollbar sm:h-[calc(100vh-3.25rem)] md:px-4 lg:px-6 xl:px-10 2xl:px-18">
          <div className="max-w-7xl mx-auto w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
