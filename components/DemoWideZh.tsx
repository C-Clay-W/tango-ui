'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import copylogoblack from '@/assets/copyblack.png';
import copylogowhite from '@/assets/copywhite.png';
import { useCurrentTheme } from '@/hooks/useCurrentTheme';
import DocCodeBlock from '@/components/DocCodeBlock';

export default function DemoWide({
  title,
  code,
  jsx,
  imports,
}: {
  title: string;
  code: string;
  jsx: React.ReactNode; // 接收实际 JSX 内容
  imports: string; // 接收导入的组件名称
}) {
  const [showPreview, setShowPreview] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const theme = useCurrentTheme();

  const switchToPreview = () => {
    setShowPreview(true);
    setShowCode(false);
  };

  const switchToCode = () => {
    setShowPreview(false);
    setShowCode(true);
  };

  const copy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <>
      <div className="text-2xl font-bold mb-5 ml-7" style={{ color: 'var(--doc-text-primary)' }}>
        {title}
      </div>
      <div className="mb-5">
        <span
          onClick={switchToPreview}
          className="ml-5 p-2 rounded-sm cursor-pointer"
          style={{
            backgroundColor: showPreview ? 'var(--doc-code-header-bg)' : 'transparent',
            color: showPreview ? 'var(--doc-text-primary)' : 'var(--doc-text-secondary)',
          }}
        >
          预览
        </span>
        <span
          onClick={switchToCode}
          className="p-2 rounded-sm cursor-pointer"
          style={{
            backgroundColor: showCode ? 'var(--doc-code-header-bg)' : 'transparent',
            color: showCode ? 'var(--doc-text-primary)' : 'var(--doc-text-secondary)',
          }}
        >
          代码
        </span>
      </div>

      <div
        className="w-full h-[30vh] sm:w-[30vw] sm:h-[40vh] md:w-[30vw] md:h-[40vh] lg:w-[30vw] lg:h-[50vh] xl:w-[30vw] xl:h-[50vh] 2xl:w-[35vw] mb-10 border rounded-xl flex justify-center items-center relative"
        style={{ borderColor: 'var(--doc-card-border)' }}
      >
        {showCode && (
          <Image
            src={theme === 'dark' ? copylogoblack : copylogowhite}
            alt="Copy Logo"
            width={24}
            height={24}
            className="absolute top-3 right-3 z-10 cursor-pointer"
            onClick={copy}
          />
        )}

        {showPreview && jsx} {/* 渲染实际传入的 JSX 内容 */}
        {showCode && (
          <div className="w-full h-full rounded-xl overflow-auto hide-scrollbar">
            <DocCodeBlock code={code} className="h-full hide-scrollbar" />
          </div>
        )}
      </div>
    </>
  );
}
