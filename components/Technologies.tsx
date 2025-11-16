"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  siReact,
  siNextdotjs,
  siTailwindcss,
  siJavascript,
  siTypescript,
  siRedux,
  siMui,
  siGit,
  siDocker,
  siHtml5,
  siCss3,
} from "simple-icons";
import { Layers } from "lucide-react";

const technologies = [
  { icon: siReact, color: "#7ed0d8" },
  { icon: siNextdotjs, color: "#000000" },
  { icon: siTailwindcss, color: "#08bbd9" },
  { icon: siJavascript, color: "#ebcc36" },
  { icon: siTypescript, color: "#377cc9" },
  { icon: siRedux, color: "#7851bd" },
  { icon: siMui, color: "#0b81fd" },
  { icon: siGit, color: "#f0563a" },
  { icon: siDocker, color: "#43a5f0" },
  { icon: siHtml5, color: "#e5532c" },
  { icon: siCss3, color: "#2649e1" },
];

export const Technologies = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[280px] sm:max-w-[400px] md:max-w-[800px] w-full mx-auto">
        <div className="flex gap-2 items-center">
          <Layers size={14} />
          <h4>Stack</h4>
        </div>
        <div className="relative overflow-hidden text-white py-4 w-full">
          <div className="gradient-fade-left"></div>
          <div className="gradient-fade-right"></div>
          <motion.div
            className="flex space-x-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...technologies, ...technologies].map(
              ({ icon, color }, index) => (
                <motion.span
                  key={index}
                  className="text-xl font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 transition-colors duration-300"
                    style={{
                      fill: "white",
                      transition: "fill 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.fill = color)}
                    onMouseLeave={(e) => (e.currentTarget.style.fill = "white")}
                  >
                    <path d={icon.path} />
                  </svg>
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
