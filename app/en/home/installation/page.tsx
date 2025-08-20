"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

function Installation() {
  const theme = useCurrentTheme();

  return (
    <>
      <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Installation</div>
      <div className="mb-2 dark:text-neutral-300">1. Installation tango-ui-cw.</div>
      <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
        <SyntaxHighlighter
          language="tsx"
          style={theme === "dark" ? atomOneDark : coy}
        >
          {`npm i tango-ui-cw`}
        </SyntaxHighlighter>
      </div>

      <div className="mb-2 mt-2 dark:text-neutral-300">
        2. Import the css style file in your index.js or layout.tsx.{" "}
        <span className="text-gray-500">（ .js / .ts / .jsx / .tsx ）</span>
      </div>
      <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
        <SyntaxHighlighter
          language="tsx"
          style={theme === "dark" ? atomOneDark : coy}
        >
          {`// index.js or layout.tsx

import 'tango-ui-cw/index.css';          `}
        </SyntaxHighlighter>
      </div>
      <div className="mb-2 mt-2 dark:text-neutral-300">
        3. Create a ts file in the project root directory to declare type
        check.(temporary)
      </div>
      <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
        <SyntaxHighlighter
          language="tsx"
          style={theme === "dark" ? atomOneDark : coy}
        >
          {`// tango-ui-cw.d.ts

declare module 'tango-ui-cw';          `}
        </SyntaxHighlighter>
      </div>

      <div className="mt-5 dark:text-neutral-300">Bingo!</div>
      <div className="text-2xl font-bold mt-10 mb-5 dark:text-neutral-300">View on NPM</div>
      <a
        href="https://www.npmjs.com/package/tango-ui-cw"
        className="underline dark:text-neutral-300"
        target="_blank"
      >
        tango-ui-cw
      </a>
    </>
  );
}

export default Installation;
