function Log() {
  const BOX_STYLE = "mb-5 p-3 doc-log-box rounded-lg shadow-xs";
  const HEADER_STYLE =
    "text-lg doc-theme-title mb-2 pb-1 border-b border-gray-200 dark:border-gray-700";
  const CONTENT_STYLE =
    "text-base doc-theme-color mb-2 pl-2 border-l-2 border-black dark:border-white doc-log-item-bg rounded";

  const VERSION = "font-bold text-xl text-amber-300";
  return (
    <div className="p-5 font-sans leading-relaxed doc-log-page rounded-lg shadow-sm mt-2">
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2026-04-28</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>更多文档适配了主题色</li>
        </ul>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>修正了文档中的错误</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2026-04-27</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>新增主题定制文档</li>
        </ul>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>更多文档适配了主题色</li>
        </ul>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>修正了文档中的错误</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2026-04-24</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>文档暗色主题统一适配与修复</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-04-21 <span className={VERSION}>0.9.9</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>调整了Modal和Drawer组件的默认样式</li>
          <li className={CONTENT_STYLE}>
            修复Input和Search组件边框高亮聚焦等与默认主题色彩重合问题
          </li>
          <li className={CONTENT_STYLE}>调整了DatePicker组件默认样式</li>

          <li className={CONTENT_STYLE}>调整了ColorPicker组件默认样式</li>
          <li className={CONTENT_STYLE}>
            修复Input和Search组件边框不受自定义主题色控制问题
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2026-03-13</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>优化封面Table示例样式</li>
          <li className={CONTENT_STYLE}>修正Button文档中属性错误问题</li>
          <li className={CONTENT_STYLE}>文档顶部新增主题色定制</li>
          <li className={CONTENT_STYLE}>完善ThemeProvider文档相关注意事项</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-03-05 <span className={VERSION}>0.9.7</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            修复ThemeProvider在Next15/14中SSR错误问题
          </li>
          <li className={CONTENT_STYLE}>
            完善ThemeProvider文档，新增主题切换功能的使用示例
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-03-04 <span className={VERSION}>0.9.5</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>调整Notice组件图标样式</li>
          <li className={CONTENT_STYLE}>修复Space组件ref属性不可用问题</li>
          <li className={CONTENT_STYLE}>调整全局样式引入方式</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-02-26 <span className={VERSION}>0.9.2</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            修复了主题切换ThemeProvider组件潜在的问题
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-02-13 <span className={VERSION}>0.9.0</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>所有组件新增Next.js客户端标识</li>
          <li className={CONTENT_STYLE}>
            调整了Upload组件的样式btnStyle属性传递逻辑
          </li>
          <li className={CONTENT_STYLE}>
            Table组件rowStyle和cellStyle属性支持对象写法
          </li>
          <li className={CONTENT_STYLE}>Table组件调整整体样式，支持圆角</li>
          <li className={CONTENT_STYLE}>
            Table组件文档对于rowStyle和cellStyle属性丰富了示例代码
          </li>
          <li className={CONTENT_STYLE}>
            Drawer和Modal文档中修复并完善了示例描述
          </li>
          <li className={CONTENT_STYLE}>
            Drawer和Modal修复了右上角关闭按钮无法跟随暗色切换的问题
          </li>
          <li className={CONTENT_STYLE}>
            MaterialButton组件调整了RippleColor属性改为rippleColor，去除了不生效的属性
          </li>
          <li className={CONTENT_STYLE}>Button组件调整了大小间距等默认样式</li>
          <li className={CONTENT_STYLE}>
            Button、MaterialButton、Space、Input、MaterialInput、Drawer、Table、Modal、Search、Tooltip适配了主题色
          </li>
          <li className={CONTENT_STYLE}>
            新增主题切换功能，支持浅色、深色模式和用户自定义主题色
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2026-02-12</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            文档存在大量维护，增加了临时提示弹窗
          </li>
          <li className={CONTENT_STYLE}>Tooltip文档新增问题标记</li>
          <li className={CONTENT_STYLE}>
            Table文档完善了rowStyle和cellStyle属性的示例以及API类型标记
          </li>
          <li className={CONTENT_STYLE}>
            修正Drawer、Table和Modal组件文档中存在的示例错误
          </li>
          <li className={CONTENT_STYLE}>
            移除文档侧边栏中未完成的组件和栏目，更新日志增加版本标记
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-02-05 <span className={VERSION}>0.8.3</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            完善Installation文档、新增CDN引入方式、MaterialButton新增RippleColor属性
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2026-01-23</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            tango-excel-cw新增wrapText自动换行、alignment设置单元格格式属性
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-01-16 <span className={VERSION}>0.7.0</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>完善介绍模块</li>
          <li className={CONTENT_STYLE}>
            Notice组件新增React19的使用方式，文档完善
          </li>
          <li className={CONTENT_STYLE}>
            取消所有组件的defaultProps，升级类型安全性，
            <span className="bg-amber-300 dark:text-black">维护一年啦！</span>
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2026-01-15</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            新增Banner组件，完善Banner组件双语文档
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-01-12 <span className={VERSION}>0.6.0</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Button组件新增icon、iconPosition和loading 属性
          </li>
          <li className={CONTENT_STYLE}>完善Button组件中文文档</li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-10-09 <span className={VERSION}>0.5.2</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>新增Upload上传组件</li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-09-11</h2>
        <ul className="m-0 p-0 list-none">
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red doc-log-item-bg rounded">
            新增tango-map-cw地图浏览库，已发布到NPM！ {"("}版本:1.1.0{")"}
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-09-02 <span className={VERSION}>0.4.9</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            useExcelExporter新增保持图片原始比例属性
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-08-28 <span className={VERSION}>0.4.5</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Tooltip组件新增左侧气泡</li>

          <li className={CONTENT_STYLE}>Notice组件新增Material Design风格</li>

          <li className={CONTENT_STYLE}>Table组件新增暂无数据显示</li>
          <li className={CONTENT_STYLE}>
            修复Modal组件和Drawer组件按钮样式及文字优先级问题
          </li>
          <li className={CONTENT_STYLE}>
            修复Modal组件和Drawer组件蒙版点击maskClosable属性作用域问题
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-08-24</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>完善封面页</li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-08-22</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>补充Table文档</li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-08-21</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            完善TangoCSS文档，添加TangoCSS和标准CSS的映射表
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-08-08</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            更新useExcelExporter钩子，新增精准控制属性
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-08-05 <span className={VERSION}>0.4.3</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>修正Input组件问题</li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-08-04 <span className={VERSION}>0.4.1</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>修正文档中对于sx属性的描述</li>
          <li className={CONTENT_STYLE}>
            重构sx属性，权重分明，支持tailwindcss语法
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-08-01 <span className={VERSION}>0.3.5</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>完善Table组件文档</li>
          <li className={CONTENT_STYLE}>
            Table组件新增自定义样式方法和一些关键属性
          </li>
          <li className={CONTENT_STYLE}>迁移并完善Date组件双语文档</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-07-31 <span className={VERSION}>0.3.3</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>更新了tango-ui-cw组件源码并发布</li>
          <li className={CONTENT_STYLE}>修复了DataDisplay组件的问题</li>
          <li className={CONTENT_STYLE}>
            Modal组件新增maskClosable属性，支持点击蒙版关闭
          </li>
          <li className={CONTENT_STYLE}>
            Drawer组件新增maskClosable属性，支持点击蒙版关闭
          </li>
          <li className={CONTENT_STYLE}>Tooltip组件调整位置的属性</li>
          <li className={CONTENT_STYLE}>
            Drawer组件新增onOk属性，新增多种自定义样式方法，支持高度自定义样式以及自定义footer的按钮数量，支持隐藏默认按钮
          </li>
          <li className={CONTENT_STYLE}>调整了Button组件的默认样式</li>

          <li className={CONTENT_STYLE}>
            MaterialInput组件新增多个自定义样式方法
          </li>
          <li className={CONTENT_STYLE}>
            补充DatePicker组件文档的onChange属性说明
          </li>
          <li className={CONTENT_STYLE}>
            补充ColorPicker组件文档的onChange属性说明
          </li>
          <li className={CONTENT_STYLE}>
            Modal组件新增onOk属性，新增多种自定义样式方法，支持高度自定义样式以及自定义footer的按钮数量，支持隐藏默认按钮
          </li>
          <li className={CONTENT_STYLE}>
            补充Table组件文档的dataIndex属性说明
          </li>
          <li className={CONTENT_STYLE}>
            修复了Search组件中按钮样式异常和图片属性不显示图片的问题，并增加了新的属性以支持自定义按钮文字和样式
          </li>
          <li className={CONTENT_STYLE}>
            移除TangoCss语法中对四个定位属性的强化语法
          </li>
          <li className={CONTENT_STYLE}>
            修复了Notice通知组件层级太低导致个别布局被遮挡问题
          </li>
          <li className={CONTENT_STYLE}>
            修复了Table组件的文字颜色问题以及适配暗黑模式
          </li>
          <li className={CONTENT_STYLE}>
            修复了Button组件的的disabled样式问题
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-07-30 <span className={VERSION}>0.3.2</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            完善useExcelExporter导出Excel英文文档
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-29</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            完善useExcelExporter导出Excel中文文档
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-28</h2>
        <ul className="m-0 p-0 list-none">
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red doc-log-item-bg rounded">
            tango-excel-cw库发布到NPM！ {"("}版本: 0.0.1{")"}
          </li>
          <li className={CONTENT_STYLE}>
            新增tango-excel-cw库，用于导出或生成Excel
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-27</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>完善PDF等文件预览usePerview双语文档</li>
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red doc-log-item-bg rounded">
            tango-pdf-cw库发布到NPM！ {"("}版本: 0.0.1{")"}
          </li>
          <li className={CONTENT_STYLE}>
            新增tango-pdf-cw库，用于PDF等文件预览
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-23</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            对useInkify钩子的增量更新，支持更多图片源类型及多行水印
          </li>
          <li className={CONTENT_STYLE}>
            变更tango-watermark库useWatermarkOnImage钩子名称为useInkify
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-23</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>迁移并完善双语WaterMark文档</li>
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red doc-log-item-bg rounded">
            tango-watermark库发布到NPM！ {"("}版本: 0.0.2{")"}
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-22</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>迁移并完善双语TangoStore文档</li>
          <li className={CONTENT_STYLE}>迁移并完善双语DatePicker组件文档</li>
          <li className={CONTENT_STYLE}>迁移并完善双语ColorPicker组件文档</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-16</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>迁移并完善双语Mark组件文档</li>
          <li className={CONTENT_STYLE}>迁移并完善双语Drawer组件文档</li>
          <li className={CONTENT_STYLE}>迁移并完善双语Table组件文档</li>
          <li className={CONTENT_STYLE}>迁移并完善双语Modal组件文档</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-14</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>迁移并完善双语Tooltip组件文档</li>
          <li className={CONTENT_STYLE}>迁移并完善更新日志栏目</li>
          <li className={CONTENT_STYLE}>迁移并完善双语Notice组件文档</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-11</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>新增Table组件</li>
          <li className={CONTENT_STYLE}>迁移并完善Search组件双语文档</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-09</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>更新标签logo</li>
          <li className={CONTENT_STYLE}>迁移并完善双语Input组件文档</li>
          <li className={CONTENT_STYLE}>新增侧边栏点击高亮</li>
          <li className={CONTENT_STYLE}>迁移并完善双语Line组件文档</li>
          <li className={CONTENT_STYLE}>迁移并完善双语Space组件文档</li>
          <li className={CONTENT_STYLE}>自适应布局调整完毕，兼容移动端和web</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-08</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>新增版本号显示</li>
          <li className={CONTENT_STYLE}>修改全局字体为Google-Fonts</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-07-07 <span className={VERSION}>0.3.1</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>迁移并完善按钮双语文档</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-06</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>由Next 15降级到Next 14</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-07-05 <span className={VERSION}>0.2.0</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Tango
            UI官方文档从React迁移至Next，基本框架、中英文切换、主题切换实现
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-07-04 <span className={VERSION}>🎉0.0.1</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red doc-log-item-bg rounded">
            Tango UI库已发布到NPM！！ {"("}版本: 0.0.1{")"}
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-06-25</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>新增Table组件</li>
          <li className={CONTENT_STYLE}>调整欢迎页面UI，增加简介和动画</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-06-23</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Space组件新增ref属性</li>
          <li className={CONTENT_STYLE}>快速搭建模块LoginUI增量更新</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-05-27</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>useTangoStyle增量更新</li>
          <li className={CONTENT_STYLE}>快速搭建模块LoginUI增量更新</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-05-25</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>useTangoStyle增量更新</li>
          <li className={CONTENT_STYLE}>快速搭建模块LoginUI增量更新</li>
          <li className={CONTENT_STYLE}>新增快速搭建模块</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-05-22</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>新增DatePicker组件</li>
          <li className={CONTENT_STYLE}>新增ColorPicker组件</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-04-30</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>页面示例代码着色</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-03-10</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>调整页面风格</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-03-01</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            更新技术文档，新增NPM上Tango库的使用教程
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-22</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>调整页新增图片加水印工具库面风格</li>
          <li className={CONTENT_STYLE}>新增实用工具栏目</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-21</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>新增Mark标记组件</li>
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red doc-log-item-bg rounded">
            TangoStore库已发布到NPM！！
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-20</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>完善持久化功能实用文档</li>
          <li className={CONTENT_STYLE}>Tango状态管理库新增持久化功能</li>
          <li className={CONTENT_STYLE}>增强Tango状态管理库的功能性</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-19</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>新增Tango状态管理库！</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-18</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>新增Date日期组件</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-17</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Css统一名称为Tango Css</li>
          <li className={CONTENT_STYLE}>组件标签使用统一为"T"+组件名称</li>
          <li className={CONTENT_STYLE}>新增Drawer抽屉组件</li>
          <li className={CONTENT_STYLE}>新增Modal对话框组件</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-16</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>组件改名为Tango</li>
          <li className={CONTENT_STYLE}>copy按钮调用全局提示</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-30</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>补充了一些样式简写</li>
          <li className={CONTENT_STYLE}>
            修复部分组件不可以使用className定义类名的问题
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-29</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>新增项目页面</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-01-28{" "}
          <span className="text-red-500 dark:text-red-400">NEW YEAR !!</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>封面页右上角添加跳转</li>
          <li className={CONTENT_STYLE}>新增高阶概念页</li>
          <li className={CONTENT_STYLE}>新增封面页，还没完善</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-23</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Clay-Css语法对照表添加了搜索功能</li>
          <li className={CONTENT_STYLE}>新增Layout组件</li>
          <li className={CONTENT_STYLE}>
            Tooltip组件placement设置为left样式有问题
          </li>
          <li className={CONTENT_STYLE}>新增Tooltip组件</li>
          <li className={CONTENT_STYLE}>修复了组件的一些问题</li>
          <li className={CONTENT_STYLE}>完善了一些组件的API使用规范</li>
          <li className={CONTENT_STYLE}>新增Notice组件</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-22</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>统一组件名为Clay+Component name</li>
          <li className={CONTENT_STYLE}>新增Search组件</li>
          <li className={CONTENT_STYLE}>新增Input组件</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-20</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>完善了一下Space组件的案例</li>
          <li className={CONTENT_STYLE}>新增了语法对照表</li>
          <li className={CONTENT_STYLE}>调整了UI库页面的整体布局</li>
          <li className={CONTENT_STYLE}>
            新增完善了一部分 CSS 语法的介绍项目页面
          </li>
          <li className={CONTENT_STYLE}>新增更新日志</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-17</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>新增了一些常用的样式</li>
          <li className={CONTENT_STYLE}>
            新增 Line 组件，完善 Space 组件但还差一点，CSS 使用规范框架
          </li>
          <li className={CONTENT_STYLE}>
            封装 useFastStyle，以支持自定义 sx 样式属性，新增 Space 组件
          </li>
          <li className={CONTENT_STYLE}>新增新拟态风格按钮</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-16</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            工程化组件库，完善 Button 组件简介和用法
          </li>
          <li className={CONTENT_STYLE}>
            组件库初始化，建立简单的 Button 组件
          </li>
          <li className={CONTENT_STYLE}>项目启动</li>
        </ul>
      </div>
    </div>
  );
}

export default Log;
