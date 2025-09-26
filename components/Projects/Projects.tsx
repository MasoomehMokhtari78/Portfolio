"use client";
import { Palette } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Finance+",
    desc: "Track and analyze your finances with interactive charts and AI-powered insights.",
    image: "/images/finance.png",
    demo: "https://dashboard-git-eng-masoomehmokhtaris-projects.vercel.app/",
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
    image: "/images/code-snippet.png",
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

      <div className="flex flex-col gap-8">
        {projects.map(({ title, desc, image, demo, github }, index) => (
          <motion.div
            key={`${title} ${desc} ${index}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`w-full flex `}
          >
            <Card className="w-full shadow-lg">
              <CardContent
                className={`flex  items-center gap-4 p-4 flex-wrap justify-center`}
              >
                <img
                  alt="project image"
                  src={image}
                  style={{ width: "100%" }}
                />
                <CardFooter className="flex flex-col gap-2 items-start w-full p-0">
                  <CardTitle>
                    <h4 className="text-xl font-semibold">{title}</h4>
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {desc}
                  </CardDescription>
                  <CardAction className="flex gap-2 mt-2">
                    <Link href={demo} passHref target="_blank">
                      <Button>Demo</Button>
                    </Link>
                    <Link href={github} passHref target="_blank">
                      <Button variant="outline">Github</Button>
                    </Link>
                  </CardAction>
                </CardFooter>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
