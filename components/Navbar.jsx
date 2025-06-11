"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling with navbar offset
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
  
    setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        const navbarHeight = 80;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - navbarHeight, behavior: "smooth" });
      }
    }, 100); // Small delay to ensure element is available
  };
  
  return (
    <nav className={`fixed w-full h-20 ${scrolled ? "backdrop-blur-md bg-black/70 text-white p-4 shadow-black shadow-sm" : "bg-transparent"} transition-all z-50`}>
      <div className="flex justify-between items-center h-full w-full px-4 xl:px-16">
        <Link href="/">
          <span className="text-xl font-extrabold">Sandra C.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex">
          <li className="ml-10 font-extrabold text-xl cursor-pointer">
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>My Projects</a>
          </li>
          <li className="ml-10 font-extrabold text-xl cursor-pointer">
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>About Me</a>
          </li>
          <li className="ml-10 font-extrabold text-xl cursor-pointer">
            <Link  href={'#contact'} >
            Contact Me
            </Link>        
              </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#000000fb] p-10 ease-in duration-300 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} z-50`}
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={() => setMenuOpen(false)} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>

        <div className="flex flex-col py-4">
          <ul>
            <li onClick={(e) => handleScroll(e, "projects")} className="py-4 cursor-pointer">My Projects</li>
            <li onClick={(e) => handleScroll(e, "about")} className="py-4 cursor-pointer">About Me</li>
            <li onClick={(e) => handleScroll(e, "contact")} className="py-4 cursor-pointer">Contact Me</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row justify-center gap-6 pt-10 items-center">
          <Link href="https://github.com/SandraChristopoulou"><AiOutlineGithub size={30} className="cursor-pointer" /></Link>
          <Link href="https://www.linkedin.com/in/alexandra-christopoulou-8ba4052b3/"><AiOutlineLinkedin size={30} className="cursor-pointer" /></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



