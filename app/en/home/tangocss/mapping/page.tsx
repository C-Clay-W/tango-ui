"use client";
import React, { useState } from "react";
import { Table, Search } from "tango-ui-cw";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const data = [
  { cw: "mt", css: "marginTop", description: "Top margin" },
{ cw: "mr", css: "marginRight", description: "Right margin" },
{ cw: "mb", css: "marginBottom", description: "Bottom margin" },
{ cw: "ml", css: "marginLeft", description: "Left margin" },
{ cw: "m", css: "margin", description: "Margin" },
{ cw: "p", css: "padding", description: "Padding" },
{ cw: "pt", css: "paddingTop", description: "Top padding" },
{ cw: "pr", css: "paddingRight", description: "Right padding" },
{ cw: "pb", css: "paddingBottom", description: "Bottom padding" },
{ cw: "pl", css: "paddingLeft", description: "Left padding" },
{ cw: "px", css: "paddingLeft+paddingRight", description: "Horizontal padding" },
{ cw: "py", css: "paddingTop+paddingBottom", description: "Vertical padding" },
{ cw: "br", css: "borderRadius", description: "Border radius" },
{ cw: "bg", css: "background", description: "Background" },
{ cw: "c", css: "color", description: "Text color" },
{ cw: "b", css: "border", description: "Border" },
{
  cw: "center",
  css: "position: absolute; inset: 0; margin: auto",
  description: "Element centered",
},
{ cw: "rel", css: "position: relative", description: "Relative positioning" },
{ cw: "ab", css: "position: absolute", description: "Absolute positioning" },
{ cw: "fixed", css: "position: fixed", description: "Fixed positioning" },
{ cw: "w", css: "width", description: "Width" },
{ cw: "h", css: "height", description: "Height" },
{ cw: "vw", css: "width (vw)", description: "Viewport width" },
{ cw: "vh", css: "height (vh)", description: "Viewport height" },
{ cw: "presentw", css: "width (%)", description: "Percentage width" },
{ cw: "presenth", css: "height (%)", description: "Percentage height" },
{ cw: "mw", css: "minWidth", description: "Minimum width" },
{ cw: "mh", css: "minHeight", description: "Minimum height" },
{ cw: "fl", css: "float: left", description: "Float left" },
{ cw: "fr", css: "float: right", description: "Float right" },
{ cw: "size", css: "fontSize", description: "Font size" },
{ cw: "tac", css: "textAlign: center", description: "Text align center" },
{ cw: "z", css: "zIndex", description: "Z-index" },
{ cw: "tran", css: "transition", description: "Transition effect" },
{ cw: "flex", css: "display: flex", description: "Flex layout" },
{ cw: "aic", css: "alignItems: center", description: "Align items center (vertical)" },
{ cw: "ai", css: "alignItems", description: "Align items (cross axis)" },
{ cw: "jcc", css: "justifyContent: center", description: "Justify content center (horizontal)" },
{ cw: "jc", css: "justifyContent", description: "Justify content (main axis)" },
{ cw: "oh", css: "overflow: hidden", description: "Hide overflow" },
{ cw: "ohauto", css: "overflow: auto", description: "Auto overflow scroll" },
{ cw: "op", css: "opacity", description: "Opacity" },
{ cw: "none", css: "display: none", description: "Hidden" },
{ cw: "ar", css: "aspectRatio", description: "Aspect ratio" },
{ cw: "ls", css: "letterSpacing", description: "Letter spacing" },
{ cw: "lh", css: "lineHeight", description: "Line height" },
{ cw: "fwb", css: "fontWeight: bold", description: "Bold font weight" },
{ cw: "boxsizing", css: "boxSizing: border-box", description: "Box sizing" },
{ cw: "boxshadow", css: "boxShadow", description: "Box shadow" },
{ cw: "f", css: "flex", description: "Flex grow/shrink/basis" },
{ cw: "bgSize", css: "backgroundSize", description: "Background size" },
{ cw: "bgPosition", css: "backgroundPosition", description: "Background position" },
{ cw: "bgRepeat", css: "backgroundRepeat", description: "Background repeat" },
{ cw: "bColor", css: "borderColor", description: "Border color" },
];

const columns = [
  { title: "Tango CSS", dataIndex: "cw", key: "cw" },
  { title: "CSS", dataIndex: "css", key: "css" },

  { title: "Description", dataIndex: "description", key: "description" },
];
const Mapping = () => {
  const theme = useCurrentTheme();
  const [filteredData, setFilteredData] = useState(data); // 添加状态管理

  const onSearch = (v: string) => {
    const searchValue = v.trim().toLowerCase();
    if (searchValue) {
      const filtered = data.filter(
        (item) =>
          item.cw.toLowerCase().includes(searchValue) ||
          item.css.toLowerCase().includes(searchValue) ||
          item.description.toLowerCase().includes(searchValue)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // 如果搜索框没有值，显示全部数据
    }
  };

  return (
    <>
      <div className="text-4xl font-bold mb-5 dark:text-neutral-300">
        Tango CSS Mapping
      </div>
      <Search
        placeholder="Enter css props..."
        onSearch={onSearch}
        sx={{ mb: 16 }}
        btnStyles={{ marginTop: -8 ,letterSpacing:0.5,fontSize:14}}
        btnText="Search"
      />
      <Table
        dataSource={filteredData}
        columns={columns}
        containerStyles={theme === "light" ? {} : { color: "white" }}
        hoverColor="#a6a6a6"
      />
    </>
  );
};

export default Mapping;
