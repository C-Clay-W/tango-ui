// function Introduction() {
//   return (
//     <>
//       {/* 头部标题区域 */}
//       <div className="relative mb-10">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl blur-3xl"></div>
//         <div className="relative">
//           <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
//             Tango UI
//           </h1>
//           <p className="text-2xl font-semibold text-gray-700 dark:text-neutral-300 mt-2">
//             为现代 Web 应用而生
//           </p>
//         </div>
//       </div>
      
//       {/* 简介段落 */}
//       <div className="max-w-3xl mx-auto mb-12">
//         <div className="text-center">
//           <p className="text-xl text-gray-700 dark:text-neutral-300 leading-relaxed mb-6">
//             Tango UI 是一个功能丰富的 React 组件库，专为构建现代化的 Web 应用程序而设计。
//             我们提供一套完整、可定制且易于使用的 UI 组件，帮助开发者快速实现设计稿，同时保持代码的整洁和可维护性。
//           </p>
          
//           {/* 框架兼容性标签 */}
//           <div className="flex flex-wrap justify-center gap-4 mb-8">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
//               <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//               <span className="font-semibold">React 18+</span>
//             </div>
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full">
//               <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
//               <span className="font-semibold">Next.js 14+</span>
//             </div>
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
//               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//               <span className="font-semibold">TypeScript</span>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* 组件展示区域 */}
//       <div className="mb-12">
//         <h2 className="text-3xl font-bold text-center mb-8 dark:text-neutral-300">
//           核心组件展示
//         </h2>
        
//         {/* 这里是组件展示区域 - 你可以在这里放置实际的组件 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* 左侧：交互式组件展示区 */}
//           <div className="space-y-6">
//             {/* 示例 1: 按钮组件展示区 */}
//             <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm">
//               <h3 className="text-xl font-bold mb-4 dark:text-neutral-300 flex items-center gap-2">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                 按钮组件展示
//               </h3>
//               <div className="space-y-4">
//                 <p className="text-gray-600 dark:text-gray-400">
//                   多样化的按钮样式，支持多种状态和尺寸
//                 </p>
//                 {/* 预留组件位置 - 请在这里放置实际的 Button 组件 */}
//                 <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 min-h-[100px] flex items-center justify-center">
//                   <div className="text-center text-gray-500 dark:text-gray-400">
//                     {/* 这里可以放置 Button 组件示例 */}
//                     {/* 例如：<Button type="primary">主要按钮</Button> */}
//                     <p className="text-sm">Button 组件展示区</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* 示例 2: 输入组件展示区 */}
//             <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm">
//               <h3 className="text-xl font-bold mb-4 dark:text-neutral-300 flex items-center gap-2">
//                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                 输入组件展示
//               </h3>
//               <div className="space-y-4">
//                 <p className="text-gray-600 dark:text-gray-400">
//                   丰富的输入组件，包括搜索框、日期选择器等
//                 </p>
//                 {/* 预留组件位置 */}
//                 <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 min-h-[100px] flex items-center justify-center">
//                   <div className="text-center text-gray-500 dark:text-gray-400">
//                     {/* 这里可以放置 Input、Search 等组件 */}
//                     <p className="text-sm">输入类组件展示区</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* 右侧：数据展示组件区 */}
//           <div className="space-y-6">
//             {/* 示例 3: 数据展示组件 */}
//             <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm">
//               <h3 className="text-xl font-bold mb-4 dark:text-neutral-300 flex items-center gap-2">
//                 <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//                 数据展示组件
//               </h3>
//               <div className="space-y-4">
//                 <p className="text-gray-600 dark:text-gray-400">
//                   表格、模态框、抽屉等数据展示和交互组件
//                 </p>
//                 {/* 预留组件位置 */}
//                 <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 min-h-[100px] flex items-center justify-center">
//                   <div className="text-center text-gray-500 dark:text-gray-400">
//                     {/* 这里可以放置 Table、Modal 等组件 */}
//                     <p className="text-sm">数据展示组件区</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* 示例 4: 反馈组件展示区 */}
//             <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm">
//               <h3 className="text-xl font-bold mb-4 dark:text-neutral-300 flex items-center gap-2">
//                 <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//                 反馈与提示组件
//               </h3>
//               <div className="space-y-4">
//                 <p className="text-gray-600 dark:text-gray-400">
//                   通知、提示、横幅等用户反馈组件
//                 </p>
//                 {/* 预留组件位置 */}
//                 <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 min-h-[100px] flex items-center justify-center">
//                   <div className="text-center text-gray-500 dark:text-gray-400">
//                     {/* 这里可以放置 Notice、Tooltip、Banner 等组件 */}
//                     <p className="text-sm">反馈组件展示区</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* 完整组件列表 */}
//       <div className="mb-12">
//         <h2 className="text-3xl font-bold text-center mb-8 dark:text-neutral-300">
//           完整组件列表
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//           {[
//             "Button", "Space", "Line", "Input", "Search", "Notice",
//             "Tooltip", "Modal", "Table", "Drawer", "Date", "Mark",
//             "ColorPicker", "DatePicker", "Upload", "Banner"
//           ].map((component, index) => (
//             <div
//               key={index}
//               className="group p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
//             >
//               <div className="text-center">
//                 <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <span className="text-white font-bold">{component.charAt(0)}</span>
//                 </div>
//                 <h4 className="font-semibold text-gray-800 dark:text-neutral-300">
//                   {component}
//                 </h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* 底部信息 */}
//       <div className="text-center py-6 border-t border-gray-200 dark:border-gray-800">
//         <p className="text-gray-600 dark:text-gray-400">
//           精心设计，用心开发
//           <span className="mx-2">•</span>
//           由 <span className="font-bold text-blue-600 dark:text-blue-400">@Clay.W</span> 打造
//         </p>
//         <div className="mt-4">
//           <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow">
//             开始使用
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

