"use client";
import React, { useState } from "react";
import { Button, Table, Space, Drawer } from "tango-ui-cw";
import DemoBlock from "@/components/DemoWideEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const DrawerComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "direction", label: "Direction" },
    { id: "custom", label: "Custom" },
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

  const columnsEN = [
    {
      title: "Prop",
      dataIndex: "property",
      key: "property",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Accepted Values",
      dataIndex: "values",
      key: "values",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Default",
      dataIndex: "default",
      key: "default",
    },
    { title: "Version", dataIndex: "version", key: "version" },
  ];

  const dataSourceEN = [
    {
      key: "1",
      property: "title",
      type: "string",
      values: "-",
      description: "Default title text",
      default: "Basic Title",
      version: "-",
    },
    {
      key: "2",
      property: "open",
      type: "boolean",
      values: "boolean",
      description: "Whether the Drawer is visible",
      default: "false",
      version: "-",
    },
    {
      key: "3",
      property: "onClose",
      type: "function(e)",
      values: "-",
      description: "Callback when clicking the close icon or cancel button",
      default: "-",
      version: "-",
    },
    {
      key: "4",
      property: "okText",
      type: "string",
      values: "-",
      description: "Text of the confirm button",
      default: "确定",
      version: "-",
    },
    {
      key: "5",
      property: "cancelText",
      type: "string",
      values: "-",
      description: "Text of the cancel button",
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
      description: "Placement direction of Drawer",
      default: "right",
      className: "TABLE_STYLE",
      version: "-",
    },
    {
      property: "containerStyles",
      type: "object",
      values: "-",
      description: "Customize Drawer container style",
      default: "-",
      version: "0.3.2",
    },
    {
      property: "headerStyles",
      type: "object",
      values: "-",
      description: "Customize Drawer header style",
      default: "-",
      version: "0.3.2",
    },
    {
      property: "footerStyles",
      type: "object",
      values: "-",
      description: "Customize Drawer footer style",
      default: "-",
      version: "0.3.2",
    },
    {
      property: "btnStyles",
      type: "object",
      values: "-",
      description: "Customize Drawer button style",
      default: "-",
      version: "0.3.2",
    },
    {
      property: "footerButtons",
      type: "object",
      values: "-",
      description: "Customize Drawer footer's button",
      default: "-",
      version: "0.3.2",
    },
    {
      property: "maskClosable",
      type: "boolean",
      values: "-",
      description: "Enable to click mask to close drawer",
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
          show drawer
        </Button>
        <Drawer
          title="Title"
          open={isShowDrawer}
          onClose={closeDrawer}
          headerStyles={{ color: "black" }}
          btnStyles={{
            cancel: { color: "black", backgroundColor: "white" },
          }}
          footerButtons={[
            { key: "cancel", text: "Cancel", onClick: closeDrawer },
            { key: "ok", text: "Ok", onClick: closeDrawer },
          ]}
        >
          <p className="dark:text-black">here is drawer info...</p>
          <p className="dark:text-black">here is drawer info...</p>
          <p className="dark:text-black">here is drawer info...</p>
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
      { type: "top", label: "top" },
      { type: "right", label: "right" },
      { type: "bottom", label: "bottom" },
      { type: "left", label: "left" },
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
          title="Title"
          open={drawerState.visible}
          onClose={closeDrawer}
          type={drawerState.type}
          headerStyles={{ color: "black" }}
          btnStyles={{
            cancel: { color: "black", backgroundColor: "white" },
          }}
          footerButtons={[
            { key: "cancel", text: "Cancel", onClick: closeDrawer },
            { key: "ok", text: "Ok", onClick: closeDrawer },
          ]}
        >
          <p className="dark:text-black">here is drawer info...</p>
          <p className="dark:text-black">here is drawer info...</p>
          <p className="dark:text-black">here is drawer info...</p>
          <p className="font-bold mt-5 dark:text-black">
            current is{" "}
            {directions.find((d) => d.type === drawerState.type)?.label} drawer.
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
      console.log("export button");
      setIsShowDrawerCustom(false);
    }

    return (
      <>
        <Button onClick={showDrawer} size="middle">
          show custom drawer
        </Button>
        <Drawer
          title="Custom Title"
          open={isShowDrawerCustom}
          onClose={closeDrawer}
          onText="Ok"
          cancelText="Cancel"
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
          <p className="dark:text-black">1.Customize Drawer container style</p>
          <p className="dark:text-black">2.Customize Drawer container style</p>
          <p className="dark:text-black">3.Customize Drawer footer style</p>
          <p className="dark:text-black">4.Customize Drawer button style</p>
          <p className="dark:text-black">5.Customize Drawer footer's button</p>
        </Drawer>
      </>
    );
  }

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Drawer</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            A floating panel that slides out from the edge of the screen.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
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
          show drawer
        </Button>
        <Drawer
          title="Title"
          open={isShowDrawer}
          onClose={closeDrawer}
          btnStyles={{
            cancel: { color: "black", backgroundColor: "white" },
          }}
          footerButtons={[
          { key: "cancel", text: "Cancel", onClick: closeDrawer },
          { key: "ok", text: "Ok", onClick: closeDrawer },
        ]}
        >
          <p>here is drawer info...</p>
          <p>here is drawer info...</p>
          <p>here is drawer info...</p>
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
              title="Direction"
              imports="Space, Button, Drawer"
              code={`import { Space, Button, Drawer } from 'tango-ui-cw' 

export function Demo () {
  const [drawerState, setDrawerState] = useState({
      visible: false,
      type: 'left'
    });
  
    const directions = [
      { type: 'top', label: 'top' },
      { type: 'right', label: 'right' },
      { type: 'bottom', label: 'bottom' },
      { type: 'left', label: 'left' }
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
          title="Title"
          open={drawerState.visible}
          onClose={closeDrawer}
          type={drawerState.type}
          btnStyles={{
            cancel: { color: "black", backgroundColor: "white" },
          }}
          footerButtons={[
          { key: "cancel", text: "Cancel", onClick: closeDrawer },
          { key: "ok", text: "Ok", onClick: closeDrawer },
        ]}
        >
          <p>here is drawer info...</p>
          <p>here is drawer info...</p>
          <p>here is drawer info...</p>
          <p className="font-bold mt-5">current is {directions.find(d => d.type === drawerState.type)?.label} drawer.</p>
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
              title="Custom"
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
      console.log('export button');
      setIsShowDrawerCustom(false);
    }

    return (
      <>
        <Button onClick={showDrawer} size="middle">
          show custom drawer
        </Button>
        <Drawer
          title="Custom Title"
          open={isShowDrawerCustom}
          onClose={closeDrawer}
          onText="Ok"
          cancelText="Cancel"
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
            { key: "ok", text: "ok", onClick: closeDrawer},
            { key: "export", text: "export", onClick: handleExport },
          ]}
        >
          <p className="dark:text-black">1.Customize Drawer container style</p>
          <p className="dark:text-black">2.Customize Drawer container style</p>
          <p className="dark:text-black">3.Customize Drawer footer style</p>
          <p className="dark:text-black">4.Customize Drawer button style</p>
          <p className="dark:text-black">5.Customize Drawer footer's button</p>
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
          <div className="text-2xl font-bold mb-5 dark:text-neutral-300">Props</div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">Universal Props</div>
          </div>

          <Table dataSource={dataSourceEN} columns={columnsEN} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>
          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3">
            On This Page
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">Drawer</div>

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

export default DrawerComponent;
