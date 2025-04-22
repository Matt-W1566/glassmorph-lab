export default function Title() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex font-bold items-center justify-center relative max-w-full">
        <h1 className="text-6xl md:text-7xl lg:text-8xl text-white relative z-10 mt-16 lg:mt-0">
          GLASS
          <br />
          MORPHISM
          <br />
          <span className="block text-right">LAB</span>
          <div
            className="absolute z-20 left-[-2.5rem] bottom-0 !rounded-full glass w-22 h-22
            md:w-25 md:h-25 lg:w-32 lg:h-32"
          />
          <div
            className="absolute z-20 right-[-2.5rem] top-[0.75rem] glass w-37 h-21 !rounded-[24px]
            md:w-43 md:h-25 md:!rounded-[30px] lg:w-54 lg:h-34 md:top-[1.25rem]"
          />
        </h1>
      </div>
    </div>
  );
}
