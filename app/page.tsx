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
        <div className="glass-container flex items-center justify-center">
          <h1 className="text-3xl text-white">Test</h1>
        </div>
      </div>
    </>
  );
}
