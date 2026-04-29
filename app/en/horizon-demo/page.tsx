"use client";

import React from "react";
import { Horizon } from "tango-horizon-cw";
import "tango-horizon-cw/dist/index.css";

const DemoPage = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", margin: 0, padding: 0 }}>
      <Horizon 
        boxCount={20} 
        boxWidth={300} 
        boxHeight={300} 
        topHeight={1500} 
        bottomHeight={1000} 
        middleHeight="100vh"
        topContent={<div style={{ textAlign: "center", paddingTop: "200px", fontSize: 48, fontWeight: "bold", color: "#fff" }}>Scroll Down 👇</div>}
        bottomContent={<div style={{ textAlign: "center", paddingTop: "200px", fontSize: 48, fontWeight: "bold", color: "#fff" }}>End ✨</div>}
      />
    </div>
  );
};

export default DemoPage;