function Introduction() {
  return (
    <>
      <div className="text-4xl font-bold mb-6 dark:text-neutral-300">
        Tango UI - 现代 React 组件库
      </div>
      
      <div className="space-y-4 mb-8">
        <p className="text-lg text-gray-700 dark:text-neutral-300 leading-relaxed">
          Tango UI 是一个专为现代 Web 应用设计的 React 组件库，提供高质量的 UI 组件和工具，
          帮助开发者快速构建美观、响应式且易于维护的用户界面。
        </p>
        
        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-blue-100 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <h3 className="font-semibold text-gray-800 dark:text-neutral-300">兼容性</h3>
          </div>
          <p className="text-gray-700 dark:text-neutral-300">
            全面兼容 <span className="font-semibold text-blue-600 dark:text-blue-400">React 18+</span> 和 
            <span className="font-semibold text-blue-600 dark:text-blue-400 ml-1">Next.js 14+</span>，
            同时完美支持 SSR 和 App Router。
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 dark:text-neutral-300">丰富的组件生态</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            "Button 按钮", "Space 盒子", "Line 分割线", "Input 输入框",
            "Search 搜索框", "Notice 提示", "Tooltip 浮窗气泡", "Modal 模态框",
            "Table 表格", "Drawer 抽屉", "Date 日期", "Mark 标记",
            "ColorPicker 颜色选择器", "DatePicker 日期选择器", "Upload 上传", "Banner 横幅"
          ].map((component, index) => (
            <div
              key={index}
              className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-800 dark:text-neutral-300 font-medium">
                  {component.split(' ')[0]}
                </span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {component.split(' ')[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 dark:text-neutral-300">核心特性</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "现代化设计",
              desc: "遵循现代 UI/UX 设计原则，提供简洁优雅的视觉体验",
              icon: "🎨"
            },
            {
              title: "暗黑模式支持",
              desc: "原生支持亮色/暗色主题，自动跟随系统偏好",
              icon: "🌓"
            },
            {
              title: "完全类型安全",
              desc: "完整的 TypeScript 支持，提供优秀的开发体验",
              icon: "🔒"
            },
            {
              title: "零依赖开发",
              desc: "所有组件均原生打造，无外部依赖",
              icon: "📦" 
            },
            {
              title: "响应式设计",
              desc: "所有组件均支持响应式设计，适配多种屏幕尺寸",
              icon: "📱"
            },
            {
              title: "强大的样式系统",
              desc: "提供丰富的样式系统，基于TailwindCss，支持自定义主题和样式覆盖",
              icon: "🎯"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-neutral-300 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
        <p className="text-gray-600 dark:text-gray-400 text-center">
          由 <span className="font-bold text-blue-600 dark:text-blue-400">@Clay.W</span> 设计和开发
        </p>
      </div>
    </>
  );
}

export default Introduction;