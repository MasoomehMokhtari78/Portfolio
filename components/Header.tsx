"use client";
import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { scrollToSection } from "@/lib/utils";

export const Header = () => {
  const navItems = [
    { name: "Stack", id: "stack" },
    { name: "Project", id: "projects" },
    { name: "Contact", id: "contact-section" },
  ];

  return (
    <header
      className="h-full 
      w-full 
      sticky
      bg-white-400 
      rounded-full
      bg-clip-padding 
      backdrop-filter 
      backdrop-blur-sm 
      bg-opacity-40
      p-2
    "
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">M</h1>
        <div className="flex gap-4 items-center">
          <nav className="hidden md:flex space-x-4">
            {navItems.map(({ name, id }) => (
              <Button
                key={id}
                variant="ghost"
                className="hover:text-primary transition duration-300 ease-in-out"
                onClick={() => scrollToSection(id)}
              >
                {name}
              </Button>
            ))}
          </nav>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition duration-300 ease-in-out cursor-pointer inline-flex items-center justify-center"
                >
                  <Menu style={{ width: "24px", height: "24px" }} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white-400 backdrop-blur-sm bg-opacity-40 rounded-md border-2 border-primary translate-x-[-10px]">
                {navItems.map(({ name, id }) => (
                  <DropdownMenuItem key={id} asChild>
                    <Button
                      variant="ghost"
                      className="hover:text-primary transition duration-300 ease-in-out block"
                      onClick={() => {
                        setTimeout(() => scrollToSection(id), 150);
                      }}
                    >
                      {name}
                    </Button>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <a href="Masoomeh_Mokhtari_Resume.pdf" target="_blank">
            <Button variant="outline" className="border-primary">
              Resume
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};
