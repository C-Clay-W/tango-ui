"use client";
import React, { useState } from "react";
import { MaterialInput, Table, Space, Input } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const InputComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "textarea", label: "Textarea" },
    { id: "size", label: "Size" },
    { id: "password", label: "Password" },
    { id: "material", label: "Material" },
    { id: "disabled", label: "Disabled" },
  ];

  const sections2 = [
    { id: "props", label: "Input" },
    { id: "materialInput", label: "MaterialInput" },
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

  const dataSourceEN = [
    {
      key: "1",
      name: "size",
      type: "string",
      value: "small | medium | large | huge",
      description:
        'Four styles are provided by default, and other styles can be customized using the "sx" prop.',
      defaultValue: "medium",
    },
    {
      key: "2",
      name: "sx",
      type: "object",
      value: "object",
      description:
        "Inline styles for customizing the Input component. Note: Inline styles via the 'style' prop will override 'sx'.",
      defaultValue: "{}",
    },
    {
      key: "3",
      name: "type",
      type: "string",
      value: "default | textarea | password",
      description: "Set the input field type by changing the 'type' property.",
      defaultValue: "default",
    },
    {
      key: "4",
      name: "maxlength",
      type: "number",
      value: "-",
      description: "Set the maximum number of characters for the input field.",
      defaultValue: "524288",
    },
    {
      key: "5",
      name: "onChange",
      type: "function(e)",
      value: "-",
      description: "Callback triggered when the input field content changes.",
      defaultValue: "-",
    },
    {
      key: "6",
      name: "value",
      type: "any",
      value: "-",
      description: "The initial value of the input field (controlled mode).",
      defaultValue: "-",
    },
    {
      key: "7",
      name: "defaultValue",
      type: "any",
      value: "-",
      description: "The initial value of the input field (uncontrolled mode).",
      defaultValue: "-",
    },
    {
      key: "8",
      name: "disabled",
      type: "boolean",
      value: "boolean",
      description: "Whether the input is disabled.",
      defaultValue: "false",
    },
    {
      key: "9",
      name: "placeholder",
      type: "string",
      value: "string",
      description: "Placeholder text.",
      defaultValue: "-",
    },
    {
      key: "10",
      name: "className",
      type: "string",
      value: "-",
      description: "Defines the custom CSS class name for the input field.",
      defaultValue: "-",
    },
  ];

  const columnsEN = [
    { title: "Prop", dataIndex: "name", key: "name" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Accepted Values", dataIndex: "value", key: "value" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Default", dataIndex: "defaultValue", key: "defaultValue" },

  ];

  const dataSourcENHMaterial = [
    {
      key: "1",
      name: "label",
      type: "string",
      value: "string",
      description: "Placeholder text.",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "2",
      name: "type",
      type: "string",
      value: "string",
      description: "Input type",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "3",
      name: "inputTextStyles",
      type: "object",
      value: "object",
      description: "Customize the text style in the input box",
      defaultValue: "-",
      version: "0.3.2",
    },
    {
      key: "4",
      name: "inputFloatStyles",
      type: "object",
      value: "object",
      description: "Customize the float text style in the input box",
      defaultValue: "-",
      version: "0.3.2",
    },
  ];

  const columnsENMaterial = [
    { title: "Prop", dataIndex: "name", key: "name" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Accepted Values", dataIndex: "value", key: "value" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Default", dataIndex: "defaultValue", key: "defaultValue" },
    { title: "Version", dataIndex: "version", key: "version" },
  ];

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Input</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            Input content via mouse or keyboard.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
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
              title="Textarea"
              imports="Input"
              code={`<>
      <Input type="textarea" placeholder="textarea" />
    </>`}
              jsx={
                <>
                  <Input type="textarea" placeholder="textarea" />
                </>
              }
            />
          </div>

          {/* Size */}
          <div id="size" className="scroll-mt-10">
            <DemoBlock
              title="Size"
              imports="Space, Input"
              code={`<>
      <Space sx={{ diaplay:"block" }}>
        <Input placeholder="small" size="small"/>
        <Input placeholder="medium" size="medium"/>
        <Input placeholder="large" size="large"/>
        <Input placeholder="huge" size="huge"/>
      </Space>
    </>`}
              jsx={
                <>
                  <Space sx={{ diaplay: "block" }}>
                    <Input placeholder="small" size="small" sx={{ mb: 15 }} />
                    <Input placeholder="medium" size="medium" sx={{ mb: 15 }} />
                    <Input placeholder="large" size="large" sx={{ mb: 15 }} />
                    <Input placeholder="huge" size="huge" />
                  </Space>
                </>
              }
            />
          </div>

          {/* Password */}
          <div id="password" className="scroll-mt-10">
            <DemoBlock
              title="Password"
              imports="Input"
              code={`<>
      <Input type="password" placeholder="password" />
    </>`}
              jsx={
                <>
                  <Input type="password" placeholder="password" />
                </>
              }
            />
          </div>

          {/* material */}
          <div id="material" className="scroll-mt-10">
            <DemoBlock
              title="Material"
              imports="MaterialInput"
              code={`<>
      <Space className="w-50">
        <MaterialInput label="MaterialInput" />
      </Space>
    </>`}
              jsx={
                <>
                  <Space className="w-50">
                    <MaterialInput
                      label="MaterialInput"
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
              title="Disabled"
              imports="Input"
              code={`<>
      <Input placeholder="disabled" disabled/>
    </>`}
              jsx={
                <>
                  <Input placeholder="disabled" disabled />
                </>
              }
            />
          </div>

          {/* props */}
          {/* <div className="hidden sm:block md:block lg:block xl:block 2xl:block "> */}
          <div className="text-2xl font-bold mb-5 dark:text-neutral-300">Props</div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">Input</div>
          </div>

          <Table dataSource={dataSourceEN} columns={columnsEN} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>
          <div id="materialInput" className="scroll-mt-10">
            <div className="mb-5 mt-5 dark:text-neutral-300">MaterialInput</div>
          </div>

          <Table
            dataSource={dataSourcENHMaterial}
            columns={columnsENMaterial}
            containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"
          />
          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3">
            On This Page
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">Input</div>

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

export default InputComponent;
