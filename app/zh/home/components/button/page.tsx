"use client";
import React, { useState } from "react";
import { Button, Table, MaterialButton } from "tango-ui-cw";
import DemoBlock from "@/components/DemoBlockZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import LogoBlack from "@/assets/logoblack.png";
import LogoWhite from "@/assets/logowhite.png";
import { Md10K, Md6Mp, Md4kPlus, Md5kPlus } from "react-icons/md";

const ButtonComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();
  const logoUrl = theme === "dark" ? LogoWhite.src : LogoBlack.src;
  const settingIconUrl =
    theme === "dark" ? "/setting-new-dark.png.png" : "/setting-new-light.png";

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "success", label: "成功按钮" },
    { id: "danger", label: "危险按钮" },
    { id: "transparent", label: "透明按钮" },
    { id: "material", label: "Material风格" },
    { id: "neumorphism", label: "新拟态风格" },
    { id: "diasbled", label: "禁用" },
    { id: "loading", label: "加载中" },
    { id: "icon", label: "图标" },
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
    {
      key: "9",
      name: "loading",
      type: "boolean",
      value: "true | false",
      description: "加载中状态按钮形态",
      defaultValue: "true",
      version: "0.6.0",
    },
    {
      key: "10",
      name: "icon",
      type: "object",
      value: "object",
      description: "图标按钮",
      defaultValue: "-",
      version: "0.6.0",
    },
    {
      key: "11",
      name: "iconPosition",
      type: "string",
      value: "left | right",
      description: "控制图标位置",
      defaultValue: "left",
      version: "0.6.0",
    },
    {
      key: "12",
      name: "rippleColor",
      type: "string",
      value: "rgba|rgb|#hex",
      description: "自定义波纹颜色",
      defaultValue: "rgba(255, 255, 255, 0.6)",
      version: "0.8.3",
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

  const loadingColumns = [
    { title: "值", dataIndex: "value", key: "value" },
    { title: "类型", dataIndex: "type", key: "type" },
    { title: "颜色", dataIndex: "color", key: "color" },
    { title: "描述", dataIndex: "description", key: "description" },
  ];

  const loadingDataSource = [
    {
      key: "loading-1",
      value: "true",
      type: "Boolean",
      color: "Dark",
      description: "默认深色加载标志",
    },
    {
      key: "loading-2",
      value: '"light"',
      type: "String",
      color: "Light",
      description: "亮色主题（深色加载标志）",
    },
    {
      key: "loading-3",
      value: '"dark"',
      type: "String",
      color: "Dark",
      description: "深色主题（亮色加载标志）",
    },
    {
      key: "loading-4",
      value: '[true, "dark"]',
      type: "Array",
      color: "Dark",
      description: "数组形式深色加载标志",
    },
    {
      key: "loading-5",
      value: '[true, "light"]',
      type: "Array",
      color: "Light",
      description: "数组形式亮色加载标志",
    },
    {
      key: "loading-6",
      value: '[false, "dark"]',
      type: "Array",
      color: "-",
      description: "加载标志禁用",
    },
  ];

  const iconColumns = [
    { title: "类型", dataIndex: "type", key: "type" },
    { title: "格式", dataIndex: "format", key: "format" },
    { title: "示例", dataIndex: "example", key: "example" },
    { title: "描述", dataIndex: "description", key: "description" },
  ];

  const iconDataSource = [
    {
      key: "icon-1",
      type: "String",
      format: "Image path",
      example: '"/icons/user.png"',
      description: "渲染一个 <img> 标签",
    },
    {
      key: "icon-2",
      type: "React Element",
      format: "JSX",
      example: "<FiHome />",
      description: "渲染一个带有属性的元素",
    },
    {
      key: "icon-3",
      type: "React Component",
      format: "Component reference",
      example: "FiHome",
      description: "渲染一个图标组件",
    },
  ];

  function login() {
    window.open(
      "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com.hk%2Findex.html&dsh=S-1926229897%3A1768525286017124&ec=futura_exp_og_so_72776762_e&hl=zh-CN&ifkv=AXbMIuCEx58KCQ28Qi75tO-z191PySfXVzZFjv3pXoQ4BDG2mM_KpCYv8MWA5rb8SWIGDCJSvpri&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
      "_blank"
    );
  }

  return (
    <>
      <div className="flex">
        <div className="sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5" style={{ color: "var(--doc-title-color)" }}>
            Button 按钮
          </div>
          <div className="mb-10" style={{ color: "var(--doc-text-secondary)" }}>
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
              jsx={
                <Button
                  type="transparent"
                  className="dark:!text-white dark:!border dark:!border-white"
                >
                  透明按钮
                </Button>
              }
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

          {/* loading */}
          <div id="loading" className="scroll-mt-10">
            <DemoBlock
              title="加载中"
              imports="Button"
              code={`<Button loading>加载中</Button>`}
              jsx={<Button loading>加载中</Button>}
            />
          </div>

          <div className="scroll-mt-10 font-bold" style={{ color: "var(--doc-text-primary)" }}>
            使用
          </div>

          {/* Basic Loading Usage */}
          <div className="mt-4 mb-2 text-sm font-semibold" style={{ color: "var(--doc-text-primary)" }}>
            基本形态
          </div>
          <div className="space-y-3">
            {/* Default loading (dark) */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button loading={true}>正在提交...</Button>
              </div>
              <code className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
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
                  正在提交...
                </Button>
              </div>
              <code className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
                loading="light"
              </code>
            </div>

            {/* Dark loading */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button loading="dark">正在提交...</Button>
              </div>
              <code className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
                loading="dark"
              </code>
            </div>
          </div>

          {/* Array Format Usage */}
          <div className="mt-6 mb-2 text-sm font-semibold" style={{ color: "var(--doc-text-primary)" }}>
            数组形态
          </div>
          <p className="text-sm mb-3" style={{ color: "var(--doc-text-secondary)" }}>
            用数组形式 [showLoading, type] 以实现动态控制
          </p>
          <div className="space-y-3">
            {/* Array with dark loading */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button loading={[true, "dark"]}>正在保存...</Button>
              </div>
              <code className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
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
                  正在进行...
                </Button>
              </div>
              <code className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
                loading={"{"}[true, "light"]{"}"}
              </code>
            </div>
          </div>

          {/* Loading States Table */}
          <div className="mt-6 mb-2 text-sm font-semibold" style={{ color: "var(--doc-text-primary)" }}>
            加载状态参考
          </div>
          <Table dataSource={loadingDataSource} columns={loadingColumns} />

          {/* Usage Notes */}
          <div
            className="mt-6 mb-10 p-3 border rounded"
            style={{
              backgroundColor: "var(--doc-info-bg)",
              borderColor: "var(--doc-info-border)",
            }}
          >
            <div className="text-sm font-medium mb-1" style={{ color: "var(--doc-info-title)" }}>
              关键信息:
            </div>
            <ul className="text-sm space-y-1" style={{ color: "var(--doc-info-text)" }}>
              <li>
                • 当{" "}
                <code
                  className="px-1 py-0.5 rounded"
                  style={{
                    backgroundColor: "var(--doc-code-header-bg)",
                    color: "var(--doc-info-title)",
                  }}
                >
                  loading=true
                </code>
                &nbsp;时, 默认为深色加载标志
              </li>
              <li>
                • 数组格式可用于动态控制:{" "}
                <code
                  className="px-1 py-0.5 rounded"
                  style={{
                    backgroundColor: "var(--doc-code-header-bg)",
                    color: "var(--doc-info-title)",
                  }}
                >
                  [isLoading, "dark"] (useState)
                </code>
              </li>
              <li>• 第一个元素控制加载标志 (boolean)</li>
              <li>• 第二个元素控制加载标志类型 ("light" or "dark")</li>
              <li>• 如果第二个元素被省略或无效，则默认为“light”。</li>
            </ul>
          </div>

          {/* icon */}
          <div id="icon" className="scroll-mt-10">
            <DemoBlock
              title="图标"
              imports="Button"
              code={`<Button icon={logoUrl}>图标</Button>`}
              jsx={
                <Button sx={{ mt: -1 }} icon={logoUrl}>
                  图标
                </Button>
              }
            />
          </div>

          <div className="scroll-mt-10 font-bold" style={{ color: "var(--doc-text-primary)" }}>
            使用
          </div>

          {/* Basic Icon Usage */}
          <div className="mt-4 mb-2 text-sm font-semibold" style={{ color: "var(--doc-text-primary)" }}>
            基本形态
          </div>
          <div className="space-y-3">
            {/* String path (image) */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button icon={settingIconUrl}>设置</Button>
              </div>
              <code className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
                icon={'{'}settingIconUrl{'}'}
              </code>
            </div>

            {/* React element (JSX) */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button icon={<Md6Mp />}>设置</Button>
              </div>
              <code className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
                icon={"{"}&lt;FiSettings /&gt;{"}"}
              </code>
            </div>

            {/* React component */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button icon={<Md4kPlus />}>设置</Button>
              </div>
              <code className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
                icon={"{"}FiSettings{"}"}
              </code>
            </div>

            {/* Icon only button */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button icon={<Md5kPlus />} />
              </div>
              <code className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
                icon={"{"}&lt;FiSearch /&gt;{"}"}
              </code>
              <span className="text-xs" style={{ color: "var(--doc-text-secondary)" }}>
                ( 图标按钮 )
              </span>
            </div>
          </div>

          {/* Icon with Loading Combination */}
          <div className="mt-6 mb-2 text-sm font-semibold" style={{ color: "var(--doc-text-primary)" }}>
            图标加载状态
          </div>
          <div className="space-y-3">
            {/* Icon with loading */}
            <div className="flex items-center space-x-4">
              <div className="w-48">
                <Button icon={<Md10K />} loading={[true, "dark"]}>
                  上传中...
                </Button>
              </div>
              <code className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
                icon={"{"}&lt;FiUpload /&gt;{"}"}
                <br />
                loading={"{"}[true, "dark"]{"}"}
              </code>
            </div>

            {/* Icon replaced by loading */}
            <div
              className="p-3 border rounded"
              style={{
                backgroundColor: "var(--doc-warn-bg)",
                borderColor: "var(--doc-warn-border)",
              }}
            >
              <div className="text-sm font-medium mb-1" style={{ color: "var(--doc-warn-text)" }}>
                备注:
              </div>
              <p className="text-sm" style={{ color: "var(--doc-warn-text)" }}>
                当 loading=true 时,图标将被替换为加载标志
              </p>
            </div>
          </div>

          {/* Supported Icon Types Table */}
          <div className="mt-6 mb-2 text-sm font-semibold" style={{ color: "var(--doc-text-primary)" }}>
            已支持的图标类型
          </div>
          <Table dataSource={iconDataSource} columns={iconColumns} />

          {/* Real-world Examples */}
          <div className="mt-6 mb-2 text-sm font-semibold" style={{ color: "var(--doc-text-primary)" }}>
            实际示例
          </div>
          <div className="space-y-4">
            {/* Example 1: Social login */}
            <div className="p-3 border rounded" style={{ borderColor: "var(--doc-card-border)" }}>
              <div className="text-sm font-medium mb-2" style={{ color: "var(--doc-text-primary)" }}>
                社交登录按钮:
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-64">
                  <Button icon="/google.png" variant="outline" onClick={login}>
                    登录 Google
                  </Button>
                </div>
                <div className="text-sm" style={{ color: "var(--doc-text-secondary)" }}>
                  <code>
                    icon="/google.png"
                    <br />
                    type="default"
                  </code>
                </div>
              </div>
            </div>
          </div>
          {/* Important Notes */}
          <div
            className="mt-6 p-3 border rounded"
            style={{
              backgroundColor: "var(--doc-info-bg)",
              borderColor: "var(--doc-info-border)",
            }}
          >
            <div className="text-sm font-medium mb-1" style={{ color: "var(--doc-info-title)" }}>
              关键信息:
            </div>
            <ul className="text-sm space-y-1" style={{ color: "var(--doc-info-text)" }}>
              <li>• 图标大小基于按钮大小自适应。</li>
              <li>• 图标元素的自定义样式将被保留并合并。</li>
              <li>• 当 loading=true 时,图标将被替换为加载标志。</li>
              <li>• 对于 React 元素，className 和 style 属性会智能地合并。</li>
              <li>
                • 所有图标按钮都有{" "}
                <code
                  className="px-1 py-0.5 rounded"
                  style={{
                    backgroundColor: "var(--doc-code-header-bg)",
                    color: "var(--doc-info-title)",
                  }}
                >
                  .btn-icon
                </code>{" "}
                CSS类名
              </li>
            </ul>
          </div>

          <div className="text-2xl font-bold mb-5 mt-5" style={{ color: "var(--doc-title-color)" }}>
            属性
          </div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 " style={{ color: "var(--doc-text-color)" }}>通用属性</div>
          </div>

          <Table
            dataSource={dataSource}
            columns={columns}
            containerStyles={theme === "light" ? {} : { color: "var(--doc-text-color)" }}
            // hoverColor="#a6a6a6"
          />
        </div>
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-sm mb-3" style={{ color: "var(--doc-text-secondary)" }}>
            索引
          </div>
          <div className="text-sm mb-3 font-bold" style={{ color: "var(--doc-text-primary)" }}>
            按钮
          </div>

          <ul className="space-y-2 text-sm" style={{ color: "var(--doc-text-primary)" }}>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => onNavClick(id)}
                  className="flex items-center transition"
                  style={{
                    color:
                      activeSection === id
                        ? "var(--doc-text-primary)"
                        : "var(--doc-text-secondary)",
                    fontWeight: activeSection === id ? 600 : 400,
                  }}
                >
                  <span className="mr-2 text-xl leading-none" style={{ color: "var(--doc-text-primary)" }}>
                    -
                  </span>
                  <span className="mr-2 text-sm mt-[4px] leading-none">
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div
            className="text-sm mb-3 font-bold mt-5"
            style={{ color: "var(--doc-text-primary)" }}
          >
            属性
          </div>
          <ul className="space-y-2 text-sm" style={{ color: "var(--doc-text-primary)" }}>
            {sections2.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => onNavClick2(id)}
                  className="flex items-center transition"
                  style={{
                    color:
                      activeSection === id
                        ? "var(--doc-text-primary)"
                        : "var(--doc-text-secondary)",
                    fontWeight: activeSection === id ? 600 : 400,
                  }}
                >
                  <span className="mr-2 text-xl leading-none" style={{ color: "var(--doc-text-primary)" }}>
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

export default ButtonComponent;
