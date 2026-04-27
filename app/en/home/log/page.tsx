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
        <h2 className={HEADER_STYLE}>2026-04-27</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Added Theme Customize documentation
          </li>
        </ul>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            More documentation adapted to theme colors
          </li>
        </ul>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Fixed errors in the documentation</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2026-04-24</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Unified dark theme adaptation and fixes for documentation
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-04-21 <span className={VERSION}>0.9.9</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Adjusted default styles for Modal and Drawer components
          </li>
          <li className={CONTENT_STYLE}>
            Fixed issue with Input and Search component borders overlapping with
            default theme colors on focus
          </li>
          <li className={CONTENT_STYLE}>
            Adjusted default styles for DatePicker component
          </li>

          <li className={CONTENT_STYLE}>
            Adjusted default styles for ColorPicker component
          </li>
          <li className={CONTENT_STYLE}>
            Fixed issue with Input and Search component borders not being
            controlled by custom theme colors
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2026-03-13</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Optimized cover Table example styles
          </li>
          <li className={CONTENT_STYLE}>
            Fixed Button documentation attribute error
          </li>
          <li className={CONTENT_STYLE}>
            Added theme color customization at the top of the documentation
          </li>
          <li className={CONTENT_STYLE}>
            Improved ThemeProvider documentation with related notes
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-03-05 <span className={VERSION}>0.9.7</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Fixed SSR error in ThemeProvider with Next15/14
          </li>
          <li className={CONTENT_STYLE}>
            Improved ThemeProvider documentation with usage examples for theme
            switching
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-03-04 <span className={VERSION}>0.9.5</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Adjusted Notice component icon styles
          </li>
          <li className={CONTENT_STYLE}>
            Fixed Space component ref attribute not working
          </li>
          <li className={CONTENT_STYLE}>Adjusted global style import method</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-02-26 <span className={VERSION}>0.9.2</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Fixed a potential issue with the ThemeProvider component during
            theme switching
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-02-13 <span className={VERSION}>0.9.0</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Added Next.js client identifier to all components
          </li>
          <li className={CONTENT_STYLE}>
            Adjusted the btnStyle property passing logic in the Upload component
          </li>
          <li className={CONTENT_STYLE}>
            Table component now supports object syntax for rowStyle and
            cellStyle properties
          </li>
          <li className={CONTENT_STYLE}>
            Adjusted overall Table component styles, added rounded corners
          </li>
          <li className={CONTENT_STYLE}>
            Enhanced Table component documentation with additional code examples
            for rowStyle and cellStyle properties
          </li>
          <li className={CONTENT_STYLE}>
            Fixed and improved example descriptions in Drawer and Modal
            documentation
          </li>
          <li className={CONTENT_STYLE}>
            Fixed issue where the close button in the top-right corner of Drawer
            and Modal did not follow dark mode switching
          </li>
          <li className={CONTENT_STYLE}>
            MaterialButton component: renamed RippleColor property to
            rippleColor and removed non-functional properties
          </li>
          <li className={CONTENT_STYLE}>
            Adjusted default styles such as size and spacing for the Button
            component
          </li>
          <li className={CONTENT_STYLE}>
            Adapted Button, MaterialButton, Space, Input, MaterialInput, Drawer,
            Table, Modal, Search, Tooltip to support theme colors
          </li>
          <li className={CONTENT_STYLE}>
            Added theme switching functionality, supporting light mode, dark
            mode, and user-defined theme colors
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2026-02-12</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            The document requires extensive maintenance, and a temporary pop-up
            notification has been added.
          </li>
          <li className={CONTENT_STYLE}>
            Tooltip documentation adds issue markers
          </li>
          <li className={CONTENT_STYLE}>
            The Table documentation has improved the examples for the rowStyle
            and cellStyle properties, as well as API type markers.
          </li>
          <li className={CONTENT_STYLE}>
            Correcting example errors in the documentation for the Drawer,
            Table, and Modal components.
          </li>
          <li className={CONTENT_STYLE}>
            Removed incomplete components and sections from the document
            sidebar,and added version markers to the changelog.
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-02-05 <span className={VERSION}>0.8.3</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Improve Installation document、new CDN import method、MaterialButton
            added RippleColor prop
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2026-01-23</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            tango-excel-cw added line wrapping、alignment property
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-01-16 <span className={VERSION}>0.7.0</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Improve the Introduction.</li>
          <li className={CONTENT_STYLE}>
            The Notice component now includes React 19 usage examples, and the
            documentation has been improved.
          </li>
          <li className={CONTENT_STYLE}>
            Removed defaultProps from all components, upgraded type security,
            and has been{" "}
            <span className="bg-amber-300 dark:text-black">
              maintained for a year!
            </span>
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2026-01-15</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Added Banner component and improve Banner documentation.
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2026-01-12 <span className={VERSION}>0.6.0</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            The Button component adds icon, iconPosition, and loading
            attributes.
          </li>
          <li className={CONTENT_STYLE}>Improve Button En documentation.</li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-10-09 <span className={VERSION}>0.5.2</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Added Upload component</li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-09-11</h2>
        <ul className="m-0 p-0 list-none">
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red doc-log-item-bg rounded">
            Update a new library tango-map-cw for map on web，published to NPM！{" "}
            {"("}Version:1.1.0{")"}
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-09-02 <span className={VERSION}>0.4.9</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            useExcelExporter adds the property of keeping the original
            proportion of the image
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-08-28 <span className={VERSION}>0.4.5</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Tooltip component adds a tip on the left
          </li>

          <li className={CONTENT_STYLE}>
            Notice component adds Material Design style
          </li>

          <li className={CONTENT_STYLE}>
            Table component has been added and no data is displayed yet
          </li>
          <li className={CONTENT_STYLE}>
            Fixed the button style and text priority issues of Modal and Drawer
            components
          </li>
          <li className={CONTENT_STYLE}>
            Fixed the maskClosable property scope issue in Modal and Drawer
            components.
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-08-24</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Complete the cover page</li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-08-22</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Supplementary Table documentation</li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-08-21</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Improve TangoCSS documentation and add a mapping table between
            TangoCSS and standard CSS
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-08-08</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Update useExcelExporter hook, add a new attribute
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-08-05 <span className={VERSION}>0.4.3</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Fix bugs for Input component</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-08-04 <span className={VERSION}>0.4.1</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Corrected the description of the sx attribute in the documentation
          </li>
          <li className={CONTENT_STYLE}>
            Restructure the sx attribute with clear weights and support for
            tailwindcss syntax
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-08-01 <span className={VERSION}>0.3.5</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Improve documentation for Table component
          </li>
          <li className={CONTENT_STYLE}>
            The Table component adds custom style methods and some key
            properties
          </li>
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for Date component
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-07-31 <span className={VERSION}>0.3.3</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Updated the tango-ui-cw component source code and released it.
          </li>
          <li className={CONTENT_STYLE}>
            Fixed issues with DataDisplay component
          </li>
          <li className={CONTENT_STYLE}>
            Modal component adds maskClosable property, supports closing by
            clicking mask
          </li>
          <li className={CONTENT_STYLE}>
            Drawer component adds maskClosable property, supports closing by
            clicking mask
          </li>
          <li className={CONTENT_STYLE}>
            Tooltip component adjusts the position of the property
          </li>
          <li className={CONTENT_STYLE}>
            The Drawer component has added the onOk property and several custom
            styling methods, supporting highly customizable styling, customizing
            the number of footer buttons, and hiding the default button.
          </li>
          <li className={CONTENT_STYLE}>
            Adjusted the default style of the Button component
          </li>
          <li className={CONTENT_STYLE}>
            The MaterialInput component has added several custom styling
            methods.
          </li>
          <li className={CONTENT_STYLE}>
            Added the onChange property description in the DatePicker component
            documentation.
          </li>
          <li className={CONTENT_STYLE}>
            Added the onChange property description in the ColorPicker component
            documentation.
          </li>
          <li className={CONTENT_STYLE}>
            The Modal component has added the onOk property and several custom
            styling methods, supporting highly customizable styling, customizing
            the number of footer buttons, and hiding the default button.
          </li>
          <li className={CONTENT_STYLE}>
            Added the dataIndex property description in the Table component
            documentation.
          </li>
          <li className={CONTENT_STYLE}>
            Fixed issues with unusual button styling and image attributes not
            displaying images in the Search component. New attributes have been
            added to support custom button text and styles.
          </li>
          <li className={CONTENT_STYLE}>
            Removed the enhanced syntax for four positioning attributes in
            TangoCSS.
          </li>
          <li className={CONTENT_STYLE}>
            Fixed an issue where the Notice component was too low in the
            hierarchy, causing some layouts to be obscured.
          </li>
          <li className={CONTENT_STYLE}>
            Fixed text color issues and dark mode adaptation in the Table
            component.
          </li>
          <li className={CONTENT_STYLE}>
            Fixed issues with the disabled style of the Button component.
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-07-30 <span className={VERSION}>0.3.2</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Improve useExcelExporter export Excel English documents
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-29</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Improve useExcelExporter export Excel Chinese documents
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-28</h2>
        <ul className="m-0 p-0 list-none">
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red doc-log-item-bg rounded">
            tango-excel-cw library published to NPM！ {"("}Version: 0.0.1{")"}
          </li>
          <li className={CONTENT_STYLE}>
            Added tango-excel-cw library for exporting or generating Excel
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-27</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Improve PDF and other file previews usePerview bilingual documents
          </li>
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red doc-log-item-bg rounded">
            tango-pdf-cw library published to NPM！ {"("}Version: 0.0.1{")"}
          </li>
          <li className={CONTENT_STYLE}>
            Added tango-pdf-cw library for PDF and other file previews
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-23</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Incremental update of WaterMark to support more image source types
            and multi-line watermarks
          </li>
          <li className={CONTENT_STYLE}>
            Change the watermark library useWatermarkOnImage hook name is
            useInkify
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-23</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for WaterMark
          </li>
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red doc-log-item-bg rounded">
            tango-watermark library published to NPM!! {"("}Version: 0.0.2{")"}
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-22</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for TangoStore
          </li>
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for DatePicker
            component
          </li>
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for ColorPicker
            component
          </li>
        </ul>
      </div>
      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-16</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for Mark component
          </li>
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for Drawer component
          </li>
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for Table component
          </li>
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for Modal component
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-14</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for Tooltip component
          </li>
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual for Update Log
          </li>
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for Notice component
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-11</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Added Table component</li>
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for Search component
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-09</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Updated logo tag</li>
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for Input component
          </li>
          <li className={CONTENT_STYLE}>Added sidebar click highlighting</li>
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for Line component
          </li>
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for Space component
          </li>
          <li className={CONTENT_STYLE}>
            Completed responsive layout adjustments for mobile and web
            compatibility
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-08</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Added version number display</li>
          <li className={CONTENT_STYLE}>Changed global font to Google Fonts</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-07-07 <span className={VERSION}>0.3.1</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Migrate and improved bilingual documentation for Button component
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-07-06</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Downgraded from Next 15 to Next 14</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-07-05 <span className={VERSION}>0.2.0</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Migrated Tango UI official documentation from React to Next,
            implemented basic framework, bilingual switching, and theme
            switching
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-07-04 <span className={VERSION}>🎉0.0.1</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red doc-log-item-bg rounded">
            Tango UI library published to NPM!! {"("}Version: 0.0.1{")"}
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-06-25</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Added Table component</li>
          <li className={CONTENT_STYLE}>
            Improved welcome page UI with introduction and animations
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-06-23</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Added ref property to Space component
          </li>
          <li className={CONTENT_STYLE}>
            Incremental update for LoginUI quick-build module
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-05-27</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Incremental update for useTangoStyle
          </li>
          <li className={CONTENT_STYLE}>
            Incremental update for LoginUI quick-build module
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-05-25</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Incremental update for useTangoStyle
          </li>
          <li className={CONTENT_STYLE}>
            Incremental update for LoginUI quick-build module
          </li>
          <li className={CONTENT_STYLE}>Added quick-build module</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-05-22</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Added DatePicker component</li>
          <li className={CONTENT_STYLE}>Added ColorPicker component</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-04-30</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Added syntax highlighting for example code
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-03-10</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Adjusted page styling</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-03-01</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Updated technical documentation, added tutorial for using Tango
            library on NPM
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-22</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Added image watermarking tool library
          </li>
          <li className={CONTENT_STYLE}>Added utilities section</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-21</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Added Mark component</li>
          <li className="text-base text-red-500 dark:text-red-400 mb-2 pl-2 border-l-2 border-red doc-log-item-bg rounded">
            TangoStore library published to NPM!!
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-20</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Improved documentation for persistence functionality
          </li>
          <li className={CONTENT_STYLE}>
            Added persistence feature to Tango state management library
          </li>
          <li className={CONTENT_STYLE}>
            Enhanced functionality of Tango state management library
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-19</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Added Tango state management library!
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-18</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Added Date component</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-17</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Renamed CSS to Tango CSS</li>
          <li className={CONTENT_STYLE}>
            Standardized component tags to "T" + component name
          </li>
          <li className={CONTENT_STYLE}>Added Drawer component</li>
          <li className={CONTENT_STYLE}>Added Modal component</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-02-16</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Renamed components to Tango</li>
          <li className={CONTENT_STYLE}>
            Added global notification for copy button
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-30</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Added some common style shortcuts</li>
          <li className={CONTENT_STYLE}>
            Fixed issue where some components couldn't use className to define
            class names
          </li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-29</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Added projects page</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>
          2025-01-28{" "}
          <span className="text-red-500 dark:text-red-400">NEW YEAR !!</span>
        </h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Added navigation link to top-right of cover page
          </li>
          <li className={CONTENT_STYLE}>Added advanced concepts page</li>
          <li className={CONTENT_STYLE}>Added cover page (not yet complete)</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-23</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Added search functionality to Clay-CSS syntax reference
          </li>
          <li className={CONTENT_STYLE}>Added Layout component</li>
          <li className={CONTENT_STYLE}>
            Fixed styling issue when Tooltip component placement is set to left
          </li>
          <li className={CONTENT_STYLE}>Added Tooltip component</li>
          <li className={CONTENT_STYLE}>Fixed various component issues</li>
          <li className={CONTENT_STYLE}>
            Standardized API usage guidelines for components
          </li>
          <li className={CONTENT_STYLE}>Added Notice component</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-22</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Standardized component names to Clay + Component name
          </li>
          <li className={CONTENT_STYLE}>Added Search component</li>
          <li className={CONTENT_STYLE}>Added Input component</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-20</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Improved examples for Space component
          </li>
          <li className={CONTENT_STYLE}>Added syntax reference table</li>
          <li className={CONTENT_STYLE}>
            Adjusted overall layout of UI library page
          </li>
          <li className={CONTENT_STYLE}>
            Added documentation for some CSS syntax
          </li>
          <li className={CONTENT_STYLE}>Added update log</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-17</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>Added some common styles</li>
          <li className={CONTENT_STYLE}>
            Added Line component, improved Space component (still needs work),
            CSS usage framework
          </li>
          <li className={CONTENT_STYLE}>
            Created useFastStyle hook to support custom sx style properties,
            added Space component
          </li>
          <li className={CONTENT_STYLE}>Added neumorphism-style buttons</li>
        </ul>
      </div>

      <div className={BOX_STYLE}>
        <h2 className={HEADER_STYLE}>2025-01-16</h2>
        <ul className="m-0 p-0 list-none">
          <li className={CONTENT_STYLE}>
            Engineered component library, improved Button component introduction
            and usage
          </li>
          <li className={CONTENT_STYLE}>
            Initialized component library with basic Button component
          </li>
          <li className={CONTENT_STYLE}>Project launched</li>
        </ul>
      </div>
    </div>
  );
}

export default Log;
