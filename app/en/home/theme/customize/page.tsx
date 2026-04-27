import React from "react";
import DocCodeBlock from "@/components/DocCodeBlock";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="text-4xl font-bold mb-5" style={{ color: "var(--doc-title-color)" }}>
        Theme Customize
      </div>

      <div className="mb-8" style={{ color: "var(--doc-text-secondary)" }}>
        You can use the built-in theme capability from <span className="font-semibold">tango-ui-cw</span> to
        switch dark/light mode quickly, and further customize brand/semantic colors with CSS variables.
      </div>

      <div className="text-2xl font-bold mb-3" style={{ color: "var(--doc-text-primary)" }}>
        1. Setup ThemeProvider in Root Layout
      </div>
      <div className="mb-3" style={{ color: "var(--doc-text-secondary)" }}>
        Based on your current root layout, import ThemeProvider and wrap children:
      </div>
      <div
        className="rounded-lg border overflow-hidden"
        style={{ borderColor: "var(--doc-code-wrapper-border)" }}
      >
        <DocCodeBlock code={`import { ThemeProvider } from "tango-ui-cw";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`} />
      </div>

      <div className="mt-8 text-2xl font-bold mb-3" style={{ color: "var(--doc-text-primary)" }}>
        2. Use useTheme in Any Client Component
      </div>
      <div className="mb-3" style={{ color: "var(--doc-text-secondary)" }}>
        In any component that needs to switch theme, use <span className="font-semibold">useTheme</span> and call
        <span className="font-semibold"> setTheme </span>.
      </div>
      <div
        className="rounded-lg border overflow-hidden"
        style={{ borderColor: "var(--doc-code-wrapper-border)" }}
      >
        <DocCodeBlock code={`"use client";

import { useTheme } from "tango-ui-cw";

export default function ThemeSwitchExample() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <div>Current theme: {theme}</div>
    </div>
  );
}`} />
      </div>

      <div className="mt-8 text-2xl font-bold mb-3" style={{ color: "var(--doc-text-primary)" }}>
        3. Advanced Color Customization via CSS Variables
      </div>
      <div className="mb-3" style={{ color: "var(--doc-text-secondary)" }}>
        If you need more than dark/light switching, you can directly set brand and semantic CSS variables:
      </div>
      <div
        className="rounded-lg border overflow-hidden"
        style={{ borderColor: "var(--doc-code-wrapper-border)" }}
      >
        <DocCodeBlock code={`const changeThemeColor = (color) => {
  document.documentElement.style.setProperty("--primary", color); // Brand primary color (global base)
  // Semantic variables below are independent. Set only the ones you need.
  document.documentElement.style.setProperty("--input-accent", color); // Input interaction accent
  document.documentElement.style.setProperty("--modal-ok-bg", color); // Modal OK button color
  document.documentElement.style.setProperty("--drawer-ok-bg", color); // Drawer OK button color
  document.documentElement.style.setProperty("--datepicker-confirm-bg", color); // DatePicker confirm color
  setPrimaryColor(color);
  };`} />
    </div>

      <div className="mt-8 text-2xl font-bold mb-3" style={{ color: "var(--doc-text-primary)" }}>
        4. Theme Initialization Tips
      </div>
      <ul className="list-disc pl-5 space-y-2" style={{ color: "var(--doc-text-secondary)" }}>
        <li>On first load, read theme from localStorage and apply class/data-theme to html to avoid flash.</li>
        <li>If you support system mode, use prefers-color-scheme for automatic OS-level matching.</li>
        <li>Use suppressHydrationWarning to reduce SSR/CSR mismatch warnings for initial theme state.</li>
      </ul>

      <div
        className="mt-8 p-4 border rounded"
        style={{ backgroundColor: "var(--doc-info-bg)", borderColor: "var(--doc-info-border)" }}
      >
        <div className="font-semibold mb-2" style={{ color: "var(--doc-info-title)" }}>Mapping to Your Current Implementation</div>
        <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--doc-info-text)" }}>
          <li>Root layout already wraps the app with ThemeProvider.</li>
          <li>In pages/components, use setTheme from useTheme to switch themes.</li>
          <li>Brand and semantic colors can be updated dynamically via document.documentElement.style.setProperty.</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;