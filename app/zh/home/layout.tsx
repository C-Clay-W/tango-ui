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
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // 记录点击的 li
  const router = useRouter();

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
    setActiveIndex(index);
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
            href="/zh/home/components/button"
            className="text-black dark:text-neutral-300"
          >
            组件
          </Link>
          <Link
            href="/zh/home/store"
            className="text-black dark:text-neutral-300"
          >
            状态管理
          </Link>
          <Link
            href="/zh/home/tools/watermark"
            className="text-black dark:text-neutral-300"
          >
            实用工具
          </Link>
          <Link
            href="/zh/home/log"
            className="text-black dark:text-neutral-300"
          >
            更新日志
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-gray-200  text-gray-500 dark:bg-[#292c33] px-[6px] py-[1px] rounded">
            MVP 版本: <span className="tracking-[-2px]">0.4.3</span> beta
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
            起手技
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-19 h-10 ${activeIndex === 0 ? "font-bold" : ""}`}
                onClick={() => handleClick(0)}
              >
                <Link href="/zh/home/introduction" className={style}>
                  介绍
                </Link>
              </li>
              <li
                className={`w-19 h-10 ${activeIndex === 1 ? "font-bold" : ""}`}
                onClick={() => handleClick(1)}
              >
                <Link href="/zh/home/installation" className={style}>
                  安装
                </Link>
              </li>
            </ul>
          </nav>

          {/* 样式 */}
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-3">
            样式
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-43 h-10 ${activeIndex === 29 ? "font-bold" : ""}`}
                onClick={() => handleClick(29)}
              >
                <Link href="/zh/home/tangocss" className={style}>
                  Tango Css 样式
                </Link>
              </li>
              <li
                className={`w-27 h-10 ${activeIndex === 30 ? "font-bold" : ""}`}
                onClick={() => handleClick(30)}
              >
                <Link href="/zh/home/tangocss/mapping" className={style}>
                  样式映射
                </Link>
              </li>
            </ul>
          </nav>

          {/* 组件 */}
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-5">
            组件
          </div>
          <nav>
            <ul className="space-y-1">
              {[
                "Button 按钮",
                "Space 盒子",
                "Line 分割线",
                "Input 输入框",
                "Search 搜索框",
                "Notice 提示",
                "Tooltip 浮窗气泡",
                "Layout 布局",
                "Modal 模态框",
                "Table 表格",
                "Drawer 抽屉",
                "Date 日期",
                "Mark 标记",
                "ColorPicker 颜色选择器",
                "DatePicker 日期选择器",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`${item.includes("Tooltip") ? "w-45" : "w-35"} ${
                    item.includes("ColorPicker") || item.includes("DatePicker")
                      ? "w-60"
                      : "w-35"
                  } rounded-xl ${activeIndex === index + 2 ? "font-bold" : ""}`}
                  onClick={() => handleClick(index + 2)}
                >
                  <Link
                    href={`/zh/home/components/${
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
            状态管理
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-55 h-10 ${activeIndex === 18 ? "font-bold" : ""}`}
                onClick={() => handleClick(18)}
              >
                <Link href="/zh/home/store" className={style}>
                  Tango Store 状态管理
                </Link>
              </li>
              <li
                className={`w-48 h-10 ${activeIndex === 19 ? "font-bold" : ""}`}
                onClick={() => handleClick(19)}
              >
                <Link href="/zh/home/persistent" className={style}>
                  Persistent 持久化
                </Link>
              </li>
            </ul>
            {/* 工具 */}
            <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-3">
              工具
            </div>
            <ul className="space-y-1">
              <li
                className={`w-41 h-10 ${activeIndex === 20 ? "font-bold" : ""}`}
                onClick={() => handleClick(20)}
              >
                <Link href="/zh/home/tools/watermark" className={style}>
                  WaterMark 水印
                </Link>
              </li>

              <li
                className={`w-28 h-10 ${activeIndex === 21 ? "font-bold" : ""}`}
                onClick={() => handleClick(21)}
              >
                <Link href="/zh/home/tools/prepdf" className={style}>
                  浏览 PDF
                </Link>
              </li>

              <li
                className={`w-32 h-10 ${activeIndex === 22 ? "font-bold" : ""}`}
                onClick={() => handleClick(22)}
              >
                <Link href="/zh/home/tools/preexcel" className={style}>
                  浏览 Excel
                </Link>
              </li>

              <li
                className={`w-31 h-10 ${activeIndex === 23 ? "font-bold" : ""}`}
                onClick={() => handleClick(23)}
              >
                <Link href="/zh/home/tools/preword" className={style}>
                  浏览 Word
                </Link>
              </li>

              <li
                className={`w-28 h-10 ${activeIndex === 24 ? "font-bold" : ""}`}
                onClick={() => handleClick(24)}
              >
                <Link href="/zh/home/tools/preppt" className={style}>
                  浏览 PPT
                </Link>
              </li>

              <li
                className={`w-28 h-10 ${activeIndex === 25 ? "font-bold" : ""}`}
                onClick={() => handleClick(25)}
              >
                <Link href="/zh/home/tools/exportpdf" className={style}>
                  导出 PDF
                </Link>
              </li>

              <li
                className={`w-32 h-10 ${activeIndex === 26 ? "font-bold" : ""}`}
                onClick={() => handleClick(26)}
              >
                <Link href="/zh/home/tools/exportexcel" className={style}>
                  导出 Excel
                </Link>
              </li>

              <li
                className={`w-31 h-10 ${activeIndex === 27 ? "font-bold" : ""}`}
                onClick={() => handleClick(27)}
              >
                <Link href="/zh/home/tools/exportword" className={style}>
                  导出 Word
                </Link>
              </li>

              <li
                className={`w-28 h-10 ${activeIndex === 28 ? "font-bold" : ""}`}
                onClick={() => handleClick(28)}
              >
                <Link href="/zh/home/tools/exportppt" className={style}>
                  导出 PPT
                </Link>
              </li>
            </ul>
          </nav>

          {/* 日志 */}
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-3">
            更新日志
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-54 h-10 ${activeIndex === 17 ? "font-bold" : ""}`}
                onClick={() => handleClick(17)}
              >
                <Link href="/zh/home/log" className={style}>
                  Update Log 更新日志
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* 右侧主内容区 */}
        <main className="flex-1 h-full  p-6 bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300 overflow-auto overflow-x-hidden pb-10 hide-scrollbar sm:h-[calc(100vh-3.25rem)] md:px-4 lg:px-6 xl:px-10 2xl:px-18">
          <div className="max-w-7xl mx-auto w-full ">{children}</div>
        </main>
      </div>
    </div>
  );
}
