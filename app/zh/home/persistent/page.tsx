'use client'

import React, { useRef } from "react";
import { Space, useNotice,Table } from "tango-ui-cw";
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
      notice.success("复制成功!");
    });
  };


  const dataSource = [
    {
      key: 1,
      name: "initialValue",
      type: "Object",
      value: "Object",
      description: "第一个参数，初始状态对象，用户定义 TangoStore 的初始值",
      defaultValue: "{}",
    },
    {
      key: 2,
      name: "options",
      type: "Object",
      value: "Object",
      description: "第二个参数，持久化，一个包含可选设置的对象",
      defaultValue: "-",
    },
    {
      key: 3,
      name: "storageKey",
      type: "String",
      value: "tango-store-state",
      description: "第二个参数中第一个属性，用于存储持久化数据的键名",
      defaultValue: "-",
    },
    {
      key: 4,
      name: "Eternity",
      type: "Boolean",
      value: "true|false",
      description: "第二个参数中第二个属性，是否启用持久化功能",
      defaultValue: "false",
    },
    {
      key: 5,
      name: "Storage",
      type: "String",
      value: "local|session",
      description: "第二个参数中第三个属性，选择存储方式",
      defaultValue: "local",
    },
    {
      key: 6,
      name: "persistentFields",
      type: "Array",
      value: "[]/undefined",
      description: "第三个参数，字段级持久化，一个字段名数组，指定哪些字段需要持久化。如果不指定，默认持久化所有字段。",
      defaultValue: "-",
    },
   
  ];

  const columns = [
    { title: "参数", dataIndex: "name", key: "name" },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    { title: "值", dataIndex: "value", key: "value" },
    { title: "说明", dataIndex: "description", key: "description" },
    { title: "默认值", dataIndex: "defaultValue", key: "defaultValue" },
    
  ];

  return (
    <Space className="flex">
        <Space className="sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <Space className="text-4xl font-bold mb-5 dark:text-neutral-300">状态持久化</Space>
          <Space className="mb-10 dark:text-neutral-300">
          Tango库原生支持开启持久化，并可指定字段持久化，无需引入或搭配其他库即可实现。
          </Space>
          <Space className="text-xl font-bold mb-3 dark:text-neutral-300">关键特性</Space>
          <ul
            style={{ marginBottom: "20px", lineHeight: "1.8", marginLeft: 20 }} className=" dark:text-neutral-300"
          >
           <li>
           <span className="underline">存储异常处理</span>：我们对 <code>localStorage</code> 或{" "}
          <code>sessionStorage</code> 的异常处理（如存储写入失败）做了{" "}
          <code>try/catch</code> 捕获，避免因浏览器存储限制或 <code>JSON</code>{" "}
          解析错误导致的崩溃，增强了容错能力。
        </li>
        <li>
        <span className="underline">字段级持久化支持</span>：<code>persistentFields</code>{" "}
          的灵活机制非常实用，既可以全局持久化所有字段，也可以针对敏感数据或不必要的数据避免持久化。
        </li>
        <li>
        <span className="underline">多种存储支持</span>：提供了 <code>localStorage</code> 和{" "}
          <code>sessionStorage</code> 的灵活选项，能够满足不同的状态持久化需求。
        </li>
          </ul>
        
          <Space className="text-xl font-bold mb-3 dark:text-neutral-300">示例代码</Space>
          <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">1.代码格式</Space>
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
          <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
            2.示例
          </Space>
         
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
          <strong>说明：</strong> 初始值为{" "}
          <code>user: 'John Doe', theme: 'dark'</code>， 开启了持久化{" "}
          <code>Eternity: true</code>， 持久化键名{" "}
          <code>storageKey: 'my-store'</code>，<code>Storage: 'session'</code>
          ，指定使用 <code>sessionStorage</code> 持久化，指定 <code>theme</code>{" "}
          字段可以持久化。
        </p>
          </Space>
       <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">createTangoStore 参数</Space>
          
         <Table dataSource={dataSource} columns={columns} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>
        </Space>
      </Space>
  )
}

export default Page