"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import LogoBlack from "@/assets/logoblack.png";
import LogoWhite from "@/assets/logowhite.png";
import { useRouter } from "next/navigation";
import { Space, useTheme } from "tango-ui-cw";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // 存储当前激活的项
  const router = useRouter();
  const [primaryColor, setPrimaryColor] = useState("#fafafa");
  const { theme, setTheme } = useTheme();
  // const [isShowModal, setIsShowModal] = useState(false); // 维护中提示弹窗

  useEffect(() => {
    document.title = "Tango UI Doc";
  }, []);

  // 判断是否为暗黑模式，默认暗色
  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      localStorage.setItem("theme", "dark");
      setIsDark(true);
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else if (storedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      // 跟随系统
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
      setTheme(prefersDark ? "dark" : "light");
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
  }, [setTheme]);

  const style =
    "py-2 pl-5 block rounded-xl text-black dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-gray-800";

  // 处理 li 的点击事件
  const handleClick = (index: number) => {
    setActiveIndex(index); // 设置点击的索引为 active
  };

  // const closeModal = () => {
  //   setIsShowModal(false);
  // };

  // useEffect(() => {
  //   setIsShowModal(true);
  // }, []);

  const changeThemeColor = (color) => {
    document.documentElement.style.setProperty("--primary", color);
    setPrimaryColor(color);
  };

  return (
    <Space className="flex flex-col min-h-screen">
      {/* 顶部导航栏 */}
      <Space className="!h-13 min-w-[800px] bg-white dark:bg-[#0a0a0a] flex items-center justify-between px-6  fixed !w-full">
        <Space className="flex items-center gap-7">
          <Image
            src={theme === "dark" ? LogoWhite : LogoBlack}
            alt="Logo"
            width={26}
            height={26}
          />

          <Space
            className="relative text-xl font-bold ml-[-5px] mr-3 text-black dark:text-neutral-300 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Tango UI
            <Space className="absolute -top-2 -right-9 tracking-[-2px] text-xs bg-black dark:bg-white text-neutral-300 dark:text-black px-[4px] py-[1px] pt-[1px] pr-[6px] rounded">
              {process.env.NEXT_PUBLIC_TANGO_UI_VERSION}
            </Space>
          </Space>
          <Link
            href="/en/home/components/button"
            className="text-black dark:text-neutral-300"
          >
            <Space>Components</Space>
          </Link>
          <Link
            href="/en/home/store"
            className="text-black dark:text-neutral-300"
          >
            <Space>Tango Store</Space>
          </Link>
          <Link
            href="/en/home/tools/watermark"
            className="text-black dark:text-neutral-300"
          >
            <Space>Tools</Space>
          </Link>
          <Link
            href="/en/home/log"
            className="text-black dark:text-neutral-300"
          >
            <Space>Update Log</Space>
          </Link>
        </Space>
        <div className="flex items-center gap-3">
          <span className="text-black bg-amber-300 px-2 py-1 text-sm">
            Under maintenance
          </span>
          <span className="bg-gray-200  text-gray-500 dark:bg-[#292c33] px-[6px] py-[1px] rounded">
            MVP Verson:{" "}
            <span className="tracking-[-2px]">
              {process.env.NEXT_PUBLIC_TANGO_UI_VERSION}
            </span>{" "}
            beta
          </span>
          <ThemeToggle />
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => changeThemeColor(e.target.value)}
            className="w-6 h-6 rounded-full cursor-pointer border-2 border-gray-300 dark:border-gray-600 
             [&::-webkit-color-swatch-wrapper]:p-0 
             [&::-webkit-color-swatch]:border-0 
             [&::-webkit-color-swatch]:rounded-full"
            title="选择自定义颜色"
          />
        </div>
      </Space>

      {/* 下方区域：左右布局 */}
      <div className="flex mt-13 h-[calc(100vh-3.25rem)] overflow-hidden">
        {/* 左侧侧边栏 */}
        <Space className="hidden w-1/7 h-full bg-white dark:bg-[#0a0a0a] p-4 pt-15 overflow-y-auto pb-10 hide-scrollbar xl:block 2xl:block">
          {/* 准备工作 */}
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5">
            Get Started
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-40 h-10 ${activeIndex === 0 ? "font-bold" : ""}`} // 条件添加背景色1
                onClick={() => handleClick(0)}
              >
                <Space>
                  <Link href="/en/home/introduction" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Introduction</Space>
                  </Link>
                </Space>
              </li>
              <li
                className={`w-40 h-10 ${activeIndex === 1 ? "font-bold" : ""}`} // 条件添加背景色
                onClick={() => handleClick(1)}
              >
                <Space>
                  <Link href="/en/home/installation" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Installation</Space>
                  </Link>
                </Space>
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
                className={`w-32 h-10 ${activeIndex === 20 ? "font-bold" : ""}`}
                onClick={() => handleClick(20)}
              >
                <Space>
                  <Link href="/en/home/tangocss" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Tango Css</Space>
                  </Link>
                </Space>
              </li>
              <li
                className={`w-27 h-10 ${activeIndex === 21 ? "font-bold" : ""}`}
                onClick={() => handleClick(21)}
              >
                <Space>
                  <Link href="/en/home/tangocss/mapping" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Mapping</Space>
                  </Link>
                </Space>
              </li>
            </ul>
          </nav>

          {/* 主题 */}
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-3">
            Theme
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-39 h-10 ${activeIndex === 33 ? "font-bold" : ""}`}
                onClick={() => handleClick(33)}
              >
                <Space>
                  <Link href="/en/home/theme/switch" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Theme Switch</Space>
                  </Link>
                </Space>
              </li>
              {/* <li
                className={`w-46 h-10 ${activeIndex === 34 ? "font-bold" : ""}`}
                onClick={() => handleClick(34)}
              >
                <Link href="/en/home/theme/customize" className={style} style={{background:'transparent'}}>
                  <Space>Theme Customize</Space>
                </Link>
              </li> */}
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
                // "Notice",
                "Tooltip",
                // "Layout",
                "Modal",
                "Table",
                "Drawer",
                "Date",
                "Mark",
                "ColorPicker",
                "DatePicker",
                "Upload",
                "Banner",
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
                  <Space>
                    <Link
                      href={`/en/home/components/${
                        item.toLowerCase().split(" ")[0]
                      }`}
                      className={style} style={{background:'transparent'}}
                    >
                      <Space className="hover:!text-[#f13b6c]">{item}</Space>
                    </Link>
                  </Space>
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
                className={`w-38 h-10 ${activeIndex === 22 ? "font-bold" : ""}`}
                onClick={() => handleClick(22)}
              >
                <Space>
                  <Link href="/en/home/store" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Tango Store</Space>
                  </Link>
                </Space>
              </li>
              <li
                className={`w-35 h-10 ${activeIndex === 19 ? "font-bold" : ""}`}
                onClick={() => handleClick(19)}
              >
                <Space>
                  <Link href="/en/home/persistent" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Persistent</Space>
                  </Link>
                </Space>
              </li>
            </ul>
            {/* 地图 */}
            <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-3">
              Map
            </div>
            <ul className="space-y-1">
              <li
                className={`w-43 h-10 ${activeIndex === 31 ? "font-bold" : ""}`}
                onClick={() => handleClick(31)}
              >
                <Space>
                  <Link href="/en/home/map" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">TangoMapViewer</Space>
                  </Link>
                </Space>
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
                <Space>
                  <Link href="/en/home/tools/watermark" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">WaterMark</Space>
                  </Link>
                </Space>
              </li>

              <li
                className={`w-35 h-10 ${activeIndex === 21 ? "font-bold" : ""}`}
                onClick={() => handleClick(21)}
              >
                <Space>
                  <Link href="/en/home/tools/prepdf" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Preview PDF</Space>
                  </Link>
                </Space>
              </li>

              {/* <li
                className={`w-41 h-10 ${activeIndex === 22 ? "font-bold" : ""}`}
                onClick={() => handleClick(22)}
              >
                <Link href="/en/home/tools/preexcel" className={style}>
                  <Space>Preview Excel</Space>
                </Link>
              </li> */}

              {/* <li
                className={`w-38 h-10 ${activeIndex === 23 ? "font-bold" : ""}`}
                onClick={() => handleClick(23)}
              >
                <Link href="/en/home/tools/preword" className={style}>
                  <Space>Preview Word</Space>
                </Link>
              </li>

              <li
                className={`w-36 h-10 ${activeIndex === 24 ? "font-bold" : ""}`}
                onClick={() => handleClick(24)}
              >
                <Link href="/en/home/tools/preppt" className={style}>
                  <Space>Preview PPT</Space>
                </Link>
              </li> */}

              {/* <li
                className={`w-33 h-10 ${activeIndex === 25 ? "font-bold" : ""}`}
                onClick={() => handleClick(25)}
              >
                <Link href="/en/home/tools/exportpdf" className={style}>
                  <Space>Export PDF</Space>
                </Link>
              </li> */}

              <li
                className={`w-39 h-10 ${activeIndex === 26 ? "font-bold" : ""}`}
                onClick={() => handleClick(26)}
              >
                <Space>
                  <Link href="/en/home/tools/exportexcel" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Export Excel</Space>
                  </Link>
                </Space>
              </li>

              {/* <li
                className={`w-37 h-10 ${activeIndex === 27 ? "font-bold" : ""}`}
                onClick={() => handleClick(27)}
              >
                <Link href="/en/home/tools/exportword" className={style} style={{background:'transparent'}}>
                  <Space>Export Word</Space>
                </Link>
              </li>

              <li
                className={`w-35 h-10 ${activeIndex === 28 ? "font-bold" : ""}`}
                onClick={() => handleClick(28)}
              >
                <Link href="/en/home/tools/exportppt" className={style} style={{background:'transparent'}}>
                  <Space>Export PPT</Space>
                </Link>
              </li> */}
            </ul>
          </nav>

          {/* 日志 */}
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-3">
            Update Log
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-40 h-10 ${activeIndex === 32 ? "font-bold" : ""}`}
                onClick={() => handleClick(32)}
              >
                <Space>
                  <Link href="/en/home/log" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Update Log</Space> 
                  </Link>
                </Space>
              </li>
            </ul>
          </nav>
        </Space>

        {/* 右侧主内容区 */}
        <Space className="flex-1 h-full p-6 bg-white dark:bg-[#0a0a0a] text-black  transition-colors duration-300 overflow-y-auto overflow-x-hidden pb-10 hide-scrollbar md:px-4 lg:px-6 xl:px-10 2xl:px-18">
          <Space className="max-w-7xl mx-auto w-full">{children}</Space>
        </Space>

        {/* 维护中弹窗 */}
        {/* <Modal
          title="Caution"
          open={isShowModal}
          onClose={closeModal}
          btnStyles={{
            cancel: { color: "black", backgroundColor: "white" },
            // ok: { color: "white", backgroundColor: "black" },
          }}
        >
          <p className="dark:text-black">
            Many components are currently under maintenance. The next version
            will refactor the underlying structure, optimize the styles of most
            components, improve performance, stability, and accessibility, and
            support rich style features such as theme switching!
            <br />
            <br />
            20260212 @Clayw
          </p>
        </Modal> */}
      </div>
    </Space>
  );
}
