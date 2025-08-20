"use client";

import React, { useRef, useState } from "react";
import { Space, useNotice, Table, MaterialButton, Tooltip } from "tango-ui-cw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import copylogoblack from "@/assets/copyblack.png";
import copylogowhite from "@/assets/copywhite.png";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import { usePreview, PDFViewer } from "tango-pdf-cw";

const PrePDF = () => {
  const theme = useCurrentTheme();
  const createRef = useRef();
  const notice = useNotice();
  const [lang, setLang] = useState("React");
  const [role, setRole] = useState("admin");
  const [token, setToken] = useState("123");

  const pdftest = "/白皮松古树年龄测定.pdf";

  const copyCreateRef = () => {
    const content =
      createRef.current.textContent || createRef.current.innerText;
    navigator.clipboard.writeText(content).then(() => {
      notice.success("复制成功!");
    });
  };

  const dataSourceTokens = [
    {
      key: 1,
      name: "finalUrl",
      type: "String",
      value: "String",
      description: "返回的文件地址",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "hasAccess",
      type: "Boolean",
      value: "true | false",
      description: "是否具有相关权限",
      defaultValue: "false",
    },
    {
      key: 3,
      name: "errorType",
      type: "String | null",
      value: `"NO_TOKEN" | "ROLE_FORBIDDEN" | "EXPIRED" | null`,
      description: "错误标识",
      defaultValue: "-",
    },
  ];

  const columnsTokens = [
    { title: "Token 名称", dataIndex: "name", key: "name" },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    { title: "值", dataIndex: "value", key: "value" },
    { title: "描述", dataIndex: "description", key: "description" },
    { title: "默认值", dataIndex: "defaultValue", key: "defaultValue" },
  ];

  const dataSourceProps = [
    {
      key: 1,
      name: "src",
      type: "String",
      value: "String",
      description: "源文件的地址",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "token",
      type: "String",
      value: "String",
      description: "token凭证",
      defaultValue: "-",
    },
    {
      key: 3,
      name: "userRole",
      type: "String",
      value: "String",
      description: "获取到的用户角色",
      defaultValue: "-",
    },
    {
      key: 4,
      name: "allowRoles",
      type: "String[]",
      value: "String[]",
      description: "角色数组，可写一个或多个角色，位于数组中的角色即可访问",
      defaultValue: "-",
    },
    {
      key: 5,
      name: "expiresAt",
      type: "String",
      value: "tString",
      description: "token过期时间",
      defaultValue: "-",
    },
    {
      key: 6,
      name: "onAuthFail",
      type: "(errorType: string) => void",
      value: "-",
      description:
        "鉴权失败时触发的回调函数，参数为错误类型（如 'NO_TOKEN'、'ROLE_FORBIDDEN' 等）。",
      defaultValue: "-",
    },
  ];

  const columnsProps = [
    { title: "Prop 名称", dataIndex: "name", key: "name" },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    { title: "值", dataIndex: "value", key: "value" },
    { title: "描述", dataIndex: "description", key: "description" },
    { title: "默认值", dataIndex: "defaultValue", key: "defaultValue" },
  ];

  const dataSourcePDFViewer = [
    {
      key: 1,
      name: "src",
      type: "String",
      value: "String",
      description: "源文件的地址",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "sx",
      type: "Object",
      value: "Object",
      description:
        "自定义内联样式，注意：当使用 style 属性设置行内样式时，相同 CSS 属性将会覆盖 sx 属性",
      defaultValue: "{}",
    },
    {
      key: 3,
      name: "className",
      type: "String",
      value: "String",
      description: "定义类名",
      defaultValue: "-",
    },
  ];

  function switchNext() {
    setLang("Next");
  }
  function switchReact() {
    setLang("React");
  }

  function admin() {
    setRole("admin");
  }

  function guest() {
    setRole("guest");
  }

  function getToken() {
    setToken("123");
  }

  function delToken() {
    setToken("");
  }

  const { finalUrl, errorType } = usePreview({
    src: pdftest,
    token: token,
    userRole: role,
    allowRoles: ["admin"],
    onAuthFail: (errorType:string) => {
      console.log("预览失败，原因：", errorType);
    },
  });

  if (errorType === "NO_TOKEN") return notice.fail("未提供 token");
  if (errorType === "ROLE_FORBIDDEN") return notice.fail("无权限访问");
  if (errorType === "EXPIRED") return notice.fail("token已过期");

  return (
    <Space className="flex">
      <Space className="sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
        <Space className="flex">
          <Tooltip tooltipText="点击前往NPM >>>" placement="right">
            <Space className="text-4xl font-bold mb-5">
              <a
                href="https://www.npmjs.com/package/tango-pdf-cw"
                target="_blank"
                className=" dark:text-neutral-300"
              >
                usePreview
              </a>
            </Space>
          </Tooltip>
          <Space className="ml-3 text-xs text-black dark:text-white  rounded tracking-[-2px]">
            0.0.1
          </Space>
        </Space>

        <Space className="mb-5 dark:text-neutral-300">
          tango-pdf-cw 是一个用于权限控制的媒体预览库，
          <code className="font-bold">usePreview</code> 钩子函数用于受限资源（如
          PDF、图片、文档等）的安全展示场景。它通过检测用户角色、Token
          是否有效、以及资源过期时间，判断是否允许访问资源，并提供清晰的访问状态（如{" "}
          <code>hasAccess</code>、<code>errorType</code> 等），便于 UI
          做出相应处理。
        </Space>
        <Space className="mb-5 dark:text-neutral-300">
          当访问失败时，<code>errorType</code> 字段会提供失败原因（如缺少
          Token、权限不足或 Token
          已过期），将提供一个回调函数，可用于提示用户或跳转登录页面等。
        </Space>
        <Space className="mb-5 dark:text-neutral-300">
          <code className="font-bold">{`<PDFViewer />`}</code>{" "}
          标签用于快速展示媒体文件，通过sx属性调整展示样式等。
        </Space>

        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">如何使用？</Space>
        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">1.安装</Space>
        <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
          <SyntaxHighlighter
            language="tsx"
            style={theme === "dark" ? atomOneDark : coy}
          >
            {`npm i tango-pdf-cw`}
          </SyntaxHighlighter>
        </div>

        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">2.引入</Space>
        <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
          <SyntaxHighlighter
            language="tsx"
            style={theme === "dark" ? atomOneDark : coy}
          >
            {`import { usePreview, PDFViewer } from "tango-pdf-cw";`}
          </SyntaxHighlighter>
        </div>

        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">3.使用</Space>
        <Space className="mb-2">
          <MaterialButton
            size="small"
            onClick={switchReact}
            sx={{ pt: 4, pb: 4 }}
          >
            React
          </MaterialButton>
          &emsp;
          <MaterialButton
            size="small"
            onClick={switchNext}
            sx={{ pt: 4, pb: 4 }}
          >
            Next
          </MaterialButton>
        </Space>

        {lang === "React" ? (
          <Space
            className="rounded-2xl border border-gray-800 mb-3 bg-[#fdfdfd] overflow-hidden relative"
            style={{
              border: "1px solid #d5d5d5",
            }}
            ref={createRef}
          >
            <Image
              src={theme === "dark" ? copylogoblack : copylogowhite}
              alt="Copy Logo"
              width={24}
              height={24}
              className="absolute top-3 right-3 z-10 cursor-pointer"
              onClick={copyCreateRef}
            />
            <SyntaxHighlighter
              language="jsx"
              style={theme === "dark" ? atomOneDark : coy}
            >
              {`// react
import { useState } from "react";
import { usePreview, PDFViewer } from "tango-pdf-cw";
import { Button, useNotice } from "tango-ui-cw";
import pdftest from "@/assets/yourpdf.pdf";

function Demo() {
  const [role, setRole] = useState("admin");
  const [token, setToken] = useState("123");
  const notice = useNotice();

  const { finalUrl, errorType } = usePreview({
    src: pdftest,
    token: token,
    userRole: role,
    allowRoles: ["admin"],
    onAuthFail: (errorType) => {
      console.log("预览失败，原因：", errorType);
    },
  });

  if (errorType === "NO_TOKEN") return notice.fail('未提供 token');
  if (errorType === "ROLE_FORBIDDEN") return notice.fail('无权限访问');
  if (errorType === "EXPIRED") return notice.fail('token已过期');

  return (
    <>
      <PDFViewer src={finalUrl} sx={{ h: 800 }} />
    </>
  );
}

export default Demo;
`}
            </SyntaxHighlighter>
          </Space>
        ) : (
          <Space
            className="rounded-2xl border border-gray-800 mb-3 bg-[#fdfdfd] overflow-hidden relative"
            style={{
              border: "1px solid #d5d5d5",
            }}
            ref={createRef}
          >
            <Image
              src={theme === "dark" ? copylogoblack : copylogowhite}
              alt="Copy Logo"
              width={24}
              height={24}
              className="absolute top-3 right-3 z-10 cursor-pointer"
              onClick={copyCreateRef}
            />
            <SyntaxHighlighter
              language="jsx"
              style={theme === "dark" ? atomOneDark : coy}
            >
              {`// next
import { useState } from "react";
import { usePreview, PDFViewer } from "tango-pdf-cw";
import { Button, useNotice } from "tango-ui-cw";

function Demo() {
  const [role, setRole] = useState("admin");
  const [token, setToken] = useState("123");
  const pdftest = "/assets/yourpdf.pdf";
  const notice = useNotice();

  const { finalUrl, errorType } = usePreview({
    src: pdftest,
    token: token,
    userRole: role,
    allowRoles: ["admin"],
    onAuthFail: (errorType) => {
      console.log("预览失败，原因：", errorType);
    },
  });

  if (errorType === "NO_TOKEN") return notice.fail('未提供 token');
  if (errorType === "ROLE_FORBIDDEN") return notice.fail('无权限访问');
  if (errorType === "EXPIRED") return notice.fail('token已过期');

  return (
    <>
      <PDFViewer src={finalUrl} sx={{ h: 800 }} />
    </>
  );
}

export default Demo;
`}
            </SyntaxHighlighter>
          </Space>
        )}

        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">PDF示例</Space>

        <Space className="flex items-center justify-center gap-5 p-5 font-sans">
          <span className="font-bold dark:text-neutral-300">当前仅Admin角色可访问</span>
          <MaterialButton onClick={admin}>Admin 角色</MaterialButton>
          <MaterialButton onClick={guest}>Guest 角色</MaterialButton>
          <MaterialButton onClick={getToken}>获取 Token</MaterialButton>
          <MaterialButton onClick={delToken}>清除 Token</MaterialButton>
        </Space>

        <PDFViewer src={finalUrl} sx={{ h: 800 }} />

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">usePreview Tokens</Space>

        <Table dataSource={dataSourceTokens} columns={columnsTokens} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">usePreview Props</Space>

        <Table dataSource={dataSourceProps} columns={columnsProps} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">PDFViewer Props</Space>

        <Table dataSource={dataSourcePDFViewer} columns={columnsProps} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>
      </Space>
    </Space>
  );
};

export default PrePDF;
