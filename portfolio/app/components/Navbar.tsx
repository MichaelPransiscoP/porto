"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}

        <Link href="/">
          <div>
            <h1 className="text-2xl font-bold">
              Michael<span className="text-cyan-400">.</span>
            </h1>

            <p className="text-xs text-gray-400">
              Backend • AI Engineer
            </p>
          </div>
        </Link>

        {/* Desktop */}

        <nav className="hidden lg:flex gap-8 items-center">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Right */}

        <div className="hidden lg:flex gap-4 items-center">

          <a
            href="https://github.com/MichaelPransiscoP"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <Image
              src="/icons/github.png"
              alt="github"
              width={28}
              height={28}
          />
          </a>

          <a
            href="https://www.linkedin.com/in/michaelpransiscopurba/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <Image
    src="/icons/linkedin.png"
    alt="linkedin"
    width={28}
    height={28}
/>
          </a>

          <a
            href="/cv.pdf"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2 rounded-xl transition"
          >
            Resume
          </a>

        </div>

        {/* Mobile Button */}

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#0f172a] border-t border-white/10 px-6 py-6 flex flex-col gap-5">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}

          <div className="flex gap-4 mt-4">

            <a
              href="https://github.com/MichaelPransiscoP"
              target="_blank"
            >
              <Image
                  src="/icons/github.png"
                  alt="github"
                  width={28}
                  height={28}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/michaelpransiscopurba/"
              target="_blank"
            >
              <Image
                  src="/icons/linkedin.png"
                  alt="linkedin"
                  width={28}
                  height={28}
              />
            </a>

          </div>

          <a
            href="/cv.pdf"
            className="mt-4 bg-cyan-500 text-center text-black py-3 rounded-xl font-semibold"
          >
            Download Resume
          </a>

        </div>
      </div>
    </header>
  );
}