"use client";
import React, { useState } from "react";
import { Button, Table, Tooltip } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const TooltipComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "direction", label: "Direction" },
    { id: "color", label: "Color" },

    
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
      title: "Accepted Values",
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
    },
    { title: "Version", dataIndex: "version", key: "version" },

  ];

  const dataSource = [
    {
      key: "1",
      property: "placement",
      type: "string",
      values: "top | bottom | right",
      description: "Provides three positioning options: top, bottom, and right",
      default: "top",
      version: "-",

    },
    {
      key: "2",
      property: "tooltipText",
      type: "string",
      values: "-",
      description: "Text content displayed within the Tooltip",
      default: "-",
      version: "-",

    },
    {
      key: "3",
      property: "tooltipClassName",
      type: "string",
      values: "-",
      description: "Custom class name for the Tooltip",
      default: "-",
      version: "0.3.2",

    },
  
  ];

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Tooltip</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            A popup that displays information related to an element when the
            element receives keyboard focus or the mouse hovers over it.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
              imports="Tooltip, Button"
              code={`<Tooltip tooltipText="Here is a tip">
      <Button>Hover me!</Button>
    </Tooltip>`}
              jsx={
                <Tooltip tooltipText="Here is a tip">
                  <Button>Hover me!</Button>
                </Tooltip>
              }
            />
          </div>

          {/* success */}
          <div id="direction" className="scroll-mt-10">
            <DemoBlock
              title="Direction"
              imports="Tooltip, Button"
              code={`<Tooltip tooltipText="Here is a right tip" placement="right">
      <Button>right</Button>
    </Tooltip>
    <Tooltip
      tooltipText="Here is a bottom tip"
      placement="bottom"
    >
      <Button>bottom</Button>
    </Tooltip>`}
              jsx={
                <div className="!flex !flex-col !space-y-2 !items-center">
                  <Tooltip tooltipText="Here is a right tip" placement="right">
                    <Button>right</Button>
                  </Tooltip>
                  <Tooltip
                    tooltipText="Here is a bottom tip"
                    placement="bottom"
                  >
                    <Button>bottom</Button>
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
              code={`<Tooltip tooltipText="Here is a color tip" placement="top" tooltipClassName="tooltipText">
      <Button>color tooltip</Button>
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
                    tooltipText="Here is a color tip"
                    placement="top"
                    tooltipClassName="tooltipText"
                  >
                    <Button>color tooltip</Button>
                  </Tooltip>
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
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">Tooltip</div>

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

export default TooltipComponent;
