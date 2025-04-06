import { Contact } from "@/components/Contact";
import { Introduction } from "@/components/Introduction/Introduction";
import { Projects } from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[64px] row-start-2 items-center max-w-[600px]">
        <Introduction />
        {/* <Technologies /> */}
        <Projects />
        <div id="contact-section" className="w-full">
          <Contact />
        </div>
      </main>
    </>
  );
}
