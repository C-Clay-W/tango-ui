function Introduction() {
  return (
    <>
      <div className="text-4xl font-bold mb-6 dark:text-neutral-300">
        Tango UI - Modern React Component Library
      </div>
      
      <div className="space-y-4 mb-8">
        <p className="text-lg text-gray-700 dark:text-neutral-300 leading-relaxed">
          Tango UI is a React component library designed for modern web applications, 
          providing high-quality UI components and tools to help developers quickly 
          build beautiful, responsive, and maintainable user interfaces.
        </p>
        
        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-blue-100 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <h3 className="font-semibold text-gray-800 dark:text-neutral-300">Compatibility</h3>
          </div>
          <p className="text-gray-700 dark:text-neutral-300">
            Fully compatible with <span className="font-semibold text-blue-600 dark:text-blue-400">React 18+</span> and 
            <span className="font-semibold text-blue-600 dark:text-blue-400 ml-1">Next.js 14+</span>,
            with excellent support for SSR and App Router.
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 dark:text-neutral-300">Rich Component Ecosystem</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            "Button button", "Space div", "Line divider", "Input field",
            "Search input search", "Notice notification", "Tooltip tips", "Modal dialog",
            "Table data presentation", "Drawer side panel", "Date data display", "Mark text highlight",
            "Color Picker pick a color", "Date Picker pick a date", "Upload file upload", "Banner information confirmation", 
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
                {component.split(' ').slice(1).join(' ')}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 dark:text-neutral-300">Core Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Modern Design System",
              desc: "Follows modern UI/UX design principles, providing clean and elegant visual experiences",
              icon: "🎨"
            },
            {
              title: "Dark Mode Support",
              desc: "Native light/dark theme support with automatic system preference detection",
              icon: "🌓"
            },
            {
              title: "Full Type Safety",
              desc: "Comprehensive TypeScript support for excellent developer experience",
              icon: "🔒"
            },
            {
              title: "Zero Dependencies",
              desc: "All components are built natively with no external dependencies",
              icon: "📦" 
            },
            {
              title: "Responsive Design",
              desc: "All components are optimized for mobile and desktop devices",
              icon: "📱"
            },
            {
              title: "Customizable Styling",
              desc: "Flexible styling system with CSS-in-JS support and theme customization",
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
          Designed and developed by <span className="font-bold text-blue-600 dark:text-blue-400">@Clay.W</span>
        </p>
      </div>
    </>
  );
}

export default Introduction;
