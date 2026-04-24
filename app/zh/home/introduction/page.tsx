"use client";

function Introduction() {
  return (
    <>
      <div
        className="text-4xl font-bold mb-6 doc-theme-title"
        style={{ color: "var(--doc-title-color)" }}
      >
        Tango UI - 现代 React 组件库
      </div>

      <div className="space-y-4 mb-8">
        <p
          className="text-lg leading-relaxed doc-theme-color"
          style={{
            color: "var(--doc-text-primary)",
          }}
        >
          Tango UI 是一个专为现代 Web 应用设计的 React 组件库，提供高质量的 UI
          组件和工具， 帮助开发者快速构建美观、响应式且易于维护的用户界面。
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
              兼容性
            </h3>
          </div>
          <p className="doc-theme-color" style={{ color: "var(--doc-text-primary)" }}>
            全面兼容{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              React 18+
            </span>{" "}
            和
            <span className="font-semibold text-blue-600 dark:text-blue-400 ml-1">
              Next.js 14+
            </span>
            ， 同时完美支持 SSR 和 App Router。
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3
          className="text-2xl font-bold mb-4 doc-theme-title"
          style={{ color: "var(--doc-title-color)" }}
        >
          丰富的组件生态
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            "Button 按钮",
            "Space 盒子",
            "Line 分割线",
            "Input 输入框",
            "Search 搜索框",
            "Notice 提示",
            "Tooltip 浮窗气泡",
            "Modal 模态框",
            "Table 表格",
            "Drawer 抽屉",
            "Date 日期",
            "Mark 标记",
            "ColorPicker 颜色选择器",
            "DatePicker 日期选择器",
            "Upload 上传",
            "Banner 横幅",
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
                {component.split(" ")[1]}
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
          核心特性
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "现代化设计",
              desc: "遵循现代 UI/UX 设计原则，提供简洁优雅的视觉体验",
              icon: "🎨",
            },
            {
              title: "暗黑模式支持",
              desc: "原生支持亮色/暗色主题，自动跟随系统偏好",
              icon: "🌓",
            },
            {
              title: "完全类型安全",
              desc: "完整的 TypeScript 支持，提供优秀的开发体验",
              icon: "🔒",
            },
            {
              title: "零依赖开发",
              desc: "所有组件均原生打造，无外部依赖",
              icon: "📦",
            },
            {
              title: "响应式设计",
              desc: "所有组件均支持响应式设计，适配多种屏幕尺寸",
              icon: "📱",
            },
            {
              title: "强大的样式系统",
              desc: "提供丰富的样式系统，基于TailwindCss，支持自定义主题和样式覆盖",
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
          由{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            @Clay.W
          </span>{" "}
          设计和开发
        </p>
      </div>
    </>
  );
}

export default Introduction;
