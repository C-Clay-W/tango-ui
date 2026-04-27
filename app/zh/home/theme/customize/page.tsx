import React from "react";
import DocCodeBlock from "@/components/DocCodeBlock";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="text-4xl font-bold mb-5" style={{ color: "var(--doc-title-color)" }}>
        主题定制
      </div>

      <div className="mb-8" style={{ color: "var(--doc-text-secondary)" }}>
        你可以通过 <span className="font-semibold">tango-ui-cw</span> 提供的
        主题能力快速完成暗黑/浅色主题切换，并可通过 CSS 变量进行更细粒度的品牌色与组件语义色定制。
      </div>

      <div className="text-2xl font-bold mb-3" style={{ color: "var(--doc-text-primary)" }}>
        1. 根布局接入 ThemeProvider
      </div>
      <div className="mb-3" style={{ color: "var(--doc-text-secondary)" }}>
        根据你当前项目的根布局，先在根文件引入并包裹 children：
      </div>
      <div
        className="rounded-lg border overflow-hidden"
        style={{ borderColor: "var(--doc-code-wrapper-border)" }}
      >
        <DocCodeBlock code={`import { ThemeProvider } from "tango-ui-cw";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`} />
      </div>

      <div className="mt-8 text-2xl font-bold mb-3" style={{ color: "var(--doc-text-primary)" }}>
        2. 在业务页面中使用 useTheme
      </div>
      <div className="mb-3" style={{ color: "var(--doc-text-secondary)" }}>
        在任意需要切换主题的组件中使用 <span className="font-semibold">useTheme</span>，通过
        <span className="font-semibold"> setTheme </span>进行切换。
      </div>
      <div
        className="rounded-lg border overflow-hidden"
        style={{ borderColor: "var(--doc-code-wrapper-border)" }}
      >
        <DocCodeBlock code={`"use client";

import { useTheme } from "tango-ui-cw";

export default function ThemeSwitchExample() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme("light")}>浅色</button>
      <button onClick={() => setTheme("dark")}>暗色</button>
      <div>当前主题：{theme}</div>
    </div>
  );
}`} />
      </div>

      <div className="mt-8 text-2xl font-bold mb-3" style={{ color: "var(--doc-text-primary)" }}>
        3. 自定义品牌色与语义变量（进阶）
      </div>
      <div className="mb-3" style={{ color: "var(--doc-text-secondary)" }}>
        如果你希望不仅切换明暗主题，还要统一组件强调色、确认按钮色等，可以直接设置 CSS 变量：
      </div>
      <div
        className="rounded-lg border overflow-hidden"
        style={{ borderColor: "var(--doc-code-wrapper-border)" }}
      >
        <DocCodeBlock code={`const changeThemeColor = (color) => {
  document.documentElement.style.setProperty("--primary", color); // 品牌主色（全局基础色）
  // 下边四个为语义化主题变量实现方法，各自独立控制，需要就 set，不需要就不写
  document.documentElement.style.setProperty("--input-accent", color); // 输入类控件交互强调色
  document.documentElement.style.setProperty("--modal-ok-bg", color); // Modal 的 OK 按钮色
  document.documentElement.style.setProperty("--drawer-ok-bg", color); // Drawer 的 OK 按钮色
  document.documentElement.style.setProperty("--datepicker-confirm-bg", color); // DatePicker 颜色控制
  setPrimaryColor(color);
  };`} />
    </div>

      <div className="mt-8 text-2xl font-bold mb-3" style={{ color: "var(--doc-text-primary)" }}>
        4. 主题初始化建议
      </div>
      <ul className="list-disc pl-5 space-y-2" style={{ color: "var(--doc-text-secondary)" }}>
        <li>首次访问建议从 localStorage 读取主题并落到 html 的 class/data-theme，避免首屏闪烁。</li>
        <li>若支持 system 模式，可通过 prefers-color-scheme 自动跟随系统。</li>
        <li>使用 suppressHydrationWarning 可减少服务端与客户端主题状态不一致的告警。</li>
      </ul>

      <div
        className="mt-8 p-4 border rounded"
        style={{ backgroundColor: "var(--doc-info-bg)", borderColor: "var(--doc-info-border)" }}
      >
        <div className="font-semibold mb-2" style={{ color: "var(--doc-info-title)" }}>与你当前实现对应关系</div>
        <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--doc-info-text)" }}>
          <li>根布局已使用 ThemeProvider 包裹应用。</li>
          <li>页面中可直接通过 useTheme 的 setTheme 进行主题切换。</li>
          <li>品牌色与语义变量可通过 document.documentElement.style.setProperty 动态更新。</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;