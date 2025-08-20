"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Space,
  useNotice,
  Table,
  MaterialButton,
  Input,
  Tooltip,
} from "tango-ui-cw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import copylogoblack from "@/assets/copyblack.png";
import copylogowhite from "@/assets/copywhite.png";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import { useInkify } from "tango-watermark";

const WaterMark = () => {
  const theme = useCurrentTheme();
  const createRef = useRef();
  const notice = useNotice();
  const [finalUrl, setFinalUrl] = useState("");
  const [lang, setLang] = useState("React");
  const [textValue, setTextValue] = useState("Tango UI");
  const [fontSize, setFontSize] = useState(100);
  const [color, setColor] = useState("white");
  const [rotate, setRotate] = useState(-40);
  const [spacing, setSpacing] = useState(250);
  const [lineHeight, setLineHeight] = useState(60);
  const [opacity, setOpacity] = useState(0.7);
  const [lines, setLines] = useState(1);

  const imageUrl = "/aa.jpg";

  const copyCreateRef = () => {
    const content =
      createRef.current.textContent || createRef.current.innerText;
    navigator.clipboard.writeText(content).then(() => {
      notice.success("copy success!");
    });
  };

  const watermarkConfig = {
    text: "Tango UI",
    fontSize: 100,
    color: "white",
    rotate: -40,
    spacing: 250,
    lineHeight: 60,
    opacity: 0.7,
  };

  useEffect(() => {
    const processImage = async () => {
      try {
        const dataUrl = await useInkify(imageUrl, watermarkConfig);
        setFinalUrl(dataUrl);
      } catch (err) {
        console.error("fail:", err);
      }
    };

    processImage();
  }, []);

  const dataSource = [
    {
      key: 1,
      name: "text",
      type: "String | String[]",
      value: `"text" | ["line1","line2"]`,
      description: "Watermark content and supports multiple text lines",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "fontSize",
      type: "Number",
      value: "20",
      description: "Font size of the watermark text",
      defaultValue: "30",
    },
    {
      key: 3,
      name: "color",
      type: "String",
      value: "#fff",
      description: "Text color of the watermark (supports CSS color values)",
      defaultValue: "rgba(255, 255, 255, 0.5)",
    },
    {
      key: 4,
      name: "rotate",
      type: "Number",
      value: "30",
      description: "Rotation angle of the watermark in degrees",
      defaultValue: "30",
    },
    {
      key: 5,
      name: "spacing",
      type: "Number",
      value: "100",
      description: "Horizontal spacing between watermark instances",
      defaultValue: "100",
    },
    {
      key: 6,
      name: "lineHeight",
      type: "Number",
      value: "30",
      description: "Vertical line height between watermark rows",
      defaultValue: "30",
    },
    {
      key: 7,
      name: "opacity",
      type: "Number",
      value: "0.5",
      description:
        "Transparency level (0 = fully transparent, 1 = fully opaque)",
      defaultValue: "0.5",
    },
  ];

  const columns = [
    { title: "Token", dataIndex: "name", key: "name" },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    { title: "Value", dataIndex: "value", key: "value" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Default Value", dataIndex: "defaultValue", key: "defaultValue" },
  ];

  const inkifyDataSource = [
    {
      key: 1,
      name: "imageUrl",
      type: "String | HTMLImageElement | Blob",
      value: `"http://example.com/image.jpg" | document.getElementById('myImage') | fileInput.files[0]`,
      description:
        "image source，support image URL、HTML image element or binary Blob data that already exists on the page",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "watermarkConfig",
      type: "Object",
      value: "Object",
      description: "Configuring watermark parameters",
      defaultValue: "{}",
    },
  ];

  const inkifyColumns = [
    { title: "Prop", dataIndex: "name", key: "name" },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    { title: "Value", dataIndex: "value", key: "value" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Default Value", dataIndex: "defaultValue", key: "defaultValue" },
  ];

  function switchNext() {
    setLang("Next");
  }
  function switchReact() {
    setLang("React");
  }

  function GenWatermark() {
    const watermarkText = Array.from(
      { length: parseInt(lines, 10) || 1 },
      () => textValue
    );
    const adjustedLineHeight =
      parseInt(lines, 10) > 1
        ? lineHeight + (parseInt(lines, 10) - 1) * 60
        : lineHeight;

    const watermarkConfig2 = {
      text: watermarkText,

      fontSize: fontSize,
      color: color,
      rotate: rotate,
      spacing: spacing,
      lineHeight: adjustedLineHeight,
      opacity: opacity,
    };

    useInkify(imageUrl, watermarkConfig2)
      .then((watermarkedImageUrl:string) => {
        setFinalUrl(watermarkedImageUrl);
      })
      .catch((error:any) => {
        console.error("fail:", error);
      });
  }

  return (
    <Space className="flex">
      <Space className="sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
        <Space className="flex">
          <Tooltip tooltipText="Click to NPM >>>" placement="right">
            <Space className="text-4xl font-bold mb-5">
              <a
                href="https://www.npmjs.com/package/tango-watermark"
                target="_blank"
                className=" dark:text-neutral-300"
              >
                useInkify
              </a>
            </Space>
          </Tooltip>
          <Space className="ml-3 text-xs text-black dark:text-white  rounded ">
            0.1.1
          </Space>
        </Space>
        <Space className="mb-10 dark:text-neutral-300">
          <code className="font-bold">useInkify</code> hook can help you quickly
          realize the need to add watermarks on images.
        </Space>
        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">How to use?</Space>
        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">1.Installation</Space>
        <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
          <SyntaxHighlighter
            language="tsx"
            style={theme === "dark" ? atomOneDark : coy}
          >
            {`npm i tango-watermark`}
          </SyntaxHighlighter>
        </div>

        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">2.Import</Space>
        <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
          <SyntaxHighlighter
            language="tsx"
            style={theme === "dark" ? atomOneDark : coy}
          >
            {`import { useInkify } from "tango-watermark";`}
          </SyntaxHighlighter>
        </div>

        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">3.Use</Space>
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
import { useInkify } from "tango-watermark";
import { Space } from "tango-ui-cw";
import imageUrl from "@/asstes/yourimage.jpg";

const Demo = () => {
  const [finalUrl, setFinalUrl] = useState();

  const watermarkConfig = {
    text: "Tango UI",
    fontSize: 100,
    color: "white",
    rotate: -40,
    spacing: 250,
    lineHeight: 60,
    opacity: 0.7,
  };

  useInkify(imageUrl, watermarkConfig)
    .then((dataUrl) => {
      setFinalUrl(dataUrl);
    })
    .catch((error) => {
      console.error("error:", error);
    });

  return (
    <Space className="flex flex-col items-center gap-5 p-5 font-sans">
      <Space className="text-xl font-bold mb-3">Demo</Space>
      <Space className="flex gap-10 justify-center">
        <Space className="text-center">
          <h3 className="my-2 text-gray-600">Before</h3>
          <img
            src={imageUrl}
            alt="original"
            className="w-[500px] border border-gray-200 rounded-lg shadow-md"
          />
        </Space>
        <Space className="text-center">
          <h3 className="my-2 text-gray-600">After</h3>
          <img
            src={finalUrl}
            alt="with-watermark"
            className="w-[500px] border border-gray-200 rounded-lg shadow-md"
          />
        </Space>
      </Space>
    </Space>
  );
};

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
import { useState, useEffect } from "react";
import { useInkify } from "tango-watermark";
import { Space } from "tango-ui-cw";

const Demo = () => {
  const [finalUrl, setFinalUrl] = useState();
  const imageUrl = "/aa.jpg"; // Import your image from public.

  const watermarkConfig = {
    text: "Tango UI",
    fontSize: 100,
    color: "white",
    rotate: -40,
    spacing: 250,
    lineHeight: 60,
    opacity: 0.7,
  };

  useEffect(() => {
    const processImage = async () => {
      try {
        const dataUrl = await useInkify(imageUrl, watermarkConfig);
        setFinalUrl(dataUrl);
      } catch (err) {
        console.error("err:", err);
      }
    };

    processImage();
  }, [watermarkConfig]);

  return (
    <Space className="flex flex-col items-center gap-5 p-5 font-sans">
      <Space className="text-xl font-bold mb-3">Demo</Space>
       <Space className="flex flex-col items-center gap-5 p-5 font-sans">
          <Space className="flex gap-10 justify-center">
            <Space className="text-center">
              <h3 className="my-2 text-gray-600">Before</h3>
              <Image
                src={imageUrl}
                alt="original"
                width={500}
                height={300}
                className="border border-gray-200 rounded-lg shadow-md"
              />
            </Space>
            <Space className="text-center">
              <h3 className="my-2 text-gray-600">After</h3>
              {finalUrl ? (
                <Image
                  src={finalUrl}
                  alt="with-watermark"
                  width={500}
                  height={300}
                  className="border border-gray-200 rounded-lg shadow-md"
                />
              ) : (
                <Space className="w-[500px] h-[300px] bg-gray-100 flex items-center justify-center">
                  loading...
                </Space>
              )}
            </Space>
          </Space>
        </Space>
    </Space>
  );
};

export default Demo;
`}
            </SyntaxHighlighter>
          </Space>
        )}

        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">Demo</Space>

        <Space className="flex flex-col items-center gap-5 p-5 font-sans">
          <Space className="flex gap-10 justify-center">
            <Space className="text-center">
              <h3 className="my-2 text-gray-600  dark:text-neutral-300">Before</h3>
              <Image
                src={imageUrl}
                alt="original"
                width={500}
                height={300}
                className="border border-gray-200 rounded-lg shadow-md"
              />
            </Space>

            <Space className="text-center">
              <h3 className="my-2 text-gray-600  dark:text-neutral-300">After</h3>
              {finalUrl ? (
                <Image
                  src={finalUrl}
                  alt="with-watermark"
                  width={500}
                  height={300}
                  className="border border-gray-200 rounded-lg shadow-md"
                />
              ) : (
                <Space className="w-[500px] h-[300px] bg-gray-100 flex items-center justify-center dark:text-neutral-300">
                  loading...
                </Space>
              )}
            </Space>
          </Space>
        </Space>

        <Space sx={{ flex: true, flexDirection: "column", aic: true }}>
          {/* 第一行 */}
          <Space
            className="flex"
            sx={{ flexWrap: "wrap", alignItems: "center", marginBottom: 15 }}
          >
            {/* 多行水印 */}
            <span className="mr-3 dark:text-neutral-300">Lines</span>
            <Input
              value={lines}
              onChange={(e) => setLines(e)}
              placeholder="Lines"
              sx={{ w: 100, mr: 10 }}
            />
            {/* 水印文字 */}
            <span className="mr-3 dark:text-neutral-300">Text</span>
            <Input
              value={textValue}
              onChange={(e) => setTextValue(e)}
              placeholder="Text"
              sx={{ w: 100, mr: 10 }}
            />

            {/* 水印大小 */}
            <span className="mr-3 dark:text-neutral-300">Size</span>
            <Input
              value={fontSize}
              onChange={(e) => setFontSize(e)}
              placeholder="Size"
              sx={{ w: 100, mr: 10 }}
            />

            {/* 水印颜色 */}
            <span className="mr-3 dark:text-neutral-300">Color</span>
            <Input
              value={color}
              onChange={(e) => setColor(e)}
              placeholder="Color"
              sx={{ w: 100, mr: 10 }}
            />
          </Space>

          {/* 第二行 */}

          <Space
            className="flex"
            sx={{ flexWrap: "wrap", alignItems: "center" }}
          >
            {/* 水印角度 */}
            <span className="mr-3 dark:text-neutral-300">Rotate</span>
            <Input
              value={rotate}
              onChange={(e) => setRotate(e)}
              placeholder="Rotate"
              sx={{ w: 100, mr: 10 }}
            />
            {/* 水印间距 */}
            <span className="mr-3 dark:text-neutral-300">Space</span>
            <Input
              value={spacing}
              onChange={(e) => setSpacing(e)}
              placeholder="Space"
              sx={{ w: 100, mr: 10 }}
            />

            {/* 水印行距 */}
            {/* <span className="mr-3">水印行距</span>
            <Input
              value={lineHeight}
              onChange={(e) => setLineHeight(e)}
              placeholder="水印行距"
              sx={{ w: 100, mr: 10 }}
            /> */}

            {/* 透明度 */}
            <span className="mr-3 dark:text-neutral-300">Opacity</span>
            <Input
              value={opacity}
              onChange={(e) => setOpacity(e)}
              placeholder="Opacity"
              sx={{ w: 100, mr: 10 }}
            />

            <MaterialButton sx={{ pt: 8, pb: 8, ml: 1 }} onClick={GenWatermark}>
              Generate
            </MaterialButton>
          </Space>
        </Space>
        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">useInkify Props</Space>

        <Table dataSource={inkifyDataSource} columns={inkifyColumns} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>
        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">useInkify Tokens</Space>

        <Table dataSource={dataSource} columns={columns} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>
      </Space>
    </Space>
  );
};

export default WaterMark;
