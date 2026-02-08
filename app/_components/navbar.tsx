"use client";

import { useState, useEffect } from "react";
import { IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Admissions", href: "/admissions" },
    { name: "Academics", href: "/academics" },
    { name: "News & Events", href: "/news-events" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-blue-950/95 backdrop-blur-xl py-4 shadow-lg shadow-pink-100/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Decorative blob behind logo */}
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <Link href="/" className="flex items-center gap-3 group relative z-10">
          <div className="relative">
            {/* Decorative circle behind text */}
            <span className="text-2xl font-bold font-playfair relative text-pink-400 ">
              God&apos;s Covenant College
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-pink-100/90 hover:text-pink-300 transition-all duration-300 font-nunito font-medium text-sm relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-pink-400 to-rose-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="relative overflow-hidden bg-pink-500 text-pink-50 px-5 py-2 rounded-md font-nunito font-bold"
          >
            <span className="relative z-10">Contact Us</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-pink-200 hover:text-pink-300 transition-colors relative z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IconX size={30} /> : <IconMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-linear-to-br from-blue-950/98 via-indigo-950/98 to-blue-900/98 backdrop-blur-xl border-t border-pink-500/20 p-6 md:hidden flex flex-col gap-6 max-h-[90vh] overflow-y-auto transition-all duration-300 shadow-2xl">
          {/* Decorative blob in mobile menu */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-pink-100 text-xl font-nunito font-medium hover:text-pink-300 transition-all duration-300 hover:translate-x-2 relative z-10"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-linear-to-r from-pink-500 to-rose-500 text-white text-center py-4 rounded-2xl font-nunito font-bold hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg shadow-pink-500/30 relative z-10"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
