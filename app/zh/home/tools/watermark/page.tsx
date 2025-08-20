"use client";

import React, { useEffect, useRef, useState } from "react";
import { Space, useNotice, Table, MaterialButton, Input,Tooltip } from "tango-ui-cw";
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
      notice.success("复制成功!");
    });
  };

  const watermarkConfig = {
    text: "Tango UI",
    // text: ["第一行", "第二行"],

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
        console.error("水印处理失败:", err);
      }
    };

    processImage();
  }, []);

  const dataSource = [
    {
      key: 1,
      name: "text",
      type: "String | String[]",
      value: `"水印文字" | ["第一行","第二行"]`,
      description: "设置水印的内容，单行或多行",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "fontSize",
      type: "Number",
      value: "20",
      description: "设置水印的字体大小",
      defaultValue: "30",
    },
    {
      key: 3,
      name: "color",
      type: "String",
      value: "#fff",
      description: "设置水印的文字颜色",
      defaultValue: "rgba(255, 255, 255, 0.5)",
    },
    {
      key: 4,
      name: "rotate",
      type: "Number",
      value: "30",
      description: "设置水印的旋转度数",
      defaultValue: "30",
    },
    {
      key: 5,
      name: "spacing",
      type: "Number",
      value: "100",
      description: "设置水印的字间距",
      defaultValue: "100",
    },
    {
      key: 6,
      name: "lineHeight",
      type: "Number",
      value: "30",
      description: "设置水印的行距",
      defaultValue: "30",
    },
    {
      key: 7,
      name: "opacity",
      type: "Number",
      value: "0.5",
      description: "设置水印的透明度",
      defaultValue: "0.5",
    },
  ];

  const columns = [
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

  const inkifyDataSource = [
    {
      key: 1,
      name: "imageUrl",
      type: "String | HTMLImageElement | Blob",
      value: `"http://example.com/image.jpg" | document.getElementById('myImage') | fileInput.files[0]`,
      description:
        "图片源，支持图片URL、页面已存在的HTML图片元素或二进制Blob数据",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "watermarkConfig",
      type: "Object",
      value: "Object",
      description: "配置水印参数",
      defaultValue: "{}",
    },
  ];

  const inkifyColumns = [
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
      // text: ["第一行", "第二行", "第三行"],

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
        console.error("生成水印失败:", error);
      });
  }

  return (
    <Space className="flex">
      <Space className="sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
        <Space className="flex">
        <Tooltip tooltipText="点击前往NPM >>>" placement="right">
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
          <code className="font-bold">useInkify</code> 钩子可以很快速的帮你实现在图像上加水印的需求。
        </Space>
        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">如何使用？</Space>
        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">1.安装</Space>
        <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
          <SyntaxHighlighter
            language="tsx"
            style={theme === "dark" ? atomOneDark : coy}
          >
            {`npm i tango-watermark`}
          </SyntaxHighlighter>
        </div>

        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">2.引入</Space>
        <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
          <SyntaxHighlighter
            language="tsx"
            style={theme === "dark" ? atomOneDark : coy}
          >
            {`import { useInkify } from "tango-watermark";`}
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
      console.error("处理失败:", error);
    });

  return (
    <Space className="flex flex-col items-center gap-5 p-5 font-sans">
      <Space className="text-xl font-bold mb-3">图片水印示例</Space>
      <Space className="flex gap-10 justify-center">
        <Space className="text-center">
          <h3 className="my-2 text-gray-600">水印前</h3>
          <img
            src={imageUrl}
            alt="原图"
            className="w-[500px] border border-gray-200 rounded-lg shadow-md"
          />
        </Space>
        <Space className="text-center">
          <h3 className="my-2 text-gray-600">水印后</h3>
          <img
            src={finalUrl}
            alt="带水印图"
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
  const imageUrl = "/aa.jpg"; // 引入public中的图片

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
        console.error("水印处理失败:", err);
      }
    };

    processImage();
  }, []);

  return (
    <Space className="flex flex-col items-center gap-5 p-5 font-sans">
      <Space className="text-xl font-bold mb-3">图片水印示例</Space>
       <Space className="flex flex-col items-center gap-5 p-5 font-sans">
          <Space className="flex gap-10 justify-center">
            <Space className="text-center">
              <h3 className="my-2 text-gray-600">水印前</h3>
              <Image
                src={imageUrl}
                alt="原图"
                width={500}
                height={300}
                className="border border-gray-200 rounded-lg shadow-md"
              />
            </Space>
            <Space className="text-center">
              <h3 className="my-2 text-gray-600">水印后</h3>
              {finalUrl ? (
                <Image
                  src={finalUrl}
                  alt="带水印图"
                  width={500}
                  height={300}
                  className="border border-gray-200 rounded-lg shadow-md"
                />
              ) : (
                <Space className="w-[500px] h-[300px] bg-gray-100 flex items-center justify-center">
                  正在生成水印...
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

        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">图片水印示例</Space>

        <Space className="flex flex-col items-center gap-5 p-5 font-sans">
          <Space className="flex gap-10 justify-center">
            <Space className="text-center">
              <h3 className="my-2 text-gray-600  dark:text-neutral-300">水印前</h3>
              <Image
                src={imageUrl}
                alt="原图"
                width={500}
                height={300}
                className="border border-gray-200 rounded-lg shadow-md"
              />
            </Space>

            <Space className="text-center">
              <h3 className="my-2 text-gray-600 dark:text-neutral-300">水印后</h3>
              {finalUrl ? (
                <Image
                  src={finalUrl}
                  alt="带水印图"
                  width={500}
                  height={300}
                  className="border border-gray-200 rounded-lg shadow-md"
                />
              ) : (
                <Space className="w-[500px] h-[300px] bg-gray-100 flex items-center justify-center dark:text-neutral-300">
                  正在生成水印...
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
            <span className="mr-3 dark:text-neutral-300">水印行数</span>
            <Input
              value={lines}
              onChange={(e) => setLines(e)}
              placeholder="多行水印"
              sx={{ w: 100, mr: 10 }}
            />
            {/* 水印文字 */}
            <span className="mr-3 dark:text-neutral-300">水印文字</span>
            <Input
              value={textValue}
              onChange={(e) => setTextValue(e)}
              placeholder="水印文字"
              sx={{ w: 100, mr: 10 }}
            />

            {/* 水印大小 */}
            <span className="mr-3 dark:text-neutral-300">水印大小</span>
            <Input
              value={fontSize}
              onChange={(e) => setFontSize(e)}
              placeholder="水印大小"
              sx={{ w: 100, mr: 10 }}
            />

            {/* 水印颜色 */}
            <span className="mr-3 dark:text-neutral-300">水印颜色</span>
            <Input
              value={color}
              onChange={(e) => setColor(e)}
              placeholder="水印颜色"
              sx={{ w: 100, mr: 10 }}
            />
          </Space>

          {/* 第二行 */}

          <Space
            className="flex"
            sx={{ flexWrap: "wrap", alignItems: "center" }}
          >
            {/* 水印角度 */}
            <span className="mr-3 dark:text-neutral-300">水印角度</span>
            <Input
              value={rotate}
              onChange={(e) => setRotate(e)}
              placeholder="水印角度"
              sx={{ w: 100, mr: 10 }}
            />
            {/* 水印间距 */}
            <span className="mr-3 dark:text-neutral-300">水印间距</span>
            <Input
              value={spacing}
              onChange={(e) => setSpacing(e)}
              placeholder="水印间距"
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
            <span className="mr-3 dark:text-neutral-300">透明度</span>
            <Input
              value={opacity}
              onChange={(e) => setOpacity(e)}
              placeholder="透明度"
              sx={{ w: 100, mr: 10 }}
            />

            <MaterialButton sx={{ pt: 8, pb: 8, ml: 1 }} onClick={GenWatermark}>
              生成水印
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
