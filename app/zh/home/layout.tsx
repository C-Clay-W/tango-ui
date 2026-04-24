"use client";

import { useEffect, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // 记录点击的 li
  const router = useRouter();
  const [primaryColor, setPrimaryColor] = useState("#fafafa");
  const { theme } = useTheme();
  // const [isShowModal, setIsShowModal] = useState(false); // 维护中提示弹窗

  // 判断是否为暗黑模式，默认亮色
  useEffect(() => {
    localStorage.setItem("theme", "light");
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
    } else if (storedTheme === "light") {
      setIsDark(false);
    } else {
      // 跟随系统
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
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
            href="/zh/home/components/button"
            className="text-black dark:text-neutral-300"
          >
            <Space>组件</Space>
          </Link>
          <Link
            href="/zh/home/store"
            className="text-black dark:text-neutral-300"
          >
            <Space>状态管理</Space>
          </Link>
          <Link
            href="/zh/home/tools/watermark"
            className="text-black dark:text-neutral-300"
          >
            <Space>实用工具</Space>
          </Link>
          <Link
            href="/zh/home/log"
            className="text-black dark:text-neutral-300"
          >
            <Space>更新日志</Space>
          </Link>
        </Space>
        <div className="flex items-center gap-3">
          <span className="text-black bg-amber-300 px-2 py-1 text-sm">
            正在维护中
          </span>
          <span className="bg-gray-200  text-gray-500 dark:bg-[#292c33] px-[6px] py-[1px] rounded">
            MVP 版本:{" "}
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
            起手技
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-19 h-10 ${activeIndex === 0 ? "font-bold" : ""}`}
                onClick={() => handleClick(0)}
              >
                <Space>
                  <Link href="/zh/home/introduction" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">介绍</Space>
                  </Link>
                </Space>
              </li>
              <li
                className={`w-19 h-10 ${activeIndex === 1 ? "font-bold" : ""}`}
                onClick={() => handleClick(1)}
              >
                <Space>
                  <Link href="/zh/home/installation" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">安装</Space>
                  </Link>
                </Space>
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
                className={`w-43 h-10 ${activeIndex === 20 ? "font-bold" : ""}`}
                onClick={() => handleClick(20)}
              >
                <Space>
                  <Link href="/zh/home/tangocss" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Tango Css 样式</Space>
                  </Link>
                </Space>
              </li>
              <li
                className={`w-27 h-10 ${activeIndex === 21 ? "font-bold" : ""}`}
                onClick={() => handleClick(21)}
              >
                <Space>
                  <Link href="/zh/home/tangocss/mapping" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">样式映射</Space>
                  </Link>
                </Space>
              </li>
            </ul>
          </nav>

          {/* 主题 */}
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-3">
            主题
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-26 h-10 ${activeIndex === 33 ? "font-bold" : ""}`}
                onClick={() => handleClick(33)}
              >
                <Space>
                  <Link href="/zh/home/theme/switch" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">主题切换</Space>
                  </Link>
                </Space>
              </li>
              {/* <li
                className={`w-26 h-10 ${activeIndex === 34 ? "font-bold" : ""}`}
                onClick={() => handleClick(34)}
              >
                <Link href="/zh/home/theme/customize" className={style}>
                  主题定制
                </Link>
              </li> */}
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
                // "Notice 提示", // 这里暂时屏蔽，版本095，修复完再打开
                "Tooltip 浮窗气泡",
                // "Layout 布局",
                "Modal 模态框",
                "Table 表格",
                "Drawer 抽屉",
                "Date 日期",
                "Mark 标记",
                "ColorPicker 颜色选择器",
                "DatePicker 日期选择器",
                "Upload 上传",
                "Banner 横幅",
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
                  <Space>
                    <Link
                      href={`/zh/home/components/${
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
            状态管理
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-55 h-10 ${activeIndex === 22 ? "font-bold" : ""}`}
                onClick={() => handleClick(22)}
              >
                <Space>
                  <Link href="/zh/home/store" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Tango Store 状态管理</Space>
                  </Link>
                </Space>
              </li>
              <li
                className={`w-48 h-10 ${activeIndex === 19 ? "font-bold" : ""}`}
                onClick={() => handleClick(19)}
              >
                <Space>
                  <Link href="/zh/home/persistent" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Persistent 持久化</Space>
                  </Link>
                </Space>
              </li>
            </ul>

            {/* 地图 */}
            <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-3">
              地图
            </div>
            <ul className="space-y-1">
              <li
                className={`w-43 h-10 ${activeIndex === 31 ? "font-bold" : ""}`}
                onClick={() => handleClick(31)}
              >
                <Space>
                  <Link href="/zh/home/map" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">TangoMapViewer</Space>
                  </Link>
                </Space>
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
                <Space>
                  <Link href="/zh/home/tools/watermark" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">WaterMark 水印</Space>
                  </Link>
                </Space>
              </li>

              <li
                className={`w-28 h-10 ${activeIndex === 21 ? "font-bold" : ""}`}
                onClick={() => handleClick(21)}
              >
                <Space>
                  <Link href="/zh/home/tools/prepdf" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">浏览 PDF</Space>
                  </Link>
                </Space>
              </li>

              {/* <li
                className={`w-32 h-10 ${activeIndex === 22 ? "font-bold" : ""}`}
                onClick={() => handleClick(22)}
              >
                <Link href="/zh/home/tools/preexcel" className={style}>
                  浏览 Excel
                </Link>
              </li> */}

              {/* <li
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
              </li> */}

              {/* <li
                className={`w-28 h-10 ${activeIndex === 25 ? "font-bold" : ""}`}
                onClick={() => handleClick(25)}
              >
                <Link href="/zh/home/tools/exportpdf" className={style}>
                  导出 PDF
                </Link>
              </li> */}

              <li
                className={`w-32 h-10 ${activeIndex === 26 ? "font-bold" : ""}`}
                onClick={() => handleClick(26)}
              >
                <Space>
                  <Link href="/zh/home/tools/exportexcel" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">导出 Excel</Space>
                  </Link>
                </Space>
              </li>

              {/* <li
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
              </li> */}
            </ul>
          </nav>

          {/* 日志 */}
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ml-5 mt-3">
            更新日志
          </div>
          <nav>
            <ul className="space-y-1">
              <li
                className={`w-54 h-10 ${activeIndex === 32 ? "font-bold" : ""}`}
                onClick={() => handleClick(32)}
              >
                <Space>
                  <Link href="/zh/home/log" className={style} style={{background:'transparent'}}>
                    <Space className="hover:!text-[#f13b6c]">Update Log 更新日志</Space>
                  </Link>
                </Space>
              </li>
            </ul>
          </nav>
        </Space>

        {/* 右侧主内容区 */}
        <Space className="flex-1 h-full p-6 bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300 overflow-y-auto overflow-x-hidden pb-10 hide-scrollbar md:px-4 lg:px-6 xl:px-10 2xl:px-18">
          <Space className="max-w-7xl mx-auto w-full ">{children}</Space>
        </Space>
        {/* 维护中弹窗 */}
        {/* <Modal
          title="请注意"
          open={isShowModal}
          onClose={closeModal}
          btnStyles={{
            cancel: { color: "black", backgroundColor: "white" },
            // ok: { color: "white", backgroundColor: "black" },
          }}
        >
          <p className="dark:text-black">
            大量组件正在维护中，下一版本将重构底层，优化大部分组件样式，提升性能、稳定性以及可访问性，支持主题切换等丰富的样式功能！
            <br />
            <br />
            20260212 @Clayw
          </p>
        </Modal> */}
      </div>
    </Space>
  );
}
