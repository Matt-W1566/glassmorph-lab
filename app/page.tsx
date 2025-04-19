import backgroundPicture from "../public/background.jpg";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-cover bg-center items-center justify-center overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundPicture.src})`,
      }}
    >
      <div className="flex flex-col xl:flex-row flex-wrap items-center justify-center w-full gap-16 xl:gap-30 px-4 lg:pt-10">
        <div className="w-full flex justify-center">
          <div className="flex font-bold items-center justify-center relative max-w-full">
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-white relative z-10 mt-16 lg:mt-0">
              GLASS
              <br />
              MORPHISM
              <br />
              <span className="block text-right">LAB</span>
              <div
                className="absolute z-20 left-[-2.5rem] bottom-0 !rounded-full glass
                w-22 h-22 md:w-25 md:h-25 lg:w-32 lg:h-32"
              />
              <div
                className="absolute z-20 right-[-2.5rem] top-[1.25rem] glass
                w-37 h-20 !rounded-[24px] md:w-43 md:h-25 md:!rounded-[30px] lg:w-54 lg:h-34"
              />
            </h1>
          </div>
        </div>

        <section className="flex flex-col xl:flex-row w-full gap-16 justify-center items-center text-white font-bold text-4xl">
          <div className="glass flex-1 flex flex-col items-center justify-center m-2 h-fit w-full max-w-[500px]">
            <div className="glass-2 flex items-center justify-center w-full !rounded-[var(--radius-md)] !p-1.5 mb-[14px]">
              Settings
            </div>
            <form className="glass-2 flex flex-col w-full text-xl !rounded-[var(--radius-md)] p-4">
              <div>Colour</div>
              <Slider
                name="Opacity"
                min="0"
                max="1"
                step="0.01"
                defaultVal="0.15"
              />
              <Slider name="Blur" min="0" max="40" step="1" defaultVal="6" />
              <Slider
                name="Border"
                min="0"
                max="2"
                step="0.25"
                defaultVal="1"
              />
              <Slider
                name="Shadow Size"
                min="0"
                max="50"
                step="1"
                defaultVal="40"
              />
              <Slider
                name="Shadow Transparency"
                min="0"
                max="1"
                step="0.01"
                defaultVal="0.25"
              />
            </form>
          </div>

          <div className="glass flex-1 flex flex-col items-center justify-center m-2 h-fit w-full max-w-[500px]">
            <div className="glass-2 flex items-center justify-center w-full !rounded-[var(--radius-md)] !h-[54.13px] !p-0 mb-[14px] text-center">
              CSS
            </div>
            <div className="glass-2 w-full !rounded-[var(--radius-md)] mb-[14px] select-all overflow-x-auto">
              <pre className="font-[fira] text-sm sm:text-base leading-5">
                background: rgba(255, 255, 255, 0.15);
                <br />
                backdrop-filter: blur(6px);
                <br />
                -webkit-backdrop-filter: blur(10px);
                <br />
                border-radius: 14px;
                <br />
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
                <br />
                border: 1px solid rgba(255, 255, 255, 0.3);
                <br />
              </pre>
            </div>

            <button className="group glass-2 flex items-center justify-center w-full !rounded-[var(--radius-md)] !h-[54.13px] !p-0 text-xl text-white gap-2 float cursor-pointer">
              Copy
              <svg
                className="group-hover:fill-white/30"
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
          </div>
        </section>
      </div>
    </div>
  );
}
