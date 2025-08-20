"use client";
import React, { useState } from "react";
import { Button, Table, MaterialButton } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const ButtonComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "success", label: "成功按钮" },
    { id: "danger", label: "危险按钮" },
    { id: "transparent", label: "透明按钮" },
    { id: "material", label: "Material风格" },
    { id: "neumorphism", label: "新拟态风格" },
    { id: "diasbled", label: "禁用" },
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
      name: "type",
      type: "string",
      value: "default | transparent | danger | success",
      description: '默认提供四个按钮样式，可以通过 "sx" 属性自定义其他按钮样式',
      defaultValue: "default",
      version: "-",

    },
    {
      key: "2",
      name: "size",
      type: "string",
      value: "small | medium | large | huge",
      description: '默认提供四种大小，可以通过 "sx" 属性自定义其他大小',
      defaultValue: "medium",
      version: "-",

    },
    {
      key: "3",
      name: "sx",
      type: "object",
      value: "object",
      description:
        "自定义 Button 的内联样式，注意：当使用 style 属性设置行内样式时，相同 CSS 属性将会覆盖 sx 属性",
      defaultValue: "{}",
      version: "-",

    },
    {
      key: "4",
      name: "disabled",
      type: "boolean",
      value: "true | false",
      description: "是否禁用按钮",
      defaultValue: "false",
      version: "-",

    },
    {
      key: "5",
      name: "outline",
      type: "boolean",
      value: "true | false",
      description: "是否为轮廓按钮",
      defaultValue: "false",
      version: "-",

    },
    {
      key: "6",
      name: "enu",
      type: "boolean",
      value: "true | false",
      description: "是否为新拟态风格按钮",
      defaultValue: "false",
      version: "0.3.0",

    },
    {
      key: "7",
      name: "onClick",
      type: "(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",
      value: "-",
      description: "点击按钮时的回调",
      defaultValue: "-",
      version: "-",

    },
    {
      key: "8",
      name: "className",
      type: "string",
      value: "-",
      description: "定义按钮类名",
      defaultValue: "-",
      version: "-",

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
    { title: "版本", dataIndex: "version", key: "version" },

  ];

  return (
    <>
      <div className="flex">
        <div className="sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Button 按钮</div>
          <div className="mb-10 dark:text-neutral-300">
            Button
            组件用于触发动作或事件，例如提交表单、打开对话框、取消或执行删除操作等。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
              imports="Button"
              code={`<Button>按钮</Button>`}
              jsx={<Button>按钮</Button>}
            />
          </div>

          {/* success */}
          <div id="success" className="scroll-mt-10">
            <DemoBlock
              title="成功按钮"
              imports="Button"
              code={`<Button type="success">成功按钮</Button>`}
              jsx={<Button type="success">成功按钮</Button>}
            />
          </div>

          {/* danger */}
          <div id="danger" className="scroll-mt-10">
            <DemoBlock
              title="危险按钮"
              imports="Button"
              code={`<Button type="danger">危险按钮</Button>`}
              jsx={<Button type="danger">危险按钮</Button>}
            />
          </div>

          {/* transparent */}
          <div id="transparent" className="scroll-mt-10">
            <DemoBlock
              title="透明按钮"
              imports="Button"
              code={`<Button type="transparent">透明按钮</Button>`}
              jsx={<Button type="transparent" className="dark:!text-white dark:!border dark:!border-white">透明按钮</Button>}
            />
          </div>

          {/* material */}
          <div id="material" className="scroll-mt-10">
            <DemoBlock
              title="Material风格"
              imports="MaterialButton"
              code={`<MaterialButton>Material风格按钮</MaterialButton>`}
              jsx={<MaterialButton>Material风格按钮</MaterialButton>}
            />
          </div>

          {/* Neumorphism */}
          <div id="neumorphism" className="scroll-mt-10">
            <DemoBlock
              title="新拟态"
              imports="Button"
              code={`<Button enu>新拟态风格</Button>`}
              jsx={
                <Button enu sx={{ b: "none" }}>
                  新拟态风格
                </Button>
              }
            />
          </div>

          {/* diasbled */}
          <div id="diasbled" className="scroll-mt-10">
            <DemoBlock
              title="禁用"
              imports="Button"
              code={`<Button disabled>禁用</Button>`}
              jsx={<Button disabled>禁用</Button>}
            />
          </div>

          <div className="text-2xl font-bold mb-5 dark:text-neutral-300">属性</div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">通用属性</div>
          </div>

          <Table dataSource={dataSource} columns={columns} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6" />
        </div>
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3">
            索引
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">按钮</div>

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

          <div className="text-sm mb-3 font-bold  mt-5 dark:text-neutral-300">
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

export default ButtonComponent;
