"use client";

import React from "react";
import Image from "next/image";
import backgroundPicture from "@/public/background.jpg";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden relative bg-black/70">
        <Image
          src={backgroundPicture}
          alt="Error Background"
          fill
          priority
          className="object-cover z-0 brightness-75"
        />

        <div className="glass flex flex-col items-center justify-center z-10 !p-[28px] animate-float shimmer-border backdrop-blur-xl shadow-xl text-center">
          <h1 className="text-white text-4xl font-bold m-[14px]">
            Something went wrong
          </h1>
          <p className="text-white/80 mb-6 text-sm">
            {error?.message || "Unexpected application error"}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-white/10 border border-white/30 backdrop-blur px-6 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-100"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
