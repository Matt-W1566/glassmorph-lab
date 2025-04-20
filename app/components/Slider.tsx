"use client";

import { useState, useEffect } from "react";

interface SliderProps {
  name: string;
  min: string;
  max: string;
  step: string;
  defaultVal: string;
  variable: string;
  usePixel?: boolean;
}

export default function Slider({
  name,
  min,
  max,
  step,
  defaultVal,
  usePixel,
  variable,
}: SliderProps) {
  const [value, setValue] = useState(defaultVal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const cssValue = usePixel ? `${value}px` : value;
    document.documentElement.style.setProperty(variable, cssValue);

    if (variable === "--glass-border-width") {
      const borderWidth = parseFloat(value);
      const opacityMap: { [key: number]: number } = { 2: 0.2, 3: 0.15 };

      document.documentElement.style.setProperty(
        "--glass-border-opacity",
        String(opacityMap[borderWidth] ?? 0.3)
      );
    }
  }, [variable, value, usePixel]);

  const filledPercentage =
    ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100;

  return (
    <div>
      <div className="flex justify-between -mb-2">
        <span>{name}</span>
        <span>
          {usePixel ? `${value}px` : `${Math.round(Number(value) * 100)}%`}
        </span>
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        style={{
          background: `linear-gradient(to right, white ${filledPercentage}%, rgba(255, 255, 255, 0.2) ${filledPercentage}%)`,
        }}
        className="!mb-0"
      />
    </div>
  );
}
