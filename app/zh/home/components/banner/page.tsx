"use client";
import React, { useState } from "react";
import { Line, Table, Space, Banner } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import DemoBlock2 from "@/components/DemoWideZh";

const BannerComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "level", label: "级别" },
    { id: "transparent", label: "透明" },
    { id: "customText", label: "自定义按钮文字" },
    { id: "customColor", label: "自定义颜色" },
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
      name: "size",
      type: "string",
      value: "small | large",
      description: "改变 Banner 的尺寸。",
      defaultValue: "normal",
    },
    {
      key: "2",
      name: "level",
      type: "string",
      value: "string",
      description: "改变 Banner 的级别。",
      defaultValue: "-",
    },
    {
      key: "3",
      name: "transparent",
      type: "boolean",
      value: "boolean",
      description: "开启透明模式。",
      defaultValue: "false",
    },
    {
      key: "4",
      name: "onCancel",
      type: "() => void",
      value: "-",
      description: "触发关闭事件。",
      defaultValue: "-",
    },
    {
      key: "5",
      name: "onAction",
      type: "() => void",
      value: "-",
      description: "触发操作事件。",
      defaultValue: "-",
    },
    {
      key: "6",
      name: "cancelText",
      type: "string",
      value: "string",
      description: "关闭按钮的文本。",
      defaultValue: "-",
    },
    {
      key: "7",
      name: "actionText",
      type: "string",
      value: "string",
      description: "动作按钮的文本。",
      defaultValue: "-",
    },
    {
      key: "8",
      name: "bannerBgColor",
      type: "string",
      value: "string",
      description: "改变 Banner 的背景颜色。",
      defaultValue: "-",
    },
    {
      key: "9",
      name: "bannerBorderColor",
      type: "string",
      value: "string",
      description: "改变 Banner 的边框颜色。",
      defaultValue: "-",
    },
    {
      key: "10",
      name: "bannerIconColor",
      type: "string",
      value: "string",
      description: "改变 Banner 的图标颜色。",
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
            Banner 横幅
          </div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
          一个允许应用程序向用户传达重要消息，并需要用户操作才能关闭这些消息的组件。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
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
              title="级别"
              imports="Banner"
              code={`<>
      <Banner onCancel={cancel} onAction={action} size="small" level = "success">
        成功 Banner
      </Banner>
      <Banner onCancel={cancel} onAction={action} size="small" level = "info">
        信息 Banner
      </Banner>
      <Banner onCancel={cancel} onAction={action} size="small" level = "warning">
        告警 Banner
      </Banner>
      <Banner onCancel={cancel} onAction={action} size="small" level = "error">
        错误 Banner
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
                      成功 Banner
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>
                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="info"
                    >
                      信息 Banner
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>

                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="warning"
                    >
                      告警 Banner
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>

                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="error"
                    >
                      错误 Banner
                    </Banner>
                  </Space>
                </>
              }
            />
          </div>

          {/* transparent */}
          <div id="transparent" className="scroll-mt-10">
            <DemoBlock
              title="透明"
              imports="Banner"
              code={`<>
      <Banner onCancel={cancel} onAction={action} size="small" transparent>
        透明成功 Banner
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
                      透明成功 Banner
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>
                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="info"
                      transparent
                    >
                      透明信息 Banner
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>

                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="warning"
                      transparent
                    >
                      透明告警 Banner
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>

                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      level="error"
                      transparent
                    >
                      透明错误 Banner
                    </Banner>
                  </Space>
                </>
              }
            />
          </div>

          {/* custom button text */}
          <div id="customText" className="scroll-mt-10">
            <DemoBlock
              title="自定义按钮文字"
              imports="Banner"
              code={`<>
      <Banner onCancel={cancel} onAction={action} size="small" cancelText="忽略" actionText="继续">
        自定义按钮文字 Banner
      </Banner>
    </>`}
              jsx={
                <>
                  <Space sx={{ presentw: 100, p: 30 }}>
                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      cancelText="忽略"
                      actionText="继续"
                    >
                      自定义按钮文字 Banner
                    </Banner>
                  </Space>
                </>
              }
            />
          </div>

          {/* custom color */}
          <div id="customColor" className="scroll-mt-10">
            <DemoBlock2
              title="自定义颜色"
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
            自定义背景颜色
        </Banner>

        <Banner
            onCancel={cancel}
            onAction={action}
            size="small"
            bannerBorderColor="red"
        >
            自定义边框颜色
        </Banner>

        <Banner
            onCancel={cancel}
            onAction={action}
            size="small"
            bannerIconColor="#e40cda"
        >
            自定义图标颜色
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
                      自定义背景颜色
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>

                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      bannerBorderColor="red"
                    >
                      自定义边框颜色
                    </Banner>
                    <Space sx={{ mb: 10 }}></Space>

                    <Banner
                      onCancel={cancel}
                      onAction={action}
                      size="small"
                      bannerIconColor="#e40cda"
                    >
                      自定义图标颜色
                    </Banner>
                  </Space>
                </>
              }
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
            dataSource={dataSource}
            columns={columns}
            containerStyles={theme === "light" ? {} : { color: "white" }}
            // hoverColor="#a6a6a6"
          />
          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3">
          索引
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">
            横幅
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

export default BannerComponent;
