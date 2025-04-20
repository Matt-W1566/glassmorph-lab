"use client";

import { useState, useRef } from "react";

function hexToRgb(hex: string): string {
  const raw = hex.replace("#", "");
  const bigint = parseInt(raw, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

export default function Slider() {
  const [value, setValue] = useState("#ffffff");
  const rafRef = useRef<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setValue(newColor);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      document.documentElement.style.setProperty("--color", newColor);
      document.documentElement.style.setProperty(
        "--color-rgb",
        hexToRgb(newColor)
      );
    });
  };

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>Colour</span>
      </div>
      <input
        type="color"
        value={value}
        title="Choose your color"
        onChange={handleChange}
      />
    </div>
  );
}
