"use client";
import React, { useState } from "react";
import { Button, Table, MaterialButton, Space, useTheme } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import { Md10K, Md6Mp, Md4kPlus, Md5kPlus } from "react-icons/md";

const ButtonComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const { toggleTheme } = useTheme();
  const logoUrl = "/logoblack.png";

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "success", label: "Success" },
    { id: "danger", label: "Danger" },
    { id: "transparent", label: "Transparent" },
    { id: "material", label: "Material" },
    { id: "neumorphism", label: "Neumorphism" },
    { id: "diasbled", label: "Diasbled" },
    { id: "loading", label: "Loading" },
    { id: "icon", label: "Icon" },
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
    {
      key: "9",
      name: "loading",
      type: "boolean",
      value: "true | false",
      description: "Indicates that the button is loading.",
      defaultValue: "true",
      version: "0.6.0",
    },
    {
      key: "10",
      name: "icon",
      type: "object",
      value: "object",
      description: "Icon to display in the button.",
      defaultValue: "-",
      version: "0.6.0",
    },
    {
      key: "11",
      name: "iconPosition",
      type: "string",
      value: "left | right",
      description: "Position of the icon within the button.",
      defaultValue: "left",
      version: "0.6.0",
    },
    {
      key: "12",
      name: "rippleColor",
      type: "string",
      value: "rgba|rgb|#hex",
      description: "customize the color of the ripple effect.",
      defaultValue: "rgba(255, 255, 255, 0.6)",
      version: "0.8.3",
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

  function login() {
    window.open(
      "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com.hk%2Findex.html&dsh=S-1926229897%3A1768525286017124&ec=futura_exp_og_so_72776762_e&hl=zh-CN&ifkv=AXbMIuCEx58KCQ28Qi75tO-z191PySfXVzZFjv3pXoQ4BDG2mM_KpCYv8MWA5rb8SWIGDCJSvpri&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
      "_blank",
    );
  }

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
              jsx={
                <Button
                  type="transparent"
                  className="dark:!text-white dark:!border dark:!border-white"
                >
                  Transparent
                </Button>
              }
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
              jsx={<Button disabled>Disabled</Button>}
            />
          </div>

          {/* loading */}
          <div id="loading" className="scroll-mt-10">
            <DemoBlock
              title="Loading"
              imports="Button"
              code={`<Button loading>Loading</Button>`}
              jsx={<Button loading>Loading</Button>}
            />
          </div>

          <div className="scroll-mt-10 font-bold">Usage</div>

          {/* Basic Loading Usage */}
          <div className="mt-4 mb-2 text-sm font-semibold text-gray-700">
            Basic Loading
          </div>
          <div className="space-y-3">
            {/* Default loading (dark) */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button loading={true}>Submitting...</Button>
              </div>
              <code className="text-sm text-gray-600">
                loading={"{"}true{"}"}
              </code>
            </div>

            {/* Light loading */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button
                  loading="light"
                  sx={{ bg: "black", c: "white", bColor: "white" }}
                >
                  Submitting...
                </Button>
              </div>
              <code className="text-sm text-gray-600">loading="light"</code>
            </div>

            {/* Dark loading */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button loading="dark">Submitting...</Button>
              </div>
              <code className="text-sm text-gray-600">loading="dark"</code>
            </div>
          </div>

          {/* Array Format Usage */}
          <div className="mt-6 mb-2 text-sm font-semibold text-gray-700">
            Array Format Loading
          </div>
          <p className="text-sm text-gray-500 mb-3">
            Use array format [showLoading, type] for dynamic control
          </p>
          <div className="space-y-3">
            {/* Array with dark loading */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button loading={[true, "dark"]}>Saving...</Button>
              </div>
              <code className="text-sm text-gray-600">
                loading={"{"}[true, "dark"]{"}"}
              </code>
            </div>

            {/* Array with light loading */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button
                  loading={[true, "light"]}
                  sx={{ bg: "black", c: "white", bColor: "white" }}
                >
                  Processing...
                </Button>
              </div>
              <code className="text-sm text-gray-600">
                loading={"{"}[true, "light"]{"}"}
              </code>
            </div>
          </div>

          {/* Loading States Table */}
          <div className="mt-6 mb-2 text-sm font-semibold text-gray-700">
            Loading States Reference
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 dark:border-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                    Value
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                    Type
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                    Color
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                      true
                    </code>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Boolean
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Dark
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Default dark loading spinner
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                      "light"
                    </code>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    String
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Light
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Light theme (Dark color loading spinner)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                      "dark"
                    </code>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    String
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Dark
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Dark theme (Light color loading spinner)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                      [true, "dark"]
                    </code>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Array
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Dark
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Array format with dark spinner
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                      [true, "light"]
                    </code>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Array
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Light
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Array format with light spinner
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                      [false, "dark"]
                    </code>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Array
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    -
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Loading disabled
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Usage Notes */}
          <div className="mt-6 mb-10 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded">
            <div className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">
              Important Notes:
            </div>
            <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
              <li>
                • When{" "}
                <code className="bg-blue-100 dark:bg-blue-800 px-1 py-0.5 rounded text-blue-800 dark:text-blue-200">
                  loading=true
                </code>
                , it defaults to dark spinner
              </li>
              <li>
                • Array format is useful for dynamic state control:{" "}
                <code className="bg-blue-100 dark:bg-blue-800 px-1 py-0.5 rounded text-blue-800 dark:text-blue-200">
                  [isLoading, "dark"] (useState)
                </code>
              </li>
              <li>
                • The first element in array controls visibility (boolean)
              </li>
              <li>
                • The second element in array controls spinner type ("light" or
                "dark")
              </li>
              <li>
                • If second element is omitted or invalid, defaults to "light"
              </li>
            </ul>
          </div>

          {/* icon */}
          <div id="icon" className="scroll-mt-10">
            <DemoBlock
              title="Icon"
              imports="Button"
              code={`<Button icon={logoUrl}>Icon</Button>`}
              jsx={
                <Button sx={{ mt: -1 }} icon={logoUrl}>
                  Icon
                </Button>
              }
            />
          </div>

          <div className="scroll-mt-10 font-bold">Usage</div>

          {/* Basic Icon Usage */}
          <div className="mt-4 mb-2 text-sm font-semibold text-gray-700">
            Basic Icon Usage
          </div>
          <div className="space-y-3">
            {/* String path (image) */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button icon="/setting.png">Settings</Button>
              </div>
              <code className="text-sm text-gray-600">icon="/setting.png"</code>
            </div>

            {/* React element (JSX) */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button icon={<Md6Mp />}>Settings</Button>
              </div>
              <code className="text-sm text-gray-600">
                icon={"{"}&lt;FiSettings /&gt;{"}"}
              </code>
            </div>

            {/* React component */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button icon={<Md4kPlus />}>Settings</Button>
              </div>
              <code className="text-sm text-gray-600">
                icon={"{"}FiSettings{"}"}
              </code>
            </div>

            {/* Icon only button */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button icon={<Md5kPlus />} />
              </div>
              <code className="text-sm text-gray-600">
                icon={"{"}&lt;FiSearch /&gt;{"}"}
              </code>
              <span className="text-xs text-gray-500">(Icon-only button)</span>
            </div>
          </div>

          {/* Icon with Loading Combination */}
          <div className="mt-6 mb-2 text-sm font-semibold text-gray-700">
            Icon with Loading State
          </div>
          <div className="space-y-3">
            {/* Icon with loading */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button icon={<Md10K />} loading={[true, "dark"]}>
                  Uploading...
                </Button>
              </div>
              <code className="text-sm text-gray-600">
                icon={"{"}&lt;FiUpload /&gt;{"}"}
                <br />
                loading={"{"}[true, "dark"]{"}"}
              </code>
            </div>

            {/* Icon replaced by loading */}
            <div className="p-3 bg-yellow-50 border border-yellow-100 rounded">
              <div className="text-sm font-medium text-yellow-800 mb-1">
                Note:
              </div>
              <p className="text-sm text-yellow-700">
                When loading is active, the icon will be replaced by the loading
                spinner.
              </p>
            </div>
          </div>

          {/* Supported Icon Types Table */}
          <div className="mt-6 mb-2 text-sm font-semibold text-gray-700">
            Supported Icon Types
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 dark:border-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                    Type
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                    Format
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                    Example
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    String
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Image path
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                      "/icons/user.png"
                    </code>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Renders as{" "}
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                      &lt;img&gt;
                    </code>{" "}
                    tag
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    React Element
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    JSX
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">{`<FiHome />`}</code>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Cloned with additional props
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    React Component
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Component reference
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">
                      FiHome
                    </code>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">
                    Rendered as component
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Real-world Examples */}
          <div className="mt-6 mb-2 text-sm font-semibold text-gray-700">
            Real-world Examples
          </div>
          <div className="space-y-4">
            {/* Example 1: Social login */}
            <div className="p-3 border border-gray-200 rounded">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Social Login Button:
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-64">
                  <Button icon="/google.png" variant="outline" onClick={login}>
                    Sign in with Google
                  </Button>
                </div>
                <div className="text-sm text-gray-600">
                  <code>
                    icon="/google.png"
                    <br />
                    type="default"
                  </code>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded">
              <div className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">
                Important Notes:
              </div>
              <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                <li>
                  • Icon size is automatically adjusted based on button size
                </li>
                <li>
                  • Custom styles on icon elements are preserved and merged
                </li>
                <li>
                  • When loading is active, icon is replaced by loading spinner
                </li>
                <li>
                  • For React elements, className and style props are
                  intelligently merged
                </li>
                <li>
                  • All icon types automatically get the{" "}
                  <code className="bg-blue-100 dark:bg-blue-800 px-1 py-0.5 rounded text-blue-800 dark:text-blue-200">
                    .btn-icon
                  </code>{" "}
                  CSS class
                </li>
              </ul>
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
              // containerStyles={theme === "light" ? {} : { color: "white" }}
              // hoverColor="#a6a6a6"
            />

            {/* </div> */}
          </div>
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
