import { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
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
    { path: "./fonts/FiraMono-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "Glassmorphism Lab",
  description: "Create and customize glassmorphism UI elements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="theme-color" content="#190f24" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className={`${roboto.variable} ${fira.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
