import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

const texGyreAdventor = localFont({
  src: [
    {
      path: "./fonts/texgyreadventor-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/texgyreadventor-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/texgyreadventor-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/texgyreadventor-bolditalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Homecase | Trendy Totes, Daily Vibes",
  description:
    "Túi tote cotton trẻ trung dành cho Gen Z và sinh viên tại Đà Nẵng.",
};

export const viewport: Viewport = {
  themeColor: "#fff9f2",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="vi">
      <body className={texGyreAdventor.className}>{children}</body>
    </html>
  );
}