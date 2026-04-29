"use client";

import React, { useRef } from "react";
import { Space, Table, Button, Tooltip } from "tango-ui-cw";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import DocCodeBlock from "@/components/DocCodeBlock";
import { Horizon } from "tango-horizon-cw";
import "tango-horizon-cw/style.css";
import type { HorizonProps } from "tango-horizon-cw";

const Page = () => {
  const theme = useCurrentTheme();

  const dataSource = [
    {
      key: 1,
      name: "className",
      type: "string",
      value: "-",
      description: "外层滚动容器附加类名",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "topContent",
      type: "ReactNode",
      value: "-",
      description: "顶部区域内容（支持字符串和JSX）",
      defaultValue: "'TOP TITLE AREA'",
    },
    {
      key: 3,
      name: "bottomContent",
      type: "ReactNode",
      value: "-",
      description: "底部区域内容（支持字符串和JSX）",
      defaultValue: "'BOTTOM TITLE AREA'",
    },
    {
      key: 4,
      name: "topHeight",
      type: "number | string",
      value: "-",
      description: "顶部区域高度",
      defaultValue: "1500",
    },
    {
      key: 5,
      name: "bottomHeight",
      type: "number | string",
      value: "-",
      description: "底部区域高度",
      defaultValue: "1000",
    },
    {
      key: 6,
      name: "middleHeight",
      type: "number | string",
      value: "-",
      description: "中间区域可视高度",
      defaultValue: "'100%'",
    },
    {
      key: 7,
      name: "boxCount",
      type: "number",
      value: "-",
      description: "横向卡片数量",
      defaultValue: "20",
    },
    {
      key: 8,
      name: "boxWidth",
      type: "number",
      value: "-",
      description: "卡片宽度（px）",
      defaultValue: "300",
    },
    {
      key: 9,
      name: "boxHeight",
      type: "number",
      value: "-",
      description: "卡片高度（px）",
      defaultValue: "300",
    },
    {
      key: 10,
      name: "boxGap",
      type: "number",
      value: "-",
      description: "卡片间距（px）",
      defaultValue: "24",
    },
    {
      key: 11,
      name: "trackPaddingX",
      type: "number",
      value: "-",
      description: "横向轨道左右内边距（px）",
      defaultValue: "64",
    },
    {
      key: 12,
      name: "boxBorderRadius",
      type: "number",
      value: "-",
      description: "卡片圆角（px）",
      defaultValue: "16",
    },
    {
      key: 13,
      name: "damping",
      type: "number",
      value: "0~1",
      description: "滚动阻尼系数（越小越柔和）",
      defaultValue: "0.12",
    },
    {
      key: 14,
      name: "stopThreshold",
      type: "number",
      value: "-",
      description: "阻尼动画停止阈值",
      defaultValue: "0.1",
    },
    {
      key: 15,
      name: "wheelIdleDelay",
      type: "number",
      value: "-",
      description: "滚轮停止判定延迟（ms）",
      defaultValue: "120",
    },
  ];

  const columns = [
    { title: "属性 (Prop)", dataIndex: "name", key: "name" },
    { title: "类型 (Type)", dataIndex: "type", key: "type" },
    { title: "接收值 (Accepted)", dataIndex: "value", key: "value" },
    {
      title: "描述 (Description)",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "默认值 (Default)",
      dataIndex: "defaultValue",
      key: "defaultValue",
    },
  ];

  return (
    <Space className="flex w-full">
      <Space className="w-full">
        <Space className="flex items-center">
          <Tooltip tooltipText="点击前往NPM >>>" placement="right">
            <Space
              className="text-4xl font-bold mb-5"
              style={{ color: "var(--doc-title-color)" }}
            >
              <a
                href="https://www.npmjs.com/package/tango-horizon-cw"
                target="_blank"
                style={{ color: "var(--doc-title-color)" }}
              >
                Horizon 滚动
              </a>
            </Space>
          </Tooltip>
          <Space
            className="ml-3 mb-5 text-xs rounded"
            style={{ color: "var(--doc-text-primary)" }}
          >
            1.0.3
          </Space>
        </Space>
        <Space className="mb-10" style={{ color: "var(--doc-text-secondary)" }}>
          提供沉浸式横向滚动场景视效的动画组件，支持平滑滚动与丰富自定义配置。你也可以在 NPM 上访问相关文档说明。
        </Space>

        <Space
          className="text-xl font-bold mb-3"
          style={{ color: "var(--doc-title-color)" }}
        >
          关键特性
        </Space>
        <ul
          style={{
            marginBottom: "20px",
            lineHeight: "1.8",
            marginLeft: 20,
            color: "var(--doc-text-color)",
            listStyleType: "disc",
          }}
        >
          <li>
            <span className="underline">平滑横向滚动</span>
            ：向下滑滚时，流畅衔接至卡片横滑，视觉沉浸。
          </li>
          <li>
            <span className="underline">高度可配置</span>
            ：支持对卡片大小、间距、轨道内边距及渲染函数深度定制。
          </li>
          <li>
            <span className="underline">精细阻尼动画</span>
            ：内置定制滚动阻尼回调计算，带来顺滑的手感体验。
          </li>
        </ul>

        <Space
          className="text-xl font-bold mb-3"
          style={{ color: "var(--doc-title-color)" }}
        >
          示例
        </Space>

        <Space
          className="mt-3 mb-3 font-bold"
          style={{ color: "var(--doc-title-color)" }}
        >
          1. 安装
        </Space>
        <div className="rounded-xl border border-gray-300 pt-2 overflow-hidden mb-5">
          <DocCodeBlock code={`npm install tango-horizon-cw`} />
        </div>

        <Space
          className="mt-3 mb-3 font-bold"
          style={{ color: "var(--doc-title-color)" }}
        >
          2. 代码格式
        </Space>
        <div className="rounded-xl border border-gray-300 pt-2 overflow-hidden">
          <DocCodeBlock
            code={`import { Horizon } from "tango-horizon-cw";
import "tango-horizon-cw/style.css";

const HorizonDemo = () => {
  return (
    <div style={{ width: "40vw", height: "25vh", overflow: "auto", position: "relative" }}>
      <Horizon 
        boxCount={10} 
        boxWidth={200} 
        boxHeight={120} 
        topHeight={300} 
        bottomHeight={300} 
        middleHeight="25vh"
        topContent={<div style={{ textAlign: "center", paddingTop: "50px" }}>向下滚动 👇</div>}
        bottomContent={<div style={{ textAlign: "center", paddingTop: "50px" }}>到底了 ✨</div>}
      />
    </div>
  );
};`}
          />
        </div>

        <Space
          className="mt-5 mb-3 font-bold"
          style={{ color: "var(--doc-title-color)" }}
        >
          3. TypeScript
        </Space>
        <Space className="mb-2" style={{ color: "var(--doc-text-color)" }}>
          组件库已导出类型，可用于提取配置对象的类型约束：
        </Space>
        <div className="rounded-xl border border-gray-300 pt-2 overflow-hidden mb-5">
          <DocCodeBlock
            code={`import { Horizon } from "tango-horizon-cw";
import type { HorizonProps } from "tango-horizon-cw";

const horizonConfig: HorizonProps = {
  boxCount: 15,
  boxWidth: 250,
  damping: 0.15,
  topContent: <div>顶部区域</div>,
};

const MyComponent = () => {
  return <Horizon {...horizonConfig} />;
};`}
          />
        </div>

        <Space className="mt-5 mb-3 flex items-center gap-4">
          <Space
            className="font-bold"
            style={{ color: "var(--doc-title-color)" }}
          >
            4. 演示 Demo
          </Space>
          <Button
            onClick={() => window.open("/zh/horizon-demo", "_blank")}
            sx={{ bg:'#007385ab' }}
          >
            在全屏中展示 ↗
          </Button>
        </Space>
        <Space
          className="rounded-2xl border border-gray-800 mb-3 bg-[#fdfdfd] overflow-hidden relative"
          style={{
            border: "1px solid #d5d5d5",
            height: "45vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "45vw",
              height: "40vh",
              overflow: "auto",
              position: "relative",
              border: "1px solid #eee",
              borderRadius: 8,
            }}
          >
            <Horizon
              boxCount={10}
              boxWidth={200}
              boxHeight={120}
              topHeight={500}
              bottomHeight={500}
              middleHeight="410px"
              topContent={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "white",
                    height: "100%",
                    width: "100%",
                    background: "linear-gradient(to bottom, #4facfe, #00f2fe)",
                  }}
                >
                  向下滚动 👇
                </div>
              }
              bottomContent={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "white",
                    height: "100%",
                    width: "100%",
                    background: "linear-gradient(to top, #4facfe, #00f2fe)",
                  }}
                >
                  到底了 ✨
                </div>
              }
            />
          </div>
        </Space>

        <Space
          className="text-xl font-bold mb-3 mt-5"
          style={{ color: "var(--doc-title-color)" }}
        >
          组件参数 (Props)
        </Space>
        <Table
          dataSource={dataSource}
          columns={columns}
          containerStyles={
            theme === "light" ? {} : { color: "var(--doc-text-color)" }
          }
        />
      </Space>
    </Space>
  );
};

export default Page;
