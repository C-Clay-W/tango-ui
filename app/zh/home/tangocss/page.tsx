"use client";

import DocCodeBlock from "@/components/DocCodeBlock";

function TangoCss() {
  const codeWrapperStyle = { borderColor: "var(--doc-code-wrapper-border)" };

  return (
    <>
      <div
        className="text-4xl font-bold mb-5 doc-theme-title"
        style={{ color: "var(--doc-title-color)" }}
      >
        <span className="font-bold">sx</span> 属性
      </div>
      <div
        className="text-xl mb-5 doc-theme-color"
        style={{ color: "var(--doc-text-primary)" }}
      >
        一种全新、快捷的样式表达。
      </div>
      <div
        className="text-md mb-5 leading-relaxed doc-theme-color"
        style={{ color: "var(--doc-text-primary)" }}
      >
        <p className="mb-3" style={{ color: "var(--doc-text-primary)" }}>
          在 Tango UI 大部分组件中，定义样式有多种方式：
        </p>

        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <span className="font-semibold">Tailwind CSS：</span> 推荐使用的统一样式管理方式，大多数组件均支持。
          </li>
          <li>
            <span className="font-semibold">sx 属性：</span> Tango UI 内置的样式表达，是对 <code>style</code> 的强化。
          </li>
          <li>
            <span className="font-semibold">行内 style：</span> 直接在组件上编写 <code>{`style={{}}`}</code>。
          </li>
          <li>
            <span className="font-semibold">CSS 类名：</span> 通过 <code>className</code> 来指定类名配合 .css 文件来表达样式。
          </li>
          <li>
            <span className="font-semibold">组件 props：</span> 通过组件本身提供的方法，来直接自定义样式。
          </li>
        </ol>

        <div
          className="mt-4 p-3 rounded-xl border text-sm"
          style={{
            backgroundColor: "var(--doc-card-bg)",
            borderColor: "var(--doc-card-border)",
            color: "var(--doc-text-primary)",
          }}
        >
          <p className="mb-2 font-semibold" style={{ color: "var(--doc-text-primary)" }}>
            摘要：
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><code>{`sx=""`}</code> 等同于 <code>{`className=""`}</code></li>
            <li><code>{`sx={{}}`}</code> 等同于 <code>{`style={{}}`}</code></li>
            <li>使用类名时需在 CSS 文件中添加 <code>{`"!important"`}</code></li>
            <li>使用 Tailwind CSS 时需在类名前添加 <code>{`"!"`}</code></li>
          </ul>
          <p className="mt-2" style={{ color: "var(--doc-text-secondary)" }}>
            这是因为：组件基于 CSS Module 来管理内置样式，<code>className</code> 的权重低于内置样式。
          </p>
        </div>
      </div>

      {/* 示例部分 */}
      <div
        className="text-3xl font-bold mt-10 mb-5 doc-theme-title"
        style={{ color: "var(--doc-title-color)" }}
      >
        示例
      </div>
      <div className="text-md mb-5" style={{ color: "var(--doc-text-primary)" }}>
        我们使用不同方式来对按钮进行相同的样式声明：设置背景颜色、文字颜色、内间距与圆角
      </div>
      <div className="space-y-6">
        <div>
          <p className="mb-2 font-semibold" style={{ color: "var(--doc-text-primary)" }}>1. Tailwind CSS</p>
          <div className="rounded-xl border overflow-hidden" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button className="bg-blue-500 text-white px-4 py-2 rounded">
  提交
</Button>`} />
          </div>
        </div>

        <div>
          <p className="mb-2 font-semibold" style={{ color: "var(--doc-text-primary)" }}>2. sx 属性</p>
          <div className="rounded-xl border overflow-hidden mb-2" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button sx={{ bg: "blue", c: "white", px: 4, py: 2, br: 6 }}>
  提交
</Button>`} />
          </div>
          <div className="rounded-xl border overflow-hidden mb-2" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button sx="!bg-blue-500 !text-white !px-4 !py-2 !rounded">
  提交
</Button>`} />
          </div>
          <div className="rounded-xl border overflow-hidden mb-2" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button sx="my-button-sx">提交</Button>`} />
          </div>
          <div className="rounded-xl border overflow-hidden" style={codeWrapperStyle}>
            <DocCodeBlock code={`.my-button-sx {
  background-color: blue !important;
  color: white !important;
  padding: 8px 16px !important;
  border-radius: 6px !important;
}`} />
          </div>
        </div>

        <div>
          <p className="mb-2 font-semibold" style={{ color: "var(--doc-text-primary)" }}>3. 行内 style</p>
          <div className="rounded-xl border overflow-hidden" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button style={{ backgroundColor: "blue", color: "white", padding: "8px 16px", borderRadius: "6px" }}>
  提交
</Button>`} />
          </div>
        </div>

        <div>
          <p className="mb-2 font-semibold" style={{ color: "var(--doc-text-primary)" }}>4. CSS 类名</p>
          <div className="rounded-xl border overflow-hidden mb-2" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button className="my-button">提交</Button>`} />
          </div>
          <div className="rounded-xl border overflow-hidden" style={codeWrapperStyle}>
            <DocCodeBlock code={`.my-button {
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
}`} />
          </div>
        </div>

        <div>
          <p className="mb-2 font-semibold" style={{ color: "var(--doc-text-primary)" }}>5. 组件 props</p>
          <div className="rounded-xl border overflow-hidden" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button type="primary" size="large">
  提交
</Button>`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TangoCss;
