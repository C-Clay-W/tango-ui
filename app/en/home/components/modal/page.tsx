"use client";
import React, { useState } from "react";
import { Button, Table, Modal } from "tango-ui-cw";
import DemoBlock from "@/components/DemoWideEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const ModalComponent = () => {

  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "custom", label: "Custom" }
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
      title: 'Prop',
      dataIndex: 'property',
      key: 'property',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Accepted Values',
      dataIndex: 'values',
      key: 'values',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Default Value',
      dataIndex: 'default',
      key: 'default',
    },
    { title: "Version", dataIndex: "version", key: "version" },

  ];
  
  const dataSourceEN = [
    {
      property: 'title',
      type: 'string',
      values: '-',
      description: 'Default dialog title text',
      default: 'Basic Title',
      version: "-",

    },
    {
      property: 'open',
      type: 'boolean',
      values: 'boolean',
      description: 'Whether the dialog is visible',
      default: 'false',
      version: "-",

    },
    {
      property: 'onClose',
      type: 'function(e)',
      values: '-',
      description: 'Callback when clicking the close icon or cancel button',
      default: '-',
      version: "-",

    },
    {
      property: 'okText',
      type: 'string',
      values: '-',
      description: 'Text of the confirm button',
      default: '确定',
      version: "-",

    },
    {
      property: 'cancelText',
      type: 'string',
      values: '-',
      description: 'Text of the cancel button',
      default: '取消',
      version: "-",

    },
    {
      property: "containerStyles",
      type: "object",
      values: "-",
      description: "Customize Modal container style",
      default: "-",
      version: "0.3.2",

    },
    {
      property: "headerStyles",
      type: "object",
      values: "-",
      description: "Customize Modal header style",
      default: "-",
      version: "0.3.2",

    },
    {
      property: "footerStyles",
      type: "object",
      values: "-",
      description: "Customize Modal footer style",
      default: "-",
      version: "0.3.2",

    },
    {
      property: "btnStyles",
      type: "object",
      values: "-",
      description: "Customize Modal button style",
      default: "-",
      version: "0.3.2",

    },
    {
      property: "footerButtons",
      type: "object",
      values: "-",
      description: "Customize Modal footer's button",
      default: "-",
      version: "0.3.2",

    },
    {
      property: "maskClosable",
      type: "boolean",
      values: "-",
      description: "Enable to click mask to close modal",
      default: "true",
      version: "0.3.4",

    },
  ];

  function DefaultDemo() {
    const [isShowModal, setIsShowModal] = useState(false);

    const showModal = () => {
      setIsShowModal(true);
    };

    const closeModal = () => {
      setIsShowModal(false);
    };

    return (
      <>
        <Button onClick={showModal} size="middle">
          show modal
        </Button>
        <Modal title="Title" open={isShowModal} onClose={closeModal}
        headerStyles={{ color: "black" }}
        btnStyles={{
          cancel: { color: "black", backgroundColor: "white" },
          ok: { color: "white", backgroundColor: "black" },
        }}
        footerButtons={[
          { key: "cancel", text: "Cancel", onClick: closeModal },
          { key: "ok", text: "Ok", onClick: closeModal },
        ]}>
          <p className="dark:text-black">here is modal info...</p>
          <p className="dark:text-black">here is modal info...</p>
          <p className="dark:text-black">here is modal info...</p>
        </Modal>
      </>
    );
  }

  function CustomDemo() {
    const [isShowCustomModal, setIsShowCustomModal] = useState(false);

    const showModal = () => {
      setIsShowCustomModal(true);
    };

    const closeModal = () => {
      setIsShowCustomModal(false);
    };

    function handleExport() {
      console.log('export button');
      setIsShowCustomModal(false);
    }

    return (
      <>
        <Button onClick={showModal} size="middle">
          custom modal
        </Button>
        <Modal
          title="Custom Modal"
          open={isShowCustomModal}
          onClose={closeModal}
          containerStyles={{ background: "#d6a37e" }}
          headerStyles={{ color: "brown" }}
          footerStyles={{}}
          btnStyles={{
            ok: { backgroundColor: "#3166d4" },
            cancel: { color: "gray" },
            export: { color: "green" },
          }}
          footerButtons={[
            { key: "cancel", text: "cancel", onClick: closeModal },
            { key: "ok", text: "ok", onClick: closeModal},
            { key: "export", text: "export", onClick: handleExport },
          ]}
        >
          <p className="dark:text-black">1.Customize Modal container style</p>
          <p className="dark:text-black">2.Customize Modal container style</p>
          <p className="dark:text-black">3.Customize Modal footer style</p>
          <p className="dark:text-black">4.Customize Modal button style</p>
          <p className="dark:text-black">5.Customize Modal footer's button</p>
        </Modal>
      </>
    );
  }

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Modal</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            A window overlaid on either the primary window or another dialog
            window, rendering the content underneath inert.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
              imports="Modal, Button"
              code={`import { Modal, Button } from 'tango-ui-cw' 

export function Demo () {
  const [isShowModal, setIsShowModal] = useState(false);

    const showModal = () => {
      setIsShowModal(true);
    };

    const closeModal = () => {
      setIsShowModal(false);
    };

    return (
      <>
        <Button onClick={showModal} size="middle">
          show modal
        </Button>
        <Modal title="Tital" open={isShowModal} onClose={closeModal} 
        btnStyles={{
          cancel: { color: "black", backgroundColor: "white" },
          ok: { color: "white", backgroundColor: "black" },
        }}
        footerButtons={[
          { key: "cancel", text: "Cancel", onClick: closeModal },
          { key: "ok", text: "Ok", onClick: closeModal },
        ]}>
        >
          <p>here is modal info...</p>
          <p>here is modal info...</p>
          <p>here is modal info...</p>
        </Modal>
      </>
    );
}
  `}
              jsx={<DefaultDemo />}
            />
          </div>

 {/* custom */}
 <div id="custom" className="scroll-mt-10">
            <DemoBlock
              title="Custom"
              imports="Modal, Button"
              code={`import { Modal, Button } from 'tango-ui-cw' 

export function Demo () {
  const [isShowCustomModal, setIsShowCustomModal] = useState(false);

    const showModal = () => {
      setIsShowCustomModal(true);
    };

    const closeModal = () => {
      setIsShowCustomModal(false);
    };

    function handleExport() {
      console.log('export button');
      setIsShowCustomModal(false);
    }

    return (
      <>
        <Button onClick={showModal} size="middle">
          custom modal
        </Button>
        <Modal
          title="Custom Modal"
          open={isShowCustomModal}
          onClose={closeModal}
          containerStyles={{ background: "#d6a37e" }}
          headerStyles={{ color: "brown" }}
          footerStyles={{}}
          btnStyles={{
            ok: { backgroundColor: "#3166d4" },
            cancel: { color: "gray" },
            export: { color: "green" },
          }}
          footerButtons={[
            { key: "cancel", text: "cancel", onClick: closeModal },
            { key: "ok", text: "ok", onClick: closeModal },
            { key: "export", text: "export", onClick: handleExport },
          ]}
        >
          <p className="dark:text-black">1.Customize Modal container style</p>
          <p className="dark:text-black">2.Customize Modal container style</p>
          <p className="dark:text-black">3.Customize Modal footer style</p>
          <p className="dark:text-black">4.Customize Modal button style</p>
          <p className="dark:text-black">5.Customize Modal footer's button</p>
        </Modal>
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
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">Modal</div>

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

export default ModalComponent;
