import { Header } from "@/components/Header";
import { Introduction } from "@/components/Introduction/Introduction";
import { Projects } from "@/components/Projects/Projects";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[64px] row-start-2 items-center">
        <Introduction />
        <Technologies />
        <Projects />
      </main>
    </>
  );
}
