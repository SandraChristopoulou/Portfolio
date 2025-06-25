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
    return () => {
      document.body.style.overflow = "auto";
    };
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
    
    // Use a more reliable scrolling method
    setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        const navbarHeight = window.innerWidth >= 640 ? 80 : 64; // Responsive navbar height
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, menuOpen ? 300 : 50); // Longer delay if menu is open
  };
  
  return (
    <nav className={`fixed w-full h-16 sm:h-20 ${scrolled ? "backdrop-blur-md bg-black/70 text-white p-2 sm:p-4 shadow-black shadow-sm" : "bg-transparent"} transition-all z-50`}>
      <div className="flex justify-between items-center h-full w-full px-3 sm:px-4 xl:px-16">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <span className="text-white text-lg sm:text-xl font-extrabold">Sandra C.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex">
          <li className=" ml-6 lg:ml-10 font-extrabold text-base lg:text-xl cursor-pointer">
            <button onClick={(e) => handleScroll(e, "projects")} className="text-white hover:text-[#e252e1] transition-colors mobile-touch">My Projects</button>
          </li>
          <li className="text-white ml-6 lg:ml-10 font-extrabold text-base lg:text-xl cursor-pointer">
            <button onClick={(e) => handleScroll(e, "about")} className="hover:text-[#e252e1] transition-colors mobile-touch">About Me</button>
          </li>
          <li className="ml-6 lg:ml-10 font-extrabold text-base lg:text-xl cursor-pointer">
            <button onClick={(e) => handleScroll(e, "contact")} className="text-white hover:text-[#e252e1] transition-colors mobile-touch">Contact Me</button>        
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden cursor-pointer p-2">
          <AiOutlineMenu size={22} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed left-0 top-0 w-full sm:hidden h-screen 
       bg-[#000000]
       p-6 ease-in-out duration-500 overflow-hidden
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} z-50`}
      >
        <div className="flex w-full items-center justify-between mb-8">
          <Link href="/" onClick={() => setMenuOpen(false)}>
          </Link>
          <div onClick={() => setMenuOpen(false)} className="cursor-pointer p-2">
            <AiOutlineClose size={22} />
          </div>
        </div>

        <div className="flex flex-col text-white h-full justify-center items-center -mt-16">
          <ul className="space-y-8 text-center">
            <li><button onClick={(e) => handleScroll(e, "projects")} className="py-3 text-2xl font-semibold hover:text-[#e252e1] transition-colors mobile-touch w-full text-center">My Projects</button></li>
            <li><button onClick={(e) => handleScroll(e, "about")} className="py-3 text-2xl font-semibold hover:text-[#e252e1] transition-colors mobile-touch w-full text-center">About Me</button></li>
            <li><button onClick={(e) => handleScroll(e, "contact")} className="py-3 text-2xl font-semibold hover:text-[#e252e1] transition-colors mobile-touch w-full text-center">Contact Me</button></li>
          </ul>

          {/* Social Icons */}
          <div className="text-white flex flex-row justify-center gap-8 pt-16 items-center">
            <Link href="https://github.com/SandraChristopoulou" onClick={() => setMenuOpen(false)}>
              <AiOutlineGithub size={32} className="cursor-pointer hover:text-[#e252e1] transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/alexandra-christopoulou-8ba4052b3/" onClick={() => setMenuOpen(false)}>
              <AiOutlineLinkedin size={32} className="cursor-pointer hover:text-[#e252e1] transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;



