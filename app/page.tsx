import { Contact } from "@/components/Contact";
import { Introduction } from "@/components/Introduction/Introduction";
import { Projects } from "@/components/Projects/Projects";
import { Technologies } from "@/components/Technologies";
import React from "react";
export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[64px] row-start-2 items-center max-w-[800px]">
        <Introduction />
        <div id="stack">
          <Technologies />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact-section" className="w-full">
          <Contact />
        </div>
      </main>
    </>
  );
}
