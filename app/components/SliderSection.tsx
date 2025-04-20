import { Suspense } from "react";
import GlassSection from "@/app/components/GlassSection";
import Slider from "@/app/components/Slider";
import ColorPicker from "@/app/components/ColorPicker";

export default function SliderSection() {
  return (
    <Suspense fallback={<div className="text-white">Loading settings...</div>}>
      <GlassSection title="Settings">
        <form className="glass-2 flex flex-col w-full gap-[14px] text-xl !rounded-[var(--radius-md)]">
          <ColorPicker />
          <Slider
            name="Opacity"
            min="0"
            max="1"
            step="0.01"
            defaultVal="0.15"
            variable="--glass-opacity"
          />
          <Slider
            name="Blur"
            min="0"
            max="40"
            step="1"
            defaultVal="6"
            variable="--glass-blur"
            usePixel={true}
          />
          <Slider
            name="Border"
            min="0"
            max="3"
            step="1"
            defaultVal="1"
            variable="--glass-border-width"
            usePixel={true}
          />
          <Slider
            name="Shadow Size"
            min="0"
            max="50"
            step="1"
            defaultVal="40"
            variable="--glass-shadow-size"
            usePixel={true}
          />
          <Slider
            name="Shadow Transparency"
            min="0"
            max="1"
            step="0.01"
            defaultVal="0.25"
            variable="--glass-shadow-opacity"
          />
        </form>
      </GlassSection>
    </Suspense>
  );
}
