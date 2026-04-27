"use client";
import React, { useState } from "react";
import { Date, Table, Space } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockZh";

const DateComponent = () => {
  const [activeSection, setActiveSection] = useState("");

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "color", label: "颜色" },
    { id: "international", label: "国际化" },
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
      description: "默认提供10种预设样式，可通过“sx”属性自定义更多样式。",
      defaultValue: "-",
    },
    
    {
      key: "2",
      name: "sx",
      type: "object",
      value: "object",
      description:
        "自定义Date的内联样式，注意：当使用style属性设置行内样式时，相同CSS属性将会覆盖sx属性。",
      defaultValue: "{}",
    },
    {
      key: "3",
      name: "single",
      type: "boolean",
      value: "boolean",
      description: "可将“星期”转为“周”显示。",
      defaultValue: "false",
    },
    {
      key: "4",
      name: "en",
      type: "boolean",
      value: "boolean",
      description:
        "切换为英文。",
      defaultValue: "false",
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
      title: "值",
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
          <div className="text-4xl font-bold mb-5" style={{ color: "var(--doc-title-color)" }}>
            Date 日期
          </div>
          <div
            className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]"
            style={{ color: "var(--doc-text-secondary)" }}
          >
            显示当前日期。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
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
              title="颜色"
              imports="Space, Date"
              code={`<>
      <Space className="border-black dark:border-white border rounded-xl px-[10px] py-[5px]">
        <Date
          sx={{
            size: 30,
            fwb: true,
            backgroundImage:
              "linear-gradient(to right, #ff7e5f,rgb(96, 237, 49))",
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
                        backgroundImage:
                          "linear-gradient(to right, #ff7e5f,rgb(96, 237, 49))",
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
              title="国际化"
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
          <div className="text-2xl font-bold mb-5" style={{ color: "var(--doc-text-primary)" }}>
          属性
          </div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5" style={{ color: "var(--doc-text-secondary)" }}>通用属性</div>
          </div>

          <Table dataSource={dataSource} columns={columns} containerStyles={{ color: "var(--doc-text-primary)" }}/>
          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-sm mb-3" style={{ color: "var(--doc-text-secondary)" }}>
          索引
          </div>
          <div className="text-sm mb-3 font-bold" style={{ color: "var(--doc-text-primary)" }}>
            日期
          </div>

          <ul className="space-y-2 text-sm" style={{ color: "var(--doc-text-primary)" }}>
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

          <div className="text-sm mb-3 font-bold mt-5" style={{ color: "var(--doc-text-primary)" }}>
          属性
          </div>
          <ul className="space-y-2 text-sm" style={{ color: "var(--doc-text-primary)" }}>
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

export default DateComponent;
