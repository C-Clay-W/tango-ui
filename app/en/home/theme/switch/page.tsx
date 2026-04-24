"use client";

import React, { useState } from "react";
import DocCodeBlock from "@/components/DocCodeBlock";
import {
  useTheme,
  Space,
  Button,
  Input,
  Search,
  Table,
  MaterialButton,
} from "tango-ui-cw";

const Page = () => {
  const { theme, toggleTheme, setTheme } = useTheme();
  const [primaryColor, setPrimaryColor] = useState("#fafafa");

  const dataSource = [
    {
      key: 1,
      name: "Brown",
      age: 32,
      mathScore: 80,
      englishScore: 87,
      sex: "Male",
      address: "New York No. 1 Lake Park",
    },
    {
      key: 2,
      name: "John Doe",
      age: 42,
      mathScore: 60,
      englishScore: 105,
      sex: "Female",
      address: "Shanghai Pudong New District First Lake Park",
    },
    {
      key: 3,
      name: "John Smith",
      age: 45,
      mathScore: 75,
      englishScore: 90,
      sex: "Male",
      address: "Guangzhou Tianhe District First Lake Park",
    },
  ];

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Gender", dataIndex: "sex", key: "sex" },
    { title: "Math Score", dataIndex: "mathScore", key: "mathScore" },
    {
      title: "English Score",
      dataIndex: "englishScore",
      key: "englishScore",
    },
    { title: "Address", dataIndex: "address", key: "address" },
  ];

  // 预设颜色
  const presetColors = [
    "#fff", // 白色
    "#10b981", // 绿色
    "#ef4444", // 红色
    "#8b5cf6", // 紫色
    "#f59e0b", // 橙色
  ];

  const changeThemeColor = (color) => {
    document.documentElement.style.setProperty("--primary", color);
    // 下边四个为语义化主题变量实现方法，各自独立控制，需要就set不需要就不写
    document.documentElement.style.setProperty("--input-accent", color); // 输入类控件交互强调色
		document.documentElement.style.setProperty("--modal-ok-bg", color); // Modal 的 OK 按钮色
		document.documentElement.style.setProperty("--drawer-ok-bg", color); // Drawer 的 OK 按钮色
    document.documentElement.style.setProperty("--datepicker-confirm-bg", color); // DatePicker 颜色控制
    setPrimaryColor(color);
  };

  const dataSourceAPI = [
    {
      key: "1",
      name: "theme",
      type: "string",
      value: "light | dark",
      description:
        "specify the current theme,two themes are supported: 'light' and 'dark'.",
      defaultValue: "light",
    },
    {
      key: "2",
      name: "toggleTheme",
      type: "function",
      value: "() => void",
      description: "a function used to switch themes.",
      defaultValue: "-",
    },
    {
      key: "3",
      name: "setTheme",
      type: "function",
      value: "(theme: 'light' | 'dark') => void",
      description: "a function used to set the theme.",
      defaultValue: "-",
    },
  ];

  const columnsAPI = [
    {
      title: "Prop",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Accepted Values",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Default",
      dataIndex: "defaultValue",
      key: "defaultValue",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* 页面标题 */}
      <div className="mb-10">
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: "var(--doc-title-color)" }}
        >
          Theme Switch
        </h1>
        {/* <div className="w-20 h-1 bg-blue-500 rounded-full" /> */}
      </div>

      {/* 概述部分 */}
      <div className="mb-10">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: "var(--doc-text-primary)" }}
        >
          Summary
        </h2>
        <p
          className="leading-relaxed text-lg"
          style={{ color: "var(--doc-text-secondary)" }}
        >
          Tango UI provides a simple and efficient theme switching feature,
          supporting dynamic switching between light and dark themes. Through
          the built-in{" "}
          <code
            className="px-2 py-1 rounded font-mono text-sm"
            style={{
              backgroundColor: "var(--doc-code-header-bg)",
              color: "var(--doc-info-text)",
            }}
          >
            ThemeProvider
          </code>{" "}
          and{" "}
          <code
            className="px-2 py-1 rounded font-mono text-sm"
            style={{
              backgroundColor: "var(--doc-code-header-bg)",
              color: "var(--doc-info-text)",
            }}
          >
            useTheme
          </code>{" "}
          Hook, you can easily implement theme management for your application.
        </p>
      </div>

      {/* 注意 */}
      <div
        className="mb-8 p-6 rounded-xl border"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--doc-warn-bg), var(--doc-card-bg))",
          borderColor: "var(--doc-warn-border)",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: "var(--doc-success-icon-bg)" }}
          >
            <svg
              className="w-6 h-6"
              style={{ color: "var(--doc-warn-text)" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold" style={{ color: "var(--doc-text-primary)" }}>
            Caution
          </h3>
        </div>

        <div className="space-y-4">
          <p className="font-bold" style={{ color: "var(--doc-text-primary)" }}>
            All Tango UI components can directly support theme switching. If you
            want other elements to also support theme colors, you must use the
            Space component.
          </p>
        </div>
      </div>

      {/* 实时演示部分 */}
      <Space
        className="mb-10 p-6 rounded-xl border border-gray-500"
        // style={{
        //   backgroundColor: "var(--doc-code-header-bg)",
        //   borderColor: "var(--doc-card-border)",
        // }}
      >
        <Space
          className="text-2xl font-semibold mb-6"
          style={{ color: "var(--doc-text-primary)" }}
        >
          Demo
        </Space>

        <Space className="space-y-6">
          {/* 控制区域 */}
          <Space className="space-y-4">
            {/* 主题切换主控 */}
            <Space
              className="flex flex-wrap items-center gap-4 p-4 rounded-lg border border-gray-500"
              // style={{
              //   backgroundColor: "var(--doc-card-bg)",
              //   borderColor: "var(--doc-card-border)",
              // }}
            >
              <Space className="flex items-center gap-4 flex-wrap">
                <Button
                  onClick={toggleTheme}
                  className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <span>Switch Theme</span>
                  <span>{theme === "light" ? "🌞" : "🌙"}</span>
                </Button>

                <Space className="flex items-center gap-2">
                  <Space className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
                    Quick Settings:
                  </Space>
                  <Button
                    onClick={() => setTheme("light")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      theme === "light"
                        ? "bg-blue-500 text-white"
                        : ""
                    }`}
                    style={
                      theme === "light"
                        ? undefined
                        : {
                            backgroundColor: "var(--doc-btn-secondary-bg)",
                            color: "var(--doc-btn-secondary-text)",
                          }
                    }
                  >
                    Light
                  </Button>
                  <Button
                    onClick={() => setTheme("dark")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      theme === "dark"
                        ? "bg-blue-500 text-white"
                        : ""
                    }`}
                    style={
                      theme === "dark"
                        ? undefined
                        : {
                            backgroundColor: "var(--doc-btn-secondary-bg)",
                            color: "var(--doc-btn-secondary-text)",
                          }
                    }
                  >
                    Dark
                  </Button>
                </Space>
              </Space>
            </Space>

            {/* 主题色自定义区域 */}
            <Space
              className="p-4 rounded-lg border border-gray-500"
              // style={{
              //   backgroundColor: "var(--doc-card-bg)",
              //   borderColor: "var(--doc-card-border)",
              // }}
            >
              <Space className="space-y-3">
                {/* 当前颜色显示 */}
                <Space className="flex items-center justify-between">
                  <Space
                    className="text-sm font-medium"
                    style={{ color: "var(--doc-text-primary)" }}
                  >
                    Current Theme Color
                  </Space>
                  <Space className="flex items-center gap-2">
                    <Space
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: primaryColor }}
                    />
                    <Space
                      className="text-sm font-mono"
                      style={{ color: "var(--doc-text-secondary)" }}
                    >
                      {primaryColor}
                    </Space>
                  </Space>
                </Space>

                {/* 颜色选择器和预设颜色放在一行 */}
                <Space className="flex items-start gap-4">
                  {/* 自定义颜色选择器 */}
                  <Space className="flex-1">
                    <Space
                      className="text-sm font-medium block mb-1"
                      style={{ color: "var(--doc-text-primary)" }}
                    >
                      Custom Color
                    </Space>
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => changeThemeColor(e.target.value)}
                      className="w-9 h-9 rounded-full cursor-pointer border-2 
             [&::-webkit-color-swatch-wrapper]:p-0 
             [&::-webkit-color-swatch]:border-0 
             [&::-webkit-color-swatch]:rounded-full"
                      style={{ borderColor: "var(--doc-card-border)" }}
                      title="Select Custom Color"
                    />
                  </Space>

                  {/* 预设颜色 */}
                  <Space className="flex-2">
                    <Space
                      className="text-sm font-medium block mb-1"
                      style={{ color: "var(--doc-text-primary)" }}
                    >
                      Preset Colors
                    </Space>
                    <Space className="flex flex-wrap gap-2">
                      {presetColors.map((color) => (
                        <button
                          key={color}
                          onClick={() => changeThemeColor(color)}
                          className={`
                  w-8 h-8 rounded-lg border-2 transition-all
                  ${
                    primaryColor === color
                      ? "border-blue-500 scale-110 shadow-md"
                      : "border-transparent hover:scale-105 hover:shadow"
                  }
                `}
                          style={{
                            backgroundColor: color,
                            border: "1px solid gray",
                          }}
                          title={color}
                        >
                          {primaryColor === color && (
                            <span className="flex items-center justify-center text-white text-xs">
                              ✓
                            </span>
                          )}
                        </button>
                      ))}
                    </Space>
                  </Space>
                </Space>

                {/* 颜色说明 */}
                <Space
                  className="text-xs mt-2 p-2 rounded"
                  style={{
                    color: "var(--doc-text-secondary)",
                    backgroundColor: "var(--doc-code-header-bg)",
                  }}
                >
                  💡 Click on preset colors or use the color picker to customize
                  the theme color, and preview the changes in real-time.
                </Space>
              </Space>
            </Space>
          </Space>

          {/* 卡片组件示例 */}
          <Space className="space-y-2">
            <Space
              className="text-lg font-medium"
              style={{ color: "var(--doc-text-primary)" }}
            >
              Card
            </Space>
            <Space className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Space
                className="p-4 rounded-lg border border-gray-500"
                // style={{
                //   backgroundColor: "var(--doc-card-bg)",
                //   borderColor: "var(--doc-card-border)",
                // }}
              >
                <Space className="font-medium mb-2" style={{ color: "var(--doc-text-primary)" }}>
                  Card Title
                </Space>
                <Space className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
                  This is a sample card that demonstrates the style changes
                  after theme switching.
                </Space>
              </Space>
              <Space
                className="p-4 rounded-lg border border-gray-500"
                // style={{
                //   backgroundColor: "var(--doc-card-bg)",
                //   borderColor: "var(--doc-card-border)",
                // }}
              >
                <Space className="font-medium mb-2" style={{ color: "var(--doc-text-primary)" }}>
                  Card Title
                </Space>
                <Space className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
                  This is a sample card that demonstrates the style changes
                  after theme switching.
                </Space>
              </Space>
            </Space>
          </Space>

          {/* MaterialButton 组件示例 */}
          <Space className="space-y-2">
            <Space
              className="text-lg font-medium"
              style={{ color: "var(--doc-text-primary)" }}
            >
              MaterialButton
            </Space>
            <Space>
              <MaterialButton type="" size="">
                MaterialButton
              </MaterialButton>
            </Space>
          </Space>

          {/* Input 组件示例 */}
          <Space className="space-y-2">
            <Space
              className="text-lg font-medium"
              style={{ color: "var(--doc-text-primary)" }}
            >
              Input
            </Space>
            <Space>
              <Input size="" placeholder="Regular Input" />
            </Space>
          </Space>

          {/* Search 组件示例 */}
          <Space className="space-y-2">
            <Space
              className="text-lg font-medium"
              style={{ color: "var(--doc-text-primary)" }}
            >
              Search
            </Space>
            <Space>
              <Search
                size=""
                btnText="Search"
                placeholder="Enter search content..."
              />
            </Space>
          </Space>

          {/* Table 组件示例 */}
          <Space className="space-y-2">
            <Space
              className="text-lg font-medium"
              style={{ color: "var(--doc-text-primary)" }}
            >
              Table
            </Space>
            <Space>
              <Table dataSource={dataSource} columns={columns} />
            </Space>
          </Space>
        </Space>
      </Space>

      {/* 安装与配置 */}
      <div className="mb-10">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: "var(--doc-text-primary)" }}
        >
          Installation and Configuration
        </h2>

        <div className="div-y-6">
          <div>
            <h3
              className="text-lg font-medium mb-2"
              style={{ color: "var(--doc-text-primary)" }}
            >
              1. Import the ThemeProvider from root component
            </h3>
            <div
              className="rounded-lg border overflow-hidden"
              style={{ borderColor: "var(--doc-code-wrapper-border)" }}
            >
              <DocCodeBlock code={`import { ThemeProvider } from "tango-ui-cw";

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}`} />
            </div>
          </div>

          <div>
            <h3
              className="text-lg font-medium mb-2"
              style={{ color: "var(--doc-text-primary)" }}
            >
              2. Use in Component
            </h3>
            <div
              className="rounded-lg border overflow-hidden"
              style={{ borderColor: "var(--doc-code-wrapper-border)" }}
            >
              <DocCodeBlock code={`import { useTheme } from "tango-ui-cw";

function ThemeSwitch() {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch Theme
    </button>
  );
}`} />
            </div>
          </div>
        </div>
      </div>

      {/* 语法 */}
      <div>
        <div className="text-2xl font-bold mb-5" style={{ color: "var(--doc-text-primary)" }}>
          Syntax
        </div>
        <div
          className="rounded-lg border overflow-hidden"
          style={{ borderColor: "var(--doc-code-wrapper-border)" }}
        >
          <DocCodeBlock code={`const { theme, toggleTheme, setTheme } = useTheme();`} />
        </div>
      </div>

      {/* API 参考 */}
      <div className="mt-8">
        <div className="text-2xl font-bold mb-5" style={{ color: "var(--doc-text-primary)" }}>
          API
        </div>
        <Table dataSource={dataSourceAPI} columns={columnsAPI} />
      </div>

      {/* 最佳实践 */}
      <div>
        <h2
          className="text-2xl font-semibold mb-4 mt-8"
          style={{ color: "var(--doc-text-primary)" }}
        >
          Best Practices
        </h2>
        <div
          className="border-l-4 p-4 rounded-r-lg"
          style={{
            backgroundColor: "var(--doc-info-bg)",
            borderColor: "var(--doc-info-border)",
          }}
        >
          <ul className="list-disc pl-6 div-y-2" style={{ color: "var(--doc-info-text)" }}>
            <li>Use ThemeProvider at the top level of your application</li>
            <li>
              Place the theme switch button in a global component or navigation
              area
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
