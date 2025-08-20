"use client";
import React, { useState } from "react";
import { Search, Table, Space, Input } from "tango-ui-cw";
import DemoBlock from "@/components/DemoWideZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const SearchComponent = () => {
  const theme = useCurrentTheme();
  const SearchlogoBlack = "/searchblack.png";
  const SearchlogoWhite = "/searchwhite.png";
  const [activeSection, setActiveSection] = useState("");

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "logo", label: "带有Logo" },
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

  const dataSourceZH = [
    {
      key: "1",
      name: "size",
      type: "string",
      value: "small | medium | large | huge",
      description: '提供四种预设的大小，可以通过 "sx" 属性自定义其他大小。',
      defaultValue: "medium",
      version: "-",
    },
    {
      key: "2",
      name: "sx",
      type: "object",
      value: "object",
      description:
        '自定义 Search 输入框的内联样式。注意：通过 "style" 属性设置的行内样式会覆盖 "sx" 属性中的相应样式。',
      defaultValue: "{}",
      version: "-",
    },
    {
      key: "3",
      name: "onSearch",
      type: "function(e)",
      value: "-",
      description: "点击搜索按钮或按下回车键时触发的回调。",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "4",
      name: "path",
      type: "string",
      value: "string",
      description: "搜索按钮的图标路径。",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "5",
      name: "value",
      type: "any",
      value: "-",
      description: "受控模式下的输入框值。",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "6",
      name: "defaultValue",
      type: "any",
      value: "-",
      description: "非受控模式下的初始输入值。",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "7",
      name: "disabled",
      type: "boolean",
      value: "true | false",
      description: "是否禁用该输入框。",
      defaultValue: "false",
      version: "-",
    },
    {
      key: "8",
      name: "placeholder",
      type: "string",
      value: "string",
      description: "输入框的提示词。",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "9",
      name: "className",
      type: "string",
      value: "-",
      description: "为搜索框定义的自定义 CSS 类名。",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "10",
      name: "btnStyles",
      type: "object",
      value: "-",
      description: "自定义内置按钮样式",
      defaultValue: "-",
      version: "0.3.2",
    },
    {
      key: "11",
      name: "btnText",
      type: "string",
      value: "-",
      description: "自定义内置按钮文字",
      defaultValue: "搜索",
      version: "0.3.2",
    },
  ];

  const columnsZH = [
    { title: "属性", dataIndex: "name", key: "name" },
    { title: "类型", dataIndex: "type", key: "type" },
    { title: "值", dataIndex: "value", key: "value" },
    { title: "说明", dataIndex: "description", key: "description" },
    { title: "默认值", dataIndex: "defaultValue", key: "defaultValue" },
    { title: "版本", dataIndex: "version", key: "version" },
  ];

  function DefaultDemo() {
    const onSearch = (value: string) => console.log("搜索结果:", value);

    return (
      <>
        <Search placeholder="输入搜索内容..." onSearch={onSearch} />
      </>
    );
  }

  function LogoDemo() {
    const onSearch = (value: string) => console.log("搜索结果:", value);

    return (
      <>
        <Search
          placeholder="输入搜索内容..."
          onSearch={onSearch}
          path={theme === "light" ? SearchlogoWhite : SearchlogoBlack}
          btnStyles={{
            paddingBottom: 8,
            ...(theme === "light"
              ? {}
              : { background: "transparent", border: "1px solid black" }),
          }}
        />
      </>
    );
  }

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">
            Search 搜索框
          </div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            带有搜索功能的Input。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
              imports="Search"
              code={`import { Search } from 'tango-ui-cw' 

export function Demo () {
  const onSearch = (value) => console.log("搜索结果:",value);
  return (
      <>
        <Search placeholder="输入搜索内容..." onSearch={onSearch} />
      </>
  )
}
  `}
              jsx={<DefaultDemo />}
            />
          </div>

          {/* Textarea */}
          <div id="logo" className="scroll-mt-10">
            <DemoBlock
              title="带有Logo"
              imports="Search"
              code={`import { Search } from 'tango-ui-cw' 
import Logo from '@/assets/logo.png'

export function Demo () {
  const onSearch = (value) => console.log("搜索结果:",value);
  return (
      <>
        <Search placeholder="输入搜索内容..." onSearch={onSearch} path={Logo}/>
      </>
    )
  }
  `}
              jsx={<LogoDemo />}
            />
          </div>

          {/* props */}
          {/* <div className="hidden sm:block md:block lg:block xl:block 2xl:block "> */}
          <div className="text-2xl font-bold mb-5 dark:text-neutral-300">
            属性
          </div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">通用属性</div>
          </div>

          <Table
            dataSource={dataSourceZH}
            columns={columnsZH}
            containerStyles={theme === "light" ? {} : { color: "white" }}
            hoverColor="#a6a6a6"
          />
          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3">
            索引
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">
            搜索框
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

export default SearchComponent;
