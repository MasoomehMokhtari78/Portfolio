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

export const Header = () => {
  const navItems = ["Home", "About", "Services", "Contact"];

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
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-primary transition duration-300 ease-in-out"
              >
                {item}
              </a>
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
                {navItems.map((item) => (
                  <DropdownMenuItem key={item} asChild>
                    <a
                      href="#"
                      className="hover:text-primary transition duration-300 ease-in-out block"
                    >
                      {item}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button variant="outline" className="border-primary">
            Resume
          </Button>
        </div>
      </div>
    </header>
  );
};
