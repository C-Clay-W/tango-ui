"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  Button,
  Table,
  MaterialButton,
  MaterialInput,
  Date,
} from "tango-ui-cw";
import Image from "next/image";
import dynamic from "next/dynamic";
import LogoWhite from "@/assets/logowhite.png";
const SplitText = dynamic(() => import("@/components/ReactBits/SplitText"), {
  ssr: false,
});
const DarkVeil = dynamic(() => import("@/components/ReactBits/DarkVeil"), {
  ssr: false,
});
const TiltedCard = dynamic(() => import("@/components/ReactBits/TiltedCard"), {
  ssr: false,
});
const SpotlightCard = dynamic(
  () => import("@/components/ReactBits/SpotlightCard"),
  { ssr: false }
);
const Particles = dynamic(() => import("@/components/ReactBits/Particles"), {
  ssr: false,
});
const GridMotion = dynamic(() => import("@/components/ReactBits/GridMotion"), {
  ssr: false,
});

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Page = () => {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const [visible, setVisible] = useState(true);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  function enter() {
    router.push("/en/home/components/button");
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // SplitText 上移加速效果
  const splitY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-200%"]);
  const splitOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR 阶段直接跳过。

    const handleScroll = () => {
      setVisible(false);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setVisible(true), 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const dataSource = [
    {
      key: 1,
      name: "John",
      age: 32,
      mathScore: 80,
      englishScore: 77,
      address: "New York No. 1 Lake Park",
    },
    {
      key: 2,
      name: "Lucy",
      age: 42,
      mathScore: 60,
      englishScore: 125,
      address: "London No. 1 Lake Park",
    },
    {
      key: 3,
      name: "Brown",
      age: 45,
      mathScore: 75,
      englishScore: 98,
      address: "Sydney No. 1 Lake Park",
    },
  ];

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Math Score", dataIndex: "mathScore", key: "mathScore" },
    {
      title: "English Score",
      dataIndex: "englishScore",
      key: "englishScore",
    },
    { title: "Address", dataIndex: "address", key: "address" },
  ];

  // ✅ 新增：每个 sticky section 的进度 + 对应的位移/缩放/透明度（放在 splitY/splitOpacity 后面）
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null);

  const { scrollYProgress: p1 } = useScroll({
    target: s1,
    offset: ["start 70%", "end 30%"],
  });
  const { scrollYProgress: p2 } = useScroll({
    target: s2,
    offset: ["start 70%", "end 30%"],
  });
  const { scrollYProgress: p3 } = useScroll({
    target: s3,
    offset: ["start 70%", "end 30%"],
  });
  const { scrollYProgress: p4 } = useScroll({
    target: s4,
    offset: ["start 70%", "end 30%"],
  });
  const { scrollYProgress: p5 } = useScroll({
    target: s5,
    offset: ["start 70%", "end 30%"],
  });

  const y1 = useTransform(p1, [0, 0.4], ["8%", "0%"]);
  const scale1 = useTransform(p1, [0, 1], [0.8, 1.0]);
  const opacity1 = useTransform(p1, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const y2 = useTransform(p2, [0, 0.4], ["8%", "0%"]);
  const scale2 = useTransform(p2, [0, 1], [0.8, 1.0]);
  const opacity2 = useTransform(p2, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const y3 = useTransform(p3, [0, 0.4], ["8%", "0%"]);
  const scale3 = useTransform(p3, [0, 1], [0.8, 1.0]);
  const opacity3 = useTransform(p3, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const y4 = useTransform(p4, [0, 0.4], ["8%", "0%"]);
  const scale4 = useTransform(p4, [0, 1], [0.8, 1.0]);
  const opacity4 = useTransform(p4, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const y5 = useTransform(p5, [0, 0.4], ["8%", "0%"]);
  const scale5 = useTransform(p5, [0, 1], [0.8, 1.0]);
  const opacity5 = useTransform(p5, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const items = [
    "",
    <div key="jsx-item-1">
      Gmail: <br />
      poochaini@gmail.com
    </div>,
    "",
    "",
    <div key="jsx-item-2">
      Gmail: <br />
      poochaini@gmail.com
    </div>,
    "",
    <div key="jsx-item-2">
      Gmail: <br />
      poochaini@gmail.com
    </div>,
    "",
    "",
    <div key="jsx-item-2">
      Gmail: <br />
      poochaini@gmail.com
    </div>,

    <div key="jsx-item-2">
      <div className="rounded-2xl overflow-hidden">
        <img src="/qq.jpg" alt="" />
      </div>
    </div>,

    <div key="jsx-item-3">
      <div className="rounded-2xl overflow-hidden">
        <img src="/wechat.jpg" alt="" />
      </div>
    </div>,

    <div key="jsx-item-2">
      Instagram: <br />
      @c.clay.c
    </div>,
    "",
    <div key="jsx-item-4">
      Gmail: <br />
      poochaini@gmail.com
    </div>,
    "",
    "",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 顶部导航栏 */}
      <header className="h-13 min-w-[800px] flex items-center justify-between px-6 fixed w-full z-[999]">
        <div className="flex items-center gap-7">
          <Image src={LogoWhite} alt="Logo" width={26} height={26} />
          <span
            className="relative text-xl font-bold ml-[-5px] mr-3 text-black dark:text-neutral-300 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Tango UI
          </span>
          <Link
            href="/en/home/components/button"
            className="text-black dark:text-neutral-300"
          >
            Components
          </Link>
          <Link
            href="/en/home/store"
            className="text-black dark:text-neutral-300"
          >
            Tango Store
          </Link>
          <Link
            href="/en/home/tools/watermark"
            className="text-black dark:text-neutral-300"
          >
            Tools
          </Link>
          <Link
            href="/en/home/log"
            className="text-black dark:text-neutral-300"
          >
            Update Log
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-gray-200 text-gray-500 dark:bg-[#292c33] px-[6px] py-[1px] rounded">
            MVP Version: <span className="tracking-[-2px]">0.4.3</span> beta
          </span>
        </div>
      </header>

      <div
        ref={containerRef}
        className="relative w-full h-[480vh] hide-scrollbar"
      >
        {/* 背景 DarkVeil */}
        <div
          style={{ width: "100vw", height: "100vh", position: "fixed" }}
          className="darkVeil"
        >
          <DarkVeil hueShift={41} />
        </div>

        {/* SplitText */}
        <motion.div
          style={{ y: splitY, opacity: splitOpacity }}
          className="sticky top-2/5 -translate-y-1/2 z-20 w-full flex flex-col items-center text-center px-4 sm:px-8 md:px-16 hide-scrollbar"
        >
          {/* 主标题 */}
          <SplitText
            text="Tango UI"
            className="text-[100px] font-extrabold text-neutral-300 leading-[1.1]"
            delay={100}
            duration={1.0}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          {/* 副标题 */}
          <p className="mt-6 text-[22px] sm:text-[26px] md:text-[30px] text-neutral-200">
            <span className="font-extrabold text-white">Move faster</span> with
            intuitive React UI tools
          </p>

          {/* 描述段落 */}
          <p className="mt-4 max-w-3xl text-[16px] sm:text-[18px] md:text-[20px] text-neutral-400 leading-relaxed">
            Tango UI offers a comprehensive suite of free UI tools and some
            utility hooks to help you ship new features faster. Start with Tango
            UI, our fully-loaded component library, or bring your own design
            system to our production-ready components.
            <a
              href="https://github.com/C-Clay-W/tango-ui"
              className="underline"
            >
              @ClayW
            </a>
          </p>
        </motion.div>

        {/* 叠加盒子 */}

        <div className="relative h-full hide-scrollbar mt-[50vh]">
          {/* Box 1 */}
          <section ref={s1} className="relative h-[160vh]">
            <motion.div
              style={{ y: y1, scale: scale1, opacity: opacity1 }}
              className="sticky top-0 h-screen flex items-center justify-center text-white text-5xl font-bold"
            >
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
                className="!w-[80%] !h-[60%] rounded-2xl flex items-center justify-center  overflow-hidden"
              >
                <div className="w-[50%] p-12">
                  {/* 副标题 */}
                  <p className="mt-6 text-[22px] sm:text-[26px] md:text-[30px] text-neutral-200">
                    Every component you need is{" "}
                    <span className="text-[#638efb] text-bold">
                      ready for production
                    </span>
                  </p>
                  {/* 描述段落 */}
                  <p className="mt-4 max-w-3xl text-[16px] sm:text-[18px] md:text-[20px] text-neutral-400 leading-relaxed">
                    Build at an accelerated pace without sacrificing flexibility
                    or control.
                  </p>
                </div>
                <div className="w-[50%]  p-12">
                  <Table
                    dataSource={dataSource}
                    columns={columns}
                    containerStyles={{ color: "#e5e5e5" }}
                    hoverColor="#2a2c32"
                    cellStyle={(row: any, col: any) => {
                      if (col.dataIndex === "englishScore") {
                        const maxScore = 150;
                        const percent = Math.min(
                          (row.englishScore / maxScore) * 100,
                          100
                        );

                        // 低于 90 分橘黄色
                        const color =
                          row.englishScore < 90
                            ? "rgba(255,0,0,0.6)"
                            : "rgba(34,197,94,0.6)";

                        return {
                          background: `linear-gradient(
                          to right,
                          ${color} ${percent}%,
                          transparent ${percent}%
                        )`,
                          transition: "background 0.3s ease",
                        };
                      }
                      return {};
                    }}
                  />

                  <div className="codeArea w-[100%] h-60 overflow-auto border-1 mt-2">
                    <SyntaxHighlighter
                      language="jsx"
                      style={atomOneDark}
                      // style={{background:'red'}}
                    >
                      {`const dataSource = [
  {
    key: 1,
    name: "John",
    age: 32,
    mathScore: 80,
    englishScore: 77,
    address: "New York No. 1 Lake Park",
  },
  {
    key: 2,
    name: "Lucy",
    age: 42,
    mathScore: 60,
    englishScore: 125,
    address: "London No. 1 Lake Park",
  },
  {
    key: 3,
    name: "Brown",
    age: 45,
    mathScore: 75,
    englishScore: 98,
    address: "Sydney No. 1 Lake Park",
  },
];

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Math Score", dataIndex: "mathScore", key: "mathScore" },
  {
    title: "English Score",
    dataIndex: "englishScore",
    key: "englishScore",
  },
  { title: "Address", dataIndex: "address", key: "address" },
];

<Table dataSource={dataSource} columns={columns} />`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </Particles>
            </motion.div>
          </section>
          {/* Box 2 */}
          <section ref={s2} className="relative h-[160vh]">
            <motion.div
              style={{ y: y2, scale: scale2, opacity: opacity2 }}
              className="sticky top-0 h-screen flex items-center justify-center  text-white text-5xl font-bold"
            >
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
                className="!w-[80%] !h-[60%] rounded-2xl  overflow-hidden"
                style={{ display: "block" }}
              >
                <div className="w-full p-12">
                  <span className="text-[#638efb] text-bold text-sm">
                    Why build with Tango UI?
                  </span>
                  {/* 副标题 */}
                  <p className="mt-6 text-[22px] sm:text-[26px] md:text-[30px] text-neutral-200 text-left">
                    A{" "}
                    <span className="text-[#638efb] text-bold">
                      delightful experience
                    </span>
                    <br />
                    for you and your users
                  </p>
                </div>
                <div className="w-full flex items-center justify-center space-x-15">
                  <TiltedCard
                    imageSrc="/uibg.png"
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="永恒美学"
                    containerHeight="250px"
                    containerWidth="250px"
                    imageHeight="250px"
                    imageWidth="250px"
                    rotateAmplitude={20}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <>
                        <p
                          className="flex items-center justify-center -mb-4 mt-7 ml-7 border border-white w-8 h-8 rounded-xl"
                          style={{ boxShadow: "0 4px 10px #638efb" }}
                        >
                          <Image
                            src="/art.png"
                            alt="Art icon"
                            width={20}
                            height={20}
                          />
                        </p>

                        <p className="tilted-card-demo-text text-[20px] p-8">
                          Timeless aesthetics
                        </p>
                        <p className="text-[14px] px-8 text-neutral-300 -mt-2">
                          Build beautiful UIs with ease. Start with Tango UI, or
                          create your own sophisticated theme.
                        </p>
                      </>
                    }
                  />
                  <TiltedCard
                    imageSrc="/uibg.png"
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="直观的定制"
                    containerHeight="250px"
                    containerWidth="250px"
                    imageHeight="250px"
                    imageWidth="250px"
                    rotateAmplitude={20}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <>
                        <p
                          className="flex items-center justify-center -mb-4 mt-7 ml-7 border border-white w-8 h-8 rounded-xl"
                          style={{ boxShadow: "0 4px 10px #638efb" }}
                        >
                          <Image
                            src="/dingzhi.png"
                            alt="Art icon"
                            width={20}
                            height={20}
                          />
                        </p>

                        <p className="tilted-card-demo-text text-[20px] p-8">
                          Intuitive customization
                        </p>
                        <p className="text-[14px] px-8 text-neutral-300 -mt-2">
                          Our components are as flexible as they are powerful.
                          You always have full control over how they look and
                          behave.
                        </p>
                      </>
                    }
                  />
                  <TiltedCard
                    imageSrc="/uibg.png"
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="'0'依赖"
                    containerHeight="250px"
                    containerWidth="250px"
                    imageHeight="250px"
                    imageWidth="250px"
                    rotateAmplitude={20}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <>
                        <p
                          className="flex items-center justify-center -mb-4 mt-7 ml-7 border border-white w-8 h-8 rounded-xl"
                          style={{ boxShadow: "0 4px 10px #638efb" }}
                        >
                          <Image
                            src="/doc.png"
                            alt="Art icon"
                            width={20}
                            height={20}
                          />
                        </p>

                        <p className="tilted-card-demo-text text-[20px] p-8">
                          Zero dependencies
                        </p>
                        <p className="text-[14px] px-8 text-neutral-300 -mt-2">
                          A lightweight UI component library that has no
                          third-party dependencies and can be used
                          independently.
                        </p>
                      </>
                    }
                  />
                  <TiltedCard
                    imageSrc="/uibg.png"
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="可访问性"
                    containerHeight="250px"
                    containerWidth="250px"
                    imageHeight="250px"
                    imageWidth="250px"
                    rotateAmplitude={20}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <>
                        <p
                          className="flex items-center justify-center -mb-4 mt-7 ml-7 border border-white w-8 h-8 rounded-xl"
                          style={{ boxShadow: "0 4px 10px #638efb" }}
                        >
                          <Image
                            src="/finish.png"
                            alt="Art icon"
                            width={20}
                            height={20}
                          />
                        </p>

                        <p className="tilted-card-demo-text text-[20px] p-8">
                          Dedicated to accessibility
                        </p>
                        <p className="text-[14px] px-8 text-neutral-300 -mt-2">
                          We believe in building for everyone. That's why
                          accessibility is a high priority with every new
                          feature we ship.
                        </p>
                      </>
                    }
                  />
                </div>
              </Particles>
            </motion.div>
          </section>
          {/* Box 3 */}
          <section ref={s3} className="relative h-[160vh]">
            <motion.div
              style={{ y: y3, scale: scale3, opacity: opacity3 }}
              className="sticky top-0 h-screen flex items-center justify-center text-white text-5xl font-bold"
            >
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
                className="!w-[80%] !h-[60%] rounded-2xl flex items-center justify-center  overflow-hidden"
                style={{ display: "block" }}
              >
                <div className="w-full p-12 text-center">
                  <span className="text-[#638efb] text-bold text-sm">
                    Production-ready components
                  </span>
                  {/* 副标题 */}
                  <p className="mt-6 text-[22px] sm:text-[26px] md:text-[30px] text-neutral-200 text-center">
                    Beautiful and powerful,{" "}
                    <span className="text-[#638efb] text-bold">
                      right out of the box
                    </span>
                  </p>
                </div>
                <div className="w-full flex items-center justify-center space-x-15 mb-5">
                  <SpotlightCard
                    className="custom-spotlight-card w-100 h-30 flex items-center justify-center !bg-[#fff0] border !border-[#bab8b97d]"
                    spotlightColor="rgba(158, 239, 205, 0.9)"
                  >
                    <p className="text-bold absolute top-4 left-4 text-sm">
                      Material Button
                    </p>
                    <MaterialButton>Click Me</MaterialButton>
                  </SpotlightCard>
                  <SpotlightCard
                    className="custom-spotlight-card w-100 h-30 flex items-center justify-center !bg-[#fff0] border !border-[#bab8b97d]"
                    spotlightColor="rgba(158, 239, 205, 0.9)"
                  >
                    <p className="text-bold absolute top-4 left-4 text-sm">
                      Material Input
                    </p>
                    <MaterialInput
                      label="Material Input"
                      MaterialInput={{ color: "red" }}
                      inputFloatStyles={{ color: "#638efb" }}
                    >
                      Material Input
                    </MaterialInput>
                  </SpotlightCard>
                </div>
                <div className="w-full flex items-center justify-center space-x-15">
                  <SpotlightCard
                    className="custom-spotlight-card w-100 h-30 flex items-center justify-center !bg-[#fff0] border !border-[#bab8b97d]"
                    spotlightColor="rgba(158, 239, 205, 0.9)"
                  >
                    <p className="text-bold absolute top-4 left-4 text-sm">
                      Tango Date
                    </p>
                    <Date
                      sx={{
                        size: 30,
                        fwb: true,
                        backgroundColor: "#638efb",
                        WebkitBackgroundClip: "text",
                        c: "transparent",
                      }}
                      type="us-line"
                      single
                    />
                  </SpotlightCard>
                  <SpotlightCard
                    className="custom-spotlight-card w-100 h-30 flex items-center justify-center !bg-[#fff0] border !border-[#bab8b97d]"
                    spotlightColor="rgba(158, 239, 205, 0.9)"
                  >
                    <p className="text-bold absolute top-4 left-4 text-sm">
                      Tango Notice
                    </p>
                    <div
                      className="
                    mt-5 
                    inline-flex 
                    items-center 
                    justify-start 
                    px-[10px] 
                    py-[8px] 
                    rounded-lg 
                    text-left 
                    bg-white 
                    text-black 
                    absolute 
                    top-5 
                    left-1/2 
                    -translate-x-1/2 
                    z-[999] 
                    animate-slideDown
                    transition-opacity 
                    duration-300 
                    ease-out
                  "
                      style={{
                        boxShadow:
                          "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
                        transition: "transform 0.5s ease-out",
                      }}
                    >
                      <img
                        src="/success.png"
                        alt="AA"
                        style={{ width: 20, height: 20 }}
                      />
                      <span className="text-[16px] ml-2">Success!</span>
                    </div>
                  </SpotlightCard>
                </div>
              </Particles>
            </motion.div>
          </section>
          {/* Box 4 */}
          <section ref={s4} className="relative h-[160vh]">
            <motion.div
              style={{ y: y4, scale: scale4, opacity: opacity4 }}
              className="sticky top-0 h-screen flex items-center justify-center text-white text-5xl font-bold"
            >
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
                className="!w-[80%] !h-[60%] rounded-2xl flex items-center justify-center  overflow-hidden"
                style={{ display: "block" }}
              >
                <div className="w-full p-12 text-center">
                  <span className="text-[#638efb] text-bold text-sm">
                    Many npm libraries witch you can use
                  </span>
                  {/* 副标题 */}
                  <p className="mt-6 text-[22px] sm:text-[26px] md:text-[30px] text-neutral-200 text-center">
                    <span className="text-[#638efb] text-bold">You </span>
                    make this possible
                  </p>
                </div>
                <div className="w-full flex items-center justify-center space-x-10 mb-5">
                  <SpotlightCard
                    className="custom-spotlight-card w-100 h-60  !bg-[#fff0] border !border-[#bab8b97d]"
                    spotlightColor="rgba(158, 239, 205, 0.9)"
                  >
                    <p className="text-bold text-center text-2xl text-[#638efb] mb-2">
                      tango-store-cw
                    </p>
                    <p className="text-neutral-300 text-sm text-center">
                      npm install tango-store-cw
                    </p>

                    <p className="text-[gray] text-[14px] text-center mt-2">
                      A minimalist state management library developed based on
                      React & Next. The package size is only 7kb. You can use it
                      in your project with confidence without any performance
                      loss!
                    </p>
                  </SpotlightCard>
                  <SpotlightCard
                    className="custom-spotlight-card w-100 h-60  !bg-[#fff0] border !border-[#bab8b97d]"
                    spotlightColor="rgba(158, 239, 205, 0.9)"
                  >
                    <p className="text-bold text-center text-2xl text-[#638efb] mb-2">
                      tango-watermark
                    </p>
                    <p className="text-neutral-300 text-sm text-center">
                      npm install tango-watermark
                    </p>

                    <p className="text-[gray] text-[14px] text-center mt-2">
                      useInkify hook can help you quickly realize the need to
                      add watermarks on images,and you can use this hook to
                      easily modify watermark parameters, such as multi-line
                      watermarks, deflection angles, and transparency.
                    </p>
                  </SpotlightCard>
                  <SpotlightCard
                    className="custom-spotlight-card w-100 h-60  !bg-[#fff0] border !border-[#bab8b97d]"
                    spotlightColor="rgba(158, 239, 205, 0.9)"
                  >
                    <p className="text-bold text-center text-2xl text-[#638efb] mb-2">
                      tango-pdf-cw
                    </p>
                    <p className="text-neutral-300 text-sm text-center">
                      npm install tango-pdf-cw
                    </p>

                    <p className="text-[gray] text-[14px] text-center mt-2">
                      A media preview library for permission control. The
                      usePreview hook function is used for the safe display of
                      restricted resources. It determines whether access to
                      resources is allowed by detecting the user role.
                    </p>
                  </SpotlightCard>
                  <SpotlightCard
                    className="custom-spotlight-card w-100 h-60  !bg-[#fff0] border !border-[#bab8b97d]"
                    spotlightColor="rgba(158, 239, 205, 0.9)"
                  >
                    <p className="text-bold text-center text-2xl text-[#638efb] mb-2">
                      tango-excel-cw
                    </p>
                    <p className="text-neutral-300 text-sm text-center">
                      npm install tango-excel-cw
                    </p>

                    <p className="text-[gray] text-[14px] text-center mt-2">
                      A library for exporting or generating Excel files using a
                      useExcelExporter hook function. The config object allows
                      you to quickly configure the relevant information for
                      Excel export.
                    </p>
                  </SpotlightCard>
                </div>
              </Particles>
            </motion.div>
          </section>

          {/* Box 5 */}
          <section ref={s5} className="relative h-[160vh]">
            <motion.div
              style={{ y: y5, scale: scale5, opacity: opacity5 }}
              className="sticky top-0 h-screen flex items-center justify-center text-white text-5xl font-bold"
            >
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
                className="!w-[80%] !h-[60%] rounded-2xl flex items-center justify-center  overflow-hidden"
                style={{ display: "block" }}
              >
                <div className="w-full p-12 text-center">
                  {/* 标题 */}
                  <p className="mt-6 text-[22px] sm:text-[26px] md:text-[30px] text-neutral-200 text-center">
                    <span className="text-[#638efb] text-bold">Contact </span>
                    Me
                  </p>
                  <p
                    className="w-[20%] mt-4 mx-auto"
                    style={{ boxShadow: "-1px 6px 7px 3px #9a9a9a" }}
                  ></p>
                </div>
                <div className="w-full flex items-center justify-center space-x-10 mb-5">
                  <GridMotion items={items} />
                </div>
              </Particles>
            </motion.div>
          </section>
        </div>

        {/* 底部按钮 */}
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed bottom-10 left-1/2 -translate-x-1/2 z-30"
            >
              <Button
                onClick={enter}
                className="relative !tracking-[0px] !rounded-3xl flex items-center justify-center gap-2 px-6 py-3 !text-[16px] text-white overflow-hidden"
                style={{
                  boxShadow:
                    "-17px 0px 35px -5px gray, 17px 0px 35px -5px gray",
                }}
              >
                {/* 光晕层 */}
                <span
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 blur-xl opacity-70 animate-pulse"
                  aria-hidden="true"
                />
                {/* 按钮内容 */}
                <span className="relative z-10">Browse Components</span>
                <span className="relative z-10 text-2xl">&#x2794;</span>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Page;
