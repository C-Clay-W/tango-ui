"use client";
import React, { useState } from "react";
import { Button, Table, Space, Drawer } from "tango-ui-cw";
import DemoBlock from "@/components/DemoWideZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const DrawerComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "direction", label: "方位" },
    { id: "custom", label: "自定义" },
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

  const columnsZh = [
    {
      title: "属性",
      dataIndex: "property",
      key: "property",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "可选值",
      dataIndex: "values",
      key: "values",
    },
    {
      title: "说明",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "默认值",
      dataIndex: "default",
      key: "default",
    },
    { title: "版本", dataIndex: "version", key: "version" },
  ];

  const dataSourceZh = [
    {
      key: "1",
      property: "title",
      type: "string",
      values: "-",
      description: "默认标题文本",
      default: "自定义标题",
      version: "-",
    },
    {
      key: "2",
      property: "open",
      type: "boolean",
      values: "boolean",
      description: "抽屉是否可见",
      default: "false",
      version: "-",
    },
    {
      key: "3",
      property: "onClose",
      type: "function(e)",
      values: "-",
      description: "点击关闭图标或取消按钮的回调函数",
      default: "-",
      version: "-",
    },
    {
      key: "4",
      property: "okText",
      type: "string",
      values: "-",
      description: "确认按钮文字",
      default: "确定",
      version: "-",
    },
    {
      key: "5",
      property: "cancelText",
      type: "string",
      values: "-",
      description: "取消按钮文字",
      default: "取消",
      version: "-",
    },
    {
      key: "6",
      property: "type",
      type: "string",
      values: (
        <>
          <span className="TABLE_VALUE_STYLE">top</span> |{" "}
          <span className="TABLE_VALUE_STYLE">right</span> |{" "}
          <span className="TABLE_VALUE_STYLE">bottom</span> |{" "}
          <span className="TABLE_VALUE_STYLE">left</span>
        </>
      ),
      description: "抽屉的弹出方向",
      default: "right",
      version: "-",
    },
    {
      property: "containerStyles",
      type: "object",
      values: "-",
      description: "自定义Drawer弹窗样式",
      default: "-",
      version: "0.3.2",
    },
    {
      property: "headerStyles",
      type: "object",
      values: "-",
      description: "自定义Drawer弹窗标题样式",
      default: "-",
      version: "0.3.2",
    },
    {
      property: "footerStyles",
      type: "object",
      values: "-",
      description: "自定义Drawer弹窗底部区域样式",
      default: "-",
      version: "0.3.2",
    },
    {
      property: "btnStyles",
      type: "object",
      values: "-",
      description: "自定义Drawer弹窗底部的按钮样式",
      default: "-",
      version: "0.3.2",
    },
    {
      property: "footerButtons",
      type: "object",
      values: "-",
      description: "自定义Drawer弹窗底部按钮",
      default: "-",
      version: "0.3.2",
    },
    {
      property: "maskClosable",
      type: "boolean",
      values: "-",
      description: "是否允许点击遮罩关闭抽屉",
      default: "true",
      version: "0.3.4",
    },
  ];

  function DefaultDemo() {
    const [isShowDrawer, setIsShowDrawer] = useState(false);

    const showDrawer = () => {
      setIsShowDrawer(true);
    };

    const closeDrawer = () => {
      setIsShowDrawer(false);
    };

    return (
      <>
        <Button onClick={showDrawer} size="middle">
          显示抽屉
        </Button>
        <Drawer
          title="自定义标题"
          open={isShowDrawer}
          onClose={closeDrawer}
          headerStyles={{ color: "black" }}
          btnStyles={{
            cancel: { color: "black", backgroundColor: "white" },
          }}
          footerButtons={[
            { key: "cancel", text: "取消", onClick: closeDrawer },
            { key: "ok", text: "确定", onClick: closeDrawer },
          ]}
        >
          <p className="dark:text-black">这是抽屉的内容区域...</p>
          <p className="dark:text-black">这是抽屉的内容区域...</p>
          <p className="dark:text-black">这是抽屉的内容区域...</p>
        </Drawer>
      </>
    );
  }

  function DirectionDemo() {
    const [drawerState, setDrawerState] = useState({
      visible: false,
      type: "left",
    });

    const directions = [
      { type: "top", label: "顶部" },
      { type: "right", label: "右侧" },
      { type: "bottom", label: "底部" },
      { type: "left", label: "左侧" },
    ];

    const showDrawer = (type: string) => {
      setDrawerState({ visible: true, type });
    };

    const closeDrawer = () => {
      setDrawerState({ ...drawerState, visible: false });
    };

    return (
      <Space sx={{ flex: true, gap: "8px" }}>
        {directions.map(({ type, label }) => (
          <Button key={type} onClick={() => showDrawer(type)}>
            {label}
          </Button>
        ))}

        <Drawer
          title="自定义标题"
          open={drawerState.visible}
          onClose={closeDrawer}
          type={drawerState.type}
          headerStyles={{ color: "black" }}
          btnStyles={{
            cancel: { color: "black", backgroundColor: "white" },
          }}
          footerButtons={[
            { key: "cancel", text: "取消", onClick: closeDrawer },
            { key: "ok", text: "确定", onClick: closeDrawer },
          ]}
        >
          <p className="dark:text-black">这是抽屉的内容区域...</p>
          <p className="dark:text-black">这是抽屉的内容区域...</p>
          <p className="dark:text-black">这是抽屉的内容区域...</p>
          <p className="font-bold mt-5 dark:text-black">
            当前为{directions.find((d) => d.type === drawerState.type)?.label}
            抽屉。
          </p>
        </Drawer>
      </Space>
    );
  }

  function CustomDemo() {
    const [isShowDrawerCustom, setIsShowDrawerCustom] = useState(false);

    const showDrawer = () => {
      setIsShowDrawerCustom(true);
    };

    const closeDrawer = () => {
      setIsShowDrawerCustom(false);
    };

    function handleExport() {
      console.log("导出按钮");
      setIsShowDrawerCustom(false);
    }

    return (
      <>
        <Button onClick={showDrawer} size="middle">
          显示自定义抽屉
        </Button>
        <Drawer
          title="自定义标题"
          open={isShowDrawerCustom}
          onClose={closeDrawer}
          containerStyles={{ background: "#d6a37e" }}
          headerStyles={{ color: "brown" }}
          footerStyles={{ background: "#d6a37e" }}
          btnStyles={{
            ok: { backgroundColor: "#3166d4" },
            cancel: { color: "gray" },
            export: { color: "green" },
          }}
          footerButtons={[
            { key: "cancel", text: "cancel", onClick: closeDrawer },
            { key: "ok", text: "ok", onClick: closeDrawer },
            { key: "export", text: "export", onClick: handleExport },
          ]}
        >
          <p className="dark:text-black">1.可自定义抽屉的背景样式</p>
          <p className="dark:text-black">2.可自定义抽屉的标题样式</p>
          <p className="dark:text-black">3.可自定义抽屉的底部样式</p>
          <p className="dark:text-black">4.可自定义抽屉的底部按钮样式</p>
          <p className="dark:text-black">5.可自定义抽屉的底部按钮数量</p>
        </Drawer>
      </>
    );
  }

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Drawer 抽屉</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            屏幕边缘滑出的浮层面板。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
              imports="Button, Drawer"
              code={`import { Button, Drawer } from 'tango-ui-cw' 

export function Demo () {
  const [isShowDrawer, setIsShowDrawer] = useState(false);

    const showDrawer = () => {
      setIsShowDrawer(true);
    };

    const closeDrawer = () => {
      setIsShowDrawer(false);
    };

    return (
      <>
        <Button onClick={showDrawer} size="middle">
        显示抽屉
        </Button>
        <Drawer
          title="自定义标题"
          open={isShowDrawer}
          onClose={closeDrawer}
          btnStyles={{
            cancel: { color: "black", backgroundColor: "white" },
          }}
          footerButtons={[
          { key: "cancel", text: "取消", onClick: closeDrawer },
          { key: "ok", text: "确定", onClick: closeDrawer },
        ]}
        >
          <p className="dark:text-black">这是抽屉的内容区域...</p>
          <p className="dark:text-black">这是抽屉的内容区域...</p>
          <p className="dark:text-black">这是抽屉的内容区域...</p>
        </Drawer>
      </>
    );
}
  `}
              jsx={<DefaultDemo />}
            />
          </div>

          {/* direction */}
          <div id="direction" className="scroll-mt-10">
            <DemoBlock
              title="方位"
              imports="Space, Button, Drawer"
              code={`import { Space, Button, Drawer } from 'tango-ui-cw' 

export function Demo () {
  const [drawerState, setDrawerState] = useState({
      visible: false,
      type: 'left'
    });
  
    const directions = [
      { type: 'top', label: '顶部' },
      { type: 'right', label: '右侧' },
      { type: 'bottom', label: '底部' },
      { type: 'left', label: '左侧' }
    ];
  
    const showDrawer = (type) => {
      setDrawerState({ visible: true, type });
    };
  
    const closeDrawer = () => {
      setDrawerState({ ...drawerState, visible: false });
    };
  
    return (
      <Space sx={{ flex: true, gap: '8px' }}>
        {directions.map(({ type, label }) => (
          <Button
            key={type}
            onClick={() => showDrawer(type)}
          >
            {label}
          </Button>
        ))}
  
        <Drawer
          title="自定义标题"
          open={drawerState.visible}
          onClose={closeDrawer}
          type={drawerState.type}
          btnStyles={{
            cancel: { color: "black", backgroundColor: "white" },
          }}
          footerButtons={[
            { key: "cancel", text: "取消", onClick: closeDrawer },
            { key: "ok", text: "确定", onClick: closeDrawer },
          ]}
        >
          <p className="dark:text-black">这是抽屉的内容区域...</p>
          <p className="dark:text-black">这是抽屉的内容区域...</p>
          <p className="dark:text-black">这是抽屉的内容区域...</p>
          <p className="font-bold mt-5 dark:text-black">当前为 {directions.find(d => d.type === drawerState.type)?.label} 抽屉.</p>
        </Drawer>
      </Space>
    );
}
  `}
              jsx={<DirectionDemo />}
            />
          </div>

          {/* custom */}
          <div id="custom" className="scroll-mt-10">
            <DemoBlock
              title="自定义"
              imports="Space, Button, Drawer"
              code={`import { Space, Button, Drawer } from 'tango-ui-cw' 

export function Demo () {
  const [isShowDrawerCustom, setIsShowDrawerCustom] = useState(false);

    const showDrawer = () => {
      setIsShowDrawerCustom(true);
    };

    const closeDrawer = () => {
      setIsShowDrawerCustom(false);
    };

    function handleExport() {
      console.log("导出按钮");
      setIsShowDrawerCustom(false);
    }

    return (
      <>
        <Button onClick={showDrawer} size="middle">
          显示自定义抽屉
        </Button>
        <Drawer
          title="自定义标题"
          open={isShowDrawerCustom}
          onClose={closeDrawer}
          containerStyles={{ background: "#d6a37e" }}
          headerStyles={{ color: "brown" }}
          footerStyles={{}}
          btnStyles={{
            ok: { backgroundColor: "#3166d4" },
            cancel: { color: "gray" },
            export: { color: "green" },
          }}
          footerButtons={[
            { key: "cancel", text: "cancel", onClick: closeDrawer },
            { key: "ok", text: "ok", onClick: closeDrawer },
            { key: "export", text: "export", onClick: handleExport },
          ]}
        >
          <p className="dark:text-black">1.可自定义抽屉的背景样式</p>
          <p className="dark:text-black">2.可自定义抽屉的标题样式</p>
          <p className="dark:text-black">3.可自定义抽屉的底部样式</p>
          <p className="dark:text-black">4.可自定义抽屉的底部按钮样式</p>
          <p className="dark:text-black">5.可自定义抽屉的底部按钮数量</p>
        </Drawer>
      </>
    );
}
  `}
              jsx={<CustomDemo />}
            />
          </div>

          {/* props */}
          {/* <div className="hidden sm:block md:block lg:block xl:block 2xl:block "> */}
          <div className="text-2xl font-bold mb-5 dark:text-neutral-300">属性</div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">通用属性</div>
          </div>

          <Table dataSource={dataSourceZh} columns={columnsZh} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>
          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3">
            索引
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">抽屉</div>

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

export default DrawerComponent;
