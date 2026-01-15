"use client";
import React, { useState } from "react";
import { Line, Table, Space, Banner } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import DemoBlock2 from "@/components/DemoWideEn";

const BannerComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "level", label: "Level" },
    { id: "transparent", label: "Transparent" },
    { id: "customText", label: "Custom text" },
    { id: "customColor", label: "Custom color" },
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
      name: "size",
      type: "string",
      value: "small | large",
      description: "Change the size of the Banner component.",
      defaultValue: "normal",
    },
    {
      key: "2",
      name: "level",
      type: "string",
      value: "string",
      description: "Change the level of the Banner component.",
      defaultValue: "-",
    },
    {
      key: "3",
      name: "transparent",
      type: "boolean",
      value: "boolean",
      description: "Enable the transparent Banner.",
      defaultValue: "false",
    },
    {
      key: "4",
      name: "onCancel",
      type: "() => void",
      value: "-",
      description: "Triggered when the close button is clicked.",
      defaultValue: "-",
    },
    {
      key: "5",
      name: "onAction",
      type: "() => void",
      value: "-",
      description: "Triggered when the action button is clicked.",
      defaultValue: "-",
    },
    {
      key: "6",
      name: "cancelText",
      type: "string",
      value: "string",
      description: "Change the text of the close button.",
      defaultValue: "-",
    },
    {
      key: "7",
      name: "actionText",
      type: "string",
      value: "string",
      description: "Change the text of the action button.",
      defaultValue: "-",
    },
    {
      key: "8",
      name: "bannerBgColor",
      type: "string",
      value: "string",
      description: "Change the background color of the Banner.",
      defaultValue: "-",
    },
    {
      key: "9",
      name: "bannerBorderColor",
      type: "string",
      value: "string",
      description: "Change the border color of the Banner.",
      defaultValue: "-",
    },
    {
      key: "10",
      name: "bannerIconColor",
      type: "string",
      value: "string",
      description: "Change the icon color of the Banner.",
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

  function cancel() {
    console.log("Cancel clicked");
  }

  function action() {
    console.log("Action clicked");
  }

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">
            Banner
          </div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            A component that allows applications to communicate important
            messages to users and requires user action to dismiss them.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
              imports="Banner"
              code={`<>
      <Banner onCancel={cancel} onAction={action} size="small">
        Banner
      </Banner>
    </>`}
              jsx={
                <>
                  <Space sx={{ presentw: 100, p: 30 }}>
                    <Banner onCancel={cancel} onAction={action} size="small">
                      Banner
                    </Banner>
                  </Space>
                </>
              }
            />
          </div>

          {/* level */}
          <div id="level" className="scroll-mt-10">
            <DemoBlock
              title="Level"
              imports="Banner"
              code={`<>
      <Banner onCancel={cancel} onAction={action} size="small" level = "success">
        Success Banner
      </Banner>
      <Banner onCancel={cancel} onAction={action} size="small" level = "info">
        Info Banner
      </Banner>
      <Banner onCancel={cancel} onAction={action} size="small" level = "warning">
        Warning Banner
      </Banner>
      <Banner onCancel={cancel} onAction={action} size="small" level = "error">
        Error Banner
      </Banner>
    </>`}
              jsx={
                <>
                  <Space sx={{ presentw: 100, p: 30 }}>
                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="success"
                    >
                      Success Banner
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>
                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="info"
                    >
                      Info Banner
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>

                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="warning"
                    >
                      Warning Banner
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>

                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="error"
                    >
                      Error Banner
                    </Banner>
                  </Space>
                </>
              }
            />
          </div>

          {/* transparent */}
          <div id="transparent" className="scroll-mt-10">
            <DemoBlock
              title="Transparent"
              imports="Banner"
              code={`<>
      <Banner onCancel={cancel} onAction={action} size="small" level="success" transparent>
        Transparent Success Banner
      </Banner>
    </>`}
              jsx={
                <>
                  <Space sx={{ presentw: 100, p: 30 }}>
                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="success"
                      transparent
                    >
                      Transparent Success Banner
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>
                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="info"
                      transparent
                    >
                      Transparent Info Banner
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>

                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="warning"
                      transparent
                    >
                      Transparent Warning Banner
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>

                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="error"
                      transparent
                    >
                      Transparent Error Banner
                    </Banner>
                  </Space>
                </>
              }
            />
          </div>

          {/* custom button text */}
          <div id="customText" className="scroll-mt-10">
            <DemoBlock
              title="Custom button text"
              imports="Banner"
              code={`<>
      <Banner onCancel={cancel} onAction={action} size="small" cancelText="Dismiss" actionText="Proceed">
        Custom button text Banner
      </Banner>
    </>`}
              jsx={
                <>
                  <Space sx={{ presentw: 100, p: 30 }}>
                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      cancelText="Dismiss"
                      actionText="Proceed"
                    >
                      Custom button text Banner
                    </Banner>
                  </Space>
                </>
              }
            />
          </div>

          {/* custom color */}
          <div id="customColor" className="scroll-mt-10">
            <DemoBlock2
              title="Custom color"
              imports="Banner"
              code={`import { Banner } from 'tango-ui-cw' 

export function Demo () {
    return (
     <>
        <Banner
            onCancel={cancel}
            onAction={action}
            size="small"
            bannerBgColor="grey"
        >
            Custom background color
        </Banner>

        <Banner
            onCancel={cancel}
            onAction={action}
            size="small"
            bannerBorderColor="red"
        >
            Custom border color
        </Banner>

        <Banner
            onCancel={cancel}
            onAction={action}
            size="small"
            bannerIconColor="#e40cda"
        >
            Custom icon color
        </Banner>
     </>
    )`}
              jsx={
                <>
                  <Space sx={{ presentw: 100, p: 30 }}>
                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      bannerBgColor="grey"
                    >
                      Custom background color
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>

                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      bannerBorderColor="red"
                    >
                      Custom border color
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>

                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      bannerIconColor="#e40cda"
                    >
                      Custom icon color
                    </Banner>
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

          <Table
            dataSource={dataSource}
            columns={columns}
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
            Line
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

export default BannerComponent;
