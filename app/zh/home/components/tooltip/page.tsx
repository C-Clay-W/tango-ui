"use client";
import React, { useState } from "react";
import { Button, Table, Tooltip } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const TooltipComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "direction", label: "方位" },
    { id: "color", label: "颜色" },

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
      title: '属性',
      dataIndex: 'property',
      key: 'property',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '可选值',
      dataIndex: 'values',
      key: 'values',
    },
    {
      title: '说明',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '默认值',
      dataIndex: 'default',
      key: 'default',
    },
    { title: "版本", dataIndex: "version", key: "version" },

  ];
  
  const dataSource = [
    {
      key: '1',
      property: 'placement',
      type: 'string',
      values: 'top | bottom | right',
      description: '提供三个定位位置：顶部、底部和右侧',
      default: 'top',
      version: "-",

    },
    {
      key: '2',
      property: 'tooltipText',
      type: 'string',
      values: '-',
      description: 'Tooltip组件内显示的文本内容',
      default: '-',
      version: "-",

    },
    {
      key: "3",
      property: "tooltipClassName",
      type: "string",
      values: "-",
      description: "自定义Tooltip类名",
      default: "-",
      version: "0.3.2",

    },
  
  ];

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Tooltip 提示气泡</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
          当元素获得键盘焦点或鼠标悬停在其上方时，显示与该元素相关信息的弹出窗口。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
              imports="Tooltip, Button"
              code={`<Tooltip tooltipText="这是一个提示气泡">
      <Button>放置鼠标</Button>
    </Tooltip>`}
              jsx={
                <Tooltip tooltipText="这是一个提示气泡">
                  <Button>放置鼠标</Button>
                </Tooltip>
              }
            />
          </div>

          {/* success */}
          <div id="direction" className="scroll-mt-10">
            <DemoBlock
              title="方位"
              imports="Tooltip, Button"
              code={`<Tooltip tooltipText="这是一个右侧提示气泡" placement="right">
      <Button>右侧提示气泡</Button>
    </Tooltip>
    <Tooltip
      tooltipText="这是一个底部提示气泡"
      placement="bottom"
    >
      <Button>底部提示气泡</Button>
    </Tooltip>`}
              jsx={
                <div className="!flex !flex-col !space-y-2 !items-center">
                  <Tooltip tooltipText="这是一个右侧提示气泡" placement="right">
                    <Button>右侧提示气泡</Button>
                  </Tooltip>
                  <Tooltip
                    tooltipText="这是一个底部提示气泡"
                    placement="bottom"
                  >
                    <Button>底部提示气泡</Button>
                  </Tooltip>
                  
                </div>
              }
            />
          </div>

             {/* color */}
             <div id="color" className="scroll-mt-10">
            <DemoBlock
              title="Color"
              imports="Tooltip, Button"
              code={`<Tooltip tooltipText="这是一个颜色提示" placement="top" tooltipClassName="tooltipText">
      <Button>自定义颜色</Button>
    </Tooltip>

    // App.css
    .tooltipText {
      background:red !important;
    }
    .tooltipText::after {
      border-color: red transparent transparent transparent !important;
      }`}
              jsx={
                <div className="!flex !flex-col !space-y-2 !items-center">
                  <Tooltip
                    tooltipText="这是一个颜色提示"
                    placement="top"
                    tooltipClassName="tooltipText"
                  >
                    <Button>自定义颜色</Button>
                  </Tooltip>
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
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">提示气泡</div>

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

export default TooltipComponent;
