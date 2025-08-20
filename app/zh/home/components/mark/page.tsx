"use client";
import React, { useState } from "react";
import {  Table, Space, Mark } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const MarkComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "beauty", label: "颜色" },
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

  const columns = [
    {
      title: "属性",
      dataIndex: "property",
      key: "property",
    },
    {
      title: "类型", 
      dataIndex: "type",
      key: "type",
    },
    {
      title: "可选值",
      dataIndex: "values",
      key: "values",
    },
    {
      title: "说明",
      dataIndex: "description",
      key: "description", 
    },
    {
      title: "默认值",
      dataIndex: "default",
      key: "default",
    }
  ];
  
  const dataSource = [
    {
      key: "1",
      property: "beauty",
      type: "boolean",
      values: "boolean",
      description: "启用Mark标签的内边距和圆角效果",
      default: "false",
    },
    {
      key: "2",
      property: "color",
      type: "string",
      values: "string", 
      description: "自定义高亮背景色",
      default: "#ffe28d",
    },
    {
      key: "3",
      property: "sx",
      type: "object",
      values: "object",
      description: "Mark组件的内联样式。注意：当使用style属性时，相同CSS属性会覆盖sx的设置",
      default: "{}",
    },
    {
      key: "4",
      property: "children",
      type: "string",
      values: "string",
      description: "Mark组件的内容",
      default: "-",
    },
    {
      key: "5", 
      property: "className",
      type: "string",
      values: "-",
      description: "自定义Mark组件的类名",
      default: "-",
    }
  ];

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Mark 标记</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            显示一个标记，标记一行或一段话。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
              imports="Space, Mark"
              code={`<>
      <Space sx={{ display: "content" }}>
        <Mark className='dark:text-black'>这是一个高亮的Mark。</Mark>
        <Space sx={{ mt: 10 }}>
        快速开始，轻松掌握 <Mark className='dark:text-black'>Tango UI</Mark> 组件！
        </Space>
      </Space>
    </>`}
              jsx={
                <>
                  <Space sx={{ display: "content" }}>
                    <Mark className='dark:text-black'>这是一个高亮的Mark。</Mark>
                    <Space sx={{ mt: 10 }}>
                    快速开始，轻松掌握 <Mark className='dark:text-black'>Tango UI</Mark> 组件！
                    </Space>
                  </Space>
                </>
              }
            />
          </div>

          {/* beauty */}
          <div id="beauty" className="scroll-mt-10">
            <DemoBlock
              title="颜色"
              imports="Space, Mark"
              code={`<>
      <Space sx={{ display: "content" }}>
        <Mark beauty className='dark:text-black'>具有内间距和圆角的Mark。</Mark>
        <Space sx={{ mt: 10 }}>
        使用 <Mark beauty color="#4caf50">'color' 属性</Mark> 修改Mark的高亮色!
        </Space>
      </Space>
    </>`}
              jsx={
                <>
                  <Space sx={{ display: "content" }}>
                    <Mark beauty className='dark:text-black'>具有内间距和圆角的Mark。</Mark>
                    <Space sx={{ mt: 10 }}>
                    使用 <Mark beauty color="#4caf50">'color' 属性</Mark> 修改Mark的高亮色!
                    </Space>
                  </Space>
                </>
              }
            />
          </div>

          {/* props */}
          {/* <div className="hidden sm:block md:block lg:block xl:block 2xl:block "> */}
          <div className="text-2xl font-bold mb-5 dark:text-neutral-300">属性</div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">通用属性</div>
          </div>

          <Table dataSource={dataSource} columns={columns} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>
          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3">
          索引
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">标记</div>

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
                  <span className="mr-2 text-xl leading-none dark:text-neutral-300">-</span>
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
                  <span className="mr-2 text-xl leading-none dark:text-neutral-300">-</span>
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

export default MarkComponent;
