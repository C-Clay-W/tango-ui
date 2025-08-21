"use client";
import React, { useState } from "react";
import { Search, Table, Space, Input } from "tango-ui-cw";
import DemoBlock from "@/components/DemoWideEn";

import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const SearchComponent = () => {
  const theme = useCurrentTheme();
  const SearchlogoBlack = "/searchblack.png";
  const SearchlogoWhite = "/searchwhite.png";

  const [activeSection, setActiveSection] = useState("");

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "logo", label: "Logo" },
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

  const dataSourceEN = [
    {
      key: "1",
      name: "size",
      type: "string",
      value: "small | medium | large | huge",
      description:
        'Provides four preset sizes. Custom sizing can be applied using the "sx" property.',
      defaultValue: "medium",
      version: "-",
    },
    {
      key: "2",
      name: "sx",
      type: "object",
      value: "object",
      description:
        'Custom inline styles for the Search input. Note: Inline styles via the "style" prop will override overlapping styles from "sx".',
      defaultValue: "{}",
      version: "-",
    },
    {
      key: "3",
      name: "onSearch",
      type: "function(e)",
      value: "-",
      description:
        "Callback triggered on search button click or Enter key press.",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "4",
      name: "path",
      type: "string",
      value: "string",
      description: "Icon path used for the search button.",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "5",
      name: "value",
      type: "any",
      value: "-",
      description: "Controlled input value.",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "6",
      name: "defaultValue",
      type: "any",
      value: "-",
      description: "Initial input value (uncontrolled mode).",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "7",
      name: "disabled",
      type: "boolean",
      value: "true | false",
      description: "Whether the input is disabled.",
      defaultValue: "false",
      version: "-",
    },
    {
      key: "8",
      name: "placeholder",
      type: "string",
      value: "string",
      description: "Placeholder text displayed in the input.",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "9",
      name: "className",
      type: "string",
      value: "-",
      description: "Custom CSS class for the search component.",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "10",
      name: "btnStyles",
      type: "object",
      value: "-",
      description: "Customize built-in button styles",
      defaultValue: "-",
      version: "0.3.2",
    },
    {
      key: "11",
      name: "btnText",
      type: "string",
      value: "-",
      description: "Customize built-in button text",
      defaultValue: "搜索",
      version: "0.3.2",
    },
  ];

  const columnsEN = [
    { title: "Prop", dataIndex: "name", key: "name" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Accepted Values", dataIndex: "value", key: "value" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Default", dataIndex: "defaultValue", key: "defaultValue" },
    { title: "Version", dataIndex: "version", key: "version" },
  ];

  function DefaultDemo() {
    const onSearch = (value: string) => console.log("search result:", value);

    return (
      <>
        <Search
          placeholder="enter your words..."
          onSearch={onSearch}
          btnText="Search"
          btnStyles={{ letterSpacing:0.5,fontSize:14}}
        />
      </>
    );
  }

  function LogoDemo() {
    const onSearch = (value: string) => console.log("search result:", value);

    return (
      <>
        <Search
          placeholder="enter your words..."
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
            Search
          </div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            Input with search function.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
              imports="Search"
              code={`import { Search } from 'tango-ui-cw' 

export function Demo () {
  const onSearch = (value) => console.log("search result:",value);
  return (
      <>
        <Search placeholder="enter your words..." onSearch={onSearch} />
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
              title="With logo"
              imports="Search"
              code={`import { Search } from 'tango-ui-cw' 
import Logo from '@/assets/logo.png'

export function Demo () {
  const onSearch = (value) => console.log("search result:",value);
  return (
      <>
        <Search placeholder="enter your words..." onSearch={onSearch} path={Logo}/>
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
            Props
          </div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">Universal Props</div>
          </div>

          <Table
            dataSource={dataSourceEN}
            columns={columnsEN}
            containerStyles={theme === "light" ? {} : { color: "white" }}
            hoverColor="#a6a6a6"
          />
          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3">
            On This Page
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">
            Search
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

export default SearchComponent;
