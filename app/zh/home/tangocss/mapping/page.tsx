"use client";
import React, { useState } from "react";
import { Table, Search } from "tango-ui-cw";
import { useCurrentTheme } from "@/hooks/useCurrentTheme";

const data = [
  { cw: "mt", css: "marginTop", description: "上边距" },
  { cw: "mr", css: "marginRight", description: "右边距" },
  { cw: "mb", css: "marginBottom", description: "下边距" },
  { cw: "ml", css: "marginLeft", description: "左边距" },
  { cw: "m", css: "margin", description: "外边距" },
  { cw: "p", css: "padding", description: "内边距" },
  { cw: "pt", css: "paddingTop", description: "上内边距" },
  { cw: "pr", css: "paddingRight", description: "右内边距" },
  { cw: "pb", css: "paddingBottom", description: "下内边距" },
  { cw: "pl", css: "paddingLeft", description: "左内边距" },
  { cw: "px", css: "paddingLeft+paddingRight", description: "左右内边距" },
  { cw: "py", css: "paddingTop+paddingBottom", description: "上下内边距" },
  { cw: "br", css: "borderRadius", description: "圆角半径" },
  { cw: "bg", css: "background", description: "背景" },
  { cw: "c", css: "color", description: "颜色" },
  { cw: "b", css: "border", description: "边框" },
  {
    cw: "center",
    css: "position: absolute; inset: 0; margin: auto",
    description: "元素居中",
  },
  { cw: "rel", css: "position: relative", description: "相对定位" },
  { cw: "ab", css: "position: absolute", description: "绝对定位" },
  { cw: "fixed", css: "position: fixed", description: "窗口定位" },
  { cw: "w", css: "width", description: "宽度" },
  { cw: "h", css: "height", description: "高度" },
  { cw: "vw", css: "width (vw)", description: "视口宽度" },
  { cw: "vh", css: "height (vh)", description: "视口高度" },
  { cw: "presentw", css: "width (%)", description: "百分比宽度" },
  { cw: "presenth", css: "height (%)", description: "百分比高度" },
  { cw: "mw", css: "minWidth", description: "最小宽度" },
  { cw: "mh", css: "minHeight", description: "最小高度" },
  { cw: "fl", css: "float: left", description: "左浮动" },
  { cw: "fr", css: "float: right", description: "右浮动" },
  { cw: "size", css: "fontSize", description: "字体大小" },
  { cw: "tac", css: "textAlign: center", description: "文本居中" },
  { cw: "z", css: "zIndex", description: "层级" },
  { cw: "tran", css: "transition", description: "过渡效果" },
  { cw: "flex", css: "display: flex", description: "弹性布局" },
  { cw: "aic", css: "alignItems: center", description: "垂直居中" },
  { cw: "ai", css: "alignItems", description: "交叉轴对齐方式" },
  { cw: "jcc", css: "justifyContent: center", description: "水平居中" },
  { cw: "jc", css: "justifyContent", description: "主轴对齐方式" },
  { cw: "oh", css: "overflow: hidden", description: "隐藏溢出" },
  { cw: "ohauto", css: "overflow: auto", description: "自动溢出滚动" },
  { cw: "op", css: "opacity", description: "透明度" },
  { cw: "none", css: "display: none", description: "隐藏" },
  { cw: "ar", css: "aspectRatio", description: "宽高比" },
  { cw: "ls", css: "letterSpacing", description: "字母间距" },
  { cw: "lh", css: "lineHeight", description: "行高" },
  { cw: "fwb", css: "fontWeight: bold", description: "字体加粗" },
  { cw: "boxsizing", css: "boxSizing: border-box", description: "盒模型" },
  { cw: "boxshadow", css: "boxShadow", description: "阴影" },
  { cw: "f", css: "flex", description: "弹性比例" },
  { cw: "bgSize", css: "backgroundSize", description: "背景图大小" },
  { cw: "bgPosition", css: "backgroundPosition", description: "背景图位置" },
  { cw: "bgRepeat", css: "backgroundRepeat", description: "背景图是否重复" },
  { cw: "bColor", css: "borderColor", description: "边框颜色" },
];

const columns = [
  { title: "Tango CSS", dataIndex: "cw", key: "cw" },
  { title: "标准CSS", dataIndex: "css", key: "css" },

  { title: "描述", dataIndex: "description", key: "description" },
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
        样式映射表
      </div>
      <Search
        placeholder="输入搜索内容..."
        onSearch={onSearch}
        sx={{ mb: 16 }}
        btnStyles={{ marginTop: -8 }}
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
