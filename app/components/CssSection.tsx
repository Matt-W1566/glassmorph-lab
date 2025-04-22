"use client";

import GlassSection from "@/app/components/GlassSection";
import CopyButton from "@/app/components/CopyButton";
import { useEffect, useState } from "react";

export default function CssSection() {
  const [cssCode, setCssCode] = useState("");

  const updateCssCode = () => {
    const root = document.documentElement.style;

    const color =
      root.getPropertyValue("--color-rgb").trim() || "255, 255, 255";
    const opacity = root.getPropertyValue("--glass-opacity").trim() || "0.15";
    const blur = root.getPropertyValue("--glass-blur").trim() || "6px";
    const shadowSize =
      root.getPropertyValue("--glass-shadow-size").trim() || "0 4px 30px";
    const shadowOpacity =
      root.getPropertyValue("--glass-shadow-opacity").trim() || "0.25";
    const borderWidth =
      root.getPropertyValue("--glass-border-width").trim() || "1px";
    const borderOpacity =
      root.getPropertyValue("--glass-border-opacity").trim() || "0.3";

    let styles = `background: rgba(${color}, ${opacity});
border-radius: 14px;
`;

    if (blur !== "0px") {
      styles += `backdrop-filter: blur(${blur});
-webkit-backdrop-filter: blur(${blur});
`;
    }

    if (shadowSize !== "0px" && shadowOpacity !== "0") {
      styles += `box-shadow: ${shadowSize} rgba(0, 0, 0, ${shadowOpacity});`;
    }

    if (borderWidth !== "0px") {
      styles += `
border: ${borderWidth} solid rgba(${color}, ${borderOpacity});`;
    }

    return styles;
  };

  useEffect(() => {
    setCssCode(updateCssCode());

    const observer = new MutationObserver(() => {
      setCssCode(updateCssCode());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <GlassSection title="CSS">
      <div className="glass-2 w-full !rounded-[var(--radius-md)] mb-[14px] select-all overflow-x-auto">
        <pre className="font-[fira] text-sm sm:text-base leading-5 whitespace-pre-wrap">
          {cssCode}
        </pre>
      </div>
      <CopyButton cssCode={cssCode} />
    </GlassSection>
  );
}
