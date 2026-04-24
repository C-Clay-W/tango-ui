// "use client";

import type { Metadata } from "next";
import Script from "next/script";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import ThemeProvider from "@/components/ThemeProvider";
import { ThemeProvider } from "tango-ui-cw";

import "tango-ui-cw/tango.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Tango UI",
  description: "Tango UI",
  icons: {
    icon: "/f.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var current = localStorage.getItem("theme");
                  if (!current) {
                    current = "dark";
                    localStorage.setItem("theme", current);
                  }

                  if (current === "system") {
                    current = window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light";
                  }

                  document.documentElement.classList.toggle("dark", current === "dark");
                  document.documentElement.setAttribute("data-theme", current);
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
         {children}
          {/* <NoticeProvider></NoticeProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
