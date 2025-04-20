"use client";

import GlassSection from "@/app/components/GlassSection";
import CopyButton from "@/app/components/CopyButton";

export default function CssSection() {
  const root = document.documentElement.style;

  const cssCode = `background: rgba(255, 255, 255, 0.15
backdrop-filter: blur(6px);
-webkit-backdrop-filter: blur(10px);
border-radius: 14px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
border: 1px solid rgba(255, 255, 255, 0.3);`;

  // all variables --glass-opacity, --color-rgb, --glass-opacity, --glass-blur, --glass-shadow-size, --glass-shadow-opacity, (--glass-border-width, --glass-border-opacity

  return (
    <GlassSection title="CSS">
      <div className="glass-2 w-full !rounded-[var(--radius-md)] mb-[14px] select-all overflow-x-auto">
        <pre className="font-[fira] text-sm sm:text-base leading-5">
          {cssCode}
        </pre>
      </div>
      <CopyButton cssCode={cssCode} />
    </GlassSection>
  );
}
