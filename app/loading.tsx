import Image from "next/image";
import backgroundPicture from "@/public/background.jpg";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden relative bg-black/70">
      <Image
        src={backgroundPicture}
        alt="Loading Background"
        fill
        priority
        className="object-cover z-0 brightness-75"
        quality={100}
      />

      <div className="glass flex flex-col items-center justify-center z-10 !p-[28px] animate-float shimmer-border backdrop-blur-xl shadow-xl">
        <h1 className="text-white text-4xl font-bold m-[14px]">Loading...</h1>
        <div className="w-48 h-2 bg-white/20 rounded-full overflow-hidden m-[14px]">
          <div className="h-full bg-white/90 animate-loading-bar rounded-full" />
        </div>
      </div>
    </div>
  );
}
