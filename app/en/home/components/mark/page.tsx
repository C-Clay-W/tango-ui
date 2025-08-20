"use client";
import React, { useState } from "react";
import { Line, Table, Space, Mark } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const MarkComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "beauty", label: "Color" },
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

  const columns = [
    {
      title: "Prop",
      dataIndex: "property",
      key: "property",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Values",
      dataIndex: "values",
      key: "values",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Default",
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
      description: "Enable inner padding and border-radius for Mark tag",
      default: "false",
    },
    {
      key: "2",
      property: "color",
      type: "string",
      values: "string",
      description: "Custom highlight background color",
      default: "#ffe28d",
    },
    {
      key: "3",
      property: "sx",
      type: "object",
      values: "object",
      description: "Custom inline styles for Mark. Note: When using style prop, same CSS properties will override sx",
      default: "{}",
    },
    {
      key: "4",
      property: "children",
      type: "string",
      values: "string",
      description: "Content of the Mark component",
      default: "-",
    },
    {
      key: "5",
      property: "className",
      type: "string",
      values: "-",
      description: "Custom class name for Mark",
      default: "-",
    }
  ];

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Mark</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            Displays a marker, marking a line or word.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
              imports="Space, Mark"
              code={`<>
      <Space sx={{ display: "content" }}>
        <Mark className='dark:text-black'>This is a highlight marker.</Mark>
        <Space sx={{ mt: 10 }}>
        Quick start, and easy use <Mark className='dark:text-black'>Tango UI</Mark> components！
        </Space>
      </Space>
    </>`}
              jsx={
                <>
                  <Space sx={{ display: "content" }}>
                    <Mark className='dark:text-black'>This is a highlight marker.</Mark>
                    <Space sx={{ mt: 10 }}>
                    Quick start, and easy use <Mark className='dark:text-black'>Tango UI</Mark> components！
                    </Space>
                  </Space>
                </>
              }
            />
          </div>

          {/* beauty */}
          <div id="beauty" className="scroll-mt-10">
            <DemoBlock
              title="Color"
              imports="Space, Mark"
              code={`<>
      <Space sx={{ display: "content" }}>
        <Mark beauty className='dark:text-black'>This is a highlight marker with padding and radius.</Mark>
        <Space sx={{ mt: 10 }}>
        Use <Mark beauty color="#4caf50">prop 'color'</Mark> to change the marker color!
        </Space>
      </Space>
    </>`}
              jsx={
                <>
                  <Space sx={{ display: "content" }}>
                    <Mark beauty className='dark:text-black'>This is a highlight marker with padding and radius.</Mark>
                    <Space sx={{ mt: 10 }}>
                    Use <Mark beauty color="#4caf50">prop 'color'</Mark> to change the marker color!
                    </Space>
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
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">Mark</div>

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

export default MarkComponent;
