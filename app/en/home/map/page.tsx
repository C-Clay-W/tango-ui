"use client";

import dynamic from "next/dynamic";

const TangoMapViewer = dynamic(
  () => import("tango-map-cw").then((mod) => mod.TangoMapViewer),
  { ssr: false }
);

import { useState, useRef } from "react";
import { Space, Tooltip, MaterialButton, Table, useNotice } from "tango-ui-cw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import Image from "next/image";
import copylogoblack from "@/assets/copyblack.png";
import copylogowhite from "@/assets/copywhite.png";

const Page = () => {
  const theme = useCurrentTheme();
  const [mode, setMode] = useState("2D");
  const createRef = useRef();
  const [activeSection, setActiveSection] = useState("");
  const notice = useNotice();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "use", label: "How to use" },
    { id: "markers", label: "Create markers" },
    { id: "lines", label: "Create lines" },
    { id: "location", label: "Get location" },
    // { id: "provider", label: "切换地图源" },
  ];

  const onNavClick = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const copyCreateRef = () => {
    const content =
      createRef.current.textContent || createRef.current.innerText;
    navigator.clipboard.writeText(content).then(() => {
      notice.success("copy success!");
    });
  };

  // 北京故宫中心点坐标（WGS84）
  const beijingGugong: [number, number] = [116.390741, 39.917351];

  const markers = [
    {
      id: "point 1",
      mark: [116.390741, 39.917351],
    },
    {
      id: "point 2",
      mark: [116.400741, 39.917351],
    },
    {
      id: "point 3",
      mark: [116.400741, 39.927351],
    },
  ];

  //配置折线路径
  const allLines = [
    {
      id: "userLine1",
      coordinates: [
        [116.396904, 39.913423],
        [116.382122, 39.901176],
        [116.387271, 39.912501],
        [116.398258, 39.904602],
      ],
      strokeWidth: 4, //线条宽度
      strokeColor: "blue", //线条颜色
      lineJoin: "round", //折线拐点连接处样式
    },
  ];

  // 示例中的折线
  const allLines2 = [
    {
      id: "userLine1",
      coordinates: [
        [116.397128, 39.926], // A（顶点，整体往北挪高）
        [116.404, 39.914], // C（右下）
        [116.388, 39.92], // E（左上内凹点）
        [116.406, 39.921], // B（右上）
        [116.39, 39.913], // D（左下）
        [116.397128, 39.926], // 回到 A，闭合
      ],
      strokeWidth: 6, //线条宽度
      strokeColor: "red", //线条颜色
      lineJoin: "round", //折线拐点连接处样式
    },
  ];

  function switchMode(mode) {
    if (mode === "2d") {
      setMode("2D");
    } else {
      setMode("3D");
    }
  }

  const dataSource = [
    {
      key: 1,
      name: "provider",
      type: "String",
      value: "amap | ol",
      description:
        "map provider（Next support amap，React support amap and ol）",
      defaultValue: "ol",
    },
    {
      key: 2,
      name: "mapKey",
      type: "String",
      value: "-",
      description: "your map key",
      defaultValue: "-",
    },
    {
      key: 3,
      name: "center",
      type: "Array",
      value: "-",
      description: "map center coordinate (WGS84)",
      defaultValue: "-",
    },
    {
      key: 4,
      name: "zoom",
      type: "Number",
      value: "-",
      description: "map initial zoom（3-18）",
      defaultValue: "10",
    },
    {
      key: 5,
      name: "minZoom",
      type: "Number",
      value: "-",
      description: "map minimum zoom（3-18）",
      defaultValue: "3",
    },
    {
      key: 6,
      name: "maxZoom",
      type: "Number",
      value: "-",
      description: "map maximum zoom（3-18）",
      defaultValue: "18",
    },
    {
      key: 7,
      name: "markers",
      type: "Array",
      value: "-",
      description: "map markers array,one marker or more markers",
      defaultValue: "-",
    },

    {
      key: 8,
      name: "location",
      type: "Boolean",
      value: "-",
      description:
        "enable positioning (currently supports browser positioning based on Amap SDK in mainland China, and supports native positioning in the international market)",
      defaultValue: "false",
    },
    {
      key: 9,
      name: "onLocate",
      type: "() => void",
      value: "-",
      description:
        "callback after successful positioning (data.position.pos is the coordinate after positioning)",
      defaultValue: "-",
    },
    {
      key: 10,
      name: "viewMode",
      type: "String",
      value: "2D | 3D",
      description: "map view mode",
      defaultValue: "2D",
    },
    {
      key: 11,
      name: "line",
      type: "Array",
      value: "-",
      description:
        "the coordinate array of the vector polyline nodes on the map, supporting one or more vector polylines",
      defaultValue: "-",
    },

    {
      key: 12,
      name: "onClick",
      type: "() => void",
      value: "-",
      description: "map click callback",
      defaultValue: "-",
    },
    {
      key: 13,
      name: "style",
      type: "Object",
      value: "-",
      description: "custom map style",
      defaultValue: "-",
    },
  ];

  const columns = [
    { title: "Props", dataIndex: "name", key: "name" },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    { title: "Value", dataIndex: "value", key: "value" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Default Value", dataIndex: "defaultValue", key: "defaultValue" },
  ];

  return (
    <>
      <Space className="flex">
        <Space
          sx={{ vw: 60 }}
          className="!sm:w-[60vw] !md:w-[60vw] !lg:w-[60vw]  !xl:w-[40vw] !2xl:w-[50vw]"
        >
          <Space className="flex">
            <Tooltip tooltipText="Click to NPM >>>" placement="right">
              <Space className="text-4xl font-bold mb-5">
                <a
                  href="https://www.npmjs.com/package/tango-map-cw"
                  target="_blank"
                  className=" dark:text-neutral-300"
                >
                  TangoMapViewer
                </a>
              </Space>
            </Tooltip>
            <Space className="ml-3 text-xs text-black dark:text-white  rounded ">
              1.1.0
            </Space>
          </Space>
          <Space className="mb-10 dark:text-neutral-300">
            This is a React map component based on OpenLayers, suitable for
            React and Next;
            <br />
            Currently supported map service providers include Amap and
            OpenStreetMap), <br />
            and a unified interface is provided to facilitate developers to
            integrate map functions.
          </Space>
          <div className="mb-3 text-amber-500 text-sm bg-amber-100 p-3 rounded-xl font-bold">
            The maps shown in this document are for development and testing
            purposes only and are not suitable for production environments or
            commercial use. If you want to use them in a production environment,
            please be sure to apply for and use your own map service key!&emsp;
            <span className="underline">
              <a href="https://lbs.amap.com/api/javascript-api-v2/prerequisites">
                Go to the developer platform
              </a>
              （AMap）
            </span>
          </div>
          <Space className="text-xl font-bold mb-3 dark:text-neutral-300">
            Full Demo
          </Space>
          <Space sx={{ flex: true }}>
            <TangoMapViewer
              provider="amap" // map provider，support amap and ol（OpenStreetMap）
              mapKey="de7aff6382f3284a8ee44b3e408e5d32" //
              center={beijingGugong}
              zoom={13} // the initial zoom ratio of the map, the zoom size of the map when loading（3-18）
              minZoom={3} // map minimum zoom（3-18）
              maxZoom={18} // map maximum zoom（3-18）
              markers={markers}
              style={{ width: "50vw", height: "550px" }}
              location
              onLocate={(data) => {
                console.log("data ==> ", data);
              }}
              viewMode={mode}
              line={allLines}
              onClick={(e) => {
                console.log("e ==> ", e);
              }}
            />
            <Space sx={{ display: "grid", h: 90, ml: 20 }}>
              <MaterialButton
                sx={{ w: 80, mb: 5, size: 16 }}
                onClick={() => switchMode("2d")}
              >
                2D
              </MaterialButton>
              <MaterialButton
                sx={{ size: 16 }}
                onClick={() => switchMode("3d")}
              >
                3D
              </MaterialButton>
            </Space>
          </Space>
          <div id="use">
            <Space className="text-xl font-bold mt-5 mb-3 dark:text-neutral-300">
              How to use？
            </Space>
          </div>

          <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
            1.Installation
          </Space>
          <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
            <SyntaxHighlighter
              language="tsx"
              style={theme === "dark" ? atomOneDark : coy}
            >
              {`npm i tango-map-cw @amap/amap-jsapi-loader`}
            </SyntaxHighlighter>
          </div>
          <div className="mt-3 mb-3 dark:text-neutral-300 text-sm">
            * If you want to use the OpenLayers basemap and implement more
            native OpenLayers features, you need to install additional:
          </div>
          <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
            <SyntaxHighlighter
              language="tsx"
              style={theme === "dark" ? atomOneDark : coy}
            >
              {`npm i ol`}
            </SyntaxHighlighter>
          </div>
          <div className="mt-3 mb-3 dark:text-neutral-300 text-sm">
            After that, you can use it in TangoMapViewer. Tango-map-cw has
            exposed the native capabilities of ol to developers, and can
            directly call all native APIs.
          </div>

          <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
            2.Import
          </Space>
          <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
            <SyntaxHighlighter
              language="tsx"
              style={theme === "dark" ? atomOneDark : coy}
            >
              {`// React
import { TangoMapViewer } from "tango-map-cw";

// Next
import dynamic from "next/dynamic";

const TangoMapViewer = dynamic(
  () => import("tango-map-cw").then(mod => mod.TangoMapViewer),
  { ssr: false }
);
`}
            </SyntaxHighlighter>
          </div>
          <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
            3.Usage
          </Space>
          <div className="mt-3 mb-3 text-amber-500 text-sm bg-amber-100 p-3 rounded-xl font-bold">
            To properly call the API, please register as a developer on the
            AutoNavi Open Platform and apply for a web platform （JS API） key
            and security key.&emsp;
            <span className="underline">
              <a href="https://lbs.amap.com/api/javascript-api-v2/prerequisites">
                Go to the developer platform
              </a>
            </span>
          </div>
          <Space
            className="rounded-2xl border border-gray-800 mb-3 bg-[#fdfdfd] overflow-hidden relative"
            style={{
              border: "1px solid #d5d5d5",
            }}
          >
            <Image
              src={theme === "dark" ? copylogoblack : copylogowhite}
              alt="Copy Logo"
              width={24}
              height={24}
              className="absolute top-3 right-3 z-10 cursor-pointer"
              onClick={copyCreateRef}
            />
            <div ref={createRef}>
              <SyntaxHighlighter
                language="jsx"
                style={theme === "dark" ? atomOneDark : coy}
              >
                {`// provide WGS84
const beijingGugong: [number, number] = [116.390741, 39.917351];

<TangoMapViewer
  provider="amap" // map provider，support amap and ol（OpenStreetMap）
  mapKey="your map key"
  center={beijingGugong}
  zoom={13} // the initial zoom ratio of the map, the zoom size of the map when loading（3-18）
  style={{ width: "600px", height: "400px" }}
/>
`}
              </SyntaxHighlighter>
            </div>
          </Space>

          <div id="markers">
            <Space className="text-2xl font-bold mt-10 mb-3 dark:text-neutral-300">
              Create markers on the map
            </Space>
            <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
              <SyntaxHighlighter
                language="tsx"
                style={theme === "dark" ? atomOneDark : coy}
              >
                {`// provide WGS84

type Marker = {
  id: string | number;
  mark: [number, number]; // [lon, lat]，WGS84
  icon?: {
    url: string; // supports images, but not SVG
    size?: [number, number]; // width, height, icon size
  };
};

// makers array
const markers = [
  {
    id: "point 1",
    mark: [116.390741, 39.917351],
  },
  {
    id: "point 2",
    mark: [116.400741, 39.917351],
  },
  {
    id: "point 3",
    mark: [116.400741, 39.927351],
  },
];

// show on map
<TangoMapViewer
  provider="amap"
  mapKey="your map key"
  center={beijingGugong}
  zoom={13}
  style={{ width: "600px", height: "400px" }}
  markers={markers} // markers array
/>
`}
              </SyntaxHighlighter>
            </div>
            <TangoMapViewer
              provider="amap"
              mapKey="de7aff6382f3284a8ee44b3e408e5d32"
              center={beijingGugong}
              zoom={13}
              style={{ width: "40vw", height: "350px", marginTop: 20 }}
              markers={markers} // 点位信息
            />
          </div>
          <div id="lines">
            <Space className="text-2xl font-bold mt-10 mb-3 dark:text-neutral-300">
              Creating vector polylines on the map
            </Space>
            <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
              <SyntaxHighlighter
                language="tsx"
                style={theme === "dark" ? atomOneDark : coy}
              >
                {`// provide WGS84

type Line ={
  id: string | number;
  coordinates: number[][];
  strokeColor?: string;
  strokeWidth?: number;
  lineJoin?: "round" | "bevel" | "miter"; // polyline inflection point connection style
}

// array of node coordinates of the polyline
const allLines = [
  {
    id: "userLine1",
    coordinates: [
      [116.397128, 39.926],
      [116.404, 39.914],
      [116.388, 39.92],
      [116.406, 39.921],
      [116.39, 39.913],
      [116.397128, 39.926],
    ],
    strokeWidth: 4, // line width
    strokeColor: "blue", // line color
    lineJoin: "round", // polyline inflection point connection style
  },
];

// show on map
<TangoMapViewer
  provider="amap"
  mapKey="your map key"
  center={beijingGugong}
  zoom={13}
  style={{ width: "600px", height: "400px" }}
  line={allLines} // polylines array
/>
`}
              </SyntaxHighlighter>
            </div>
            <TangoMapViewer
              provider="amap"
              mapKey="de7aff6382f3284a8ee44b3e408e5d32"
              center={beijingGugong}
              zoom={13}
              style={{ width: "40vw", height: "350px", marginTop: 20 }}
              line={allLines2} // 矢量折线
            />
          </div>
          <div id="location">
            <Space className="text-2xl font-bold mt-10 mb-3 dark:text-neutral-300">
              Get location on the map
            </Space>
            <div className="mt-3 mb-3 text-amber-500 text-sm">
              * Your server must be <span className="font-bold">HTTPS</span>（or
              localhost）to use this feature, and users need to authorize
              browser location permissions
            </div>
            <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
              <SyntaxHighlighter
                language="tsx"
                style={theme === "dark" ? atomOneDark : coy}
              >
                {`<TangoMapViewer
  provider="amap"
  mapKey="your map key"
  center={beijingGugong}
  zoom={13}
  style={{ width: "600px", height: "400px" }}
  location // get the current location and display the positioning button
  onLocate={(data) => { // positioning success callback
    console.log("data ==> ", data);
  }}
/>
`}
              </SyntaxHighlighter>
            </div>
            <TangoMapViewer
              provider="amap"
              mapKey="de7aff6382f3284a8ee44b3e408e5d32"
              center={beijingGugong}
              zoom={13}
              style={{ width: "40vw", height: "350px", marginTop: 20 }}
              location
              onLocate={(data) => {
                console.log("data ==> ", data);
              }}
            />
            <div className="mt-3 mb-3 dark:text-neutral-300 text-sm">
              * check the print information of successful positioning in the
              browser console
            </div>
          </div>

          {/* <div id="provider">
            <Space className="text-2xl font-bold mt-10 mb-3 dark:text-neutral-300">
              切换地图源
            </Space>
            <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
              <SyntaxHighlighter
                language="tsx"
                style={theme === "dark" ? atomOneDark : coy}
              >
                {`<TangoMapViewer
  provider="ol" // 目前支持amap（高德）和ol（OpenStreetMap）
  mapKey="你申请的key"
  center={beijingGugong}
  zoom={13}
  style={{ width: "600px", height: "400px" }}
/>
`}
              </SyntaxHighlighter>
            </div>
            <TangoMapViewer
              provider="ol"
              mapKey="de7aff6382f3284a8ee44b3e408e5d32"
              center={beijingGugong}
              style={{ width: "40vw", height: "350px", marginTop: 20 }}
              zoom={8} // 地图初始缩放比例，加载时的地图缩放大小
        minZoom={3} // 地图最小缩放比例
        maxZoom={18} // 地图最大缩放比例
            />
          </div> */}

          <div id="props">
            <Space className="text-xl font-bold mb-3 mt-10 dark:text-neutral-300">
              TangoMapViewer Props
            </Space>
          </div>

          <Table
            dataSource={dataSource}
            columns={columns}
            containerStyles={theme === "light" ? {} : { color: "white" }}
            hoverColor="#a6a6a6"
          />
        </Space>
        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3">
            On this page
          </div>

          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => onNavClick(id)}
                  className={`flex items-center transition ${
                    activeSection === id
                      ? "text-black dark:text-white font-semibold"
                      : "hover:text-black dark:hover:text-white"
                  }`}
                >
                  <span className="mr-2 text-xl leading-none dark:text-neutral-300">
                    -
                  </span>
                  <span className="mr-2 text-sm mt-[4px] leading-none">
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Space>
    </>
  );
};

export default Page;
