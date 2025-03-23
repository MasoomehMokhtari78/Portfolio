import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Header />
      </main>
    </>
  );
}
