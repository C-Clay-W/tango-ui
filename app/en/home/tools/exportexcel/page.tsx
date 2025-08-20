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
  const DemoExcel = "/DemoExcelEn.xlsx";

  const copyCreateRef = () => {
    const content =
      createRef.current.textContent || createRef.current.innerText;
    navigator.clipboard.writeText(content).then(() => {
      notice.success("copy success!");
    });
  };

  const openModel = (record: any) => {
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
      description:
        "export configuration items, including data source, column definition, file name, etc.",
      defaultValue: "-",
    },
  ];

  const columns = [
    { title: "Function", dataIndex: "name", key: "name" },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    { title: "Accepted Values", dataIndex: "value", key: "value" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Default", dataIndex: "defaultValue", key: "defaultValue" },
  ];

  const dataSourceProps = [
    {
      key: 1,
      name: "data",
      type: "Object",
      value: "Object",
      description: "excel data source",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 2,
      name: "fileName",
      type: "String",
      value: "String",
      description: "exported excel name",
      defaultValue: "export.xlsx",
      verson: "-",
    },
    {
      key: 3,
      name: "template",
      type: "String",
      value: "String",
      description: "empty demo",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 4,
      name: "cellMap",
      type: "Object",
      value: "Object",
      description: "excel table map configuration",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 5,
      name: "startRow",
      type: "Number",
      value: "Number",
      description: "starting row for insertion",
      defaultValue: "1",
      verson: "-",
    },
    {
      key: 6,
      name: "image",
      type: "Object",
      value: "Object",
      description: "configuration when inserting pictures",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 7,
      name: "onBeforeExport",
      type: "() => void",
      value: "() => console.log('prepare to export...')",
      description:
        "the callback function before exporting, triggered before the export operation starts",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 8,
      name: "onSuccess",
      type: "() => void",
      value: "() => console.log('export successful!')",
      description:
        "export successful callback function, triggered after the export operation is completed",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 9,
      name: "onError",
      type: "() => void",
      value: "() => console.log('export failure', err)",
      description:
        "export failure callback function, triggered when the export operation fails",
      defaultValue: "-",
      verson: "-",
    },
    {
      key: 10,
      name: "cellMapStatic",
      type: "Object",
      value: "Object",
      description:
        "precisely control the insertion position when inserting static data",
      defaultValue: "-",
      verson: "0.0.3",
    },
  ];

  const columnsProps = [
    { title: "Prop", dataIndex: "name", key: "name" },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    { title: "Accepted Values", dataIndex: "value", key: "value" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Default", dataIndex: "defaultValue", key: "defaultValue" },
    {
      title: "Verson",
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
      description: "img src",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "range",
      type: "Object",
      value: "Object",
      description: "coordinate object control",
      defaultValue: "-",
    },
  ];

  const dataSourceRange = [
    {
      key: 1,
      name: "tl",
      type: "Object",
      value: "Object",
      description: "coordinates of top left",
      defaultValue: "-",
    },
    {
      key: 2,
      name: "br",
      type: "Object",
      value: "Object",
      description: "coordinates of bottom right",
      defaultValue: "-",
    },
  ];

  const dataSourceInRange = [
    {
      key: 1,
      name: "col",
      type: "Number",
      value: "Number",
      description: "column",
      defaultValue: "0",
    },
    {
      key: 2,
      name: "row",
      type: "Number",
      value: "Number",
      description: "row",
      defaultValue: "0",
    },
    {
      key: 3,
      name: "offset",
      type: "Number",
      value: "Number",
      description:
        "offset value, used to control the position of the image in the cell",
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
      id: 1,
      treenumber: "110C1892",
      treekind: "poplar",
      treelevel: "twond level",
      location: "Lama Temple",
      staff: "ClayW",
    },
  ];

  const columnsDemo = [
    { title: "id", dataIndex: "id", key: "id" },
    {
      title: "treenumber",
      dataIndex: "treenumber",
      key: "treenumber",
    },
    { title: "treekind", dataIndex: "treekind", key: "treekind" },
    { title: "treelevel", dataIndex: "treelevel", key: "treelevel" },
    { title: "location", dataIndex: "location", key: "location" },
    { title: "staff", dataIndex: "staff", key: "staff" },
    {
      title: "action",
      key: "action",
      render: (text:string, record:any) => (
        <>
          <MaterialButton
            size="small"
            sx={{ mr: 10 }}
            onClick={() => openModel(record)}
          >
            Show
          </MaterialButton>
          <MaterialButton
            size="small"
            sx={{ mr: 10 }}
            onClick={() => ExportExcelDemo()}
          >
            Export excel
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
      treekind: "poplar",
      treelevel: "twond level",
      location: "Lama Temple",
      staff: "ClayW",
    },
    fileName: "export.xlsx",
    template: DemoExcel,
    cellMap: {
      A3: "id",
      B3: "treenumber",
      C3: "treekind",
      D3: "treelevel",
      E3: "location",
      F3: "staff",
    },
    startRow: 2,
    image: {
      url: Tree,
      range: {
        tl: { col: 6, row: 2 },
        br: { col: 7, row: 3 },
      },
    },
    onBeforeExport: () => console.log("prepare to export..."),
    onSuccess: () => console.log("export successful!"),
    onError: (err) => console.error("export failure", err),
  };

  function ExportExcelDemo() {
    exportExcel(config);
  }

  return (
    <Space className="flex">
      <Space className="sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
        <Space className="flex">
          <Tooltip tooltipText="Click to NPM >>>" placement="right">
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
          tango-excel-cw is a library for exporting or generating Excel files
          using a <code className="font-bold">useExcelExporter</code> hook
          function. The <code>config</code> object allows you to quickly
          configure the relevant information for Excel export, thus enabling
          Excel generation. This library is suitable for work order generation,
          batch export of year-end data, and more.
        </Space>

        <Space className="mb-5 dark:text-neutral-300">
          It's based on two third-party libraries:
          <a href="https://www.npmjs.com/package/exceljs"> exceljs</a> and{" "}
          <a href="https://www.npmjs.com/package/file-saver">file-saver</a>.
          <br />
          <br />
          During installation, you need to install these two third-party
          libraries as core dependencies. Instead of packaging them directly
          into the package, we include them as This ensures compatibility with
          projects that already have these two libraries installed, and also
          effectively avoids the "<b>phantom dependency</b>" issue.
        </Space>
        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">
          How to use?
        </Space>
        <Space className="mt-3 mb-3 font-bold dark:text-neutral-300">
          1.Installation
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
          2.Import
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
          3.Use
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
      treekind: "poplar",
    },
    fileName: "export.xlsx",
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
        tl: { col: 6, row: 2 }, 
        br: { col: 7, row: 3 },
      },
    },
    onBeforeExport: () => console.log("prepare to export..."),
    onSuccess: () => console.log("export successful!"),
    onError: (err) => console.error("export failure", err),
  };

  function ExportExcelDemo() {
    exportExcel(config);
  }

  return (
    <>
      <MaterialButton onClick={ExportExcelDemo}>Export to Excel</MaterialButton>
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
      treekind: "poplar",
    },
    fileName: "export.xlsx",
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
        tl: { col: 6, row: 2 },
        br: { col: 7, row: 3 },
      },
    },
    onBeforeExport: () => console.log("prepare to export..."),
    onSuccess: () => console.log("export successful!"),
    onError: (err) => console.error("export failure", err),
  };

  function ExportExcelDemo() {
    exportExcel(config);
  }

  return (
    <>
      <MaterialButton onClick={ExportExcelDemo}>Export to Excel</MaterialButton>
    </>
  );
}

