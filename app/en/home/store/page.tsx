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
      notice.success("copy success!");
    });
  };

  const copyARef = () => {
    const content = aRef.current.textContent || aRef.current.innerText;
    navigator.clipboard.writeText(content).then(() => {
      notice.success("copy success!");
    });
  };

  const copyBRef = () => {
    const content = bRef.current.textContent || bRef.current.innerText;
    navigator.clipboard.writeText(content).then(() => {
      notice.success("copy success!");
    });
  };

  return (
    <>
      <Space className="flex">
        <Space className="sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <Tooltip tooltipText="Click to NPM >>>" placement="right">
            <Space className="text-4xl font-bold mb-5">
              <a
                href="https://www.npmjs.com/package/tango-store-cw"
                target="_blank"
                className=" text-black dark:text-neutral-300"
              >
                Tango Store
              </a>
            </Space>
          </Tooltip>
          <Space className="mb-10 dark:text-neutral-300">
            This is a minimalist state management library developed based on
            React. It uses only 100 lines of code to implement synchronous state
            updates and value transfer across components. The package size is
            only{" "}
            <span className="text-black font-bold text-xl  dark:text-neutral-300">
              7kb
            </span>
            . You can use it in your project with confidence without any
            performance loss!
          </Space>
          <Space className="font-bold mb-3 dark:text-neutral-300">
            Benefit
          </Space>
          <ul
            style={{ marginBottom: "20px", lineHeight: "1.8", marginLeft: 20 }}
            className=" dark:text-neutral-300"
          >
            <li>
              The status sharing is convenient and suitable for small and
              medium-sized projects.
            </li>
            <li>Minimal boilerplate code, improving development experience.</li>
            <li>
              Data persistence avoids loss of state when refreshing the page.
            </li>
            <li>High flexibility to meet different business needs.</li>
            <li>
              A safe default value to prevent an error when the <code>key</code>{" "}
              does not exist.
            </li>
          </ul>
          <Space className="font-bold mb-3 dark:text-neutral-300">
            New features
          </Space>
          <ul
            style={{ marginBottom: "20px", lineHeight: "1.8", marginLeft: 20 }}
            className=" dark:text-neutral-300"
          >
            <li>
              Easy to use：<code>createTangoStore</code> and{" "}
              <code>useTango</code> Provides a concise <code>API</code>
              ,Consumers can easily create <code>Store</code> and subscribe to
              states.
            </li>
            <li>
              Default value protection: Ensures that the default value of a
              state is not overwritten by an undefined value.
            </li>
            <li>
              State change check: Events are dispatched only when the state
              actually changes, reducing invalid updates.
            </li>
            <li>
              Error handling: Ensure that when accessing a non-existent{" "}
              <code>key</code> in <code>useTango</code> no error is thrown, but
              the default value is returned.
            </li>
          </ul>
          <Space className="font-bold mb-3 dark:text-neutral-300">
            Key functions
          </Space>
          <ul
            style={{ marginBottom: "20px", lineHeight: "1.8", marginLeft: 20 }}
            className=" dark:text-neutral-300"
          >
            <li>
              Subscription status: Subscription status changes via{" "}
              <code>store.subscribe</code>.
            </li>
            <li>
              Respond to state changes: When the state changes, update the local
              state of the component, triggering the component to re-render.
            </li>
            <li>
              Unsubscribe: When the component is uninstalled, unsubscribe to
              avoid memory leaks.
            </li>
          </ul>
          <Space className="font-bold mb-3 dark:text-neutral-300">
            Implementation details
          </Space>
          <ul
            style={{ marginBottom: "20px", lineHeight: "1.8", marginLeft: 20 }}
            className=" dark:text-neutral-300"
          >
            <li>
              <code>useState</code>： Used to maintain a local state in the
              component, the initial value is <code>store.getState()[key]</code>
              。
            </li>
            <li>
              <code>useEffect</code>
              ：Subscribe to state changes when the component is mounted;
              unsubscribe when the component is unmounted. When{" "}
              <code>store</code> dispatches a <code>change</code> event,
              <code>useTango</code> will get the latest state from the event and
              update the local state.
            </li>
            <li>
              Performance optimization: Only the subscription function is
              triggered when the state is updated, avoiding unnecessary
              re-rendering and achieving efficient state updates.
            </li>
            <li>
              <code>React</code> ecosystem:<code>useTango Hook</code>,integrates{" "}
              <code>TangoStore</code> into the <code>React</code> ecosystem,
              supports automatic UI updates when state changes occur, and makes
              development simpler.
            </li>
          </ul>
          <Space className="font-bold mb-3 dark:text-neutral-300">
            Workflow
          </Space>
          <ul
            style={{ marginBottom: "20px", lineHeight: "1.8", marginLeft: 20 }}
            className=" dark:text-neutral-300"
          >
            <li>
              Create a <code>Store</code>: Users create a{" "}
              <code>TangoStore</code> instance through{" "}
              <code>createTangoStore</code> and pass in the initial state.
            </li>
            <li>
              Update State: When a user updates the state via{" "}
              <code>store.setState</code>, <code>TangoStore</code> distributes{" "}
              <code>a change</code> event. Note: There is no need to worry about
              unrelated subscribers receiving the status as well, as we set the
              current state to only affect components that have introduced{" "}
              <code>useTango Hook</code>.
            </li>
            <li>
              Subscription status: In <code>a React</code> component, the user
              clicks the
              <code>useTango Hook</code> Subscribe to <code>TangoStore</code>{" "}
              state change. When the state changes, <code>useTango</code> The
              local state of the component is updated, triggering the component
              to re-render.
            </li>
            <li>
              Unsubscribe: <code>useTango</code> when the component is
              uninstalled Automatically cancel the subscription to avoid memory
              leaks.
            </li>
          </ul>
          <Space className="font-bold mb-3 dark:text-neutral-300">
            Follow these steps below
          </Space>
          <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
            1.Installation
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
              2.Create <code>store.js</code>
            </span>
          </Space>
          <span className=" dark:text-neutral-300">
            Create<code> store.js</code> in the catalog
          </span>
          <Space className="mt-3 mb-3 dark:text-neutral-300">
            Description: <code>createTangoStore()</code> is a factory function
            that creates <code>TangoStore</code> instance. The user can pass in
            the initial state <code>initialState</code>, the function returns a
            new <code>TangoStore</code> instance.
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

// Define the initialValue
export const initialValue = createTangoStore({ name: "Lucy", age: 18 });

// Define the update function
export const setName = (v) => {
  initialValue.setState({ name: v });
};

export const setAge = (v) => {
  initialValue.setState({ age: v });
};`}
            </SyntaxHighlighter>
          </Space>
          <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
            3.Use
          </Space>
          <span className=" dark:text-neutral-300">
            Show datas on the page A
          </span>
          <Space className="mt-3 mb-3 dark:text-neutral-300">
            Description: <code>useTango Hook</code> for use in{" "}
            <code>React</code> Change in the status of the subscribed{" "}
            <code>TangoStore</code> in the component and return the specified{" "}
            <code>key</code> corresponding to the state value.
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
      <h1>Page A</h1>
      <TSpace>name in Tango:{name}</TSpace>
      <TSpace>age in Tango:{age}</TSpace>
    </div>
  );
};

export default CaseA;
`}
            </SyntaxHighlighter>
          </Space>
          <span className=" dark:text-neutral-300">
            Change datas on the page B
          </span>
          <Space className="mt-3 mb-3 dark:text-neutral-300">
            Note: Import the update functions <code>setName and setAge</code> to
            modify the initial values
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
    setName("Brown");
    setAge(20);   
  };
  
  return (
    <div>
      <h1>Page B</h1>
      <TButton onClick={ChangeValue}>change the datas of Page B</TButton>
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
