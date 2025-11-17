"use client";
import { Palette } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "../ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Finance+",
    desc: "Track and analyze your finances with interactive charts and AI-powered insights.",
    image: "/images/finance.png",
    demo: "https://dashboard-ten-psi-13.vercel.app/",
    github: "https://github.com/MasoomehMokhtari78/dashboard",
  },
  {
    title: "Import Graph",
    desc: "Visualize your React project structure as an interactive dependency graph.",
    image: "/images/import-graph.png",
    demo: "https://import-graph.vercel.app/",
    github: "https://github.com/MasoomehMokhtari78/import-graph",
  },
  {
    title: "Code Snippet",
    desc: "Create, customize, and share beautiful code snippets. Export as SVG or PNG with ease.",
    image: "/images/code-snippet.PNG",
    demo: "https://code-snippet-eta.vercel.app/",
    github: "https://github.com/MasoomehMokhtari78/code-snippet",
  },
  {
    title: "Hue Editor",
    desc: "Work-in-progress tool for building interactive learning cards with text editing and rearrangement.",
    image: "/images/hue-editor.png",
    demo: "https://hue-text-editor.vercel.app/",
    github: "https://github.com/MasoomehMokhtari78/Text-Editor",
  },
];

export const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex gap-2 items-center">
        <Palette size={14} />
        <h3 className="text-lg font-semibold">My Projects</h3>
      </div>

      <div className="flex flex-col gap-8 max-w-[600px]">
        {projects.map(({ title, desc, image, demo, github }, index) => (
          <motion.div
            key={`${title}-${index}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full flex relative"
          >
            <CardSpotlight className="relative w-full p-4 overflow-visible rounded-xl">
              <div className="relative z-20 flex flex-col gap-4 items-center justify-center w-full">
                <div className="relative w-full h-64 overflow-hidden group">
                  <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full rounded-md cursor-pointer"
                  />
                </div>

                <div className="flex flex-col gap-2 items-start w-full mt-4">
                  <h4 className="text-xl font-semibold text-white">{title}</h4>
                  <p className="text-neutral-300">{desc}</p>
                  <div className="flex gap-2 mt-2">
                    <Link href={demo} target="_blank">
                      <Button className="text-xl">Demo</Button>
                    </Link>
                    <Link href={github} target="_blank">
                      <Button variant="outline" className="text-xl">
                        Github
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardSpotlight>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
