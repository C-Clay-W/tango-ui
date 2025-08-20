"use client";

import React, { useRef } from "react";
import { Space, useNotice, Table } from "tango-ui-cw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import copylogoblack from "@/assets/copyblack.png";
import copylogowhite from "@/assets/copywhite.png";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const Page = () => {
  const theme = useCurrentTheme();
  const createRef = useRef();

  const notice = useNotice();

  const copyCreateRef = () => {
    const content =
      createRef.current.textContent || createRef.current.innerText;
    navigator.clipboard.writeText(content).then(() => {
      notice.success("copy success!");
    });
  };

  const dataSource = [
    {
      key: 1,
      name: "initialValue",
      type: "Object",
      value: "Object",
      description:
        "The first parameter, the Initial State object, is the initial value of the user-defined TangoStore",
      defaultValue: "{}",
    },
    {
      key: 2,
      name: "options",
      type: "Object",
      value: "Object",
      description:
        "The second parameter, persistence, is an object that contains optional settings",
      defaultValue: "-",
    },
    {
      key: 3,
      name: "storageKey",
      type: "String",
      value: "tango-store-state",
      description:
        "The first of the second parameter is used to store the key name of the persisted data",
      defaultValue: "-",
    },
    {
      key: 4,
      name: "Eternity",
      type: "Boolean",
      value: "true|false",
      description:
        "The second property in the second parameter, whether persistence is enabled",
      defaultValue: "false",
    },
    {
      key: 5,
      name: "Storage",
      type: "String",
      value: "local|session",
      description:
        "The third property in the second parameter, select the storage method",
      defaultValue: "local",
    },
    {
      key: 6,
      name: "persistentFields",
      type: "Array",
      value: "[]/undefined",
      description:
        "The third parameter, field-level persistence, is an array of field names that specifies which fields need to be persisted. If not specified, all fields are persisted by default",
      defaultValue: "-",
    },
  ];

  const columns = [
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

  return (
    <Space className="flex">
      <Space className="sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
        <Space className="text-4xl font-bold mb-5 dark:text-neutral-300">Eternity</Space>
        <Space className="mb-10 dark:text-neutral-300">
          The Tango Store library natively supports enabling persistence and can
          specify field persistence, which can be achieved without introducing
          or using other libraries.
        </Space>
        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">KeyPoints</Space>
        <ul style={{ marginBottom: "20px", lineHeight: "1.8", marginLeft: 20 }} className=" dark:text-neutral-300">
          <li>
            <span className="underline">Storage exception handling</span>: We don't have a specific <code></code>
            <code>sessionStorage's</code> exception handling (e.g. storage write
            failure) does <code>try/catch</code> to avoid browser storage
            limitations or <code>JSON</code> Crashes caused by parsing errors
            enhance fault tolerance.
          </li>
          <li>
          <span className="underline">Field-level persistence support</span>: <code>persistentFields</code> is a
            practical mechanism for persisting all fields globally or avoiding
            persistence for sensitive or unnecessary data.
          </li>
          <li>
          <span className="underline">Multiple storage support</span>: <code>localStorage</code> and are
            available.
            <code>sessionStorage</code> flexible options to meet different state
            persistence needs.
          </li>
        </ul>

        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">Case</Space>
        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">1.Code format</Space>
        <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
          <SyntaxHighlighter
            language="tsx"
            style={theme === "dark" ? atomOneDark : coy}
          >
            {`const myStore = createTangoStore(
  initialValue: {},
  options: { 
    storageKey: '',
    Eternity: Boolean,
    Storage: ''
  },  
  persistentFields: [] 
);`}
          </SyntaxHighlighter>
        </div>
        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">2.Demo</Space>

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
            {`const myStore = createTangoStore(
  { user: 'John Doe', theme: 'dark' },
  { storageKey: 'my-store', Eternity: true, Storage: 'session'},  
  ['theme'] 
);`}
          </SyntaxHighlighter>
        </Space>
        <Space className="mt-3 mb-3">
          <p className=" dark:text-neutral-300">
            <strong>Note:</strong> The initial value is{" "}
            <code>user: 'John Doe', theme: 'dark'</code>, with persistence
            turned on <code>Eternity: true</code>, persist keyname{" "}
            <code>storageKey: 'my-store'</code>，<code>Storage: 'session'</code>
            , specifies persistence with <code>sessionStorage</code>, specifies{" "}
            <code>theme</code> Fields can be persisted.
          </p>
        </Space>
        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">
          createTangoStore parameters
        </Space>

        <Table dataSource={dataSource} columns={columns} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>
      </Space>
    </Space>
  );
};

export default Page;