export default Demo;
`}
            </SyntaxHighlighter>
          </Space>
        )}

        <Space className="text-xl font-bold mb-3 dark:text-neutral-300">
          Demo
        </Space>
        <Table
          dataSource={dataSourceDemo}
          columns={columnsDemo}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          hoverColor="#a6a6a6"
        />

<Space className="text-xl font-bold mb-3 mt-3 dark:text-neutral-300">
Batch data insertion and precise control
        </Space>
        <Space className=" mb-3 mt-3 dark:text-neutral-300">
        Scenario: The format after table export is: the first row of the table needs to be filled with a unified {`'`}table export time{`'`}, and the third row of the table is the first row of table data. In this case, only using the <code>startRow</code> parameter to control the starting insertion position of the data cannot fill the {`'`}table export time{`'`} data into the first row of the table. Therefore, you can combine the <code>cellMapStatic</code> parameter to achieve this requirement. The sample code is as follows:
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
  // traverse the form data finalDatas requested
  const dataRows = finalDatas.map(item => ({
    date: item.time,
    location: item.location,
    treekind: item.treekind,
    treenumber: item.treenumber,
    abnormal: item.abnormal,
    staff: item.staff,
    range: rangeStr          // table export time
  }));

  // configure parameters for exporting to Excel
  const config = {
    data: dataRows,          // data sources
    fileName: export.xlsx,  // export file name
    template: EmptyTable,    // empty demo excel
    startRow: 3,             // the starting row for data insertion
    cellMap: {               // cell map configuration
      A: "date",
      B: "location",
      C: "treekind",
      D: "treenumber",
      E: "abnormal",
      F: "staff"
    },
    cellMapStatic: {         // accurate mapping of static data (not affected by startRow)
      F1: "range"            // insert 'table export time' into the specified position
    },
  };
`}
            </SyntaxHighlighter>
          </Space>

        <Space className="text-xl font-bold mb-3 mt-30 dark:text-neutral-300">
          useExcelExporter Function
        </Space>

        <Table
          dataSource={dataSource}
          columns={columns}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          hoverColor="#a6a6a6"
        />

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">
          Config Props
        </Space>

        <Table
          dataSource={dataSourceProps}
          columns={columnsProps}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          hoverColor="#a6a6a6"
        />

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">
          Image Props
        </Space>

        <Table
          dataSource={dataSourceImage}
          columns={columnsProps}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          hoverColor="#a6a6a6"
        />

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">
          Range Props
        </Space>

        <Table
          dataSource={dataSourceRange}
          columns={columnsProps}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          hoverColor="#a6a6a6"
        />

        <Space className="text-xl font-bold mb-3 mt-5 dark:text-neutral-300">
          InRange Props
        </Space>

        <Table
          dataSource={dataSourceInRange}
          columns={columnsProps}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          hoverColor="#a6a6a6"
        />
      </Space>
      <Modal
        title="Tree Detail"
        open={isShowModal}
        onClose={closeModal}
        headerStyles={{ color: "black" }}
        containerStyles={{ color: "black" }}
        btnStyles={{
          cancel: { color: "black", backgroundColor: "white" },
          ok: { color: "white", backgroundColor: "black" },
        }}
        footerButtons={[
          { key: "cancel", text: "Cancel", onClick: closeModal },
          { key: "ok", text: "Ok", onClick: closeModal },
        ]}
      >
        <p>
          <span className="font-bold">Treenumber:</span>
          {record?.treenumber}
        </p>
        <p>
          <span className="font-bold">Treekind：</span>
          {record?.treekind}
        </p>
        <p>
          <span className="font-bold">Treelevel：</span>
          {record?.treelevel}
        </p>
        <p>
          <span className="font-bold">Location：</span>
          {record?.location}
        </p>
        <p>
          <span className="font-bold">Staff：</span>
          {record?.staff}
        </p>
        <p className="font-bold">Tree Photo：</p>
        <Space>
          <Image width={500} height={300} src={Tree} alt="Tree" />
        </Space>
      </Modal>
    </Space>
  );
};

export default ExportExcel;
