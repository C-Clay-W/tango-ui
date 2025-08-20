"use client";
import React, { useState } from "react";
import { Button, Table, Space } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const SpaceComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "background", label: "With background" },
    { id: "circle", label: "Circle" },
    { id: "position", label: "Position" },
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

// DataSource 数据：从原始表格的内容填充到新的数组中
const dataSource = [
  {
    key: "1",
    name: "type",
    type: "string",
    value: "default | inline | circle | triangle | halfCircle | fixed | absolute | relative",
    description: "Specifies the Space style. Supports eight predefined types. Other custom styles can be applied using the 'sx' prop.",
    defaultValue: "default",
  },
  {
    key: "2",
    name: "sx",
    type: "object",
    value: "object",
    description: "Inline styles for customizing the Space component. Note: Inline styles via the 'style' prop will override 'sx'.",
    defaultValue: "{}",
  },
  {
    key: "3",
    name: "onClick",
    type: "(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",
    value: "-",
    description: "Callback function triggered when the Space component is clicked.",
    defaultValue: "-",
  },
  {
    key: "4",
    name: "ref",
    type: "React.RefObject<HTMLInputElement | null>",
    value: "-",
    description: "Allows direct access to the DOM node or React component instance.",
    defaultValue: "-",
  },
  {
    key: "5",
    name: "className",
    type: "string",
    value: "-",
    description: "Defines the custom CSS class names applied to the Space component.",
    defaultValue: "-",
  },
];

// Columns 数据：为表格定义标题和数据索引
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
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Space</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            Displays a Space box instead of a div.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
              imports="Space"
              code={`<div className="w-30 h-20 border border-black flex items-center justify-center">
        <Space>Space</Space>
    </div>`}
              jsx={
                <Space sx="!w-30 !h-20 !border !border-black dark:!border-white !flex !items-center !justify-center">
                  <Space>Space</Space>
                </Space>
                // 这里有个问题，现在Button组件实现了动态添加叹号以避免使用tailwindcss时手动加，但是这回导致tailwindcss构件时检测不到类名，最终样式不生效
              }
            />
          </div>

          {/* With background */}
          <div id="background" className="scroll-mt-10">
            <DemoBlock
              title="With background"
              imports="Space"
              code={`<Space sx={{ w:200,h:100,bg:"#d6d7d8",flex:true,jcc:true,aic:true }}>Space</Space>`}
              jsx={
                <Space
                  sx={{
                    w: 200,
                    h: 100,
                    bg: "#d6d7d8",
                    flex: true,
                    jcc: true,
                    aic: true,
                  }}
                >
                  Space
                </Space>
              }
            />
          </div>

          {/* Circle */}
          <div id="circle" className="scroll-mt-10">
            <DemoBlock
              title="Circle"
              imports="Space"
              code={`<Space sx={{ bg:"#d6d7d8",w:200,h:200,flex:true,jcc:true,aic:true }} type="circle"></Space>`}
              jsx={
                <Space
                  sx={{
                    bg: "#d6d7d8",
                    w: 200,
                    h: 200,
                    flex: true,
                    jcc: true,
                    aic: true,
                  }}
                  type="circle"
                >
                  circle
                </Space>
              }
            />
          </div>

          {/* position */}
          <div id="position" className="scroll-mt-10">
            <DemoBlock
              title="Position"
              imports="Space"
              code={`<Space sx={{ bg: "orange", w: 100, h: 50 }} type="absolute">absolute-1</Space>`}
                      
                    
              jsx={
                <div
                  style={{
                    width: "80%",
                    height: 300,
                    background: "#d6d7d8",
                    overflow: "auto",
                    padding: "20px 0",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      height: 500,
                      margin: "auto",
                      background: "#d6d7d8",
                      position:"relative"
                    }}
                  >
                    <Space sx={{ bg: "orange", w: 100, h: 50, top: 50, lh: 50}} type="absolute">
                      absolute-1
                    </Space>

                    <Space sx={{ bg: "orange", w: 100, h: 50, top: 150, lh: 50}} type="absolute">
                      absolute-2
                    </Space>

                    <Space sx={{ bg: "orange", w: 100, h: 50, top: 250, lh: 50}} type="absolute">
                      absolute-3
                    </Space>

                    <Space sx={{ bg: "orange", w: 100, h: 50, top: 350, lh: 50}} type="absolute">
                      absolute-4
                    </Space>
                  </div>
                </div>
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
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">Space</div>

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

          <div className="text-sm mb-3 font-bold  mt-5 dark:text-neutral-300">
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

export default SpaceComponent;
