"use client";
import React, { useState } from "react";
import { Button, Table, MaterialButton } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const ButtonComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "success", label: "Success" },
    { id: "danger", label: "Danger" },
    { id: "transparent", label: "Transparent" },
    { id: "material", label: "Material" },
    { id: "neumorphism", label: "Neumorphism" },
    { id: "diasbled", label: "Diasbled" },
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
      name: "type",
      type: "string",
      value: "default | transparent | danger | success",
      description:
        'Specifies the button style. Supports four predefined types. Custom styles can be applied via the "sx" prop.',
      defaultValue: "default",
      version: "-",
    },
    {
      key: "2",
      name: "size",
      type: "string",
      value: "small | medium | large | huge",
      description:
        'Specifies the button size. Supports four preset sizes. Custom sizes can be defined using the "sx" prop.',
      defaultValue: "medium",
      version: "-",
    },
    {
      key: "3",
      name: "sx",
      type: "object",
      value: "object",
      description:
        'Inline styles for customizing the button appearance. Note: Inline styles defined via the "style" prop take precedence over "sx".',
      defaultValue: "{}",
      version: "-",
    },
    {
      key: "4",
      name: "disabled",
      type: "boolean",
      value: "true | false",
      description: "Disables the button if set to true.",
      defaultValue: "false",
      version: "-",
    },
    {
      key: "5",
      name: "outline",
      type: "boolean",
      value: "true | false",
      description: "Applies an outline style to the button.",
      defaultValue: "false",
      version: "-",
    },
    {
      key: "6",
      name: "enu",
      type: "boolean",
      value: "true | false",
      description: "Applies neumorphic styling when enabled.",
      defaultValue: "false",
      version: "0.3.0",
    },
    {
      key: "7",
      name: "onClick",
      type: "(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",
      value: "-",
      description: "Callback function triggered when the button is clicked.",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "8",
      name: "className",
      type: "string",
      value: "-",
      description: "Custom CSS class name(s) applied to the button.",
      defaultValue: "-",
      version: "-",
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
    { title: "Version", dataIndex: "version", key: "version" },
  ];

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">
            Button
          </div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            The Button component is used to trigger an action or event, such as
            submitting a form, opening a <br />
            dialog, canceling an action, or performing a delete operation.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
              imports="Button"
              code={`<Button>Button</Button>`}
              jsx={<Button>Button</Button>}
            />
          </div>

          {/* success */}
          <div id="success" className="scroll-mt-10">
            <DemoBlock
              title="Success"
              imports="Button"
              code={`<Button type="success">Success</Button>`}
              jsx={<Button type="success">Success</Button>}
            />
          </div>

          {/* danger */}
          <div id="danger" className="scroll-mt-10">
            <DemoBlock
              title="Danger"
              imports="Button"
              code={`<Button type="danger">Danger</Button>`}
              jsx={<Button type="danger">Danger</Button>}
            />
          </div>

          {/* transparent */}
          <div id="transparent" className="scroll-mt-10">
            <DemoBlock
              title="Transparent"
              imports="Button"
              code={`<Button type="transparent">Transparent</Button>`}
              jsx={<Button type="transparent" className="dark:!text-white dark:!border dark:!border-white">Transparent</Button>}
            />
          </div>

          {/* material */}
          <div id="material" className="scroll-mt-10">
            <DemoBlock
              title="Material"
              imports="MaterialButton"
              code={`<MaterialButton>MaterialButton</MaterialButton>`}
              jsx={<MaterialButton>MaterialButton</MaterialButton>}
            />
          </div>

          {/* Neumorphism */}
          <div id="neumorphism" className="scroll-mt-10">
            <DemoBlock
              title="Neumorphism"
              imports="Button"
              code={`<Button enu>Neumorphism</Button>`}
              jsx={
                <Button enu sx={{ b: "none" }}>
                  Neumorphism
                </Button>
              }
            />
          </div>

          {/* diasbled */}
          <div id="diasbled" className="scroll-mt-10">
            <DemoBlock
              title="Diasbled"
              imports="Button"
              code={`<Button disabled>Disabled</Button>`}
              jsx={<Button disabled>disabled</Button>}
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
            Button
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

          {/* <Button
            // sx={{bg:'red'}}
            // sx="aa"
            // sx="bg-red-500"
            // sx="cc"

            // className="cc"

          >
            Success
          </Button> */}

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
                  <span className="mr-2 text-sm mt-[4px] leading-none  ">
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
