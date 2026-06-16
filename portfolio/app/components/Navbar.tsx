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
      className={`navbar ${
        scrolled
          ? "navbar-scrolled"
          : "navbar-top"
      }`}
    >
      <div className="navbar-container">

        <Link
          href="/"
          className="navbar-brand"
        >
          <div>

            <h1 className="navbar-logo">
              Michael
              <span className="navbar-logo-dot">
                .
              </span>
            </h1>

            <p className="navbar-tagline">
              Backend • AI Engineer
            </p>

          </div>
        </Link>

        <nav className="navbar-menu">

          {navItems.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="navbar-link"
            >
              {item.name}
            </a>

          ))}

        </nav>

        <div className="navbar-actions">

          <a
            href="https://github.com/MichaelPransiscoP"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-social"
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
            rel="noopener noreferrer"
            className="navbar-social"
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
            className="navbar-resume-button"
          >
            Resume
          </a>

        </div>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>

      </div>

      <div
        className={`navbar-mobile ${
          open
            ? "navbar-mobile-open"
            : "navbar-mobile-closed"
        }`}
      >

        <div className="navbar-mobile-content">

          {navItems.map((item) => (

            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="navbar-mobile-link"
            >
              {item.name}
            </a>

          ))}

          <div className="navbar-mobile-socials">

            <a
              href="https://github.com/MichaelPransiscoP"
              target="_blank"
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
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
            className="navbar-mobile-resume-button"
          >
            Download Resume
          </a>

        </div>

      </div>

    </header>
  );
}