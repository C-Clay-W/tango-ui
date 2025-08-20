"use client";
import React, { useState } from "react";
import { Button, Table, useNotice } from "tango-ui-cw";
import DemoBlock from "@/components/DemoWideZh";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const NoticeComponent = () => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useCurrentTheme();

  // 平滑滚动到锚点位置
  const sections = [
    { id: "success", label: "成功" },
    { id: "warn", label: "警告" },
    { id: "fail", label: "错误" },
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
      key: '1',
      property: 'type',
      type: 'string',
      values: 'success | fail | caution',
      description: '提供三种通知类型：成功、失败、警告',
      defaultValue: '-'
    },
    
    {
      key: '2',
      property: 'message',
      type: 'ReactNode',
      values: '-',
      description: '通知内容',
      defaultValue: '-'
    }
  ];

  const columns = [
    {
      title: '属性',
      dataIndex: 'property',
      key: 'property',
      className: 'TABLE_TH_STYLE'
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      className: 'TABLE_TH_STYLE'
    },
    {
      title: '可选值',
      dataIndex: 'values',
      key: 'values',
      className: 'TABLE_TH_STYLE'
    },
    {
      title: '说明',
      dataIndex: 'description',
      key: 'description',
      className: 'TABLE_TH_STYLE'
    },
    {
      title: '默认值',
      dataIndex: 'defaultValue',
      key: 'defaultValue',
      className: 'TABLE_TH_STYLE'
    }
  ];

  function SuccessDemo() {
    const notice = useNotice();

    const success = () => notice.success("成功提示!");

    return (
      <>
        <Button type="success" onClick={success}>
        成功
        </Button>
      </>
    );
  }

  function CautionDemo() {
    const notice = useNotice();

    const caution  = () => notice.caution("警告提示!");

    return (
      <>
        <Button sx={{ bg: "orange", bColor: "orange", c: "white" }} onClick={caution}>
        警告
        </Button>
      </>
    );
  }

  function FailDemo() {
    const notice = useNotice();

    const fail  = () => notice.fail("错误提示!");

    return (
      <>
        <Button type="danger" onClick={fail}>
        错误
        </Button>
      </>
    );
  }

  return (
    <>
      <div className="flex w-full">
        <div className="w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw]">
          <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Notice 全局提示</div>
          <div className="mb-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[80vw]  xl:w-[50vw] 2xl:w-[50vw] dark:text-neutral-300">
          全局展示操作反馈信息。
          </div>

          {/* default */}
          <div id="success" className="scroll-mt-10">
            <DemoBlock
              title="成功"
              imports="Button, useNotice"
              code={`import { Button, useNotice } from 'tango-ui-cw' 

export function Demo () {
  const notice = useNotice();
  const success = () => notice.success("成功提示!");

  return (
      <>
        <Button type="success" onClick={success}>
          成功
        </Button>
      </>
    )
  }
  `}
              jsx={<SuccessDemo />}
            />
          </div>

          {/* warn */}
          <div id="warn" className="scroll-mt-10">
          <DemoBlock
              title="警告"
              imports="Button, useNotice"
              code={`import { Button, useNotice } from 'tango-ui-cw' 

export function Demo () {
  const notice = useNotice();
  const caution = () => notice.caution("警告提示!");

  return (
      <>
        <Button sx={{ bg: "orange", bColor: "orange" }} onClick={caution}>
          警告
        </Button>
      </>
    )
  }
  `}
              jsx={<CautionDemo />}
            />
          </div>

          {/* fail */}
          <div id="fail" className="scroll-mt-10">
            <DemoBlock
              title="错误"
              imports="Button, useNotice"
              code={`import { Button, useNotice } from 'tango-ui-cw' 

export function Demo () {
  const notice = useNotice();
  const fail = () => notice.fail("错误提示!");
  
  return (
      <>
        <Button type="danger" onClick={fail}>
          错误
        </Button>
      </>
    )
  }
  `}
              jsx={<FailDemo />}
            />
          </div>

          {/* props */}
          {/* <div className="hidden sm:block md:block lg:block xl:block 2xl:block "> */}
          <div className="text-2xl font-bold mb-5 dark:text-neutral-300">属性</div>
          <div id="props" className="scroll-mt-10">
            <div className="mb-5 dark:text-neutral-300">通用属性</div>
          </div>

          <Table dataSource={dataSource} columns={columns} containerStyles={theme === "light" ? {} : { color: "white" }} hoverColor="#a6a6a6"/>
          {/* </div> */}
        </div>

        {/* 锚点索引区域 */}
        <div className="pl-30 ml-5 pt-30 fixed right-0 hidden sm:hidden md:hidden lg:block lg:w-80 xl:block xl:w-80">
          <div className="text-gray-400 dark:text-gray-400 text-sm mb-3 ">
          索引
          </div>
          <div className="text-sm mb-3 font-bold  dark:text-neutral-300">全局提示</div>

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
                  <span className="mr-2 text-xl leading-none dark:text-neutral-300">-</span>
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
                  <span className="mr-2 text-xl leading-none dark:text-neutral-300">-</span>
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

export default NoticeComponent;
