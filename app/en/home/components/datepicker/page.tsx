"use client";
import React, { useState } from "react";
import { DatePicker, Table, Space } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const DatePickerComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "disabled", label: "Disabled" },
    { id: "time", label: "Time" },
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
      name: "time",
      type: "boolean",
      value: "boolean",
      description: "enable time pick.",
      defaultValue: "false",
    },
    {
      key: "2",
      name: "disabled",
      type: "boolean",
      value: "boolean",
      description: "disabled the DatePicker.",
      defaultValue: "false",
    },
   
    {
      key: "3",
      name: "onChange",
      type: "() => void",
      value: "() => void",
      description: "Callback when date is selected,like：onChange={(value) => console.log('selected date:', value)}",
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
          <div className="text-4xl font-bold mb-5 " style={{ color: "var(--doc-title-color)" }}>DatePicker</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]" style={{ color: "var(--doc-text-color)" }}>
            Pick a date.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
              imports="DatePicker"
              code={`<DatePicker />`}
              jsx={
                <>
                  <DatePicker />
                </>
              }
            />
          </div>

          {/* Disabled */}
          <div id="disabled" className="scroll-mt-10">
            <DemoBlock
              title="Disabled"
              imports="DatePicker"
              code={`<DatePicker disabled />`}
              jsx={
                <>
                  <DatePicker disabled />
                </>
              }
            />
          </div>

          {/* Time */}
          <div id="time" className="scroll-mt-10">
            <DemoBlock
              title="Time"
              imports="DatePicker"
              code={`<DatePicker time />`}
              jsx={
                <>
                  <DatePicker time />
                </>
              }
            />
          </div>

       
          {/* props */}
          {/* <div className="hidden sm:block md:block lg:block xl:block 2xl:block "> */}
          <div className="text-2xl font-bold mb-5 " style={{ color: "var(--doc-title-color)" }}>Props</div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5" style={{ color: "var(--doc-text-color)" }}>Universal Props</div>
          </div>

          <Table dataSource={dataSource} columns={columns} containerStyles={theme === "light" ? {} : { color: "var(--doc-text-color)" }}/>
          {/* </div> */}
        </div>

        {/* Anchor Index Area */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400  text-sm mb-3" style={{ color: "var(--doc-title-color)" }}>
            On This Page
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300" style={{ color: "var(--doc-title-color)" }}>DatePicker</div>

          <ul className="space-y-2 text-sm" style={{ color: "var(--doc-text-color)" }}>
            {sections.map(({ id, label }) => (
              <li key={id}>
               <button
                  onClick={() => onNavClick(id)}
                  className="flex items-center transition"
                  style={{
                    color:
                      activeSection === id
                        ? "var(--doc-text-primary)"
                        : "var(--doc-text-secondary)",
                    fontWeight: activeSection === id ? 600 : 400,
                  }}
                >
                  <span className="mr-2 text-xl leading-none" style={{ color: "var(--doc-text-primary)" }}>
                    -
                  </span>
                  <span className="mr-2 text-sm mt-[4px] leading-none">
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="text-sm mb-3 font-bold   mt-5" style={{ color: "var(--doc-title-color)" }}>
            Props
          </div>
          <ul className="space-y-2 text-sm" style={{ color: "var(--doc-text-color)" }}>
            {sections2.map(({ id, label }) => (
              <li key={id}>
                 <button
                  onClick={() => onNavClick2(id)}
                  className="flex items-center transition"
                  style={{
                    color:
                      activeSection === id
                        ? "var(--doc-text-primary)"
                        : "var(--doc-text-secondary)",
                    fontWeight: activeSection === id ? 600 : 400,
                  }}
                >
                  <span className="mr-2 text-xl leading-none" style={{ color: "var(--doc-text-primary)" }}>
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

export default DatePickerComponent;
