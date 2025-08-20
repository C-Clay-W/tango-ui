"use client";
import React, { useState } from "react";
import { MaterialInput, Table, Space, Input } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const InputComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "textarea", label: "多行文本域" },
    { id: "size", label: "尺寸" },
    { id: "password", label: "密码框" },
    { id: "material", label: "Material风格" },
    { id: "disabled", label: "禁用" },
  ];

  const sections2 = [
    { id: "props", label: "输入框" },
    { id: "materialInput", label: "Material风格" },
  ];
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

  const dataSourceZH = [
    {
      key: "1",
      name: "size",
      type: "string",
      value: "small | medium | large | huge",
      description: '默认提供四种样式，可以通过"sx"属性自定义其他Input框样式',
      defaultValue: "medium",
    },
    {
      key: "2",
      name: "sx",
      type: "object",
      value: "object",
      description:
        "自定义Input框的内联样式，注意：当使用style属性设置行内样式时，相同CSS属性将会覆盖sx属性",
      defaultValue: "{}",
    },
    {
      key: "3",
      name: "type",
      type: "string",
      value: "default | textarea | password",
      description: "通过修改type属性来设置输入框的类型",
      defaultValue: "default",
    },
    {
      key: "4",
      name: "maxlength",
      type: "number",
      value: "-",
      description: "设置输入框的最大字符数",
      defaultValue: "524288",
    },
    {
      key: "5",
      name: "onChange",
      type: "function(e)",
      value: "-",
      description: "输入框内容变化时的回调",
      defaultValue: "-",
    },
    {
      key: "6",
      name: "value",
      type: "any",
      value: "-",
      description: "输入框的初始值（受控模式）",
      defaultValue: "-",
    },
    {
      key: "7",
      name: "defaultValue",
      type: "any",
      value: "-",
      description: "输入框的初始值（非受控模式）",
      defaultValue: "-",
    },
    {
      key: "8",
      name: "disabled",
      type: "boolean",
      value: "boolean",
      description: "是否禁用",
      defaultValue: "false",
    },
    {
      key: "9",
      name: "placeholder",
      type: "string",
      value: "string",
      description: "提示词",
      defaultValue: "-",
    },
    {
      key: "10",
      name: "className",
      type: "string",
      value: "-",
      description: "定义Input类名",
      defaultValue: "-",
    },
  ];

  const columnsZH = [
    { title: "属性", dataIndex: "name", key: "name" },
    { title: "类型", dataIndex: "type", key: "type" },
    { title: "值", dataIndex: "value", key: "value" },
    { title: "说明", dataIndex: "description", key: "description" },
    { title: "默认值", dataIndex: "defaultValue", key: "defaultValue" },
  ];

  const dataSourceZHMaterial = [
    {
      key: "1",
      name: "label",
      type: "string",
      value: "string",
      description: "提示词",
      defaultValue: "-",
      version: "-",

    },
    {
      key: "2",
      name: "type",
      type: "string",
      value: "string",
      description: "输入框类型",
      defaultValue: "-",
      version: "0.3.2",


    },
    {
      key: "3",
      name: "inputTextStyles",
      type: "object",
      value: "object",
      description: "自定义输入框内文字样式",
      defaultValue: "-",
      version: "0.3.2",
    },
    {
      key: "4",
      name: "inputFloatStyles",
      type: "object",
      value: "object",
      description: "自定义上浮文字样式",
      defaultValue: "-",
      version: "0.3.2",
    },
  ];

  const columnsZHMaterial = [
    { title: "属性", dataIndex: "name", key: "name" },
    { title: "类型", dataIndex: "type", key: "type" },
    { title: "值", dataIndex: "value", key: "value" },
    { title: "说明", dataIndex: "description", key: "description" },
    { title: "默认值", dataIndex: "defaultValue", key: "defaultValue" },
    { title: "版本", dataIndex: "version", key: "version" },
  ];

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Input 输入框</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            通过鼠标或键盘输入内容。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
              imports="Input"
              code={`<>
      <Input />
    </>`}
              jsx={
                <>
                  <Input />
                </>
              }
            />
          </div>

          {/* Textarea */}
          <div id="textarea" className="scroll-mt-10">
            <DemoBlock
              title="多行文本域"
              imports="Input"
              code={`<>
      <Input type="textarea" placeholder="多行文本域" />
    </>`}
              jsx={
                <>
                  <Input type="textarea" placeholder="多行文本域" />
                </>
              }
            />
          </div>

          {/* Size */}
          <div id="size" className="scroll-mt-10">
            <DemoBlock
              title="尺寸"
              imports="Space, Input"
              code={`<>
      <Space sx={{ diaplay:"block" }}>
        <Input placeholder="小尺寸" size="small"/>
        <Input placeholder="中尺寸" size="medium"/>
        <Input placeholder="大尺寸" size="large"/>
        <Input placeholder="巨大尺寸" size="huge"/>
      </Space>
    </>`}
              jsx={
                <>
                  <Space sx={{ diaplay: "block" }}>
                    <Input placeholder="小尺寸" size="small" sx={{ mb: 15 }} />
                    <Input placeholder="中尺寸" size="medium" sx={{ mb: 15 }} />
                    <Input placeholder="大尺寸" size="large" sx={{ mb: 15 }} />
                    <Input placeholder="巨大尺寸" size="huge" />
                  </Space>
                </>
              }
            />
          </div>

          {/* Password */}
          <div id="password" className="scroll-mt-10">
            <DemoBlock
              title="密码框"
              imports="Input"
              code={`<>
      <Input type="password" placeholder="密码框" />
    </>`}
              jsx={
                <>
                  <Input type="password" placeholder="密码框" />
                </>
              }
            />
          </div>

          {/* material */}
          <div id="material" className="scroll-mt-10">
            <DemoBlock
              title="Material风格"
              imports="MaterialInput"
              code={`<>
      <Space className="w-50">
        <MaterialInput label="Material输入框" />
      </Space>
    </>`}
              jsx={
                <>
                  <Space className="w-50">
                    <MaterialInput
                      label="Material输入框"
                      inputFloatStyles={
                        theme === "light" ? {} : { color: "grey" }
                      }
                    />
                  </Space>
                </>
              }
            />
          </div>

          {/* Disabled */}
          <div id="disabled" className="scroll-mt-10">
            <DemoBlock
              title="禁用"
              imports="Input"
              code={`<>
      <Input placeholder="禁用" disabled/>
    </>`}
              jsx={
                <>
                  <Input placeholder="禁用" disabled />
                </>
              }
            />
          </div>

          {/* props */}
          {/* <div className="hidden sm:block md:block lg:block xl:block 2xl:block "> */}
          <div className="text-2xl font-bold mb-5 dark:text-neutral-300">属性</div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">输入框</div>
          </div>

          <Table dataSource={dataSourceZH} columns={columnsZH} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>
          <div id="materialInput" className="scroll-mt-10">
            <div className="mb-5 mt-5 dark:text-neutral-300">Material风格</div>
          </div>

          <Table
            dataSource={dataSourceZHMaterial}
            columns={columnsZHMaterial}
            containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"
          />
          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ">
            索引
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">输入框</div>

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

export default InputComponent;
