"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { siGithub } from "simple-icons";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import GlowingButton from "../ui/GlowingButton";

const adjectives = [
  "responsive",
  "interactive",
  "modern",
  "elegant",
  "user-friendly",
];

const contacts = [
  <FaGithub className="text-gray-500 hover:text-white transition-all duration-300 transform hover:scale-110" />,

  <FaLinkedin className="text-gray-500 hover:text-[#0075b3] transition-all duration-300 transform hover:scale-110" />,
];

export const Introduction = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentAdjective = adjectives[index];
    let typingSpeed = 100;

    if (isDeleting) typingSpeed = 50;

    const handleTyping = setTimeout(() => {
      if (!isDeleting && charIndex < currentAdjective.length) {
        setCurrentWord((prev) => prev + currentAdjective[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentWord((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentAdjective.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % adjectives.length); // Move to the next word
      }
    }, typingSpeed);

    return () => clearTimeout(handleTyping);
  }, [charIndex, isDeleting, index]);

  return (
    <section className="text-center my-10 flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold">
        I'm Masoomeh, a frontend developer making
        <br />
        <span className="text-primary">{currentWord}</span>
        <span className="text-primary">|</span>
        <br />
        websites with React.
      </h2>
      <div className="w-52">
        <GlowingButton>
          <h3 className="text-xl">Contact Me</h3>
        </GlowingButton>
      </div>
      <div className="flex w-full justify-center">
        {contacts.map((icon, index) => (
          <motion.span
            className="text-xl font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300"
            whileHover={{ scale: 1.5 }}
          >
            <a key={`${index}`}>{icon}</a>
          </motion.span>
        ))}
      </div>
    </section>
  );
};
