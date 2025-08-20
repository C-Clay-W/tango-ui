"use client";
import React, { useState } from "react";
import { Button, Table,Space } from "tango-ui-cw";
import DemoBlock from "@/components/DemoWideZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const TableComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "action", label: "操作" },
    { id: "hide", label: "隐藏列" },
    { id: "styles", label: "样式定制" },
  ];

  const sections2 = [
    { id: "table", label: "表格" },
    { id: "columns", label: "栏" },
    { id: "render", label: "渲染内容" },
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

  const columnsZh = [
    {
      title: "属性",
      dataIndex: "property",
      key: "property",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "可选值",
      dataIndex: "values",
      key: "values",
    },
    {
      title: "说明",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "默认值",
      dataIndex: "default",
      key: "default",
    },
    {
      title: "版本",
      dataIndex: "verson",
      key: "verson",
    },
  ];

  const dataSourceZh = [
  
    {
      key: "1",
      property: "dataSource",
      type: "object[]",
      values: "-",
      description: "表格行的数据数组",
      default: "-",
      verson: "-",
    },
    {
      key: "2",
      property: "columns",
      type: "ColumnsType[]",
      values: "-",
      description: "表格列的配置描述",
      default: "-",
      verson: "-",
    },
    {
      key: "3",
      property: "tableWrapperClassName",
      type: "string",
      values: "-",
      description: "自定义tableWrapper的类名",
      default: "",
      verson: "0.3.5",
    },
    {
      key: "4",
      property: "tableWapperStyles",
      type: "object",
      values: "-",
      description: "自定义tableWrapper的行内样式",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "5",
      property: "containerClassName",
      type: "string",
      values: "-",
      description: "自定义container的类名",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "6",
      property: "containerStyles",
      type: "object",
      values: "-",
      description: "自定义container的行内样式",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "7",
      property: "theadClassName",
      type: "string",
      values: "-",
      description: "自定义表头的类名",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "8",
      property: "theadStyles",
      type: "object",
      values: "-",
      description: "自定义表头的行内样式",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "9",
      property: "trClassName",
      type: "string",
      values: "-",
      description: "自定义表头中tr的类名",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "10",
      property: "trStyles",
      type: "object",
      values: "-",
      description: "自定义表头中tr的行内样式",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "11",
      property: "rowClassName",
      type: "string",
      values: "-",
      description: "自定义表格行的类名",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "12",
      property: "rowStyle",
      type: "() => void",
      values: "-",
      description: "自定义表格行的行内样式",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "13",
      property: "cellClassName",
      type: "string",
      values: "-",
      description: "自定义表格单元格的类名",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "14",
      property: "cellStyle",
      type: "() => void",
      values: "-",
      description: "自定义表格单元格的行内样式",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "15",
      property: "hoverColor",
      type: "string",
      values: "-",
      description: "自定义hover状态下的行内样式",
      default: "#f1f1f1",
      verson: "0.3.5",
    },
    {
      key: "16",
      property: "hide",
      type: "string[] | boolean",
      values: "-",
      description: "自定义列隐藏，值可为字符串数组或布尔值",
      default: "-",
      verson: "0.3.5",
    },
  ];

  const columnsDataSourceZh = [
    {
      key: "1",
      property: "title",
      type: "String",
      values: "String",
      description: "列标题",
      default: "-",
      verson: "-",
    },
    {
      key: "2",
      property: "dataIndex",
      type: "String",
      values: "String",
      description: "当前列对应的数据字段",
      default: "-",
      verson: "-",
    },
    {
      key: "3",
      property: "key",
      type: "String | Number",
      values: "-",
      description: "渲染列表时的唯一标识符，通常写成与 dataIndex 相同",
      default: "-",
      verson: "-",
    },
    {
      key: "4",
      property: "render",
      type: "function(value, record, index) {}",
      values: "-",
      description:
        "生成复杂数据的渲染函数，参数分别为：当前单元格的值、当前行数据和行索引",
      default: "-",
      verson: "-",
    },
    {
      key: "5",
      property: "width",
      type: "string",
      values: "-",
      description: "自定义列宽",
      default: "-",
      verson: "0.3.5",
    },
    {
      key: "6",
      property: "hide",
      type: "boolean",
      values: "-",
      description: "自定义隐藏列",
      default: "-",
      verson: "0.3.5",
    },
  ];

  const dataSourceRanderZh = [
    {
      key: "1",
      property: "text",
      type: "Undefined",
      values: "Undefined",
      description:
        "当前单元格的值，对应这一列的 dataIndex（例如 record[dataIndex] 的值）",
      default: "{}",
    },
    {
      key: "2",
      property: "render",
      type: "Object",
      values: "Object",
      description: "当前整行的数据对象",
      default: "-",
    },
  ];

  function DefaultDemo() {
    const dataSource = [
      {
        key: 1,
        name: "李伟",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        address: "北京市朝阳区第一湖畔公园",
      },
      {
        key: 2,
        name: "张丽",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        address: "上海市浦东新区第一湖畔公园",
      },
      {
        key: 3,
        name: "王强",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        address: "广州市天河区第一湖畔公园",
      },
    ];

    const columns = [
      { title: "姓名", dataIndex: "name", key: "name" },
      { title: "年龄", dataIndex: "age", key: "age" },
      { title: "数学成绩", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "英语成绩",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "住址", dataIndex: "address", key: "address" },
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
        name: "李伟",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        address: "北京市朝阳区第一湖畔公园",
      },
      {
        key: 2,
        name: "张丽",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        address: "上海市浦东新区第一湖畔公园",
      },
      {
        key: 3,
        name: "王强",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        address: "广州市天河区第一湖畔公园",
      },
    ];

    const columns = [
      { title: "姓名", dataIndex: "name", key: "name" },
      { title: "年龄", dataIndex: "age", key: "age" },
      { title: "数学成绩", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "英语成绩",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "住址", dataIndex: "address", key: "address" },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <Button
            size="small"
            type="transparent"
            onClick={() => console.log(record)}
            className="dark:!text-white dark:!border-white !border"
          >
            查看
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
    const [btnText, setBtnText] = useState("隐藏年龄列");
    const [btnTextMore, setBtnTextMore] = useState("隐藏更多列");
    const [hiddenColumns, setHiddenColumns] = useState<string[] | undefined>(
      undefined
    );

    const dataSource = [
      {
        key: 1,
        name: "李伟",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        sex: "男",
        address: "北京市朝阳区第一湖畔公园",
      },
      {
        key: 2,
        name: "张丽",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        sex: "女",
        address: "上海市浦东新区第一湖畔公园",
      },
      {
        key: 3,
        name: "王强",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        sex: "男",
        address: "广州市天河区第一湖畔公园",
      },
    ];

    const columns = [
      { title: "姓名", dataIndex: "name", key: "name" },
      { title: "年龄", dataIndex: "age", key: "age" },
      { title: "性别", dataIndex: "sex", key: "sex" },
      { title: "数学成绩", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "英语成绩",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "住址", dataIndex: "address", key: "address" },
    ];

    const toggleAgeColumn = () => {
      const isHidingAge = btnText === "隐藏年龄列";
      setBtnText(isHidingAge ? "显示年龄列" : "隐藏年龄列");
      setBtnTextMore("隐藏更多列");

      setHiddenColumns(isHidingAge ? ["age"] : undefined);
    };

    const toggleMoreColumns = () => {
      const isHidingMore = btnTextMore === "隐藏更多列";
      setBtnTextMore(isHidingMore ? "展示更多列" : "隐藏更多列");
      setBtnText("隐藏年龄列");

      setHiddenColumns(
        isHidingMore ? ["mathScore", "englishScore"] : undefined
      );
    };

    return (
      <Space sx={{ flex: true, flexDirection: "column", gap: 20, aic: true }}>
        <Space sx={{ gap: 12 }}>
          <Button
            onClick={toggleAgeColumn}
            sx={{ mr: 20, ls: 0 }}
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
    const [btnTextEven, setBtnTextEven] = useState("设置偶数行颜色");
    const [btnTextCol, setBtnTextCol] = useState("设置奇数列字体颜色");

    const [tableEvenColor, setTableEvenColor] = useState(""); // 控制偶数行背景色
    const [tableColColor, setTableColColor] = useState(""); // 控制奇数列字体颜色

    const dataSource = [
      {
        key: 1,
        name: "李伟",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        sex: "男",
        address: "北京市朝阳区第一湖畔公园",
      },
      {
        key: 2,
        name: "张丽",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        sex: "女",
        address: "上海市浦东新区第一湖畔公园",
      },
      {
        key: 3,
        name: "王强",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        sex: "男",
        address: "广州市天河区第一湖畔公园",
      },
    ];

    const columns = [
      { title: "姓名", dataIndex: "name", key: "name" },
      { title: "年龄", dataIndex: "age", key: "age" },
      { title: "数学成绩", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "英语成绩",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "住址", dataIndex: "address", key: "address" },
    ];

    // 切换偶数行背景色
    const handleEvenColorToggle = () => {
      const isSet = btnTextEven === "重置偶数行颜色";
      setBtnTextEven(isSet ? "设置偶数行颜色" : "重置偶数行颜色");
      setBtnTextCol("设置奇数列字体颜色"); // 重置另一个按钮
      setTableColColor(""); // 清除列样式
      setTableEvenColor(isSet ? "" : "oklch(0.704 0.191 22.216)");
    };

    // 切换奇数列字体颜色
    const handleColColorToggle = () => {
      const isSet = btnTextCol === "重置奇数列颜色";
      setBtnTextCol(isSet ? "设置奇数列字体颜色" : "重置奇数列颜色");
      setBtnTextEven("设置偶数行颜色"); // 重置另一个按钮
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
            sx={{ mr: 20, ls: 0 }}
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
            Table 表格
          </div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            响应式表格组件。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
              imports="Table"
              code={`import { Table } from 'tango-ui-cw' 

export function Demo () {
  const dataSource = [
      {
        key: 1,
        name: "李伟",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        address: "北京市朝阳区第一湖畔公园",
      },
      {
        key: 2,
        name: "张丽",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        address: "上海市浦东新区第一湖畔公园",
      },
      {
        key: 3,
        name: "王强", 
        age: 45,
        mathScore: 75,
        englishScore: 90,
        address: "广州市天河区第一湖畔公园",
      },
    ];

    const columns = [
      { title: "姓名", dataIndex: "name", key: "name" },
      { title: "年龄", dataIndex: "age", key: "age" },
      { title: "数学成绩", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "英语成绩",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "住址", dataIndex: "address", key: "address" },
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
              title="操作"
              imports="Table"
              code={`import { Table } from 'tango-ui-cw' 

export function Demo () {
  const dataSource = [
      {
        key: 1,
        name: "李伟",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        address: "北京市朝阳区第一湖畔公园",
      },
      {
        key: 2,
        name: "张丽",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        address: "上海市浦东新区第一湖畔公园",
      },
      {
        key: 3,
        name: "王强", 
        age: 45,
        mathScore: 75,
        englishScore: 90,
        address: "广州市天河区第一湖畔公园",
      },
    ];

    const columns = [
      { title: "姓名", dataIndex: "name", key: "name" },
      { title: "年龄", dataIndex: "age", key: "age" },
      { title: "数学成绩", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "英语成绩",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "住址", dataIndex: "address", key: "address" },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <Button size="small" type="transparent" onClick={() => console.log(record)}>查看</Button>
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
              title="隐藏列"
              imports="Table"
              code={`import { Table, Space, Button } from 'tango-ui-cw' 

export function Demo () {
  const [btnText, setBtnText] = useState("隐藏年龄列");
    const [btnTextMore, setBtnTextMore] = useState("隐藏更多列");
    const [hiddenColumns, setHiddenColumns] = useState<string[] | undefined>(
      undefined
    );

    const dataSource = [
      {
        key: 1,
        name: "李伟",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        sex: "男",
        address: "北京市朝阳区第一湖畔公园",
      },
      {
        key: 2,
        name: "张丽",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        sex: "女",
        address: "上海市浦东新区第一湖畔公园",
      },
      {
        key: 3,
        name: "王强",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        sex: "男",
        address: "广州市天河区第一湖畔公园",
      },
    ];

    const columns = [
      { title: "姓名", dataIndex: "name", key: "name" },
      { title: "年龄", dataIndex: "age", key: "age" },
      { title: "性别", dataIndex: "sex", key: "sex" },
      { title: "数学成绩", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "英语成绩",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "住址", dataIndex: "address", key: "address" },
    ];

    const toggleAgeColumn = () => {
      const isHidingAge = btnText === "隐藏年龄列";
      setBtnText(isHidingAge ? "显示年龄列" : "隐藏年龄列");
      setBtnTextMore("隐藏更多列");

      setHiddenColumns(isHidingAge ? ["age"] : undefined);
    };

    const toggleMoreColumns = () => {
      const isHidingMore = btnTextMore === "隐藏更多列";
      setBtnTextMore(isHidingMore ? "展示更多列" : "隐藏更多列");
      setBtnText("隐藏年龄列");

      setHiddenColumns(
        isHidingMore ? ["mathScore", "englishScore"] : undefined
      );
    };

    return (
      <Space sx={{ flex: true, flexDirection: "column", gap: 20, aic: true }}>
        <Space sx={{ gap: 12 }}>
          <Button
            onClick={toggleAgeColumn}
            sx={{ mr: 20, ls: 0 }}
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
              jsx={<HideColumnDemo />}
            />
          </div>

              {/* styles */}
              <div id="styles" className="scroll-mt-10">
            <DemoBlock
              title="样式定制"
              imports="Table"
              code={`import { Table, Space, Button } from 'tango-ui-cw' 

export function Demo () {
  const [btnTextEven, setBtnTextEven] = useState("设置偶数行颜色");
    const [btnTextCol, setBtnTextCol] = useState("设置奇数列字体颜色");

    const [tableEvenColor, setTableEvenColor] = useState(""); // 控制偶数行背景色
    const [tableColColor, setTableColColor] = useState(""); // 控制奇数列字体颜色

    const dataSource = [
      {
        key: 1,
        name: "李伟",
        age: 32,
        mathScore: 80,
        englishScore: 87,
        sex: "男",
        address: "北京市朝阳区第一湖畔公园",
      },
      {
        key: 2,
        name: "张丽",
        age: 42,
        mathScore: 60,
        englishScore: 105,
        sex: "女",
        address: "上海市浦东新区第一湖畔公园",
      },
      {
        key: 3,
        name: "王强",
        age: 45,
        mathScore: 75,
        englishScore: 90,
        sex: "男",
        address: "广州市天河区第一湖畔公园",
      },
    ];

    const columns = [
      { title: "姓名", dataIndex: "name", key: "name" },
      { title: "年龄", dataIndex: "age", key: "age" },
      { title: "数学成绩", dataIndex: "mathScore", key: "mathScore" },
      {
        title: "英语成绩",
        dataIndex: "englishScore",
        key: "englishScore",
      },
      { title: "住址", dataIndex: "address", key: "address" },
    ];

    // 切换偶数行背景色
    const handleEvenColorToggle = () => {
      const isSet = btnTextEven === "重置偶数行颜色";
      setBtnTextEven(isSet ? "设置偶数行颜色" : "重置偶数行颜色");
      setBtnTextCol("设置奇数列字体颜色"); // 重置另一个按钮
      setTableColColor(""); // 清除列样式
      setTableEvenColor(isSet ? "" : "oklch(0.704 0.191 22.216)");
    };

    // 切换奇数列字体颜色
    const handleColColorToggle = () => {
      const isSet = btnTextCol === "重置奇数列颜色";
      setBtnTextCol(isSet ? "设置奇数列字体颜色" : "重置奇数列颜色");
      setBtnTextEven("设置偶数行颜色"); // 重置另一个按钮
      setTableEvenColor(""); // 清除行样式
      setTableColColor(isSet ? "" : "aqua");
    };

    return (
      <Space sx={{ flex: true, flexDirection: "column", gap: 20, aic: true }}>
        <Space sx={{ gap: 12 }}>
          <Button
            sx={{ mr: 20, ls: 0 }}
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
            属性
          </div>
          <div id="table" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">表格</div>
          </div>

          <Table
            dataSource={dataSourceZh}
            columns={columnsZh}
            containerStyles={theme === "light" ? {} : { color: "white" }}
            hoverColor="#a6a6a6"
          />
          <div id="columns" className="scroll-mt-10 mt-10">
            <div className="mb-5 dark:text-neutral-300">栏</div>
          </div>
          <Table
            dataSource={columnsDataSourceZh}
            columns={columnsZh}
            containerStyles={theme === "light" ? {} : { color: "white" }}
            hoverColor="#a6a6a6"
          />

          <div id="render" className="scroll-mt-10 mt-10">
            <div className="mb-5 dark:text-neutral-300">渲染内容</div>
          </div>
          <Table
            dataSource={dataSourceRanderZh}
            columns={columnsZh}
            containerStyles={theme === "light" ? {} : { color: "white" }}
            hoverColor="#a6a6a6"
          />

          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3">
            索引
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">
            表格
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
            属性
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
