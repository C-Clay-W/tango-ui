"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

function Installation() {
  const theme = useCurrentTheme();

  const npmInstall = `npm install tango-ui-cw`;
  const yarnInstall = `yarn add tango-ui-cw`;
  const pnpmInstall = `pnpm add tango-ui-cw`;
  
  const importCSS = `// Import root component CSS (App.jsx / layout.tsx)
import 'tango-ui-cw/tango.css';`;
  
  const typeDeclaration = `// tango-ui-cw.d.ts (temporary type declaration)
declare module 'tango-ui-cw';`;
  
  const unpkgCDN = `<!-- Add in HTML file's <head> tag -->
<link rel="stylesheet" href="https://unpkg.com/tango-ui-cw@0.8.3/dist/index.css" />
<link rel="stylesheet" href="https://unpkg.com/tango-ui-cw@0.8.3/dist/index.js" />
<link rel="stylesheet" href="https://unpkg.com/tango-ui-cw@0.8.3/dist/index.mjs" />`;
  
  const unpkgImport = `// Dynamic loading in JavaScript/TypeScript
import('https://unpkg.com/tango-ui-cw@0.8.3/dist/index.css');
import('https://unpkg.com/tango-ui-cw@0.8.3/dist/index.js');
import('https://unpkg.com/tango-ui-cw@0.8.3/dist/index.mjs');`;

  return (
    <div className="space-y-8">
      {/* 标题 */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-neutral-100">
        Installation
        </h1>
        <p className="text-lg text-gray-600 dark:text-neutral-400">
        Choose the method that best suits you to install and use Tango UI.
        </p>
      </div>

      {/* NPM/Yarn/PNPM 安装 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">
          1. Install via package manager
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* NPM */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 dark:text-neutral-300 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
              NPM
            </h3>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
              <SyntaxHighlighter
                language="bash"
                style={theme === "dark" ? atomOneDark : coy}
                customStyle={{ margin: 0, fontSize: '14px' }}
              >
                {npmInstall}
              </SyntaxHighlighter>
            </div>
          </div>

          {/* Yarn */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 dark:text-neutral-300 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
              Yarn（future support）
            </h3>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
              <SyntaxHighlighter
                language="bash"
                style={theme === "dark" ? atomOneDark : coy}
                customStyle={{ margin: 0, fontSize: '14px' }}
              >
                {yarnInstall}
              </SyntaxHighlighter>
            </div>
          </div>

          {/* PNPM */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 dark:text-neutral-300 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
              PNPM（future support）
            </h3>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
              <SyntaxHighlighter
                language="bash"
                style={theme === "dark" ? atomOneDark : coy}
                customStyle={{ margin: 0, fontSize: '14px' }}
              >
                {pnpmInstall}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </section>

      {/* 导入样式 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">
          2. Import style
        </h2>
        <p className="text-gray-600 dark:text-neutral-400">
        Import the CSS file into your project's root component：
        </p>
        <div className="rounded-xl border border-gray-300 dark:border-gray-700 overflow-hidden">
          <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
            <span className="text-sm font-medium text-gray-600 dark:text-neutral-400">
              App.jsx / layout.tsx
            </span>
          </div>
          <SyntaxHighlighter
            language="tsx"
            style={theme === "dark" ? atomOneDark : coy}
            customStyle={{ margin: 0, fontSize: '14px' }}
          >
            {importCSS}
          </SyntaxHighlighter>
        </div>
      </section>

      {/* 类型声明 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">
          3. Type Declaration（TypeScript user）
        </h2>
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <span className="text-amber-600 dark:text-amber-400">⚠️</span>
            <p className="text-amber-800 dark:text-amber-300 text-sm">
            Temporary solution: Create a type declaration file in the project root directory to enable TypeScript support.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-gray-300 dark:border-gray-700 overflow-hidden">
          <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
            <span className="text-sm font-medium text-gray-600 dark:text-neutral-400">
              tango-ui-cw.d.ts
            </span>
          </div>
          <SyntaxHighlighter
            language="typescript"
            style={theme === "dark" ? atomOneDark : coy}
            customStyle={{ margin: 0, fontSize: '14px' }}
          >
            {typeDeclaration}
          </SyntaxHighlighter>
        </div>
      </section>

      {/* UNPKG CDN 方式 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">
          🌐 Use via UNPKG CDN（Under maintenance）
        </h2>
        <p className="text-gray-600 dark:text-neutral-400">
        No installation required; simply include it in your HTML via CDN：
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* HTML方式 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-700 dark:text-neutral-300">
              Import in HTML
            </h3>
            <div className="rounded-xl border border-gray-300 dark:border-gray-700 overflow-hidden">
              <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                <span className="text-sm font-medium text-gray-600 dark:text-neutral-400">
                  index.html
                </span>
              </div>
              <SyntaxHighlighter
                language="html"
                style={theme === "dark" ? atomOneDark : coy}
                customStyle={{ margin: 0, fontSize: '14px' }}
              >
                {unpkgCDN}
              </SyntaxHighlighter>
            </div>
          </div>

          {/* JS动态加载 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-700 dark:text-neutral-300">
            Dynamic import（recommended for modern frameworks）
            </h3>
            <div className="rounded-xl border border-gray-300 dark:border-gray-700 overflow-hidden">
              <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                <span className="text-sm font-medium text-gray-600 dark:text-neutral-400">
                  component file
                </span>
              </div>
              <SyntaxHighlighter
                language="javascript"
                style={theme === "dark" ? atomOneDark : coy}
                customStyle={{ margin: 0, fontSize: '14px' }}
              >
                {unpkgImport}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400">💡</span>
            <div>
              <p className="text-blue-800 dark:text-blue-300 font-medium">
              CDN advantages
              </p>
              <ul className="text-blue-700 dark:text-blue-400 text-sm mt-1 space-y-1">
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
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <span className="text-2xl text-green-600 dark:text-green-400">✓</span>
            </div>
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300">
              Bingo！
            </h3>
            <p className="text-green-700 dark:text-green-400">
            Tango UI is ready; start building beautiful interfaces!
            </p>
          </div>
        </div>
      </section>

      {/* 相关链接 */}
      <section className="space-y-4 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">
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