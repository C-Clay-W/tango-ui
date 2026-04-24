"use client";

function Introduction() {
  return (
    <>
      <div
        className="text-4xl font-bold mb-6 doc-theme-title"
        style={{ color: "var(--doc-title-color)" }}
      >
        Tango UI - Modern React Component Library
      </div>

      <div className="space-y-4 mb-8">
        <p
          className="text-lg leading-relaxed doc-theme-color"
          style={{
            color: "var(--doc-text-primary)",
          }}
        >
          Tango UI is a React component library designed for modern web
          applications, providing high-quality UI components and tools to help
          developers quickly build beautiful, responsive, and maintainable user
          interfaces.
        </p>

        <div
          className="p-4 bg-gradient-to-r rounded-xl border"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--doc-gradient-from), var(--doc-gradient-to))",
            borderColor: "var(--doc-card-border)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <h3
              className="font-semibold doc-theme-color"
              style={{ color: "var(--doc-text-primary)" }}
            >
              Compatibility
            </h3>
          </div>
          <p className="doc-theme-color" style={{ color: "var(--doc-text-primary)" }}>
            Fully compatible with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              React 18+
            </span>{" "}
            and
            <span className="font-semibold text-blue-600 dark:text-blue-400 ml-1">
              Next.js 14+
            </span>
            , with excellent support for SSR and App Router.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3
          className="text-2xl font-bold mb-4 doc-theme-title"
          style={{ color: "var(--doc-title-color)" }}
        >
          Rich Component Ecosystem
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            "Button button",
            "Space div",
            "Line divider",
            "Input field",
            "Search input search",
            "Notice notification",
            "Tooltip tips",
            "Modal dialog",
            "Table data presentation",
            "Drawer side panel",
            "Date data display",
            "Mark text highlight",
            "Color Picker pick a color",
            "Date Picker pick a date",
            "Upload file upload",
            "Banner information confirmation",
          ].map((component, index) => (
            <div
              key={index}
              className="p-3 border rounded-lg hover:shadow-md transition-shadow doc-theme-card"
              style={{
                backgroundColor: "var(--doc-card-bg)",
                borderColor: "var(--doc-card-border)",
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span
                  className="font-medium doc-theme-color"
                  style={{ color: "var(--doc-text-primary)" }}
                >
                  {component.split(" ")[0]}
                </span>
              </div>
              <div
                className="text-sm mt-1 doc-theme-muted"
                style={{ color: "var(--doc-text-secondary)" }}
              >
                {component.split(" ").slice(1).join(" ")}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3
          className="text-2xl font-bold mb-4 doc-theme-title"
          style={{ color: "var(--doc-title-color)" }}
        >
          Core Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Modern Design System",
              desc: "Follows modern UI/UX design principles, providing clean and elegant visual experiences",
              icon: "🎨",
            },
            {
              title: "Dark Mode Support",
              desc: "Native light/dark theme support with automatic system preference detection",
              icon: "🌓",
            },
            {
              title: "Full Type Safety",
              desc: "Comprehensive TypeScript support for excellent developer experience",
              icon: "🔒",
            },
            {
              title: "Zero Dependencies",
              desc: "All components are built natively with no external dependencies",
              icon: "📦",
            },
            {
              title: "Responsive Design",
              desc: "All components are optimized for mobile and desktop devices",
              icon: "📱",
            },
            {
              title: "Customizable Styling",
              desc: "Flexible styling system base on TailwindCss support and theme customization",
              icon: "🎯",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-4 border rounded-xl hover:shadow-sm transition-all doc-theme-card"
              style={{
                backgroundColor: "var(--doc-card-bg)",
                borderColor: "var(--doc-card-border)",
              }}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h4
                    className="font-bold mb-1 doc-theme-color"
                    style={{ color: "var(--doc-text-primary)" }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="text-sm doc-theme-muted"
                    style={{ color: "var(--doc-text-secondary)" }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="border-t pt-6 doc-theme-footer-border"
        style={{ borderColor: "var(--doc-footer-border)" }}
      >
        <p
          className="text-center doc-theme-muted"
          style={{
            color: "var(--doc-text-secondary)",
          }}
        >
          Designed and developed by{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            @Clay.W
          </span>
        </p>
      </div>
    </>
  );
}

export default Introduction;
