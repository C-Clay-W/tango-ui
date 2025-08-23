"use client";
import React, { useState } from "react";
import { Date, Table, Space } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const DateComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "color", label: "Color" },
    { id: "international", label: "International" },
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
      name: "type",
      type: "string",
      value: `
    line(YY-MM-DD) \u2003
    full(YY/MM/DD Week HMS) \u2003
    full-line(YY-MM-DD Week HMS) \u2003
    year-week(YY/MM/DD Week) \u2003
    year-week-line(YY-MM-DD Week) \u2003
    week-time(Week HMS) \u2003
    no-s(YY/MM/DD Week HM) \u2003
    no-s-line(YY-MM-DD Week HM) \u2003
    us-full(MM/DD/YY Week HMS) \u2003
    us-full-line(MM/DD/YY Week HMS)
    `.trim(),
      description: "10 preset styles are provided by default, and more styles can be customized through the 'sx' attribute.",
      defaultValue: "-",
    },
    
    {
      key: "2",
      name: "sx",
      type: "object",
      value: "object",
      description:
        "Inline styles for customizing the Date component. Note: When using the 'style' prop, the same CSS properties will override the 'sx' prop.",
      defaultValue: "{}",
    },
    {
      key: "3",
      name: "single",
      type: "boolean",
      value: "boolean",
      description: "'Day of the week' can be changed to 'week' display.",
      defaultValue: "false",
    },
    {
      key: "4",
      name: "en",
      type: "boolean",
      value: "boolean",
      description:
        "Switch English.",
      defaultValue: "false",
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
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">
            Date
          </div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            Display a current date.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
              imports="Space, Date"
              code={`<>
      <Space className="border-white border rounded-xl px-[10px] py-[5px]">
        <Date />
      </Space>
    </>`}
              jsx={
                <>
                  <Space className="border-black dark:border-white border rounded-xl px-[10px] py-[5px]">
                    <Date />
                  </Space>
                </>
              }
            />
          </div>

          {/* color */}
          <div id="color" className="scroll-mt-10">
            <DemoBlock
              title="Color"
              imports="Space, Date"
              code={`<>
      <Space className="border-black dark:border-white border rounded-xl px-[10px] py-[5px]">
        <Date
          sx={{
            size: 30,
            fwb: true,
            backgroundColor:"oklch(70.4% .191 22.216)",
            WebkitBackgroundClip: "text",
            c: "transparent",
          }}
          type="us-full-line"
          single
        />
      </Space>
    </>`}
              jsx={
                <>
                  <Space className="border-black dark:border-white border rounded-xl px-[10px] py-[5px]">
                    <Date
                      sx={{
                        size: 30,
                        fwb: true,
                        backgroundColor:'oklch(70.4% .191 22.216)',
                        WebkitBackgroundClip: "text",
                        c: "transparent",
                      }}
                      type="us-full-line"
                      single
                    />
                  </Space>
                </>
              }
            />
          </div>

          {/* international */}
          <div id="international" className="scroll-mt-10">
            <DemoBlock
              title="International"
              imports="Space, Date"
              code={`<>
      <Space className="border-white border rounded-xl px-[10px] py-[5px]">
        <Date type="full-line" en />
      </Space>
    </>`}
              jsx={
                <>
                  <Space className="border-black dark:border-white border rounded-xl px-[10px] py-[5px]">
                    <Date type="full-line" en />
                  </Space>
                </>
              }
            />
          </div>

          {/* props */}
          {/* <div className="hidden sm:block md:block lg:block xl:block 2xl:block "> */}
          <div className="text-2xl font-bold mb-5 dark:text-neutral-300">
            Props
          </div>
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
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">
            Date
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

export default DateComponent;
