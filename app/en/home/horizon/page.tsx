"use client";

import React, { useRef } from "react";
import { Space, Table, Button, Tooltip } from "tango-ui-cw";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import DocCodeBlock from "@/components/DocCodeBlock";
import { Horizon } from "tango-horizon-cw";
import "tango-horizon-cw/style.css";

const Page = () => {
  const theme = useCurrentTheme();

  const dataSource = [
    {
      key: 1,
      name: "className",
      type: "string",
      value: "-",
      description: "Additional class name for the wrapper",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "topContent",
      type: "ReactNode",
      value: "-",
      description: "Content for the top section",
      defaultValue: "'TOP TITLE AREA'",
    },
    {
      key: 3,
      name: "bottomContent",
      type: "ReactNode",
      value: "-",
      description: "Content for the bottom section",
      defaultValue: "'BOTTOM TITLE AREA'",
    },
    {
      key: 4,
      name: "topHeight",
      type: "number | string",
      value: "-",
      description: "Height of the top section",
      defaultValue: "1500",
    },
    {
      key: 5,
      name: "bottomHeight",
      type: "number | string",
      value: "-",
      description: "Height of the bottom section",
      defaultValue: "1000",
    },
    {
      key: 6,
      name: "middleHeight",
      type: "number | string",
      value: "-",
      description: "Height of the middle section",
      defaultValue: "'100%'",
    },
    {
      key: 7,
      name: "boxCount",
      type: "number",
      value: "-",
      description: "Number of horizontal cards",
      defaultValue: "20",
    },
    {
      key: 8,
      name: "boxWidth",
      type: "number",
      value: "-",
      description: "Width of each card (px)",
      defaultValue: "300",
    },
    {
      key: 9,
      name: "boxHeight",
      type: "number",
      value: "-",
      description: "Height of each card (px)",
      defaultValue: "300",
    },
    {
      key: 10,
      name: "boxGap",
      type: "number",
      value: "-",
      description: "Gap between cards (px)",
      defaultValue: "24",
    },
    {
      key: 11,
      name: "trackPaddingX",
      type: "number",
      value: "-",
      description: "Horizontal padding of the track (px)",
      defaultValue: "64",
    },
    {
      key: 12,
      name: "boxBorderRadius",
      type: "number",
      value: "-",
      description: "Border radius of each card (px)",
      defaultValue: "16",
    },
    {
      key: 13,
      name: "damping",
      type: "number",
      value: "0~1",
      description: "Scroll damping coefficient",
      defaultValue: "0.12",
    },
    {
      key: 14,
      name: "stopThreshold",
      type: "number",
      value: "-",
      description: "Stop threshold for damping animation",
      defaultValue: "0.1",
    },
    {
      key: 15,
      name: "wheelIdleDelay",
      type: "number",
      value: "-",
      description: "Wheel idle delay (ms)",
      defaultValue: "120",
    },
  ];

  const columns = [
    { title: "Prop", dataIndex: "name", key: "name" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Accepted Values", dataIndex: "value", key: "value" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Default", dataIndex: "defaultValue", key: "defaultValue" },
  ];

  return (
    <Space className="flex w-full">
      <Space className="w-full">
        <Space className="flex items-center">
          <Tooltip tooltipText="Click to view on NPM >>>" placement="right">
            <Space
              className="text-4xl font-bold mb-5"
              style={{ color: "var(--doc-title-color)" }}
            >
              <a
                href="https://www.npmjs.com/package/tango-horizon-cw"
                target="_blank"
                style={{ color: "var(--doc-title-color)" }}
              >
                Horizon
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
          A horizontal scroll animation component for building stunning and
          immersive scrolling experiences. You can also view the details and documentation on NPM.
        </Space>

        <Space
          className="text-xl font-bold mb-3"
          style={{ color: "var(--doc-title-color)" }}
        >
          Key Points
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
            <span className="underline">Horizontal Scrolling</span>: Enables
            smooth horizontal scrolling through a series of cards while
            scrolling down the page.
          </li>
          <li>
            <span className="underline">Highly Customizable</span>: Supports
            detailed customization for damping, sizes, gaps, padding, and custom
            renderer.
          </li>
          <li>
            <span className="underline">Damping Animation</span>: Integrates a
            customizable scroll damping coefficient to create a smoother, more
            natural scrolling feeling.
          </li>
        </ul>

        <Space
          className="text-xl font-bold mb-3"
          style={{ color: "var(--doc-title-color)" }}
        >
          Demo
        </Space>

        <Space
          className="mt-3 mb-3 font-bold"
          style={{ color: "var(--doc-title-color)" }}
        >
          1. Installation
        </Space>
        <div className="rounded-xl border border-gray-300 pt-2 overflow-hidden mb-5">
          <DocCodeBlock code={`npm install tango-horizon-cw`} />
        </div>

        <Space
          className="mt-3 mb-3 font-bold"
          style={{ color: "var(--doc-title-color)" }}
        >
          2. Code Format
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
        topContent={<div style={{ textAlign: "center", paddingTop: "50px" }}>Scroll Down</div>}
        bottomContent={<div style={{ textAlign: "center", paddingTop: "50px" }}>End</div>}
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
          The component library exports types that can be used to set type constraints:
        </Space>
        <div className="rounded-xl border border-gray-300 pt-2 overflow-hidden mb-5">
          <DocCodeBlock
            code={`import { Horizon } from "tango-horizon-cw";
import type { HorizonProps } from "tango-horizon-cw";

const horizonConfig: HorizonProps = {
  boxCount: 15,
  boxWidth: 250,
  damping: 0.15,
  topContent: <div>Top Area</div>,
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
            4. Demonstration
          </Space>
          <Button
            onClick={() => window.open("/en/horizon-demo", "_blank")}
            sx={{ bg:'#007385ab' }}
          >
            Open in full screen ↗
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
                  Scroll Down 👇
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
                  Bottom Content ✨
                </div>
              }
            />
          </div>
        </Space>

        <Space
          className="text-xl font-bold mb-3 mt-5"
          style={{ color: "var(--doc-title-color)" }}
        >
          Props
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
