"use client";
import React, { useState } from "react";
import { ColorPicker, Table, Space } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const ColorPickerComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "disabled", label: "禁用" },
    { id: "show", label: "显示详情" },
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
      name: "showText",
      type: "boolean",
      value: "boolean",
      description: "启用显示颜色信息",
      defaultValue: "false",
    },
    {
      key: "2",
      name: "disabled",
      type: "boolean",
      value: "boolean",
      description: "禁用颜色选择器",
      defaultValue: "false",
    },

    {
      key: "3",
      name: "onChange",
      type: "() => void",
      value: "() => void",
      description:
        "当颜色选中后的回调，如：onChange={(value) => console.log('选中的颜色：', value)}",
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
          <div
            className="text-4xl font-bold mb-5 "
            style={{ color: "var(--doc-title-color)" }}
          >
            ColorPicker 颜色选择器
          </div>
          <div
            className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]"
            style={{ color: "var(--doc-text-color)" }}
          >
            用于选择颜色。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
              imports="ColorPicker"
              code={`<ColorPicker />`}
              jsx={
                <>
                  <ColorPicker />
                </>
              }
            />
          </div>

          {/* Disabled */}
          <div id="disabled" className="scroll-mt-10">
            <DemoBlock
              title="禁用"
              imports="ColorPicker"
              code={`<ColorPicker disabled />`}
              jsx={
                <>
                  <ColorPicker disabled />
                </>
              }
            />
          </div>

          {/* Show */}
          <div id="show" className="scroll-mt-10">
            <DemoBlock
              title="显示详情"
              imports="ColorPicker"
              code={`<ColorPicker showText />`}
              jsx={
                <>
                  <ColorPicker showText />
                </>
              }
            />
          </div>

          {/* props */}
          {/* <div className="hidden sm:block md:block lg:block xl:block 2xl:block "> */}
          <div
            className="text-2xl font-bold mb-5"
            style={{ color: "var(--doc-title-color)" }}
          >
            属性
          </div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5" style={{ color: "var(--doc-text-color)" }}>
              通用属性
            </div>
          </div>

          <Table
            dataSource={dataSource}
            columns={columns}
            containerStyles={
              theme === "light" ? {} : { color: "var(--doc-text-color)" }
            }
          />
          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div
            className="text-gray-400  text-sm mb-3"
            style={{ color: "var(--doc-title-color)" }}
          >
            索引
          </div>
          <div
            className="text-sm mb-3 font-bold  dark:text-neutral-300"
            style={{ color: "var(--doc-title-color)" }}
          >
            颜色选择器
          </div>

          <ul
            className="space-y-2 text-sm"
            style={{ color: "var(--doc-text-color)" }}
          >
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
                  <span
                    className="mr-2 text-xl leading-none"
                    style={{ color: "var(--doc-text-primary)" }}
                  >
                    -
                  </span>
                  <span className="mr-2 text-sm mt-[4px] leading-none">
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div
            className="text-sm mb-3 font-bold  dark:text-neutral-300 mt-5"
            style={{ color: "var(--doc-title-color)" }}
          >
            属性
          </div>
          <ul
            className="space-y-2 text-sm"
            style={{ color: "var(--doc-text-color)" }}
          >
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
                  <span
                    className="mr-2 text-xl leading-none"
                    style={{ color: "var(--doc-text-primary)" }}
                  >
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

export default ColorPickerComponent;
