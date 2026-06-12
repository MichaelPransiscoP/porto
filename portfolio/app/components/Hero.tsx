"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const menus = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-cyan-400"
        >
          Michael.dev
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {menus.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="hover:text-cyan-400 transition duration-300"
            >
              {item.title}
            </a>
          ))}

          <a
            href="https://github.com/MichaelPransiscoP"
            target="_blank"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-lg transition"
          >
            Github
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#111827] px-6 py-4 space-y-4">
          {menus.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block"
            >
              {item.title}
            </a>
          ))}

          <a
            href="https://github.com/MichaelPransiscoP"
            target="_blank"
            className="block bg-cyan-500 text-black text-center py-2 rounded-lg font-semibold"
          >
            Github
          </a>
        </div>
      )}
    </nav>
  );
}