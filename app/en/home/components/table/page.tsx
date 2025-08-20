"use client";
import React, { useState } from "react";
import { Button, Table, Space } from "tango-ui-cw";
import DemoBlock from "@/components/DemoWideEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const TableComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "action", label: "Action" },
    { id: "hide", label: "Hide" },
    { id: "styles", label: "Styles" },
  ];

  const sections2 = [
    { id: "table", label: "Table" },
    { id: "columns", label: "Columns" },
    { id: "render", label: "Render" },
  ];
  const onNavClick = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const onNavClick2 = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const columnsEN = [
    {
      title: "Prop",
      dataIndex: "property",
      key: "property",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Accepted Values",
      dataIndex: "values",
      key: "values",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Default",
      dataIndex: "default",
      key: "default",
    },
    {
      title: "Verson",
      dataIndex: "verson",
      key: "verson",
    },
  ];

  const dataSourceEN = [
  
    {
      key: "1",
      property: "dataSource",
      type: "object[]",
      values: "-",
      description: "Data array for table rows",
      default: "-",
      verson: "-",
    },
    {
      key: "2",
      property: "columns",
      type: "ColumnsType[]",
      values: "-",
      description: "Configuration description of table columns",
      default: "-",
      verson: "-",
    },
    {
      key: "3",
      property: "tableWrapperClassName",
      type: "string",
      values: "-",
      description: "Custom className for tableWrapper.",
      default: "",
      verson: "0.3.5",
    },
    {
      key: "4",
      property: "tableWapperStyles",
      type: "object",
      values: "-",
      description: "Custom inline styles for tableWrapper.",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "5",
      property: "containerClassName",
      type: "string",
      values: "-",
      description: "Custom className for container.",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "6",
      property: "containerStyles",
      type: "object",
      values: "-",
      description: "Custom inline styles for container.",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "7",
      property: "theadClassName",
      type: "string",
      values: "-",
      description: "Custom className for thead.",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "8",
      property: "theadStyles",
      type: "object",
      values: "-",
      description: "Custom inline styles for thead.",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "9",
      property: "trClassName",
      type: "string",
      values: "-",
      description: "Custom className for tr inside thead.",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "10",
      property: "trStyles",
      type: "object",
      values: "-",
      description: "Custom inline styles for tr inside thead.",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "11",
      property: "rowClassName",
      type: "string",
      values: "-",
      description: "Custom className for row.",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "12",
      property: "rowStyle",
      type: "() => void",
      values: "-",
      description: "Custom inline styles for row.",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "13",
      property: "cellClassName",
      type: "string",
      values: "-",
      description: "Custom className for cell.",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "14",
      property: "cellStyle",
      type: "() => void",
      values: "-",
      description: "Custom inline styles for cell.",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "15",
      property: "hoverColor",
      type: "string",
      values: "-",
      description: "Custom style when hover.",
      default: "#f1f1f1",
      verson: "0.3.5",
    },
    {
      key: "16",
      property: "hide",
      type: "string[]",
      values: "-",
      description: "Custom witch column do you want hide.",
      default: "-",
      verson: "0.3.5",
    },
  ];

  const columnsDataSourceEN = [
    {
      key: "1",
      property: "title",
      type: "String",
      values: "String",
      description: "col name",
      default: "-",
      verson: "-",
    },
    {
      key: "2",
      property: "dataIndex",
      type: "String",
      values: "String",
      description: "the data field corresponding to the current column",
      default: "-",
      verson: "-",
    },
    {
      key: "3",
      property: "key",
      type: "String | Number",
      values: "-",
      description:
        "the unique identifier when rendering the list, usually written the same as dataIndex",
      default: "-",
      verson: "-",
    },
    {
      key: "4",
      property: "render",
      type: "function(value, record, index) {}",
      values: "-",
      description:
        "Render function for generating complex data. Parameters are: current cell value, current row data, and row index",
      default: "-",
      verson: "-",
    },
    {
      key: "5",
      property: "width",
      type: "string",
      values: "-",
      description: "Custom column width",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "6",
      property: "hide",
      type: "boolean",
      values: "-",
      description: "Custom witch column do you want hide",
      default: "-",
      verson: "0.3.5",
    },
  ];

  const dataSourceRanderEN = [
    {
      key: "1",
      property: "text",
      type: "Undefined",
      values: "Undefined",
      description:
        "the value of the current cell, corresponding to the dataIndex of this column (for example, the value of record[dataIndex]).",
      default: "{}",
    },
    {
      key: "2",
      property: "render",
      type: "Object",
      values: "Object",
      description: "the data object of the current entire row",
      default: "-",
    },
  ];

  function DefaultDemo() {
    const dataSource = [
      {
        key: 1,
        name: "John",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        address: "New York No. 1 Lake Park",
      },
      {
        key: 2,
        name: "Lucy",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        address: "London No. 1 Lake Park",
      },
      {
        key: 3,
        name: "Brown",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        address: "Sydney No. 1 Lake Park",
      },
    ];

    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Age", dataIndex: "age", key: "age" },
      { title: "Math Score", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "English Score",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "Address", dataIndex: "address", key: "address" },
    ];

    return (
      <>
        <Table
          dataSource={dataSource}
          columns={columns}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          hoverColor="#a6a6a6"
        />
      </>
    );
  }

  function TodoDemo() {
    const dataSource = [
      {
        key: 1,
        name: "John",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        address: "New York No. 1 Lake Park",
      },
      {
        key: 2,
        name: "Lucy",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        address: "London No. 1 Lake Park",
      },
      {
        key: 3,
        name: "Brown",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        address: "Sydney No. 1 Lake Park",
      },
    ];

    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Age", dataIndex: "age", key: "age" },
      { title: "Math Score", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "English Score",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "Address", dataIndex: "address", key: "address" },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Button
            size="small"
            type="transparent"
            onClick={() => console.log(record)}
            className="dark:!text-white dark:!border-white !border"
          >
            show
          </Button>
        ),
      },
    ];

    return (
      <>
        <Table
          dataSource={dataSource}
          columns={columns}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          hoverColor="#a6a6a6"
        />
      </>
    );
  }

  function HideColumnDemo() {
    const [btnText, setBtnText] = useState("hide Age column");
    const [btnTextMore, setBtnTextMore] = useState("hide more columns");
    const [hiddenColumns, setHiddenColumns] = useState<string[] | undefined>(
      undefined
    );

    const dataSource = [
      {
        key: 1,
        name: "John",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        sex: "male",
        address: "New York No. 1 Lake Park",
      },
      {
        key: 2,
        name: "Lucy",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        sex: "female",

        address: "London No. 1 Lake Park",
      },
      {
        key: 3,
        name: "Brown",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        sex: "male",

        address: "Sydney No. 1 Lake Park",
      },
    ];

    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Age", dataIndex: "age", key: "age" },
      { title: "Sex", dataIndex: "sex", key: "sex" },
      { title: "Math Score", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "English Score",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "Address", dataIndex: "address", key: "address" },
    ];

    const toggleAgeColumn = () => {
      const isHidingAge = btnText === "hide Age column";
      setBtnText(isHidingAge ? "show Age column" : "hide Age column");
      setBtnTextMore("hide more columns");

      setHiddenColumns(isHidingAge ? ["age"] : undefined);
    };

    const toggleMoreColumns = () => {
      const isHidingMore = btnTextMore === "hide more columns";
      setBtnTextMore(isHidingMore ? "show more columns" : "hide more columns");
      setBtnText("hide Age column");

      setHiddenColumns(
        isHidingMore ? ["mathScore", "englishScore"] : undefined
      );
    };

    return (
      <Space sx={{ flex: true, flexDirection: "column", gap: 20, aic: true }}>
        <Space sx={{ gap: 12 }}>
          <Button
            onClick={toggleAgeColumn}
            sx={{ w: 150, mr: 20, ls: 0 }}
            className="dark:!text-white dark:!border-white !border dark:!bg-[#0a0a0a]"
          >
            {btnText}
          </Button>
          <Button
            onClick={toggleMoreColumns}
            sx={{ ls: 0 }}
            className="dark:!text-white dark:!border-white !border dark:!bg-[#0a0a0a]"
          >
            {btnTextMore}
          </Button>
        </Space>

        <Table
          dataSource={dataSource}
          columns={columns}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          hoverColor="#a6a6a6"
          hide={hiddenColumns}
        />
      </Space>
    );
  }

  function StylesDemo() {
    const [btnTextEven, setBtnTextEven] = useState("set even color");
    const [btnTextCol, setBtnTextCol] = useState("set col color");

    const [tableEvenColor, setTableEvenColor] = useState(""); // 控制偶数行背景色
    const [tableColColor, setTableColColor] = useState(""); // 控制奇数列字体颜色

    const dataSource = [
      {
        key: 1,
        name: "John",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        address: "New York No. 1 Lake Park",
      },
      {
        key: 2,
        name: "Lucy",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        address: "London No. 1 Lake Park",
      },
      {
        key: 3,
        name: "Brown",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        address: "Sydney No. 1 Lake Park",
      },
    ];

    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Age", dataIndex: "age", key: "age" },
      { title: "Math Score", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "English Score",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "Address", dataIndex: "address", key: "address" },
    ];

    // 切换偶数行背景色
    const handleEvenColorToggle = () => {
      const isSet = btnTextEven === "reset even color";
      setBtnTextEven(isSet ? "set even color" : "reset even color");
      setBtnTextCol("set col color"); // 重置另一个按钮
      setTableColColor(""); // 清除列样式
      setTableEvenColor(isSet ? "" : "oklch(0.704 0.191 22.216)");
    };

    // 切换奇数列字体颜色
    const handleColColorToggle = () => {
      const isSet = btnTextCol === "reset col color";
      setBtnTextCol(isSet ? "set col color" : "reset col color");
      setBtnTextEven("set even color"); // 重置另一个按钮
      setTableEvenColor(""); // 清除行样式
      setTableColColor(isSet ? "" : "aqua");
    };

    return (
      <Space sx={{ flex: true, flexDirection: "column", gap: 20, aic: true }}>
        <Space sx={{ gap: 12 }}>
          <Button
            sx={{ w: 150, mr: 20, ls: 0 }}
            className="dark:!text-white dark:!border-white !border dark:!bg-[#0a0a0a]"
            onClick={handleEvenColorToggle}
          >
            {btnTextEven}
          </Button>
          <Button
            sx={{ w: 150, mr: 20, ls: 0 }}
            className="dark:!text-white dark:!border-white !border dark:!bg-[#0a0a0a]"
            onClick={handleColColorToggle}
          >
            {btnTextCol}
          </Button>
        </Space>

        <Table
          dataSource={dataSource}
          columns={columns}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          rowStyle={(row, rowIndex, parity) =>
            parity === "even" && tableEvenColor
              ? { backgroundColor: tableEvenColor }
              : {}
          }
          cellStyle={(row, col, rowIndex, colIndex, rowParity, colParity) =>
            colParity === "even" && tableColColor
              ? { color: tableColColor }
              : {}
          }
        />
      </Space>
    );
  }

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">
            Table
          </div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            A responsive table component.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
              imports="Table"
              code={`import { Table } from 'tango-ui-cw' 

export function Demo () {
  const dataSource = [
      {
        key: 1,
        name: "John",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        address: "New York No. 1 Lake Park",
      },
      {
        key: 2,
        name: "Lucy",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        address: "London No. 1 Lake Park",
      },
      {
        key: 3,
        name: "Brown",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        address: "Sydney No. 1 Lake Park",
      },
    ];

    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Age", dataIndex: "age", key: "age" },
      { title: "Math Score", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "English Score",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "Address", dataIndex: "address", key: "address" },
    ];

  return (
      <>
        <Table dataSource={dataSource} columns={columns} />
      </>
  )
}
  `}
              jsx={<DefaultDemo />}
            />
          </div>

          {/* action */}
          <div id="action" className="scroll-mt-10">
            <DemoBlock
              title="Action"
              imports="Table"
              code={`import { Table } from 'tango-ui-cw' 

export function Demo () {
  const dataSource = [
      {
        key: 1,
        name: "John",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        address: "New York No. 1 Lake Park",
      },
      {
        key: 2,
        name: "Lucy",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        address: "London No. 1 Lake Park",
      },
      {
        key: 3,
        name: "Brown",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        address: "Sydney No. 1 Lake Park",
      },
    ];

    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Age", dataIndex: "age", key: "age" },
      { title: "Math Score", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "English Score",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "Address", dataIndex: "address", key: "address" },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Button size="small" type="transparent" onClick={() => console.log(record)}>show</Button>
        )
      }
    ];
    
  return (
      <>
        <Table dataSource={dataSource} columns={columns} />
      </>
  )
}
  `}
              jsx={<TodoDemo />}
            />
          </div>

          {/* hide */}
          <div id="hide" className="scroll-mt-10">
            <DemoBlock
              title="Hide"
              imports="Table, Space, Button"
              code={`import { Table, Space, Button } from 'tango-ui-cw' 

export function Demo () {
  const [btnText, setBtnText] = useState("hide Age column");
    const [btnTextMore, setBtnTextMore] = useState("hide more columns");
    const [hiddenColumns, setHiddenColumns] = useState<string[] | undefined>(
      undefined
    );

    const dataSource = [
      {
        key: 1,
        name: "John",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        sex: "male",
        address: "New York No. 1 Lake Park",
      },
      {
        key: 2,
        name: "Lucy",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        sex: "female",
        address: "London No. 1 Lake Park",
      },
      {
        key: 3,
        name: "Brown",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        sex: "male",
        address: "Sydney No. 1 Lake Park",
      },
    ];

    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Age", dataIndex: "age", key: "age" },
      { title: "Sex", dataIndex: "sex", key: "sex" },
      { title: "Math Score", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "English Score",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "Address", dataIndex: "address", key: "address" },
    ];

    const toggleAgeColumn = () => {
      const isHidingAge = btnText === "hide Age column";
      setBtnText(isHidingAge ? "show Age column" : "hide Age column");
      setBtnTextMore("hide more columns");
      setHiddenColumns(isHidingAge ? ["age"] : undefined);
    };

    const toggleMoreColumns = () => {
      const isHidingMore = btnTextMore === "hide more columns";
      setBtnTextMore(isHidingMore ? "show more columns" : "hide more columns");
      setBtnText("hide Age column");
      setHiddenColumns(
        isHidingMore ? ["mathScore", "englishScore"] : undefined
      );
    };

    return (
      <Space sx={{ flex: true, flexDirection: "column", gap: 20, aic: true }}>
        <Space sx={{ gap: 12 }}>
          <Button
            onClick={toggleAgeColumn}
            sx={{ w: 150, mr: 20, ls: 0 }}
            className="dark:!text-white dark:!border-white !border dark:!bg-[#0a0a0a]"
          >
            {btnText}
          </Button>
          <Button
            onClick={toggleMoreColumns}
            sx={{ ls: 0 }}
            className="dark:!text-white dark:!border-white !border dark:!bg-[#0a0a0a]"
          >
            {btnTextMore}
          </Button>
        </Space>

        <Table
          dataSource={dataSource}
          columns={columns}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          hoverColor="#a6a6a6"
          hide={hiddenColumns}
        />
      </Space>
    );
}
  `}
              jsx={
                <>
                  <HideColumnDemo />
                </>
              }
            />
          </div>

          {/* styles */}
          <div id="styles" className="scroll-mt-10">
            <DemoBlock
              title="Styles"
              imports="Table"
              code={`import { Table, Space, Button } from 'tango-ui-cw' 

export function Demo () {
  const [btnTextEven, setBtnTextEven] = useState("set even color");
    const [btnTextCol, setBtnTextCol] = useState("set col color");

    const [tableEvenColor, setTableEvenColor] = useState(""); // 控制偶数行背景色
    const [tableColColor, setTableColColor] = useState(""); // 控制奇数列字体颜色

    const dataSource = [
      {
        key: 1,
        name: "John",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        address: "New York No. 1 Lake Park",
      },
      {
        key: 2,
        name: "Lucy",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        address: "London No. 1 Lake Park",
      },
      {
        key: 3,
        name: "Brown",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        address: "Sydney No. 1 Lake Park",
      },
    ];

    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Age", dataIndex: "age", key: "age" },
      { title: "Math Score", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "English Score",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "Address", dataIndex: "address", key: "address" },
    ];

    // 切换偶数行背景色
    const handleEvenColorToggle = () => {
      const isSet = btnTextEven === "reset even color";
      setBtnTextEven(isSet ? "set even color" : "reset even color");
      setBtnTextCol("set col color"); // 重置另一个按钮
      setTableColColor(""); // 清除列样式
      setTableEvenColor(isSet ? "" : "oklch(0.704 0.191 22.216)");
    };

    // 切换奇数列字体颜色
    const handleColColorToggle = () => {
      const isSet = btnTextCol === "reset col color";
      setBtnTextCol(isSet ? "set col color" : "reset col color");
      setBtnTextEven("set even color"); // 重置另一个按钮
      setTableEvenColor(""); // 清除行样式
      setTableColColor(isSet ? "" : "aqua");
    };

    return (
      <Space sx={{ flex: true, flexDirection: "column", gap: 20, aic: true }}>
        <Space sx={{ gap: 12 }}>
          <Button
            sx={{ w: 150, mr: 20, ls: 0 }}
            className="dark:!text-white dark:!border-white !border dark:!bg-[#0a0a0a]"
            onClick={handleEvenColorToggle}
          >
            {btnTextEven}
          </Button>
          <Button
            sx={{ w: 150, mr: 20, ls: 0 }}
            className="dark:!text-white dark:!border-white !border dark:!bg-[#0a0a0a]"
            onClick={handleColColorToggle}
          >
            {btnTextCol}
          </Button>
        </Space>

        <Table
          dataSource={dataSource}
          columns={columns}
          containerStyles={theme === "light" ? {} : { color: "white" }}
          rowStyle={(row, rowIndex, parity) =>
            parity === "even" && tableEvenColor
              ? { backgroundColor: tableEvenColor }
              : {}
          }
          cellStyle={(row, col, rowIndex, colIndex, rowParity, colParity) =>
            colParity === "even" && tableColColor
              ? { color: tableColColor }
              : {}
          }
        />
      </Space>
    );
}
  `}
              jsx={<StylesDemo />}
            />
          </div>

          {/* props */}
          {/* <div className="hidden sm:block md:block lg:block xl:block 2xl:block "> */}
          <div className="text-2xl font-bold mb-5 dark:text-neutral-300">
            Props
          </div>
          <div id="table" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">Table</div>
          </div>

          <Table
            dataSource={dataSourceEN}
            columns={columnsEN}
            containerStyles={theme === "light" ? {} : { color: "white" }}
            hoverColor="#a6a6a6"
          />
          <div id="columns" className="scroll-mt-10 mt-10">
            <div className="mb-5 dark:text-neutral-300">Columns</div>
          </div>
          <Table
            dataSource={columnsDataSourceEN}
            columns={columnsEN}
            containerStyles={theme === "light" ? {} : { color: "white" }}
            hoverColor="#a6a6a6"
          />

          <div id="render" className="scroll-mt-10 mt-10">
            <div className="mb-5 dark:text-neutral-300">Render</div>
          </div>
          <Table
            dataSource={dataSourceRanderEN}
            columns={columnsEN}
            containerStyles={theme === "light" ? {} : { color: "white" }}
            hoverColor="#a6a6a6"
          />

          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3">
            On This Page
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">
            Table
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

          <div className="text-sm mb-3 font-bold  dark:text-neutral-300 mt-5">
            Props
          </div>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {sections2.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => onNavClick2(id)}
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
      </div>
    </>
  );
};

export default TableComponent;
