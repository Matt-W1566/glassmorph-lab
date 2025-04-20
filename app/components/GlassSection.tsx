import React from "react";

export default function GlassSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass flex-1 flex flex-col items-center justify-center m-2 h-fit w-full max-w-[500px]">
      <div className="glass-2 flex items-center justify-center w-full !rounded-[var(--radius-md)] !p-1.5 mb-[14px]">
        {title}
      </div>
      {children}
    </div>
  );
}
