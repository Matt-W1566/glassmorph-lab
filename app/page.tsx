import backgroundPicture from "../public/background.jpg";

export default function Home() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundPicture.src})`,
        }}
      >
        <div>
          {/* main div */}
          <div className="flex items-center justify-center">
            <h1 className="text-5xl text-white">
              GLASS
              <br />
              MORHPISM
              <br />
              LAB
            </h1>
          </div>
          <div></div>
        </div>
        <div className="glass-container flex items-center justify-center">
          <h1 className="text-3xl text-white">Test</h1>
        </div>
      </div>
    </>
  );
}
