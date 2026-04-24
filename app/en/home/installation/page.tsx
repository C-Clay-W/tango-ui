"use client";

import DocCodeBlock from "@/components/DocCodeBlock";

function Installation() {
  const npmInstall = `npm install tango-ui-cw`;
  const yarnInstall = `yarn add tango-ui-cw`;
  const pnpmInstall = `pnpm add tango-ui-cw`;
  
  const importCSS = `// Import root component CSS (App.jsx / layout.tsx)
import 'tango-ui-cw/tango.css';`;
  
  const typeDeclaration = `// tango-ui-cw.d.ts (temporary type declaration)
declare module 'tango-ui-cw';`;
  
  const unpkgCDN = `<!-- Add in HTML file's <head> tag -->
<link rel="stylesheet" href="https://unpkg.com/tango-ui-cw@${process.env.NEXT_PUBLIC_TANGO_UI_VERSION}/dist/index.css" />
<link rel="stylesheet" href="https://unpkg.com/tango-ui-cw@${process.env.NEXT_PUBLIC_TANGO_UI_VERSION}/dist/index.js" />
<link rel="stylesheet" href="https://unpkg.com/tango-ui-cw@${process.env.NEXT_PUBLIC_TANGO_UI_VERSION}/dist/index.mjs" />`;
  
  const unpkgImport = `// Dynamic loading in JavaScript/TypeScript
import('https://unpkg.com/tango-ui-cw@${process.env.NEXT_PUBLIC_TANGO_UI_VERSION}/dist/index.css');
import('https://unpkg.com/tango-ui-cw@${process.env.NEXT_PUBLIC_TANGO_UI_VERSION}/dist/index.js');
import('https://unpkg.com/tango-ui-cw@${process.env.NEXT_PUBLIC_TANGO_UI_VERSION}/dist/index.mjs');`;

  return (
    <div className="space-y-8">
      {/* 标题 */}
      <div className="space-y-2">
        <h1
          className="text-4xl font-bold doc-theme-title"
          style={{ color: "var(--doc-title-color)" }}
        >
        Installation
        </h1>
        <p
          className="text-lg doc-theme-muted"
          style={{ color: "var(--doc-text-secondary)" }}
        >
        Choose the method that best suits you to install and use Tango UI.
        </p>
      </div>

      {/* NPM/Yarn/PNPM 安装 */}
      <section className="space-y-4">
        <h2
          className="text-2xl font-bold doc-theme-color"
          style={{ color: "var(--doc-text-primary)" }}
        >
          1. Install via package manager
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* NPM */}
          <div className="space-y-2">
            <h3
              className="font-semibold flex items-center gap-2 doc-theme-color"
              style={{ color: "var(--doc-text-primary)" }}
            >
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
              NPM
            </h3>
            <div
              className="rounded-lg border overflow-hidden doc-theme-code-wrapper"
              style={{ borderColor: "var(--doc-code-wrapper-border)" }}
            >
              <DocCodeBlock code={npmInstall} />
            </div>
          </div>

          {/* Yarn */}
          <div className="space-y-2">
            <h3
              className="font-semibold flex items-center gap-2 doc-theme-color"
              style={{ color: "var(--doc-text-primary)" }}
            >
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
              Yarn（future support）
            </h3>
            <div
              className="rounded-lg border overflow-hidden doc-theme-code-wrapper"
              style={{ borderColor: "var(--doc-code-wrapper-border)" }}
            >
              <DocCodeBlock code={yarnInstall} />
            </div>
          </div>

          {/* PNPM */}
          <div className="space-y-2">
            <h3
              className="font-semibold flex items-center gap-2 doc-theme-color"
              style={{ color: "var(--doc-text-primary)" }}
            >
              <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
              PNPM（future support）
            </h3>
            <div
              className="rounded-lg border overflow-hidden doc-theme-code-wrapper"
              style={{ borderColor: "var(--doc-code-wrapper-border)" }}
            >
              <DocCodeBlock code={pnpmInstall} />
            </div>
          </div>
        </div>
      </section>

      {/* 导入样式 */}
      <section className="space-y-4">
        <h2
          className="text-2xl font-bold doc-theme-color"
          style={{ color: "var(--doc-text-primary)" }}
        >
          2. Import style
        </h2>
        <p className="doc-theme-muted" style={{ color: "var(--doc-text-secondary)" }}>
        Import the CSS file into your project's root component：
        </p>
        <div
          className="rounded-xl border overflow-hidden doc-theme-code-wrapper"
          style={{ borderColor: "var(--doc-code-wrapper-border)" }}
        >
          <div
            className="px-4 py-2 border-b doc-theme-code-header"
            style={{
              backgroundColor: "var(--doc-code-header-bg)",
              borderColor: "var(--doc-code-header-border)",
            }}
          >
            <span
              className="text-sm font-medium doc-theme-muted"
              style={{ color: "var(--doc-text-secondary)" }}
            >
              App.jsx / layout.tsx
            </span>
          </div>
          <DocCodeBlock code={importCSS} />
        </div>
      </section>

      {/* 类型声明 */}
      <section className="space-y-4">
        <h2
          className="text-2xl font-bold doc-theme-color"
          style={{ color: "var(--doc-text-primary)" }}
        >
          3. Type Declaration（TypeScript user）
        </h2>
        <div
          className="border rounded-lg p-4"
          style={{
            backgroundColor: "var(--doc-warn-bg)",
            borderColor: "var(--doc-warn-border)",
          }}
        >
          <div className="flex items-start gap-2">
            <span style={{ color: "var(--doc-warn-text)" }}>⚠️</span>
            <p className="text-sm" style={{ color: "var(--doc-warn-text)" }}>
            Temporary solution: Create a type declaration file in the project root directory to enable TypeScript support.
            </p>
          </div>
        </div>
        <div
          className="rounded-xl border overflow-hidden doc-theme-code-wrapper"
          style={{ borderColor: "var(--doc-code-wrapper-border)" }}
        >
          <div
            className="px-4 py-2 border-b doc-theme-code-header"
            style={{
              backgroundColor: "var(--doc-code-header-bg)",
              borderColor: "var(--doc-code-header-border)",
            }}
          >
            <span
              className="text-sm font-medium doc-theme-muted"
              style={{ color: "var(--doc-text-secondary)" }}
            >
              tango-ui-cw.d.ts
            </span>
          </div>
          <DocCodeBlock code={typeDeclaration} />
        </div>
      </section>

      {/* UNPKG CDN 方式 */}
      <section className="space-y-4">
        <h2
          className="text-2xl font-bold doc-theme-color"
          style={{ color: "var(--doc-text-primary)" }}
        >
          🌐 Use via UNPKG CDN（Under maintenance）
        </h2>
        <p className="doc-theme-muted" style={{ color: "var(--doc-text-secondary)" }}>
        No installation required; simply include it in your HTML via CDN：
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* HTML方式 */}
          <div className="space-y-3">
            <h3
              className="font-semibold doc-theme-color"
              style={{ color: "var(--doc-text-primary)" }}
            >
              Import in HTML
            </h3>
            <div
              className="rounded-xl border overflow-hidden doc-theme-code-wrapper"
              style={{ borderColor: "var(--doc-code-wrapper-border)" }}
            >
              <div
                className="px-4 py-2 border-b doc-theme-code-header"
                style={{
                  backgroundColor: "var(--doc-code-header-bg)",
                  borderColor: "var(--doc-code-header-border)",
                }}
              >
                <span
                  className="text-sm font-medium doc-theme-muted"
                  style={{ color: "var(--doc-text-secondary)" }}
                >
                  index.html
                </span>
              </div>
              <DocCodeBlock code={unpkgCDN} />
            </div>
          </div>

          {/* JS动态加载 */}
          <div className="space-y-3">
            <h3
              className="font-semibold doc-theme-color"
              style={{ color: "var(--doc-text-primary)" }}
            >
            Dynamic import（recommended for modern frameworks）
            </h3>
            <div
              className="rounded-xl border overflow-hidden doc-theme-code-wrapper"
              style={{ borderColor: "var(--doc-code-wrapper-border)" }}
            >
              <div
                className="px-4 py-2 border-b doc-theme-code-header"
                style={{
                  backgroundColor: "var(--doc-code-header-bg)",
                  borderColor: "var(--doc-code-header-border)",
                }}
              >
                <span
                  className="text-sm font-medium doc-theme-muted"
                  style={{ color: "var(--doc-text-secondary)" }}
                >
                  component file
                </span>
              </div>
              <DocCodeBlock code={unpkgImport} />
            </div>
          </div>
        </div>

        <div
          className="border rounded-lg p-4"
          style={{
            backgroundColor: "var(--doc-info-bg)",
            borderColor: "var(--doc-info-border)",
          }}
        >
          <div className="flex items-start gap-2">
            <span style={{ color: "var(--doc-info-text)" }}>💡</span>
            <div>
              <p className="font-medium" style={{ color: "var(--doc-info-title)" }}>
              CDN advantages
              </p>
              <ul className="text-sm mt-1 space-y-1" style={{ color: "var(--doc-info-text)" }}>
                <li>• No build, fast development</li>
                <li>• Get the latest version automatically</li>
                <li>• Suitable for static websites or simple projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 完成提示 */}
      <section className="space-y-4">
        <div
          className="border rounded-xl p-6 text-center"
          style={{
            backgroundColor: "var(--doc-success-bg)",
            borderColor: "var(--doc-success-border)",
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "var(--doc-success-icon-bg)" }}
            >
              <span className="text-2xl" style={{ color: "var(--doc-success-text)" }}>✓</span>
            </div>
            <h3 className="text-xl font-bold" style={{ color: "var(--doc-success-title)" }}>
              Bingo！
            </h3>
            <p style={{ color: "var(--doc-success-text)" }}>
            Tango UI is ready; start building beautiful interfaces!
            </p>
          </div>
        </div>
      </section>

      {/* 相关链接 */}
      <section
        className="space-y-4 pt-8 border-t doc-theme-section-border"
        style={{ borderColor: "var(--doc-section-border)" }}
      >
        <h2
          className="text-2xl font-bold doc-theme-color"
          style={{ color: "var(--doc-text-primary)" }}
        >
        Related Links
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.npmjs.com/package/tango-ui-cw"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white dark:text-neutral-100 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>📦</span>
            NPM website
          </a>
          <a
            href="https://unpkg.com/tango-ui-cw/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>🌐</span>
            UNPKG CDN
          </a>
        </div>
      </section>
    </div>
  );
}

export default Installation;