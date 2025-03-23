"use client";

import React, { useState, useEffect } from "react";

const adjectives = [
  "responsive",
  "interactive",
  "modern",
  "elegant",
  "user-friendly",
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
    <section className="text-center my-10">
      <h2 className="text-3xl font-bold">
        I'm Masoomeh, a frontend developer making
        <br />
        <span className="text-primary">{currentWord}</span>
        <span className="text-primary">|</span>
        <br />
        websites with React.
      </h2>
    </section>
  );
};
