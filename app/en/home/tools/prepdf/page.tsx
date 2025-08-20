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
      notice.success("copy success!");
    });
  };

  const dataSourceTokens = [
    {
      key: 1,
      name: "finalUrl",
      type: "String",
      value: "String",
      description: "the returned file address",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "hasAccess",
      type: "Boolean",
      value: "true | false",
      description: "whether you have the relevant permissions",
      defaultValue: "false",
    },
    {
      key: 3,
      name: "errorType",
      type: "String | null",
      value: `"NO_TOKEN" | "ROLE_FORBIDDEN" | "EXPIRED" | null`,
      description: "error label",
      defaultValue: "-",
    },
  ];

  const columnsTokens = [
    { title: "Token", dataIndex: "name", key: "name" },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    { title: "Accepted Values", dataIndex: "value", key: "value" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Default", dataIndex: "defaultValue", key: "defaultValue" },
  ];

  const dataSourceProps = [
    {
      key: 1,
      name: "src",
      type: "String",
      value: "String",
      description: "the address of the source file",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "token",
      type: "String",
      value: "String",
      description: "token",
      defaultValue: "-",
    },
    {
      key: 3,
      name: "userRole",
      type: "String",
      value: "String",
      description: "the user role obtained",
      defaultValue: "-",
    },
    {
      key: 4,
      name: "allowRoles",
      type: "String[]",
      value: "String[]",
      description:
        "role arrays, which can write one or more roles, can be accessed by the characters located in the array",
      defaultValue: "-",
    },
    {
      key: 5,
      name: "expiresAt",
      type: "String",
      value: "tString",
      description: "token expiration time",
      defaultValue: "-",
    },
    {
      key: 6,
      name: "onAuthFail",
      type: "(errorType: string) => void",
      value: "-",
      description:
        "a callback function that is triggered when authentication fails, with parameters of error type (such as 'NO_TOKEN', 'ROLE_FORBIDDEN', etc.).",
      defaultValue: "-",
    },
  ];

  const columnsProps = [
    { title: "Prop", dataIndex: "name", key: "name" },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    { title: "Accepted Values", dataIndex: "value", key: "value" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Default", dataIndex: "defaultValue", key: "defaultValue" },
  ];

  const dataSourcePDFViewer = [
    {
      key: 1,
      name: "src",
      type: "String",
      value: "String",
      description: "the address of the source file",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "sx",
      type: "Object",
      value: "Object",
      description:
        'Inline styles for customizing appearance. Note: Inline styles defined via the "style" prop take precedence over "sx".',
      defaultValue: "{}",
    },
    {
      key: 3,
      name: "className",
      type: "String",
      value: "String",
      description: "Custom CSS class name(s).",
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
    onAuthFail: (errorType: string) => {
      console.log("error,reason:", errorType);
    },
  });

  if (errorType === "NO_TOKEN") return notice.fail("no token");
  if (errorType === "ROLE_FORBIDDEN") return notice.fail("no access");
  if (errorType === "EXPIRED") return notice.fail("the token has expired");

  return (
    <Space className="flex">
      <Space className="sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
        <Space className="flex">
          <Tooltip tooltipText="Click to NPM >>>" placement="right">
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
          <Space className="ml-3 text-xs text-black dark:text-white  rounded ">
            0.0.1
          </Space>
        </Space>

        <Space className="mb-5 dark:text-neutral-300">
          tango-pdf-cw is a media preview library for permission control. The{" "}
          <code className="font-bold">usePreview</code> hook function is used
          for the safe display of restricted resources (such as PDF, images,
          documents, etc.). It determines whether access to resources is allowed
          by detecting the user role, whether the token is valid, and the
          resource expiration time, and provides clear access status (such as{" "}
          <code>hasAccess</code>, <code>errorType</code>, etc.) to facilitate
          the UI to make corresponding processing.
        </Space>
        <Space className="mb-5 dark:text-neutral-300">
          When access fails, the <code>errorType</code> field will provide the
          reason for the failure (such as missing Token, insufficient
          permissions, or Token expired), and a callback function will be
          provided, which can be used to prompt the user or jump to the login
          page, etc.
        </Space>
        <Space className="mb-5 dark:text-neutral-300">
          <code className="font-bold">{`<PDFViewer />`}</code> The tag is used
          to quickly display media files, and the display style can be adjusted
          through the sx attribute, etc.
        </Space>

        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">
          How to use?
        </Space>
        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
          1.Installation
        </Space>
        <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
          <SyntaxHighlighter
            language="tsx"
            style={theme === "dark" ? atomOneDark : coy}
          >
            {`npm i tango-pdf-cw`}
          </SyntaxHighlighter>
        </div>

        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
          2.Import
        </Space>
        <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
          <SyntaxHighlighter
            language="tsx"
            style={theme === "dark" ? atomOneDark : coy}
          >
            {`import { usePreview, PDFViewer } from "tango-pdf-cw";`}
          </SyntaxHighlighter>
        </div>

        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
          3.Use
        </Space>
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
      console.log("error,reason:", errorType);
    },
  });

  if (errorType === "NO_TOKEN") return notice.fail('no token');
  if (errorType === "ROLE_FORBIDDEN") return notice.fail('no access');
  if (errorType === "EXPIRED") return notice.fail('the token has expired');

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
      console.log("error,reason:", errorType);
    },
  });

  if (errorType === "NO_TOKEN") return notice.fail('no token');
  if (errorType === "ROLE_FORBIDDEN") return notice.fail('no access');
  if (errorType === "EXPIRED") return notice.fail('the token has expired');

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

        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">
          PDF Demo
        </Space>

        <Space className="flex items-center justify-center gap-5 p-5 font-sans">
          <span className="font-bold dark:text-neutral-300">
            Currently role: Admin
          </span>
          <MaterialButton onClick={admin}>Admin role</MaterialButton>
          <MaterialButton onClick={guest}>Guest role</MaterialButton>
          <MaterialButton onClick={getToken}>Get Token</MaterialButton>
          <MaterialButton onClick={delToken}>Clear Token</MaterialButton>
        </Space>

        <PDFViewer src={finalUrl} sx={{ h: 800 }} />

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">
          usePreview Tokens
        </Space>

        <Table
          dataSource={dataSourceTokens}
          columns={columnsTokens}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          hoverColor="#a6a6a6"
        />

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">
          usePreview Props
        </Space>

        <Table
          dataSource={dataSourceProps}
          columns={columnsProps}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          hoverColor="#a6a6a6"
        />

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">
          PDFViewer Props
        </Space>

        <Table
          dataSource={dataSourcePDFViewer}
          columns={columnsProps}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          hoverColor="#a6a6a6"
        />
      </Space>
    </Space>
  );
};

export default PrePDF;
