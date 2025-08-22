function Log() {
  const BOX_STYLE = "mb-5 p-3 bg-white dark:bg-black rounded-lg shadow-xs";
  const HEADER_STYLE =
    "text-lg text-gray-800 dark:text-gray-200 mb-2 pb-1 border-b border-gray-200 dark:border-gray-700";
  const CONTENT_STYLE =
    "text-base text-gray-700 dark:text-gray-300 mb-2 pl-2 border-l-2 border-black dark:border-white bg-gray-100 dark:bg-[#181818] rounded";

  return (
    <div className="p-5 font-sans leading-relaxed bg-gray-50 dark:bg-[#0c0c0c] rounded-lg shadow-sm mt-2">
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
        <h2 className={HEADER_STYLE}>2025-08-05</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>修正Input组件问题</li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-08-04</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>修正文档中对于sx属性的描述</li>
          <li className={CONTENT_STYLE}>
            重构sx属性，权重分明，支持tailwindcss语法
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-08-01</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>完善Table组件文档</li>
          <li className={CONTENT_STYLE}>
            Table组件新增自定义样式方法和一些关键属性
          </li>
          <li className={CONTENT_STYLE}>迁移并完善Date组件双语文档</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-31</h2>
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
        <h2 className={HEADER_STYLE}>2025-07-30</h2>
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
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red bg-gray-100 dark:bg-[#181818] rounded">
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
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red bg-gray-100 dark:bg-[#181818] rounded">
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
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red bg-gray-100 dark:bg-[#181818] rounded">
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
        <h2 className={HEADER_STYLE}>2025-07-07</h2>
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
        <h2 className={HEADER_STYLE}>2025-07-05</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Tango
            UI官方文档从React迁移至Next，基本框架、中英文切换、主题切换实现
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-04</h2>
        <ul className="m-0 p-0 list-none">
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red bg-gray-100 dark:bg-[#181818] rounded">
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
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red  bg-gray-100 dark:bg-[#181818] rounded">
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
