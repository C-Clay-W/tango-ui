"use client";
import React, { useState } from "react";
import { Upload, Table, useNotice } from "tango-ui-cw";
import DemoBlock from "@/components/DemoWideEn";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const UploadComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();
  const notice = useNotice();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "default", label: "Default" },
    { id: "list", label: "Upload List" },
    { id: "count", label: "Count Limit" },
    { id: "size", label: "Size Limit" },
    { id: "format", label: "Format Limit" },
    { id: "before", label: "Before" },
  ];

  const sections2 = [{ id: "props", label: "Universal Props" }];
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
        "specify the allowed file types. For security reasons, it is recommended to only allow image files to be uploaded. For more formats, please refer to https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file",
      defaultValue: "image/*",
      version: "-",
    },

    {
      key: "2",
      name: "multiple",
      type: "boolean",
      value: "boolean",
      description: "enable multiple file uploads",
      defaultValue: "false",
      version: "-",
    },
    {
      key: "3",
      name: "onChange",
      type: "() => void",
      value: "-",
      description: "callback function when the uploaded file changes",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "4",
      name: "beforeUpload",
      type: "() => void",
      value: "-",
      description: "callback function before uploading a file",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "5",
      name: "files",
      type: "array",
      value: "array",
      description: "upload file list",
      defaultValue: "[]",
      version: "-",
    },
    {
      key: "6",
      name: "showUploadList",
      type: "boolean",
      value: "boolean",
      description: "show upload list",
      defaultValue: "true",
      version: "-",
    },
    {
      key: "7",
      name: "maxCount",
      type: "number",
      value: "number",
      description: "maximum number of uploads",
      defaultValue: "20",
      version: "-",
    },
    {
      key: "8",
      name: "maxSize",
      type: "number",
      value: "number",
      description: "maximum upload file size(MB)",
      defaultValue: "100",
      version: "-",
    },
    {
      key: "9",
      name: "btnText",
      type: "string",
      value: "string",
      description: "upload button text",
      defaultValue: "选择文件",
      version: "0.5.1",
    },
    {
      key: "10",
      name: "btnStyle",
      type: "object",
      value: "object",
      description: "upload button style",
      defaultValue: "-",
      version: "0.5.1",
    },
    {
      key: "11",
      name: "showSize",
      type: "boolean",
      value: "boolean",
      description: "show file size",
      defaultValue: "true",
      version: "0.5.1",
    },
    {
      key: "12",
      name: "sx",
      type: "object",
      value: "object",
      description:
        "inline styles for customizing components. Note: Inline styles set using the 'style' property will override the 'sx' property.",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "13",
      name: "className",
      type: "string",
      value: "string",
      description: "defines the class name of the component.",
      defaultValue: "-",
      version: "-",
    },
    {
      key: "14",
      name: "style",
      type: "object",
      value: "object",
      description: "defines inline styles for a component.",
      defaultValue: "-",
      version: "-",
    },
  ];

  const columns = [
    {
      title: "Prop",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Accepted Values",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Default",
      dataIndex: "defaultValue",
      key: "defaultValue",
    },
    {
      title: "Verson",
      dataIndex: "version",
      key: "version",
    },
  ];

  //   默认上传Demo
  function FormalDemo() {
    const [files, setFiles] = useState([]);
    return (
      <>
        <Upload
          files={files}
          btnText="Select files"
          btnStyle={
            theme === "light" ? {} : { color: "black", letterSpacing: "0px" }
          }
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
          btnText="Select files"
          btnStyle={
            theme === "light" ? {} : { color: "black", letterSpacing: "0px" }
          }
          onChange={(fileList) => {
            console.log("Selected files ==> ", fileList);
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
          btnText="Select files (3 items)"
          btnStyle={
            theme === "light" ? {} : { color: "black", letterSpacing: "0px" }
          }
          showUploadList={true}
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
          btnStyle={
            theme === "light" ? {} : { color: "black", letterSpacing: "0px" }
          }
          btnText="Select files (1 MB)"
          onChange={(fileList) => {
            console.log("fileList ==> ", fileList);
            const sizeInMB = fileList[0]?.size / 1024 / 1024;
            console.log("sizeInMB ==> ", sizeInMB);
            setFiles(fileList); // 只更新状态，不上传
            if (sizeInMB > 1) {
              console.log("if中的sizeInMB ==> ", sizeInMB);
              setFiles([]); // 只更新状态，不上传
              notice.caution("The file size cannot exceed 1MB!");
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
          btnText="Select files (jpeg)"
          btnStyle={
            theme === "light" ? {} : { color: "black", letterSpacing: "0px" }
          }
          accept="image/jpeg"
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
          btnText="Select files"
          btnStyle={
            theme === "light" ? {} : { color: "black", letterSpacing: "0px" }
          }
          onChange={(fileList) => {
            console.log("fileList ==> ", fileList);
            setFiles(fileList); // 只更新状态，不上传
            //  上传逻辑
          }}
          beforeUpload={(file) => {
            console.log("File ready for upload", file);
            // 上传前修改文件名
            const newFile = new File([file], "Cert app photo", {
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
            Upload
          </div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
            File selection upload control.
          </div>

          {/* default */}
          <div id="default" className="scroll-mt-10">
            <DemoBlock
              title="Default"
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
            //  type the upload logic code
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
              title="Upload List"
              imports="Upload"
              code={`import React, { useState } from "react";
import { Upload } from 'tango-ui-cw'
     
function FileListDemo() {
    const [files, setFiles] = useState([]);

    //  async function up() {
    //   if (files.length === 0) {
    //     console.log("No files to upload");
    //     return;
    //   }
    //   // upload logic code
    //   try {
    //     const res = await axios.post("http://localhost:3005/api/upload", files);
    //     console.log("success:", res.data);
    //   } catch (error) {
    //     console.error("fail:", error);
    //   }
    // }

    return (
        <>
        <Upload
            files={files}
            onChange={(fileList) => {
              console.log("Selscted files ==> ", fileList);
              setFiles(fileList); // Only update status, do not upload
            }}
        />
        {/* Click the button to upload */}
        {/* <Button onClick={ up }>Start</Button> */}
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
              title="Count Limit"
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
            //  type the upload logic code
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
              title="Size Limit"
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
            //  type the upload logic code
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
              title="Format Limit"
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
            //  type the upload logic code
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
              title="Before"
              imports="Upload"
              code={`import React, { useState } from "react";
import { Upload } from 'tango-ui-cw'
     
function EditBeforeDemo (){
  const [files, setFiles] = useState([]);

  return (
    <>
      <Upload
          files={files}
          btnText="Select files"
          btnStyle={
            theme === "light" ? {} : { color: "black", letterSpacing: "0px" }
          }
          onChange={(fileList) => {
            console.log("fileList ==> ", fileList);
            setFiles(fileList);
           //  type the upload logic code
          }}
          beforeUpload={(file) => {
            console.log("File ready for upload", file);
            // Modify the file name before uploading
            const newFile = new File([file], 'Cert app photo', {
              type: file.type,
            });
            return newFile; // Replace the original file
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
            Props
          </div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">Universal Props</div>
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
            On This Page
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">
            Upload
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

export default UploadComponent;
