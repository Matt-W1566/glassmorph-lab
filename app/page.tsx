import Image from "next/image";
import backgroundPicture from "../public/background.jpg";
import SliderSection from "./components/SliderSection";
import CssSection from "./components/CssSection";
import Title from "./components/Title";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden relative">
        <Image
          src={backgroundPicture}
          alt="Background"
          fill
          priority
          className="object-cover z-0"
          quality={100}
        />

        <div className="flex flex-col xl:flex-row flex-wrap items-center justify-center w-full gap-16 xl:gap-30 xl:pb-10 px-4 lg:pt-10">
          <Title />

          <section className="flex flex-col xl:flex-row w-full gap-16 justify-center items-center text-white font-bold text-4xl">
            <SliderSection />
            <CssSection />
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
}
