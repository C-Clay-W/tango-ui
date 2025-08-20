"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

function TangoCss() {
    const theme = useCurrentTheme();


  return (
    <>
      <div className="text-4xl font-bold mb-5 dark:text-neutral-300">Prop {`'`}<span className="font-bold">sx</span>{`'`}</div>（英文文档）
      <div className="text-xl mb-5 dark:text-neutral-300">在Tango UI组件中，定义样式有多种方式：第一种是直接编写行内Style标签，第二种是使用CSS类名，第三种是使用SX（Style标签的强化），第四种是使用TailwindCSS；在这里，我们更推荐你使用TailwindCss作为统一的样式管理。大多数组件支持直接使用TailwindCss来进行样式定义，当然你可以尝试Tango Css内置的sx属性来管理样式，这个属性将会具有很高的权重，一句话总结：sx=“” 等同于className=“” sx={`{{}}`} 等同于style={`{{}}`}，但是，当使用sx=“”的时，如果是类名，则需要在css样式文件中添加‘!important’，如果是tailwindcss语法，则需要在类名前添加‘!’，原因是组件基于Css Module作为基础的样式管理，sx=“”等同于className，而className的权重会低于内置样式。</div>

    </>
  );
}

export default TangoCss;
