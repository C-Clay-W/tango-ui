"use client";
import React, { useState } from "react";
import { Line, Table, Space } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const LineComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "words", label: "With words" },
  ];

  const sections2 = [{ id: "props", label: "Universal Props" }];
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
      description: "Default provides four styles, and you can customize other spacing styles using the 'sx' prop.",
      defaultValue: "medium",
    },
    {
      key: "2",
      name: "sx",
      type: "object",
      value: "object",
      description: "Inline styles for customizing the Line component. Note: When using the 'style' prop, the same CSS properties will override the 'sx' prop.",
      defaultValue: "{}",
    },
    {
      key: "3",
      name: "children",
      type: "string",
      value: "string",
      description: "Content for the Line component.",
      defaultValue: "-",
    },
    {
      key: "4",
      name: "className",
      type: "string",
      value: "-",
      description: "Defines the custom CSS class names applied to the Line component.",
      defaultValue: "-",
    },
  ];
  

  const columns = [
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
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Line</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            Displays a break line between components.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
              imports="Space, Line"
              code={`<>
      <Space sx={{ display: "block", w: 300 }}>
        <Space sx={{ tac: true }}>somethings...</Space>
        <Line />
        <Space sx={{ tac: true }}>somethings...</Space>
      </Space>
    </>`}
              jsx={
                <>
                  <Space sx={{ display: "block", w: 300 }}>
                    <Space sx={{ tac: true }}>somethings...</Space>
                    <Line />
                    <Space sx={{ tac: true }}>somethings...</Space>
                  </Space>
                </>
              }
            />
          </div>

          {/* With words */}
          <div id="words" className="scroll-mt-10">
            <DemoBlock
              title="With words"
              imports="Space, Line"
              code={`<>
      <Space sx={{ display: "block", w: 500 }}>
        <Space sx={{ tac: true }}>somethings...</Space>
        <Line sx={{ c:"#b2b2b2" }}>here is a break</Line>
        <Space sx={{ tac: true }}>somethings...</Space>
      </Space>
    </>`}
              jsx={
                <>
                  <Space sx={{ display: "block", w: 500 }}>
                    <Space sx={{ tac: true }}>somethings...</Space>
                    <Line sx={{ c:"#b2b2b2" }}>here is a break</Line>
                    <Space sx={{ tac: true }}>somethings...</Space>
                  </Space>
                </>
              }
            />
          </div>

        

       
          {/* props */}
          {/* <div className="hidden sm:block md:block lg:block xl:block 2xl:block "> */}
          <div className="text-2xl font-bold mb-5 dark:text-neutral-300">Props</div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">Universal Props</div>
          </div>

          <Table dataSource={dataSource} columns={columns} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>
          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3">
            On This Page
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">Line</div>

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
            Props
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
