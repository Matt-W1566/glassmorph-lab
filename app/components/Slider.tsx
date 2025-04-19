"use client";

import React from "react";
import { useState } from "react";

interface SliderProps {
  name: string;
  min: string;
  max: string;
  step: string;
  defaultVal: string;
}

export default function Slider({
  name,
  min,
  max,
  step,
  defaultVal,
}: SliderProps) {
  const [value, setValue] = useState(defaultVal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const filledPercentage =
    ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100;

  return (
    <div className="mb-14px">
      <div>{name}</div>
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
      />
    </div>
  );
}
