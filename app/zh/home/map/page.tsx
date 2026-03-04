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
  const createRef = useRef(); // 使用
  const markersRef = useRef(); // 点
  const lineRef = useRef(); // 折线
  const locationRef = useRef(); // 位置

  const [activeSection, setActiveSection] = useState("");
  // const notice = useNotice();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "use", label: "如何使用" },
    { id: "markers", label: "创建点标记" },
    { id: "lines", label: "创建矢量折线" },
    { id: "location", label: "获取当前位置" },
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
      // notice.success("复制成功!");
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
      description: "地图供应商（Next支持amap，React支持amap和ol）",
      defaultValue: "ol",
    },
    {
      key: 2,
      name: "mapKey",
      type: "String",
      value: "-",
      description: "您的地图key",
      defaultValue: "-",
    },
    {
      key: 3,
      name: "center",
      type: "Array",
      value: "-",
      description: "地图中心点坐标 (WGS84)",
      defaultValue: "-",
    },
    {
      key: 4,
      name: "zoom",
      type: "Number",
      value: "-",
      description: "地图缩放级别（3-18）",
      defaultValue: "10",
    },
    {
      key: 5,
      name: "minZoom",
      type: "Number",
      value: "-",
      description: "地图最小缩放级别（3-18）",
      defaultValue: "3",
    },
    {
      key: 6,
      name: "maxZoom",
      type: "Number",
      value: "-",
      description: "地图最大缩放级别（3-18）",
      defaultValue: "18",
    },
    {
      key: 7,
      name: "markers",
      type: "Array",
      value: "-",
      description: "地图上的标记，支持一个或多个标记",
      defaultValue: "-",
    },

    {
      key: 8,
      name: "location",
      type: "Boolean",
      value: "-",
      description:
        "启用定位（当前大陆地区支持基于高德SDK的浏览器定位，国际支持ol原生定位）",
      defaultValue: "false",
    },
    {
      key: 9,
      name: "onLocate",
      type: "() => void",
      value: "-",
      description: "定位成功后的回调（ data.position.pos 就是定位后的坐标）",
      defaultValue: "-",
    },
    {
      key: 10,
      name: "viewMode",
      type: "String",
      value: "2D | 3D",
      description: "地图显示模式",
      defaultValue: "2D",
    },
    {
      key: 11,
      name: "line",
      type: "Array",
      value: "-",
      description: "地图上的矢量折线节点坐标数组，支持一个或多个矢量折线",
      defaultValue: "-",
    },

    {
      key: 12,
      name: "onClick",
      type: "() => void",
      value: "-",
      description: "地图点击事件",
      defaultValue: "-",
    },
    {
      key: 13,
      name: "style",
      type: "Object",
      value: "-",
      description: "自定义地图样式",
      defaultValue: "-",
    },
  ];

  const columns = [
    { title: "Props 名称", dataIndex: "name", key: "name" },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    { title: "值", dataIndex: "value", key: "value" },
    { title: "描述", dataIndex: "description", key: "description" },
    { title: "默认值", dataIndex: "defaultValue", key: "defaultValue" },
  ];

  return (
    <>
      <Space className="flex">
        <Space className="sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <Space className="flex">
            <Tooltip tooltipText="点击前往NPM >>>" placement="right">
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
            这是一个基于 OpenLayers 实现的 React 地图组件，适用于React和Next；
            <br />
            （当前支持的地图服务商有高德和OpenStreetMap），并提供统一的接口，方便开发者集成地图功能。
          </Space>
          <div className="mb-3 text-amber-500 text-sm bg-amber-100 p-3 rounded-xl font-bold">
            此文档展示的地图仅为开发测试用途，不适用于生产环境及商业用途，若您想在生产环境中使用，请务必申请并使用您自己的地图服务Key！
            <span className="underline">
              <a href="https://lbs.amap.com/api/javascript-api-v2/prerequisites">
                前往开发者平台
              </a>
              （高德）
            </span>
          </div>
          <Space className="text-xl font-bold mb-3 dark:text-neutral-300">
            完整示例
          </Space>
          <Space sx={{ flex: true }}>
            <TangoMapViewer
              provider="amap" // 地图服务商，支持 amap（高德）、tencent（腾讯）、baidu（百度）、ol（OpenStreetMap）
              mapKey="de7aff6382f3284a8ee44b3e408e5d32" //
              center={beijingGugong}
              zoom={13} // 地图初始缩放比例，加载时的地图缩放大小
              minZoom={3} // 地图最小缩放比例
              maxZoom={18} // 地图最大缩放比例
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
              如何使用？
            </Space>
          </div>

          <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
            1.安装
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
            *
            若您想使用openlayers的底图，在之上实现更多openlayers的原生功能，那您需要额外安装：
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
            之后您可以在TangoMapViewer中使用，tango-map-cw已为开发者暴露了ol的调用原生能力的方法，可以直接调用所有原生API
          </div>

          <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
            2.引入
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
            3.使用
          </Space>
          <div className="mt-3 mb-3 text-amber-500 text-sm bg-amber-100 p-3 rounded-xl font-bold">
            为了正常调用 API ，请先注册成为高德开放平台开发者，并申请 web
            平台（JS API）的 key 和安全密钥！
            <span className="underline">
              <a href="https://lbs.amap.com/api/javascript-api-v2/prerequisites">
                前往开发者平台
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
                {`// 提供WGS84坐标系
const beijingGugong: [number, number] = [116.390741, 39.917351];

<TangoMapViewer
  provider="amap" // 地图服务商，支持 amap（高德）和ol（OpenStreetMap）
  mapKey="你申请的key"
  center={beijingGugong}
  zoom={13} // 地图初始缩放比例，加载时的地图缩放大小
  style={{ width: "600px", height: "400px" }}
/>
`}
              </SyntaxHighlighter>
            </div>
          </Space>

          <div id="markers">
            <Space className="text-2xl font-bold mt-10 mb-3 dark:text-neutral-300">
              在地图上创建点标记
            </Space>
            <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
              <SyntaxHighlighter
                language="tsx"
                style={theme === "dark" ? atomOneDark : coy}
              >
                {`// 提供WGS84坐标系标记点，可以一个或多个，多个以数组形式传入

type Marker = {
  id: string | number;
  mark: [number, number]; // [lon, lat]，WGS84 坐标系
  icon?: {
    url: string; // 只支持图片，不支持SVG
    size?: [number, number]; // 宽高，图标大小
  };
};

// 点位数组
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

// 在地图中呈现
<TangoMapViewer
  provider="amap"
  mapKey="你申请的key"
  center={beijingGugong}
  zoom={13}
  style={{ width: "600px", height: "400px" }}
  markers={markers} // 点位信息
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
              在地图上创建矢量折线
            </Space>
            <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
              <SyntaxHighlighter
                language="tsx"
                style={theme === "dark" ? atomOneDark : coy}
              >
                {`// 提供WGS84坐标系标记点，可以一个或多个，多个以数组形式传入

type Line ={
  id: string | number;
  coordinates: number[][];
  strokeColor?: string;
  strokeWidth?: number;
  lineJoin?: "round" | "bevel" | "miter"; // 折线拐点连接处样式
}

// 折线的节点坐标数组
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
    strokeWidth: 4, // 线条宽度
    strokeColor: "blue", // 线条颜色
    lineJoin: "round", // 折线拐点连接处样式
  },
];

// 在地图中呈现
<TangoMapViewer
  provider="amap"
  mapKey="你申请的key"
  center={beijingGugong}
  zoom={13}
  style={{ width: "600px", height: "400px" }}
  line={allLines} // 矢量折线
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
              在地图上获取当前位置
            </Space>
            <div className="mt-3 mb-3 text-amber-500 text-sm">
              * 您的服务器必须为<span className="font-bold">HTTPS</span>
              （或localhost）才可使用此功能，且用户需要授权浏览器定位权限
            </div>
            <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
              <SyntaxHighlighter
                language="tsx"
                style={theme === "dark" ? atomOneDark : coy}
              >
                {`<TangoMapViewer
  provider="amap"
  mapKey="你申请的key"
  center={beijingGugong}
  zoom={13}
  style={{ width: "600px", height: "400px" }}
  location // 获取当前位置，显示定位按钮
  onLocate={(data) => { // 定位成功回调
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
              * 在浏览器检查中查看定位成功的打印信息
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
            // hoverColor="#a6a6a6"
          />
        </Space>
        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3">
            索引
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
