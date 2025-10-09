"use client";
import React, { useState } from "react";
import { Upload, Table, useNotice } from "tango-ui-cw";
import DemoBlock from "@/components/DemoWideZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const UploadComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();
  const notice = useNotice();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "默认" },
    { id: "list", label: "待上传列表" },
    { id: "count", label: "限制数量" },
    { id: "size", label: "限制大小" },
    { id: "format", label: "限制格式" },
    { id: "before", label: "上传前修改" },
  ];

  const sections2 = [{ id: "props", label: "通用属性" }];
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

  const dataSource = [
    {
      key: "1",
      name: "accept",
      type: "string",
      value: "image/* | video/* | audio/*",
      description:
        "指定允许的文件类型,为了安全起见,建议只允许上传图片文件。更多格式可以参考 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file",
      defaultValue: "image/*",
      version: "-",
    },

    {
      key: "2",
      name: "multiple",
      type: "boolean",
      value: "boolean",
      description: "是否允许多文件上传",
      defaultValue: "false",
      version: "-",
    },
    {
      key: "3",
      name: "onChange",
      type: "() => void",
      value: "-",
      description: "上传文件变化时的回调函数",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "4",
      name: "beforeUpload",
      type: "() => void",
      value: "-",
      description: "上传文件之前的回调函数",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "5",
      name: "files",
      type: "array",
      value: "array",
      description: "上传文件列表",
      defaultValue: "[]",
      version: "-",
    },
    {
      key: "6",
      name: "showUploadList",
      type: "boolean",
      value: "boolean",
      description: "是否显示上传列表",
      defaultValue: "true",
      version: "-",
    },
    {
      key: "7",
      name: "maxCount",
      type: "number",
      value: "number",
      description: "最大上传数量",
      defaultValue: "20",
      version: "-",
    },
    {
      key: "8",
      name: "maxSize",
      type: "number",
      value: "number",
      description: "最大上传文件大小(MB)",
      defaultValue: "100",
      version: "-",
    },
    {
      key: "9",
      name: "btnText",
      type: "string",
      value: "string",
      description: "上传按钮文本",
      defaultValue: "选择文件",
      version: "0.5.1",
    },
    {
      key: "10",
      name: "btnStyle",
      type: "object",
      value: "object",
      description: "上传按钮样式",
      defaultValue: "-",
      version: "0.5.1",
    },
    {
      key: "11",
      name: "showSize",
      type: "boolean",
      value: "boolean",
      description: "是否显示文件大小",
      defaultValue: "true",
      version: "0.5.1",
    },
    {
      key: "12",
      name: "sx",
      type: "object",
      value: "object",
      description:
        "用于自定义组件的内联样式。注意：使用 'style' 属性设置的内联样式将覆盖 'sx' 属性。",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "13",
      name: "className",
      type: "string",
      value: "string",
      description: "定义组件的类名。",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "14",
      name: "style",
      type: "object",
      value: "object",
      description: "定义组件的内联样式。",
      defaultValue: "-",
      version: "-",
    },
  ];

  const columns = [
    {
      title: "属性",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "可选值",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "说明",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "默认值",
      dataIndex: "defaultValue",
      key: "defaultValue",
    },
    { title: "版本", dataIndex: "version", key: "version" },
  ];

  //   默认上传Demo
  function FormalDemo() {
    const [files, setFiles] = useState([]);
    return (
      <>
        <Upload
          files={files}
          btnStyle={theme === "light" ? {} : { color: "black" }}
          onChange={(fileList) => {
            console.log("fileList ==> ", fileList);
            setFiles(fileList); // 只更新状态，不上传
            //  上传逻辑
          }}
        />
      </>
    );
  }

  //   待上传列表Demo
  function FileListDemo() {
    const [files, setFiles] = useState([
      {
        name: "card.png",
      },
      {
        name: "avatar.png",
      },
    ]);

    // async function up() {
    //   if (files.length === 0) {
    //     console.log("没有文件需要上传");
    //     return;
    //   }
    //   // 上传逻辑
    //   try {
    //     const res = await axios.post("http://localhost:3005/api/upload", files);
    //     console.log("上传成功:", res.data);
    //   } catch (error) {
    //     console.error("上传失败:", error);
    //   }
    // }

    return (
      <>
        <Upload
          files={files}
          multiple
          btnStyle={theme === "light" ? {} : { color: "black" }}
          onChange={(fileList) => {
            console.log("选择文件 ==> ", fileList);
            setFiles(fileList); // 只更新状态，不上传
          }}
        />
        {/* 点击按钮才上传 */}
        {/* <Button onClick={up}>开始上传</Button> */}
      </>
    );
  }

  //   限制数量上传Demo
  function LimitCountDemo() {
    const [files, setFiles] = useState([]);
    return (
      <>
        <Upload
          files={files}
          multiple
          maxCount={3}
          btnStyle={theme === "light" ? {} : { color: "black" }}
          showUploadList={true}
          btnText="选择文件 (最大3个)"
          onChange={(fileList) => {
            console.log("fileList ==> ", fileList);
            setFiles(fileList); // 只更新状态，不上传
            //  上传逻辑
          }}
        />
      </>
    );
  }

  //   限制大小上传Demo
  function LimitSizeDemo() {
    const [files, setFiles] = useState([]);
    const [fileSize, setFileSize] = useState(1);

    return (
      <>
        <Upload
          files={files}
          btnStyle={theme === "light" ? {} : { color: "black" }}
          btnText="选择文件 (最大1MB)"
          onChange={(fileList) => {
            console.log("fileList ==> ", fileList);
            const sizeInMB = fileList[0]?.size / 1024 / 1024;
            console.log("sizeInMB ==> ", sizeInMB);
            setFiles(fileList); // 只更新状态，不上传
            if (sizeInMB > 1) {
              console.log("if中的sizeInMB ==> ", sizeInMB);
              setFiles([]); // 只更新状态，不上传
              notice.caution("文件大小不能超过1MB!");
            }
            //  上传逻辑
          }}
        />
      </>
    );
  }

  //   限制格式上传Demo
  function LimitFormalDemo() {
    const [files, setFiles] = useState([]);

    return (
      <>
        <Upload
          files={files}
          btnStyle={theme === "light" ? {} : { color: "black" }}
          accept="image/jpeg"
          btnText="选择文件 (jpeg)"
          onChange={(fileList) => {
            console.log("fileList ==> ", fileList);
            setFiles(fileList); // 只更新状态，不上传
            //  上传逻辑
          }}
        />
      </>
    );
  }

  //   上传前修改上传Demo
  function EditBeforeDemo() {
    const [files, setFiles] = useState([]);

    return (
      <>
        <Upload
          files={files}
          btnStyle={theme === "light" ? {} : { color: "black" }}
          onChange={(fileList) => {
            console.log("fileList ==> ", fileList);
            setFiles(fileList); // 只更新状态，不上传
            //  上传逻辑
          }}
          beforeUpload={(file) => {
            console.log("文件准备上传", file);
            // 上传前修改文件名
            const newFile = new File([file], "证书申请照片", {
              type: file.type,
            });
            return newFile; // 替换原文件
          }}
        />
      </>
    );
  }

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">
            Upload 上传
          </div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            文件选择上传控件。
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="默认"
              imports="Upload"
              code={`import React, { useState } from "react";
import { Upload } from 'tango-ui-cw'
     
function FormalDemo (){
  const [files, setFiles] = useState([]);
  return (
    <>
      <Upload
        files={files}
        onChange={(fileList) => {
            console.log("fileList ==> ", fileList);
            setFiles(fileList);
            //  上传逻辑
        }}
      />
    </>
  );
}
   `}
              jsx={<FormalDemo />}
            />
          </div>

          {/* list */}
          <div id="list" className="scroll-mt-10">
            <DemoBlock
              title="待上传列表"
              imports="Upload"
              code={`import React, { useState } from "react";
import { Upload } from 'tango-ui-cw'
     
function FileListDemo() {
    const [files, setFiles] = useState([]);

    //  async function up() {
    //   if (files.length === 0) {
    //     console.log("没有文件需要上传");
    //     return;
    //   }
    //   // 上传逻辑
    //   try {
    //     const res = await axios.post("http://localhost:3005/api/upload", files);
    //     console.log("上传成功:", res.data);
    //   } catch (error) {
    //     console.error("上传失败:", error);
    //   }
    // }

    return (
        <>
        <Upload
            files={files}
            onChange={(fileList) => {
              console.log("选择文件 ==> ", fileList);
              setFiles(fileList); // 只更新状态，不上传
            }}
        />
        {/* 点击按钮才上传 */}
        {/* <Button onClick={up}>开始上传</Button> */}
        </>
    );
    }
`}
              jsx={<FileListDemo />}
            />
          </div>

          {/* count */}
          <div id="count" className="scroll-mt-10">
            <DemoBlock
              title="限制数量"
              imports="Upload"
              code={`import React, { useState } from "react";
import { Upload } from 'tango-ui-cw'
     
function LimitCountDemo (){
  const [files, setFiles] = useState([]);
  return (
    <>
      <Upload
        files={files}
        multiple
        maxCount={3}
        onChange={(fileList) => {
            console.log("fileList ==> ", fileList);
            setFiles(fileList);
            //  上传逻辑
        }}
      />
    </>
  );
}
   `}
              jsx={<LimitCountDemo />}
            />
          </div>

          {/* size */}
          <div id="size" className="scroll-mt-10">
            <DemoBlock
              title="限制大小"
              imports="Upload"
              code={`import React, { useState } from "react";
import { Upload, useNotice } from 'tango-ui-cw'
     
function LimitSizeDemo (){
  const [files, setFiles] = useState([]);
  const [fileSize, setFileSize] = useState(1);
  const notice = useNotice();

  return (
    <>
      <Upload
          files={files}
          maxSize={fileSize}
          onChange={(fileList) => {
            console.log("fileList ==> ", fileList);
            setFiles(fileList);
            //  上传逻辑
          }}
        />
    </>
  );
}
   `}
              jsx={<LimitSizeDemo />}
            />
          </div>

          {/* format */}
          <div id="format" className="scroll-mt-10">
            <DemoBlock
              title="限制格式"
              imports="Upload"
              code={`import React, { useState } from "react";
import { Upload } from 'tango-ui-cw'
     
function LimitSizeDemo (){
  const [files, setFiles] = useState([]);

  return (
    <>
      <Upload
          files={files}
          accept="image/jpeg"
          onChange={(fileList) => {
            console.log("fileList ==> ", fileList);
            setFiles(fileList);
            //  上传逻辑
          }}
        />
    </>
  );
}
   `}
              jsx={<LimitFormalDemo />}
            />
          </div>

          {/* before */}
          <div id="before" className="scroll-mt-10">
            <DemoBlock
              title="上传前修改"
              imports="Upload"
              code={`import React, { useState } from "react";
import { Upload } from 'tango-ui-cw'
     
function EditBeforeDemo (){
  const [files, setFiles] = useState([]);

  return (
    <>
      <Upload
          files={files}
          btnStyle={theme === "light" ? {} : { color: "black" }}
          onChange={(fileList) => {
            console.log("fileList ==> ", fileList);
            setFiles(fileList); // 只更新状态，不上传
            //  上传逻辑
          }}
          beforeUpload={(file) => {
            console.log("文件准备上传", file);
            // 上传前修改文件名
            const newFile = new File([file], '证书申请照片', {
              type: file.type,
            });
            return newFile; // 替换原文件
          }}
        />
    </>
  );
}
   `}
              jsx={<EditBeforeDemo />}
            />
          </div>

          {/* props */}
          {/* <div className="hidden sm:block md:block lg:block xl:block 2xl:block "> */}
          <div className="text-2xl font-bold mb-5 dark:text-neutral-300">
            属性
          </div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">通用属性</div>
          </div>

          <Table
            dataSource={dataSource}
            columns={columns}
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
            上传
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

export default UploadComponent;
