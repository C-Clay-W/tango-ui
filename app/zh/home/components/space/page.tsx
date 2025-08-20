"use client";
import React, { useState } from "react";
import { Button, Table, Space } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const SpaceComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "background", label: "带有背景" },
    { id: "circle", label: "圆" },
    { id: "position", label: "定位属性" },
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

// 数据源：从原始表格的内容填充到新的数组中
const dataSource = [
  {
    key: "1",
    name: "type", // 属性
    type: "string", // 类型
    value: "default | inline | circle | triangle | halfCircle | fixed | absolute | relative", // 可接受值
    description: "指定 Space 组件的样式。支持八种预定义类型。可以通过 'sx' 属性自定义其他样式。",
    defaultValue: "default", // 默认值
  },
  {
    key: "2",
    name: "sx", // 属性
    type: "object", // 类型
    value: "object", // 可接受值
    description: "用于自定义 Space 组件的内联样式。注意：使用 'style' 属性设置的内联样式将覆盖 'sx' 属性。",
    defaultValue: "{}", // 默认值
  },
  {
    key: "3",
    name: "onClick", // 属性
    type: "(event: React.MouseEvent<HTMLElement, MouseEvent>) => void", // 类型
    value: "-", // 可接受值
    description: "点击 Space 组件时触发的回调函数。",
    defaultValue: "-", // 默认值
  },
  {
    key: "4",
    name: "ref", // 属性
    type: "React.RefObject<HTMLInputElement | null>", // 类型
    value: "-", // 可接受值
    description: "用于直接访问 DOM 节点或 React 组件实例。",
    defaultValue: "-", // 默认值
  },
  {
    key: "5",
    name: "className", // 属性
    type: "string", // 类型
    value: "-", // 可接受值
    description: "定义应用于 Space 组件的自定义 CSS 类名。",
    defaultValue: "-", // 默认值
  },
];

// 表格列数据：定义表格的标题和数据索引
const columns = [
  {
    title: "属性", // Prop
    dataIndex: "name", // 数据索引
    key: "name", // 键
  },
  {
    title: "类型", // Type
    dataIndex: "type", // 数据索引
    key: "type", // 键
  },
  {
    title: "可接受值", // Accepted Values
    dataIndex: "value", // 数据索引
    key: "value", // 键
  },
  {
    title: "说明", // Description
    dataIndex: "description", // 数据索引
    key: "description", // 键
  },
  {
    title: "默认值", // Default
    dataIndex: "defaultValue", // 数据索引
    key: "defaultValue", // 键
  },
];



  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Space 盒子</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            显示一个盒子，代替div标签。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
              imports="Space"
              code={`<div className="w-30 h-20 border border-black flex items-center justify-center">
        <Space>盒子</Space>
    </div>`}
              jsx={
                <div className="w-30 h-20 border border-black dark:border-white flex items-center justify-center">
                  <Space>盒子</Space>
                </div>
              }
            />
          </div>

          {/* With background */}
          <div id="background" className="scroll-mt-10">
            <DemoBlock
              title="带有背景"
              imports="Space"
              code={`<Space sx={{ w:200,h:100,bg:"#d6d7d8",flex:true,jcc:true,aic:true }}>盒子</Space>`}
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
                  盒子
                </Space>
              }
            />
          </div>

          {/* Circle */}
          <div id="circle" className="scroll-mt-10">
            <DemoBlock
              title="圆"
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
                  圆
                </Space>
              }
            />
          </div>

          {/* position */}
          <div id="position" className="scroll-mt-10">
            <DemoBlock
              title="定位属性"
              imports="Space"
              code={`<Space sx={{ bg: "orange", w: 100, h: 50 }} type="absolute">定位属性</Space>`}
                      
                    
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
                    定位-1
                    </Space>

                    <Space sx={{ bg: "orange", w: 100, h: 50, top: 150, lh: 50}} type="absolute">
                    定位-2
                    </Space>

                    <Space sx={{ bg: "orange", w: 100, h: 50, top: 250, lh: 50}} type="absolute">
                    定位-3
                    </Space>

                    <Space sx={{ bg: "orange", w: 100, h: 50, top: 350, lh: 50}} type="absolute">
                    定位-4
                    </Space>
                  </div>
                </div>
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
          <div className="text-sm mb-3 font-bold dark:text-neutral-300">盒子</div>

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

          <div className="text-sm mb-3 font-bold dark:text-neutral-300 mt-5">
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

export default SpaceComponent;
