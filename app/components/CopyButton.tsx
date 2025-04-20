"use client";

import { useState } from "react";

interface CopyButtonProps {
  cssCode: string;
}

export default function CopyButton({ cssCode }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      className={`group glass-2 flex items-center justify-center w-full !rounded-[var(--radius-md)] !h-[54.13px] !p-0 text-xl gap-2 float cursor-pointer ${
        copied ? "!bg-[#41ff112a]" : "hover:bg-white/5"
      }`}
      onClick={copied ? undefined : handleCopy}
      type="button"
      disabled={copied}
    >
      {copied ? "Copied!" : "Copy"}
      <svg
        className={`${
          copied ? "fill-[#00ff0058]" : "group-hover:fill-white/30"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth="2"
        width="20"
        height="20"
      >
        <g transform="scale(-1, 1) translate(-24, 0)">
          <path
            d="m6 11v5c0 2.8284 0 4.2426.8787 5.1213S9.1716 22 12 22h3c2.8284 0 4.2426 0 5.1213-.8787S21 18.8284 21 16v-5c0-2.8284 0-4.2426-.8787-5.1213C19.2426 5 17.8284 5 15 5h-3c-2.8284 0-4.2426 0-5.1213.8787C6 6.7574 6 8.1716 6 11zm12-6c0-1.6568-1-4-3-4h-4C5 1 4 1 3 2S2 4 2 8v7c0 3 2 4 4 4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </button>
  );
}
