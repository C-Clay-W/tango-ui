"use client";

import React, { useState, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import copylogoblack from "@/assets/copyblack.png";
import copylogowhite from "@/assets/copywhite.png";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import { useNotice } from "tango-ui-cw";

export default function DemoWide({
  title,
  code,
  jsx,
  imports,
}: {
  title: string;
  code: string;
  jsx: React.ReactNode; // 接收实际 JSX 内容
  imports: string; // 接收导入的组件名称
}) {
  const [showPreview, setShowPreview] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const theme = useCurrentTheme();
  const previewRef = useRef();
  const codeRef = useRef();
  const demoRef = useRef();
  const notice = useNotice();

  const switchToPreview = () => {
    setShowPreview(true);
    setShowCode(false);
    previewRef.current.style.color = theme === "dark" ? "white" : "black";
    codeRef.current.style.color = "gray";
  };

  const switchToCode = () => {
    setShowPreview(false);
    setShowCode(true);
    codeRef.current.style.color = theme === "dark" ? "white" : "black";
    previewRef.current.style.color = "gray";
  };

  const copy = () => {
    const content = demoRef.current.textContent || demoRef.current.innerText;
    navigator.clipboard.writeText(content).then(() => {
      notice.success("copy success!");
    });
  };

  return (
    <>
      <div className="text-2xl font-bold mb-5 ml-7 dark:text-neutral-300">{title}</div>
      <div className="mb-5">
        <span
          onClick={switchToPreview}
          className="ml-5 p-2 rounded-sm hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-neutral-300"
          ref={previewRef}
        >
          Preview
        </span>
        <span
          onClick={switchToCode}
          className="p-2 rounded-sm hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-neutral-300"
          ref={codeRef}
        >
          Code
        </span>
      </div>

      <div className="w-full h-[30vh] sm:w-[30vw] sm:h-[40vh] md:w-[30vw] md:h-[40vh] lg:w-[30vw] lg:h-[50vh] xl:w-[30vw] xl:h-[50vh] 2xl:w-[35vw] mb-10 border rounded-xl border-gray-800 flex justify-center items-center relative">
        {showCode && (
          <Image
            src={theme === "dark" ? copylogoblack : copylogowhite}
            alt="Copy Logo"
            width={24}
            height={24}
            className="absolute top-3 right-3 z-10 cursor-pointer"
            onClick={copy}
          />
        )}
        {showPreview && jsx} {/* 渲染实际传入的 JSX 内容 */}
        {showCode && (
          <div
            ref={demoRef}
            className="w-full h-full rounded-xl pt-2 dark:border-none dark:p-4 dark:bg-[#292c33] overflow-auto hide-scrollbar" // 修改这里为 overflow-auto
          >
            <SyntaxHighlighter
              language="tsx"
              style={theme === "dark" ? atomOneDark : coy}
              // customStyle={{
              //   margin: 0,
              //   padding: "1rem",
              //   backgroundColor: "transparent",
              //   height: "100%",
              //   overflow: "auto",
              //   scrollbarWidth: "none",
              //   msOverflowStyle: "none",
              // }}
            >
              {`${code}`}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </>
  );
}
