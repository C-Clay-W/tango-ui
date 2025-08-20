"use client";

import React, { useRef, useState } from "react";
import {
  Space,
  useNotice,
  Table,
  MaterialButton,
  Modal,
  Tooltip,
} from "tango-ui-cw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import copylogoblack from "@/assets/copyblack.png";
import copylogowhite from "@/assets/copywhite.png";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";
import { useExcelExporter } from "tango-excel-cw";

const ExportExcel = () => {
  const theme = useCurrentTheme();
  const createRef = useRef();
  const notice = useNotice();
  const [lang, setLang] = useState("React");
  const [isShowModal, setIsShowModal] = useState(false);
  const [record, setRecord] = useState();

  const Tree = "/Tree.jpg";
  const DemoExcel = "/DemoExcel.xlsx";

  const copyCreateRef = () => {
    const content =
      createRef.current.textContent || createRef.current.innerText;
    navigator.clipboard.writeText(content).then(() => {
      notice.success("复制成功!");
    });
  };

  const openModel = (record:any) => {
    console.log(record);

    setIsShowModal(true);
    setRecord(record);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const dataSource = [
    {
      key: 1,
      name: "exportExcel",
      type: "Object",
      value: "{ data, fileName, template, cellMap, startRow, image... }",
      description: "导出配置项，包含数据源、列定义、文件名等",
      defaultValue: "-",
    },
  ];

  const columns = [
    { title: "Function", dataIndex: "name", key: "name" },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    { title: "值", dataIndex: "value", key: "value" },
    { title: "描述", dataIndex: "description", key: "description" },
    { title: "默认值", dataIndex: "defaultValue", key: "defaultValue" },
  ];

  const dataSourceProps = [
    {
      key: 1,
      name: "data",
      type: "Object",
      value: "Object",
      description: "Excel所需的数据",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 2,
      name: "fileName",
      type: "String",
      value: "String",
      description: "导出的Excel名称",
      defaultValue: "export.xlsx",
      verson: "-",
    },
    {
      key: 3,
      name: "template",
      type: "String",
      value: "String",
      description: "空模版",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 4,
      name: "cellMap",
      type: "Object",
      value: "Object",
      description: "表格地图配置",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 5,
      name: "startRow",
      type: "Number",
      value: "Number",
      description: "起始插入的行",
      defaultValue: "1",
      verson: "-",
    },
    {
      key: 6,
      name: "image",
      type: "Object",
      value: "Object",
      description: "插入图片时的配置",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 7,
      name: "onBeforeExport",
      type: "() => void",
      value: "() => console.log('准备导出...')",
      description: "导出前的回调函数，导出操作开始前触发",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 8,
      name: "onSuccess",
      type: "() => void",
      value: "() => console.log('导出成功...')",
      description: "导出成功的回调函数，导出操作完成后触发",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 9,
      name: "onError",
      type: "() => void",
      value: "() => console.log('导出失败', err)",
      description: "导出失败的回调函数，导出操作失败时触发",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 10,
      name: "cellMapStatic",
      type: "Object",
      value: "Object",
      description: "插入静态数据时精确控制插入位置",
      defaultValue: "-",
      verson: "0.0.3",
    },
    

  ];

  const columnsProps = [
    { title: "Prop", dataIndex: "name", key: "name" },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    { title: "值", dataIndex: "value", key: "value" },
    { title: "描述", dataIndex: "description", key: "description" },
    { title: "默认值", dataIndex: "defaultValue", key: "defaultValue" },
    {
      title: "版本",
      dataIndex: "verson",
      key: "verson",
    },
  ];

  const dataSourceImage = [
    {
      key: 1,
      name: "url",
      type: "String",
      value: "String",
      description: "图片文件的地址",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "range",
      type: "Object",
      value: "Object",
      description: "坐标对象控制",
      defaultValue: "-",
    },
  ];

  const dataSourceRange = [
    {
      key: 1,
      name: "tl",
      type: "Object",
      value: "Object",
      description: "区域左上角坐标",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "br",
      type: "Object",
      value: "Object",
      description: "区域右下角坐标",
      defaultValue: "-",
    },
  ];

  const dataSourceInRange = [
    {
      key: 1,
      name: "col",
      type: "Number",
      value: "Number",
      description: "列",
      defaultValue: "0",
    },
    {
      key: 2,
      name: "row",
      type: "Number",
      value: "Number",
      description: "行",
      defaultValue: "0",
    },
    {
      key: 3,
      name: "offset",
      type: "Number",
      value: "Number",
      description: "偏移量",
      defaultValue: "0",
    },
  ];

  function switchNext() {
    setLang("Next");
  }
  function switchReact() {
    setLang("React");
  }

  const dataSourceDemo = [
    {
      key: 1,
      id: "1",
      treenumber: "110C1892",
      treekind: "白杨",
      treelevel: "二级",
      location: "北海",
      staff: "派华",
    },
  ];

  const columnsDemo = [
    { title: "序号", dataIndex: "id", key: "id" },
    {
      title: "编号",
      dataIndex: "treenumber",
      key: "treenumber",
    },
    { title: "树种", dataIndex: "treekind", key: "treekind" },
    { title: "等级", dataIndex: "treelevel", key: "treelevel" },
    { title: "生长地点", dataIndex: "location", key: "location" },
    { title: "管理人", dataIndex: "staff", key: "staff" },
    {
      title: "操作",
      key: "action",
      render: (text:string, record:any) => (
        <>
          <MaterialButton
            size="small"
            sx={{ mr: 10 }}
            onClick={() => openModel(record)}
          >
            查看
          </MaterialButton>
          <MaterialButton
            size="small"
            sx={{ mr: 10 }}
            onClick={() => ExportExcelDemo()}
          >
            导出为Excel
          </MaterialButton>
        </>
      ),
    },
  ];

  const { exportExcel } = useExcelExporter();
  const config = {
    data: {
      id: 1,
      treenumber: "110C1892",
      treekind: "白杨",
      level: "二级",
      location: "北海",
      staff: "派华",
    },
    fileName: "导出示例.xlsx",
    template: DemoExcel,
    cellMap: {
      A3: "id",
      B3: "treenumber",
      C3: "treekind",
      D3: "level",
      E3: "location",
      F3: "staff",
    },
    startRow: 2,
    image: {
      url: Tree,
      range: {
        // 控制图片大小
        tl: { col: 6, row: 2 }, // 3：表示空出前3列，4：表示空出前4行
        br: { col: 7, row: 3 }, // 8：表示图片右边在第8列，6：表示图片底边在第6行
      },
    },
    onBeforeExport: () => console.log("准备导出..."),
    onSuccess: () => console.log("导出成功"),
    onError: (err) => console.error("导出失败", err),
  };

  function ExportExcelDemo() {
    exportExcel(config);
  }

  return (
    <Space className="flex">
      <Space className="sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
        <Space className="flex">
          <Tooltip tooltipText="点击前往NPM >>>" placement="right">
            <Space className="text-4xl font-bold mb-5">
              <a
                href="https://www.npmjs.com/package/tango-excel-cw"
                target="_blank"
                className=" dark:text-neutral-300"
              >
                useExcelExporter
              </a>
            </Space>
          </Tooltip>
          <Space className="ml-3 text-xs text-black dark:text-white  rounded ">
            0.0.3
          </Space>
        </Space>

        <Space className="mb-5 dark:text-neutral-300">
          tango-excel-cw 是一个用于将既定数据导出或生成为Excel的库，
          <code className="font-bold">
            useExcelExporter
          </code> 钩子函数可以通过 <code>config</code>{" "}
          对象来快速配置导出Excel的相关信息，从而实现Excel的生成，适用于工单生成，年终数据批量导表等。
        </Space>

        <Space className="mb-5 dark:text-neutral-300">
          其基于两个三方库封装实现：
          <a href="https://www.npmjs.com/package/exceljs">exceljs</a> 和{" "}
          <a href="https://www.npmjs.com/package/file-saver">file-saver</a>
          ；在安装中您需要安装这两个三方库作为该库的核心依赖，我们没有将两个三方库直接封装进包内，而是作为{" "}
          <code>peerDependencies</code>{" "}
          的形式存在，一是为了兼容已安装上述两个三方库的项目使用，二也是有效避免“
          <b>幻影依赖</b>”问题。
        </Space>
        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">
          如何使用？
        </Space>
        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
          1.安装
        </Space>
        <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
          <SyntaxHighlighter
            language="tsx"
            style={theme === "dark" ? atomOneDark : coy}
          >
            {`npm i tango-excel-cw exceljs file-saver`}
          </SyntaxHighlighter>
        </div>

        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
          2.引入
        </Space>
        <div className="rounded-xl border border-gray-300 pt-2 dark:border-none dark:pt-0 overflow-hidden">
          <SyntaxHighlighter
            language="tsx"
            style={theme === "dark" ? atomOneDark : coy}
          >
            {`import { useExcelExporter } from "tango-excel-cw";`}
          </SyntaxHighlighter>
        </div>

        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
          3.使用
        </Space>
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
import { useExcelExporter } from "tango-excel-cw";
import { MaterialButton } from "tango-ui-cw";
import Tree from "@/assets/yourimg.jpg";
import DemoExcel from "@/assets/youremptyexcel.xlsx";

function Demo() {
  const { exportExcel } = useExcelExporter();
  const config = {
    data: {
      id: 1,
      treenumber: "110C1892",
      treekind: "白杨",
    },
    fileName: "导出示例.xlsx",
    template: DemoExcel,
    cellMap: {
      A3: "id",
      B3: "treenumber",
      C3: "treekind",
    },
    startRow: 2,
    image: {
      url: Tree,
      range: {
        // 控制图片位置
        tl: { col: 6, row: 2 }, // tl.col：空出前n列， tl.row：空出前n行
        br: { col: 7, row: 3 }, // br.col：图片右边在第n列， br.row：图片底边在第n行
      },
    },
    onBeforeExport: () => console.log("准备导出..."),
    onSuccess: () => console.log("导出成功"),
    onError: (err) => console.error("导出失败", err),
  };

  function ExportExcelDemo() {
    exportExcel(config);
  }

  return (
    <>
      <MaterialButton onClick={ExportExcelDemo}>导出为Excel</MaterialButton>
    </>
  );
}

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
import { useExcelExporter } from "tango-excel-cw";
import { MaterialButton } from "tango-ui-cw";

function Demo() {
  const Tree = "/yourimg.jpg";
  const DemoExcel = "/youremptyexcel.xlsx";

  const { exportExcel } = useExcelExporter();
  const config = {
    data: {
      id: 1,
      treenumber: "110C1892",
      treekind: "白杨",
    },
    fileName: "导出示例.xlsx",
    template: DemoExcel,
    cellMap: {
      A3: "id",
      B3: "treenumber",
      C3: "treekind",
    },
    startRow: 2,
    image: {
      url: Tree,
      range: {
        // 控制图片位置
        tl: { col: 6, row: 2 }, // tl.col：空出前n列， tl.row：空出前n行
        br: { col: 7, row: 3 }, // br.col：图片右边在第n列， br.row：图片底边在第n行
      },
    },
    onBeforeExport: () => console.log("准备导出..."),
    onSuccess: () => console.log("导出成功"),
    onError: (err) => console.error("导出失败", err),
  };

  function ExportExcelDemo() {
    exportExcel(config);
  }

  return (
    <>
      <MaterialButton onClick={ExportExcelDemo}>导出为Excel</MaterialButton>
    </>
  );
}

export default Demo;
`}
            </SyntaxHighlighter>
          </Space>
        )}

        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">
          导出示例
        </Space>
        <Table dataSource={dataSourceDemo} columns={columnsDemo} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>

        <Space className="text-xl font-bold mb-3 mt-3 dark:text-neutral-300">
          批量插入数据与精准控制
        </Space>
        <Space className=" mb-3 mt-3 dark:text-neutral-300">
          场景：表格导出后的格式为：表格第一行需要填写统一的‘表格导出时间’，表格的第三行是表格数据的第一行，这时仅通过 <code>startRow</code> 参数控制数据的起始插入位置做不到将‘表格导出时间’这个数据填写进表格第一行中，所以可以结合 <code>cellMapStatic</code> 参数实现这一需求，示例代码如下：
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
              {`
  // 遍历请求回来的表格数据finalDatas
  const dataRows = finalDatas.map(item => ({
    date: item.time,
    location: item.location,
    treekind: item.treekind,
    treenumber: item.treenumber,
    abnormal: item.abnormal,
    staff: item.staff,
    range: rangeStr          // 表格导出时间
  }));

  // 配置导出Excel的参数
  const config = {
    data: dataRows,          // 需要导出的数据源
    fileName: 导出示例.xlsx,  // 导出的文件名
    template: EmptyTable,    // 空模板
    startRow: 3,             // 数据插入的起始行
    cellMap: {               // 表格地图配置
      A: "date",
      B: "location",
      C: "treekind",
      D: "treenumber",
      E: "abnormal",
      F: "staff"
    },
    cellMapStatic: {         // 静态数据精准映射（不受 startRow 影响）
      F1: "range"            // 将‘表格导出时间’插入指定位置
    },
  };
`}
            </SyntaxHighlighter>
          </Space>

        <Space className="text-xl font-bold mb-3 mt-30 dark:text-neutral-300">
          useExcelExporter Function
        </Space>

        <Table dataSource={dataSource} columns={columns} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">
          Config Props
        </Space>

        <Table dataSource={dataSourceProps} columns={columnsProps} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">
          Image Props
        </Space>

        <Table dataSource={dataSourceImage} columns={columnsProps} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">
          Range Props
        </Space>

        <Table dataSource={dataSourceRange} columns={columnsProps} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">
          InRange Props
        </Space>

        <Table dataSource={dataSourceInRange} columns={columnsProps} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>
      </Space>
      <Modal
        title="查看古树信息"
        open={isShowModal}
        onClose={closeModal}
        headerStyles={{ color: "black" }}
        containerStyles={{ color: "black" }}
        btnStyles={{
          cancel: { color: "black", backgroundColor: "white" },
          ok: { color: "white", backgroundColor: "black" },
        }}
        footerButtons={[
          { key: "cancel", text: "取消", onClick: closeModal },
          { key: "ok", text: "确定", onClick: closeModal },
        ]}
      >
        <p>
          <span className="font-bold">古树编号：</span>
          {record?.treenumber}
        </p>
        <p>
          <span className="font-bold">古树树种：</span>
          {record?.treekind}
        </p>
        <p>
          <span className="font-bold">古树等级：</span>
          {record?.treelevel}
        </p>
        <p>
          <span className="font-bold">生长地点：</span>
          {record?.location}
        </p>
        <p>
          <span className="font-bold">管理人：</span>
          {record?.staff}
        </p>
        <p className="font-bold">古树照片：</p>
        <Space>
          <Image width={500} height={300} src={Tree} alt="Tree" />
        </Space>
      </Modal>
    </Space>
  );
};

export default ExportExcel;
