"use client";

import React, { useRef } from "react";
import { Space, useNotice, Tooltip } from "tango-ui-cw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import Image from "next/image";
import copylogoblack from "@/assets/copyblack.png";
import copylogowhite from "@/assets/copywhite.png";

function TangoStore() {
  const theme = useCurrentTheme();
  const createRef = useRef();
  const aRef = useRef();
  const bRef = useRef();

  const notice = useNotice();

  const copyCreateRef = () => {
    const content =
      createRef.current.textContent || createRef.current.innerText;
    navigator.clipboard.writeText(content).then(() => {
      notice.success("复制成功!");
    });
  };

  const copyARef = () => {
    const content = aRef.current.textContent || aRef.current.innerText;
    navigator.clipboard.writeText(content).then(() => {
      notice.success("复制成功!");
    });
  };

  const copyBRef = () => {
    const content = bRef.current.textContent || bRef.current.innerText;
    navigator.clipboard.writeText(content).then(() => {
      notice.success("复制成功!");
    });
  };

  return (
    <>
      <Space className="flex">
        <Space className="sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <Tooltip tooltipText="点击前往NPM >>>" placement="right">
            <Space className="text-4xl font-bold mb-5">
              <a
                href="https://www.npmjs.com/package/tango-store-cw"
                target="_blank"
                className=" text-black dark:text-neutral-300"
              >
                Tango Store 状态管理库
              </a>
            </Space>
          </Tooltip>
          <Space className="mb-10 dark:text-neutral-300">
            这是一个基于React开发的极简状态管理库，只用了100行代码实现了状态的同步更新与跨组件间传值，包大小仅
            <span className="text-black font-bold text-xl dark:text-neutral-300">
              7kb
            </span>
            ，您可以放心的在项目中使用它且没有任何性能的损耗！
          </Space>
          <Space className="font-bold mb-3 dark:text-neutral-300">好处</Space>
          <ul
            style={{ marginBottom: "20px", lineHeight: "1.8", marginLeft: 20 }}
            className=" dark:text-neutral-300"
          >
            <li>状态共享便捷，适合中小型项目。</li>
            <li>极少的样板代码，提升开发体验。</li>
            <li>数据持久化避免页面刷新状态丢失。</li>
            <li>灵活性高，满足不同业务需求。</li>
            <li>
              安全默认值，防止 <code>key</code> 不存在时抛错。
            </li>
          </ul>
          <Space className="font-bold mb-3 dark:text-neutral-300">新特性</Space>
          <ul
            style={{ marginBottom: "20px", lineHeight: "1.8", marginLeft: 20 }}
            className=" dark:text-neutral-300"
          >
            <li>
              简单易用：<code>createTangoStore</code> 和 <code>useTango</code>{" "}
              提供了简洁的 <code>API</code>，使用者可以很容易地创建{" "}
              <code>Store</code> 和订阅状态。
            </li>
            <li>默认值保护：确保状态的默认值不会被未定义的值覆盖。</li>
            <li>
              状态变化检查：只有状态真正发生变化时，才派发事件，减少无效更新。
            </li>
            <li>
              错误处理：确保在 <code>useTango</code> 中访问不存在的{" "}
              <code>key</code> 时不会抛出错误，而是返回默认值。
            </li>
          </ul>
          <Space className="font-bold mb-3 dark:text-neutral-300">
            关键功能
          </Space>
          <ul
            style={{ marginBottom: "20px", lineHeight: "1.8", marginLeft: 20 }}
            className=" dark:text-neutral-300"
          >
            <li>
              订阅状态：通过 <code>store.subscribe</code> 订阅状态变化。
            </li>
            <li>
              响应状态变化：当状态变化时，更新组件的局部状态，触发组件重新渲染。
            </li>
            <li>取消订阅：在组件卸载时，取消订阅，避免内存泄漏。</li>
          </ul>
          <Space className="font-bold mb-3 dark:text-neutral-300">
            实现细节
          </Space>
          <ul
            style={{ marginBottom: "20px", lineHeight: "1.8", marginLeft: 20 }}
            className=" dark:text-neutral-300"
          >
            <li>
              <code>useState</code>：用于在组件中维护一个局部状态，初始值为{" "}
              <code>store.getState()[key]</code>。
            </li>
            <li>
              <code>useEffect</code>
              ：在组件挂载时，订阅状态变化；在组件卸载时，取消订阅。当{" "}
              <code>store</code> 派发 <code>change</code> 事件时，
              <code>useTango</code> 会从事件中获取最新的状态，并更新局部状态。
            </li>
            <li>
              性能优化：状态更新时仅触发订阅函数，避免不必要的重新渲染，能够实现高效的状态更新。
            </li>
            <li>
              <code>React</code> 生态：<code>useTango Hook</code>，将{" "}
              <code>TangoStore</code> 集成到 <code>React</code>{" "}
              生态中，支持状态变化自动更新 UI，使开发更加简洁。
            </li>
          </ul>
          <Space className="font-bold mb-3 dark:text-neutral-300">
            工作流程
          </Space>
          <ul
            style={{ marginBottom: "20px", lineHeight: "1.8", marginLeft: 20 }}
            className=" dark:text-neutral-300"
          >
            <li>
              创建 <code>Store</code>：用户通过 <code>createTangoStore</code>{" "}
              创建一个 <code>TangoStore</code> 实例，并传入初始状态。
            </li>
            <li>
              更新状态：用户通过 <code>store.setState</code> 更新状态，
              <code>TangoStore</code> 会派发 <code>change</code>{" "}
              事件。注意：无需担心不相关的订阅者也会收到状态，因为我们设定了当前状态只影响引入了{" "}
              <code>useTango Hook</code> 的组件。
            </li>
            <li>
              订阅状态：在 <code>React</code> 组件中，用户通过{" "}
              <code>useTango Hook</code> 订阅 <code>TangoStore</code>{" "}
              的状态变化。 当状态变化时，<code>useTango</code>{" "}
              会更新组件的局部状态，触发组件重新渲染。
            </li>
            <li>
              取消订阅：当组件卸载时，<code>useTango</code>{" "}
              会自动取消订阅，避免内存泄漏。
            </li>
          </ul>
          <Space className="font-bold mb-3 dark:text-neutral-300">
            使用方法
          </Space>
          <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
            1.安装
          </Space>
          <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
            <SyntaxHighlighter
              language="tsx"
              style={theme === "dark" ? atomOneDark : coy}
            >
              {`npm i tango-store-cw`}
            </SyntaxHighlighter>
          </div>
          <Space className="mt-3 mb-3 font-bold">
            <span className=" dark:text-neutral-300">
              2.创建 <code>store.js</code>
            </span>
          </Space>
          <span className="dark:text-neutral-300">
            在目录中创建<code> store.js</code>
          </span>
          <Space className="mt-3 mb-3 dark:text-neutral-300">
            说明：<code>createTangoStore()</code> 是一个工厂函数，用于创建{" "}
            <code>TangoStore</code> 实例。用户可以传入初始状态{" "}
            <code>initialState</code>，函数会返回一个新的{" "}
            <code>TangoStore</code> 实例。
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
              {`import { createTangoStore } from "tango-store-cw";

// 定义初始值
export const initialValue = createTangoStore({ name: "小明", age: 18 });

// 定义更新函数
export const setName = (v) => {
  initialValue.setState({ name: v });
};

export const setAge = (v) => {
  initialValue.setState({ age: v });
};`}
            </SyntaxHighlighter>
          </Space>
          <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
            3.使用
          </Space>
          <span className=" dark:text-neutral-300">页面 A 展示数据</span>
          <Space className="mt-3 mb-3 dark:text-neutral-300">
            说明：<code>useTango Hook</code>，用于在 <code>React</code>{" "}
            组件中订阅 <code>TangoStore</code> 的状态变化，并返回指定{" "}
            <code>key</code> 对应的状态值。
          </Space>
          <Space
            className="rounded-2xl border border-gray-800 mb-3 bg-[#fdfdfd] overflow-hidden relative"
            style={{
              border: "1px solid #d5d5d5",
            }}
            ref={aRef}
          >
            <Image
              src={theme === "dark" ? copylogoblack : copylogowhite}
              alt="Copy Logo"
              width={24}
              height={24}
              className="absolute top-3 right-3 z-10 cursor-pointer"
              onClick={copyARef}
            />
            <SyntaxHighlighter
              language="jsx"
              style={theme === "dark" ? atomOneDark : coy}
            >
              {`import React from "react";
import { initialValue } from "@/TangoStore/TangoStore";
import TSpace from "@/component/TSpace/index";
import { useTango } from "tango-store-cw";

const CaseA = () => {
  const name = useTango(initialValue, "name"); 
  const age = useTango(initialValue, "age"); 

  return (
    <div>
      <h1>CaseA页面</h1>
      <TSpace>Tango中的名字：{name}</TSpace>
      <TSpace>Tango中的年龄：{age}</TSpace>
    </div>
  );
};

export default CaseA;
`}
            </SyntaxHighlighter>
          </Space>
          <span className=" dark:text-neutral-300">页面 B 修改数据</span>
          <Space className="mt-3 mb-3 dark:text-neutral-300">
            说明：导入更新函数 <code>setName、setAge</code>，修改初始值
          </Space>
          <Space
            className="rounded-2xl border border-gray-800 mb-3 bg-[#fdfdfd] overflow-hidden relative"
            style={{
              border: "1px solid #d5d5d5",
            }}
            ref={bRef}
          >
            <Image
              src={theme === "dark" ? copylogoblack : copylogowhite}
              alt="Copy Logo"
              width={24}
              height={24}
              className="absolute top-3 right-3 z-10 cursor-pointer"
              onClick={copyBRef}
            />
            <SyntaxHighlighter
              language="jsx"
              style={theme === "dark" ? atomOneDark : coy}
            >
              {`import React from "react";
import { setName, setAge } from "@/TangoStore/TangoStore";
import TButton from "@/component/TButton/index";

const CaseB = () => {
  const ChangeValue = () => {
    setName("小红");
    setAge(20);   
  };
  
  return (
    <div>
      <h1>CaseB页面</h1>
      <TButton onClick={ChangeValue}>修改CaseB的数据</TButton>
    </div>
  );
};

export default CaseB;
`}
            </SyntaxHighlighter>
          </Space>
        </Space>
      </Space>
    </>
  );
}

export default TangoStore;
