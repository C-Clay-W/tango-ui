"use client";
import React, { useState } from "react";
import { Button, Table, useNotice } from "tango-ui-cw";
import DemoBlock from "@/components/DemoWideZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const NoticeComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "success", label: "成功" },
    { id: "warn", label: "警告" },
    { id: "fail", label: "错误" },
    { id: "md", label: "Material Design" },
  ];

  const sections2 = [{ id: "props", label: "通用属性" }];
  const onNavClick = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const onNavClick2 = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const dataSource = [
    {
      key: "1",
      property: "message",
      type: "ReactNode",
      values: "-",
      description: "通知内容",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "2",
      property: "variant",
      type: "string",
      values: "default | md",
      description: "可启用Material Design风格，通知弹窗位于左下角",
      defaultValue: "default",
      version: "md >= 0.4.7",
    },
    {
      key: "3",
      property: "method",
      type: "function",
      values: "success() | fail() | caution()",
      description: "提供三种通知类型：成功、失败、警告",
      defaultValue: "-",
      version: "-",
    },
  ];

  const columns = [
    {
      title: "属性",
      dataIndex: "property",
      key: "property",
      className: "TABLE_TH_STYLE",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
      className: "TABLE_TH_STYLE",
    },
    {
      title: "可选值",
      dataIndex: "values",
      key: "values",
      className: "TABLE_TH_STYLE",
    },
    {
      title: "说明",
      dataIndex: "description",
      key: "description",
      className: "TABLE_TH_STYLE",
    },
    {
      title: "默认值",
      dataIndex: "defaultValue",
      key: "defaultValue",
      className: "TABLE_TH_STYLE",
    },
    { title: "版本", dataIndex: "version", key: "version" },
  ];

  function SuccessDemo() {
    const notice = useNotice();

    const success = () => notice.success("成功提示!");

    return (
      <>
        <Button type="success" onClick={success}>
          成功
        </Button>
      </>
    );
  }

  function CautionDemo() {
    const notice = useNotice();

    const caution = () => notice.caution("警告提示!");

    return (
      <>
        <Button
          sx={{ bg: "orange", bColor: "orange", c: "white" }}
          onClick={caution}
        >
          警告
        </Button>
      </>
    );
  }

  function FailDemo() {
    const notice = useNotice();

    const fail = () => notice.fail("错误提示!");

    return (
      <>
        <Button type="danger" onClick={fail}>
          错误
        </Button>
      </>
    );
  }

  function MDDemo() {
    const notice = useNotice();

    const success = () => notice.md.success("Material Design风格!");

    return (
      <>
        <Button type="success" onClick={success}>
          Material Design风格
        </Button>
      </>
    );
  }

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">
            Notice 全局提示
          </div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            全局展示操作反馈信息。
          </div>

          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-blue-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
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
              <h3 className="text-xl font-semibold dark:text-white">
                在 React 19 中使用
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                在 React 19 应用中，需要先在入口文件中配置 NoticeProvider
                来启用全局通知功能。
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    入口文件配置示例
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded">
                    App.jsx / main.jsx
                  </span>
                </div>

                <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                  {`import React from 'react';
import { NoticeProvider } from "tango-ui-cw"; // add here
import App from './App';

function Index() {
  return (
    <NoticeProvider> // add here
      <App />
    </NoticeProvider> // add here
  );
}

export default Index;`}
                </pre>
              </div>

              <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>
                  配置完成后，即可在应用的任何子组件中使用{" "}
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-blue-600 dark:text-blue-400">
                    useNotice()
                  </code>{" "}
                  hook。
                </p>
              </div>
            </div>
          </div>

          {/* default */}
          <div id="success" className="scroll-mt-10">
            <DemoBlock
              title="成功"
              imports="Button, useNotice"
              code={`import { Button, useNotice } from 'tango-ui-cw' 

export function Demo () {
  const notice = useNotice();
  const success = () => notice.success("成功提示!");

  return (
      <>
        <Button type="success" onClick={success}>
          成功
        </Button>
      </>
    )
  }
  `}
              jsx={<SuccessDemo />}
            />
          </div>

          {/* warn */}
          <div id="warn" className="scroll-mt-10">
            <DemoBlock
              title="警告"
              imports="Button, useNotice"
              code={`import { Button, useNotice } from 'tango-ui-cw' 

export function Demo () {
  const notice = useNotice();
  const caution = () => notice.caution("警告提示!");

  return (
      <>
        <Button sx={{ bg: "orange", bColor: "orange" }} onClick={caution}>
          警告
        </Button>
      </>
    )
  }
  `}
              jsx={<CautionDemo />}
            />
          </div>

          {/* fail */}
          <div id="fail" className="scroll-mt-10">
            <DemoBlock
              title="错误"
              imports="Button, useNotice"
              code={`import { Button, useNotice } from 'tango-ui-cw' 

export function Demo () {
  const notice = useNotice();
  const fail = () => notice.fail("错误提示!");
  
  return (
      <>
        <Button type="danger" onClick={fail}>
          错误
        </Button>
      </>
    )
  }
  `}
              jsx={<FailDemo />}
            />
          </div>

          {/* md */}
          <div id="md" className="scroll-mt-10">
            <DemoBlock
              title="Material Design"
              imports="Button, useNotice"
              code={`import { Button, useNotice } from 'tango-ui-cw' 

export function Demo () {
  const notice = useNotice();
  const success  = () => notice.md.success("Material Design风格!");

    return (
      <>
        <Button type="success" onClick={success}>
        Material Design风格
        </Button>
      </>
    );
  }
  `}
              jsx={<MDDemo />}
            />
          </div>

          {/* props */}
          {/* <div className="hidden sm:block md:block lg:block xl:block 2xl:block "> */}
          <div className="text-2xl font-bold mb-5 dark:text-neutral-300">
            属性
          </div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">通用属性</div>
          </div>

          <Table
            dataSource={dataSource}
            columns={columns}
            containerStyles={theme === "light" ? {} : { color: "white" }}
            // hoverColor="#a6a6a6"
          />
          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ">
            索引
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">
            全局提示
          </div>

          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => onNavClick(id)}
                  className={`flex items-center transition ${
                    activeSection === id
                      ? "text-black dark:text-white font-semibold"
                      : "hover:text-black dark:hover:text-white"
                  }`}
                >
                  <span className="mr-2 text-xl leading-none dark:text-neutral-300">
                    -
                  </span>
                  <span className="mr-2 text-sm mt-[4px] leading-none">
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="text-sm mb-3 font-bold  dark:text-neutral-300 mt-5">
            属性
          </div>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {sections2.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => onNavClick2(id)}
                  className={`flex items-center transition ${
                    activeSection === id
                      ? "text-black dark:text-white font-semibold"
                      : "hover:text-black dark:hover:text-white"
                  }`}
                >
                  <span className="mr-2 text-xl leading-none dark:text-neutral-300">
                    -
                  </span>
                  <span className="mr-2 text-sm mt-[4px] leading-none">
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NoticeComponent;
