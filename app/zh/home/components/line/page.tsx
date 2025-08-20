"use client";
import React, { useState } from "react";
import { Line, Table, Space } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const LineComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "words", label: "带有文字" },
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
      name: "size",
      type: "string",
      value: "small | medium | large | huge",
      description: "指定组件的大小。支持四种预定义的大小。可以通过 'sx' 属性自定义其他大小。",
      defaultValue: "medium",
    },
    {
      key: "2",
      name: "sx",
      type: "object",
      value: "object",
      description: "用于自定义组件的内联样式。注意：使用 'style' 属性设置的内联样式将覆盖 'sx' 属性。",
      defaultValue: "{}",
    },
    {
      key: "3",
      name: "children",
      type: "string",
      value: "string",
      description: "组件的内容。",
      defaultValue: "-",
    },
    {
      key: "4",
      name: "className",
      type: "string",
      value: "-",
      description: "定义组件的类名。",
      defaultValue: "-",
    },
  ];
  
  


  const columns = [
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
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Line 分割线</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            在组件间显示一个间隔线。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
              imports="Space, Line"
              code={`<>
      <Space sx={{ display: "block", w: 300 }}>
        <Space sx={{ tac: true }}>一段文字...</Space>
        <Line />
        <Space sx={{ tac: true }}>一段文字...</Space>
      </Space>
    </>`}
              jsx={
                <>
                  <Space sx={{ display: "block", w: 300 }}>
                    <Space sx={{ tac: true }}>一段文字...</Space>
                    <Line />
                    <Space sx={{ tac: true }}>一段文字...</Space>
                  </Space>
                </>
              }
            />
          </div>

          {/* With words */}
          <div id="words" className="scroll-mt-10">
            <DemoBlock
              title="带有文字"
              imports="Space, Line"
              code={`<>
      <Space sx={{ display: "block", w: 500 }}>
        <Space sx={{ tac: true }}>一段文字...</Space>
        <Line sx={{ c:"#b2b2b2" }}>一个带有文字的分割线</Line>
        <Space sx={{ tac: true }}>一段文字...</Space>
      </Space>
    </>`}
              jsx={
                <>
                  <Space sx={{ display: "block", w: 500 }}>
                    <Space sx={{ tac: true }}>一段文字...</Space>
                    <Line sx={{ c:"#b2b2b2" }}>一个带有文字的分割线</Line>
                    <Space sx={{ tac: true }}>一段文字...</Space>
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
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">分割线</div>

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

export default LineComponent;
