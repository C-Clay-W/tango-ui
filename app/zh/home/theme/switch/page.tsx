"use client";

import React, { useState } from "react";
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
  const [primaryColor, setPrimaryColor] = useState("#fff");
  console.log("theme ==> ", theme);

  const dataSource = [
    {
      key: 1,
      name: "李伟",
      age: 32,
      mathScore: 80,
      englishScore: 87,
      sex: "男",
      address: "北京市朝阳区第一湖畔公园",
    },
    {
      key: 2,
      name: "张丽",
      age: 42,
      mathScore: 60,
      englishScore: 105,
      sex: "女",
      address: "上海市浦东新区第一湖畔公园",
    },
    {
      key: 3,
      name: "王强",
      age: 45,
      mathScore: 75,
      englishScore: 90,
      sex: "男",
      address: "广州市天河区第一湖畔公园",
    },
  ];

  const columns = [
    { title: "姓名", dataIndex: "name", key: "name" },
    { title: "年龄", dataIndex: "age", key: "age" },
    { title: "性别", dataIndex: "sex", key: "sex" },
    { title: "数学成绩", dataIndex: "mathScore", key: "mathScore" },
    {
      title: "英语成绩",
      dataIndex: "englishScore",
      key: "englishScore",
    },
    { title: "住址", dataIndex: "address", key: "address" },
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
    setPrimaryColor(color);
  };

  const dataSourceAPI = [
    {
      key: "1",
      name: "theme",
      type: "string",
      value: "light | dark",
      description: "指定当前主题。支持 'light' 和 'dark' 两种主题。",
      defaultValue: "light",
    },
    {
      key: "2",
      name: "toggleTheme",
      type: "function",
      value: "() => void",
      description: "用于切换主题的函数。",
      defaultValue: "-",
    },
    {
      key: "3",
      name: "setTheme",
      type: "function",
      value: "(theme: 'light' | 'dark') => void",
      description: "用于设置主题的函数。",
      defaultValue: "-",
    },
  ];

  const columnsAPI = [
    {
      title: "属性",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "可选值",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "说明",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "默认值",
      dataIndex: "defaultValue",
      key: "defaultValue",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* 页面标题 */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          主题切换
        </h1>
        {/* <div className="w-20 h-1 bg-blue-500 rounded-full" /> */}
      </div>

      {/* 概述部分 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          概述
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
          Tango UI 提供了简洁高效的主题切换功能，支持亮色/暗色主题的动态切换。
          通过内置的{" "}
          <code className="bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-2 py-1 rounded font-mono text-sm">
            ThemeProvider
          </code>{" "}
          和{" "}
          <code className="bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-2 py-1 rounded font-mono text-sm">
            useTheme
          </code>{" "}
          Hook，您可以轻松实现应用的主题管理。
        </p>
      </div>

      {/* 实时演示部分 */}
      <Space className="mb-10 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <Space className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          实时演示
        </Space>

        <Space className="space-y-6">
          {/* 控制区域 */}
          <Space className="space-y-4">
            {/* 主题切换主控 */}
            <Space className="flex flex-wrap items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <Space className="flex items-center gap-4 flex-wrap">
                <Button
                  onClick={toggleTheme}
                  className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <span>切换主题</span>
                  <span>{theme === "light" ? "🌞" : "🌙"}</span>
                </Button>

                <Space className="flex items-center gap-2">
                  <Space className="text-sm text-gray-500 dark:text-gray-400">
                    快捷设置：
                  </Space>
                  <Button
                    onClick={() => setTheme("light")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      theme === "light"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    亮色
                  </Button>
                  <Button
                    onClick={() => setTheme("dark")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      theme === "dark"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    暗色
                  </Button>
                </Space>
              </Space>
            </Space>

            {/* 主题色自定义区域 */}
            <Space className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <Space className="space-y-3">
                {/* 当前颜色显示 */}
                <Space className="flex items-center justify-between">
                  <Space className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    当前主题色
                  </Space>
                  <Space className="flex items-center gap-2">
                    <Space
                      className="w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600"
                      style={{ backgroundColor: primaryColor }}
                    />
                    <Space className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                      {primaryColor}
                    </Space>
                  </Space>
                </Space>

                {/* 颜色选择器和预设颜色放在一行 */}
                <Space className="flex items-start gap-4">
                  {/* 自定义颜色选择器 */}
                  <Space className="flex-1">
                    <Space className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">
                      自定义
                    </Space>
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => changeThemeColor(e.target.value)}
                      className="w-100 h-10 rounded-lg cursor-pointer border border-gray-300 dark:border-gray-600"
                      title="选择自定义颜色"
                    />
                  </Space>

                  {/* 预设颜色 */}
                  <Space className="flex-2">
                    <Space className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1">
                      预设颜色
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
                <Space className="text-xs text-gray-500 dark:text-gray-400 mt-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  💡 点击预设颜色或使用颜色选择器自定义主题色，实时预览效果
                </Space>
              </Space>
            </Space>
          </Space>

          {/* 卡片组件示例 */}
          <Space className="space-y-2">
            <Space className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Card 组件
            </Space>
            <Space className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Space className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                <Space className="font-medium text-gray-900 dark:text-white mb-2">
                  卡片标题
                </Space>
                <Space className="text-sm text-gray-600 dark:text-gray-400">
                  这是一个示例卡片，展示了主题切换后的样式变化。
                </Space>
              </Space>
              <Space className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                <Space className="font-medium text-gray-900 dark:text-white mb-2">
                  卡片标题
                </Space>
                <Space className="text-sm text-gray-600 dark:text-gray-400">
                  主题切换会影响所有使用 Tailwind dark: 前缀的元素。
                </Space>
              </Space>
            </Space>
          </Space>

          {/* MaterialButton 组件示例 */}
          <Space className="space-y-2">
            <Space className="text-lg font-medium text-gray-700 dark:text-gray-300">
              MaterialButton 组件
            </Space>
            <Space>
              <MaterialButton type="" size="">
                MaterialButton
              </MaterialButton>
            </Space>
          </Space>

          {/* Input 组件示例 */}
          <Space className="space-y-2">
            <Space className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Input 组件
            </Space>
            <Space>
              <Input size="" placeholder="普通输入框" />
            </Space>
          </Space>

          {/* Search 组件示例 */}
          <Space className="space-y-2">
            <Space className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Search 组件
            </Space>
            <Space>
              <Search size="" btnText="搜索" placeholder="输入搜索内容..." />
            </Space>
          </Space>

          {/* Table 组件示例 */}
          <Space className="space-y-2">
            <Space className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Table 组件
            </Space>
            <Space>
              <Table dataSource={dataSource} columns={columns} />
            </Space>
          </Space>
        </Space>
      </Space>

      {/* 安装与配置 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          安装与配置
        </h2>

        <div className="div-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
              1. 根组件引入 ThemeProvider
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { ThemeProvider } from "tango-ui-cw";

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
              2. 在组件中使用
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { useTheme } from "tango-ui-cw";

function ThemeSwitch() {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      切换主题
    </button>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* 语法 */}
      <div>
        <div className="text-2xl font-bold mb-5 dark:text-neutral-300">
          语法
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`const { theme, toggleTheme, setTheme } = useTheme();`}</code>
        </pre>
      </div>

      {/* API 参考 */}
      <div className="mt-8">
        <div className="text-2xl font-bold mb-5 dark:text-neutral-300">API</div>
        <Table dataSource={dataSourceAPI} columns={columnsAPI} />
      </div>

      {/* 最佳实践 */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">
          最佳实践
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <ul className="list-disc pl-6 div-y-2 text-gray-700 dark:text-gray-300">
            <li>在应用入口的最外层使用 ThemeProvider</li>
            <li>主题切换按钮建议放置在全局组件、导航位置</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
