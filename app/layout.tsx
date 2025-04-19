import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
  src: [
    { path: "./fonts/Roboto-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/Roboto-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/Roboto-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Roboto-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Roboto-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Roboto-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Roboto-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Roboto-Thin.ttf", weight: "200", style: "normal" },
    { path: "./fonts/Roboto-ExtraLight.ttf", weight: "100", style: "normal" },
  ],
  variable: "--font-roboto",
});

const fira = localFont({
  src: [
    { path: "./fonts/FiraMono-Regular.ttf", weight: "100", style: "normal" },
  ],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "Glassmorphism Lab",
  description: "The place to test glassmorphism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
