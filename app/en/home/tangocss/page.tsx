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
        Prop <span className="font-bold">{`'sx'`}</span>
      </div>
      <div
        className="text-xl mb-5 doc-theme-color"
        style={{ color: "var(--doc-text-primary)" }}
      >
        A new and faster way to express styles.
      </div>
      <div
        className="text-md mb-5 leading-relaxed doc-theme-color"
        style={{ color: "var(--doc-text-primary)" }}
      >
        <p className="mb-3" style={{ color: "var(--doc-text-primary)" }}>
          In most Tango UI components, there are multiple ways to define styles:
        </p>

        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <span className="font-semibold">Tailwind CSS：</span> The recommended unified style management method is supported by most components.
          </li>
          <li>
            <span className="font-semibold">{`'sx'`} prop：</span> Tango {`UI's`} built-in style expression is an enhancement of <code>style</code>.
          </li>
          <li>
            <span className="font-semibold">Inline style：</span> Write directly on the component <code>{`style={{}}`}</code>.
          </li>
          <li>
            <span className="font-semibold">CSS class：</span> Use <code>className</code> to specify the class name and use it with a .css file to express the style.
          </li>
          <li>
            <span className="font-semibold">Components props：</span> Use the methods provided by the component itself to directly customize the style.
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
            Samary：
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><code>{`sx=""`}</code> is equivalent to <code>{`className=""`}</code></li>
            <li><code>{`sx={{}}`}</code> is equivalent to <code>{`style={{}}`}</code></li>
            <li>When using class names, you need to add <code>{`"!important"`}</code></li>
            <li>When using Tailwind CSS, you need to add <code>{`"!"`}</code></li>
          </ul>
          <p className="mt-2" style={{ color: "var(--doc-text-secondary)" }}>
          Reason: the component manages built-in styles based on CSS Module, and the weight of <code>className</code> is lower than the built-in styles.
          </p>
        </div>
      </div>

      {/* 示例部分 */}
      <div
        className="text-3xl font-bold mt-10 mb-5 doc-theme-title"
        style={{ color: "var(--doc-title-color)" }}
      >
        Demo
      </div>
      <div className="text-md mb-5" style={{ color: "var(--doc-text-primary)" }}>
        We use different methods to declare the same style for the button: setting the background color, text color, padding and rounded corners
      </div>
      <div className="space-y-6">
        <div>
          <p className="mb-2 font-semibold" style={{ color: "var(--doc-text-primary)" }}>1. Tailwind CSS</p>
          <div className="rounded-xl border overflow-hidden" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button className="bg-blue-500 text-white px-4 py-2 rounded">
  Submit
</Button>`} />
          </div>
        </div>

        <div>
          <p className="mb-2 font-semibold" style={{ color: "var(--doc-text-primary)" }}>2. {`'sx'`} prop</p>
          <div className="rounded-xl border overflow-hidden mb-2" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button sx={{ bg: "blue", c: "white", px: 4, py: 2, br: 6 }}>
  Submit
</Button>`} />
          </div>
          <div className="rounded-xl border overflow-hidden mb-2" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button sx="!bg-blue-500 !text-white !px-4 !py-2 !rounded">
  Submit
</Button>`} />
          </div>
          <div className="rounded-xl border overflow-hidden mb-2" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button sx="my-button-sx">Submit</Button>`} />
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
          <p className="mb-2 font-semibold" style={{ color: "var(--doc-text-primary)" }}>3. Inline style</p>
          <div className="rounded-xl border overflow-hidden" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button style={{ backgroundColor: "blue", color: "white", padding: "8px 16px", borderRadius: "6px" }}>
  Submit
</Button>`} />
          </div>
        </div>

        <div>
          <p className="mb-2 font-semibold" style={{ color: "var(--doc-text-primary)" }}>4. CSS class</p>
          <div className="rounded-xl border overflow-hidden mb-2" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button className="my-button">Submit</Button>`} />
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
          <p className="mb-2 font-semibold" style={{ color: "var(--doc-text-primary)" }}>5. Components props</p>
          <div className="rounded-xl border overflow-hidden" style={codeWrapperStyle}>
            <DocCodeBlock code={`<Button type="primary" size="large">
  Submit
</Button>`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TangoCss;
