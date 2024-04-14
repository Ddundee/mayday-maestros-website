import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24 selection:bg-yellow-400 selection:bg-opacity-80">
      <h1 className="text-9xl">Disaster Masters</h1>
      <p className="text-6xl">Challenge: Mayday Maestroes</p>
      <a href="https://github.com/Ddundee/mayday-maestros"><button className=" select-none border border-white rounded-lg hover:opacity-65 ease-in-out text-white font-bold py-4 px-8 duration-200 text-6xl">Go to Github Repo</button></a>
    </main>
  );
}
