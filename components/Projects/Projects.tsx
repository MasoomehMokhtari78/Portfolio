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
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

const projects = [
  {
    title: "Project",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris",
    image: "/images/example.jfif",
    demo: "#",
    github: "#",
  },
  {
    title: "Project",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris",
    image: "/images/example.jfif",
    demo: "#",
    github: "#",
  },
  {
    title: "Project",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris",
    image: "/images/example.jfif",
    demo: "#",
    github: "#",
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
        {projects.map(({ title, desc, image }, index) => (
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
                <Image
                  alt="project image"
                  src={image}
                  width={400}
                  height={200}
                />
                <CardFooter className="flex flex-col gap-2 items-start w-full p-0">
                  <CardTitle>
                    <h4 className="text-xl font-semibold">{title}</h4>
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {desc}
                  </CardDescription>
                  <CardAction className="flex gap-2 mt-2">
                    <Button>Demo</Button>
                    <Button variant="outline">Github</Button>
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
