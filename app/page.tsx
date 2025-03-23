import { Header } from "@/components/Header";
import { Introduction } from "@/components/Introduction/Introduction";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Introduction />
      </main>
    </>
  );
}
