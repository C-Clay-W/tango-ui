"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

function TangoCss() {
  const theme = useCurrentTheme();

  const codeStyle = theme === "dark" ? atomOneDark : coy;

  return (
    <>
      <div className="text-4xl font-bold mb-5 dark:text-neutral-300">
        Prop <span className="font-bold">{`'sx'`}</span>
      </div>
      <div className="text-xl mb-5 dark:text-neutral-300">
      A new and faster way to express styles.
      </div>
      <div className="text-md mb-5 dark:text-neutral-300 leading-relaxed">
        <p className="mb-3">In most Tango UI components, there are multiple ways to define styles:</p>

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

        <div className="mt-4 p-3 rounded-xl bg-neutral-100 dark:bg-[#282c34] text-sm">
          <p className="mb-2 font-semibold">Samary：</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><code>{`sx=""`}</code> is equivalent to <code>{`className=""`}</code></li>
            <li><code>{`sx={{}}`}</code> is equivalent to <code>{`style={{}}`}</code></li>
            <li>When using class names, you need to add <code>{`"!important"`}</code></li>
            <li>When using Tailwind CSS, you need to add <code>{`"!"`}</code></li>
          </ul>
          <p className="mt-2 text-neutral-500">
          Reason: the component manages built-in styles based on CSS Module, and the weight of <code>className</code> is lower than the built-in styles.
          </p>
        </div>
      </div>

      {/* 示例部分 */}
      <div className="text-3xl font-bold mt-10 mb-5 dark:text-neutral-300">
        Demo
      </div>
      <div className="text-md mb-5 dark:text-neutral-300">
      We use different methods to declare the same style for the button: setting the background color, text color, padding and rounded corners
      </div>
      <div className="space-y-6">
        <div>
          <p className="mb-2 font-semibold">1. Tailwind CSS</p>
          <SyntaxHighlighter language="jsx" style={codeStyle} className="rounded-xl">
            {`<Button className="bg-blue-500 text-white px-4 py-2 rounded">
  Submit
</Button>`}
          </SyntaxHighlighter>
        </div>

        <div>
          <p className="mb-2 font-semibold">2. {`'sx'`} prop</p>
          <SyntaxHighlighter language="jsx" style={codeStyle} className="rounded-xl mb-2">
            {`<Button sx={{ bg: "blue", c: "white", px: 4, py: 2, br: 6 }}>
  Submit
</Button>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx" style={codeStyle} className="rounded-xl mb-2">
            {`<Button sx="!bg-blue-500 !text-white !px-4 !py-2 !rounded">
  Submit
</Button>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx" style={codeStyle} className="rounded-xl mb-2">
            {`<Button sx="my-button-sx">Submit</Button>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="css" style={codeStyle} className="rounded-xl">
            {`.my-button-sx {
  background-color: blue !important;
  color: white !important;
  padding: 8px 16px !important;
  border-radius: 6px !important;
}`}
          </SyntaxHighlighter>
        </div>

        <div>
          <p className="mb-2 font-semibold">3. Inline style</p>
          <SyntaxHighlighter language="jsx" style={codeStyle} className="rounded-xl">
            {`<Button style={{ backgroundColor: "blue", color: "white", padding: "8px 16px", borderRadius: "6px" }}>
  Submit
</Button>`}
          </SyntaxHighlighter>
        </div>

        <div>
          <p className="mb-2 font-semibold">4. CSS class</p>
          <SyntaxHighlighter language="jsx" style={codeStyle} className="rounded-xl mb-2">
            {`<Button className="my-button">Submit</Button>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="css" style={codeStyle} className="rounded-xl">
            {`.my-button {
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
}`}
          </SyntaxHighlighter>
        </div>

        <div>
          <p className="mb-2 font-semibold">5. Components props</p>
          <SyntaxHighlighter language="jsx" style={codeStyle} className="rounded-xl">
            {`<Button type="primary" size="large">
  Submit
</Button>`}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}

export default TangoCss;
