"use client";
import React, { useState } from "react";
import { Button, Table, Modal } from "tango-ui-cw";
import DemoBlock from "@/components/DemoWideZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const ModalComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
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
      property: "title",
      type: "string",
      values: "-",
      description: "对话框默认标题文本",
      default: "自定义标题",
      version: "-",

    },
    {
      property: "open",
      type: "boolean",
      values: "boolean",
      description: "对话框是否可见",
      default: "false",
      version: "-",

    },
    {
      property: "onClose",
      type: "function(e)",
      values: "-",
      description: "点击关闭图标或取消按钮的回调函数",
      default: "-",
      version: "-",

    },
    {
      property: "okText",
      type: "string",
      values: "-",
      description: "确认按钮文字",
      default: "确定",
      version: "-",

    },
    {
      property: "cancelText",
      type: "string",
      values: "-",
      description: "取消按钮文字",
      default: "取消",
      version: "-",

    },
    {
      property: "containerStyles",
      type: "object",
      values: "-",
      description: "自定义Modal弹窗样式",
      default: "-",
      version: "0.3.2",

    },
    {
      property: "headerStyles",
      type: "object",
      values: "-",
      description: "自定义Modal弹窗标题样式",
      default: "-",
      version: "0.3.2",

    },
    {
      property: "footerStyles",
      type: "object",
      values: "-",
      description: "自定义Modal弹窗底部区域样式",
      default: "-",
      version: "0.3.2",

    },
    {
      property: "btnStyles",
      type: "object",
      values: "-",
      description: "自定义Modal弹窗底部的按钮样式",
      default: "-",
      version: "0.3.2",

    },
    {
      property: "footerButtons",
      type: "object",
      values: "-",
      description: "自定义Modal弹窗底部按钮",
      default: "-",
      version: "0.3.2",

    },
    {
      property: "maskClosable",
      type: "boolean",
      values: "-",
      description: "是否启用点击蒙版关闭弹窗",
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
          显示弹窗
        </Button>
        <Modal title="自定义标题" open={isShowModal} onClose={closeModal}
        headerStyles={{ color: "black" }}
        btnStyles={{
          cancel: { color: "black", backgroundColor: "white" },
          ok: { color: "white", backgroundColor: "black" },
        }}
        footerButtons={[
          { key: "cancel", text: "取消", onClick: closeModal },
          { key: "ok", text: "确认", onClick: closeModal },
        ]}>
          <p className="dark:text-black">这是弹窗的内容区域...</p>
          <p className="dark:text-black">这是弹窗的内容区域...</p>
          <p className="dark:text-black">这是弹窗的内容区域...</p>
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
      console.log("导出按钮");
      setIsShowCustomModal(false);
    }

    return (
      <>
        <Button onClick={showModal} size="middle">
          自定义弹窗
        </Button>
        <Modal
          title="自定义弹窗"
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
            { key: "cancel", text: "取消", onClick: closeModal },
            { key: "ok", text: "确定", onClick: closeModal },
            { key: "export", text: "导出", onClick: handleExport },
          ]}
        >
          <p className="dark:text-black">1.可自定义弹窗的背景样式</p>
          <p className="dark:text-black">2.可自定义弹窗的标题样式</p>
          <p className="dark:text-black">3.可自定义弹窗的底部样式</p>
          <p className="dark:text-black">4.可自定义弹窗的底部按钮样式</p>
          <p className="dark:text-black">5.可自定义弹窗的底部按钮数量</p>
        </Modal>
      </>
    );
  }

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Modal 模态框</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            展示一个对话框，提供标题、内容区、操作区。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
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
          显示弹窗
        </Button>
        <Modal title="自定义标题" open={isShowModal} onClose={closeModal}
        btnStyles={{
          cancel: { color: "black", backgroundColor: "white" },
          ok: { color: "white", backgroundColor: "black" },
        }}
        footerButtons={[
          { key: "cancel", text: "取消", onClick: closeModal },
          { key: "ok", text: "确认", onClick: closeModal },
        ]}>>
          <p>这是弹窗的内容区域...</p>
          <p>这是弹窗的内容区域...</p>
          <p>这是弹窗的内容区域...</p>
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
              title="自定义"
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
      console.log('导出按钮');
      setIsShowCustomModal(false);
    }

    return (
      <>
        <Button onClick={showModal} size="middle">
        自定义弹窗
        </Button>
        <Modal
          title="自定义弹窗"
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
            { key: "cancel", text: "取消", onClick: closeModal },
            { key: "ok", text: "确定", onClick: closeModal },
            { key: "export", text: "导出", onClick: handleExport },
          ]}
        >
          <p className="dark:text-black">1.可自定义弹窗的背景样式</p>
          <p className="dark:text-black">2.可自定义弹窗的标题样式</p>
          <p className="dark:text-black">3.可自定义弹窗的底部样式</p>
          <p className="dark:text-black">4.可自定义弹窗的底部按钮样式</p>
          <p className="dark:text-black">5.可自定义弹窗的底部按钮数量</p>
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
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">模态框</div>

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

export default ModalComponent;
