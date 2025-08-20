"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

function Installation() {
  const theme = useCurrentTheme();

  return (
    <>
      <div className="text-4xl font-bold mb-5 dark:text-neutral-300">安装</div>
      <div className="mb-2 dark:text-neutral-300">1. 安装 tango-ui-cw.</div>
      <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
        <SyntaxHighlighter
          language="tsx"
          style={theme === "dark" ? atomOneDark : coy}
        >
          {`npm i tango-ui-cw`}
        </SyntaxHighlighter>
      </div>

      <div className="mb-2 mt-2 dark:text-neutral-300">2. 导入样式文件到根组件。 <span className="text-gray-500">（ .js / .ts / .jsx / .tsx ）</span></div>
      <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
        <SyntaxHighlighter
          language="tsx"
          style={theme === "dark" ? atomOneDark : coy}
        >
          {`// index.js or layout.tsx

import 'tango-ui-cw/index.css';          `}
        </SyntaxHighlighter>
      </div>

      <div className="mb-2 mt-2 dark:text-neutral-300">2. 在项目根目录创建一个 ts 文件来声明类型检查。（临时） </div>
      <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
        <SyntaxHighlighter
          language="tsx"
          style={theme === "dark" ? atomOneDark : coy}
        >
          {`// tango-ui-cw.d.ts

declare module 'tango-ui-cw';          `}
        </SyntaxHighlighter>
      </div>
      <div className="mt-5 dark:text-neutral-300">大功告成!</div>
      <div className="text-2xl font-bold mt-10 mb-5 dark:text-neutral-300">在NPM上查看</div>
      <a href="https://www.npmjs.com/package/tango-ui-cw" className="underline dark:text-neutral-300" target="_blank">
        tango-ui-cw
      </a>

    </>
  );
}

export default Installation;
