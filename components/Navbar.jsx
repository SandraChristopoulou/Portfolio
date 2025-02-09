'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [menuOpen]);

  return (
    <nav className='fixed w-full h-20  bg-gradient-to-br from-[#2D1C7F] to-[#C8B3F6] z-10'>
      <div className='flex justify-between items-center h-full w-full px-4 xl:px-16'>
        <Link href="/">
          <span className='text-xl font-extrabold'>Sandra C.</span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden sm:flex'>
          <ul className='hidden sm:flex'>

            <Link href="/projects"><li className='ml-10 font-extrabold text-xl'>My Projects</li></Link>
            <Link href="/about"><li className='ml-10 font-extrabold text-xl'>About Me</li></Link>
            <Link href="/contact"><li className='ml-10 font-extrabold text-xl'>Contact Me</li></Link>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={() => setMenuOpen(!menuOpen)} className='md:hidden cursor-pointer pl-24'>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-gradient-to-br from-[#2D1C7F] to-[#C8B3F6] p-10 ease-in duration-300 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} z-50`}
      >
        <div className='flex w-full items-center justify-end'>
          <div onClick={() => setMenuOpen(false)} className='cursor-pointer'>
            <AiOutlineClose size={25} />
          </div>
        </div>

        <div className='flex flex-col py-4'>
          <ul>

            <Link href="/projects"><li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">My Projects</li></Link>
            <Link href="/about"><li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">About Me</li></Link>
            <Link href="/contact"><li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">Contact Me</li></Link>
          </ul>
        </div>

        {/* Social Icons - Now in a Row */}
        <div className="flex flex-row justify-center gap-6 pt-10 items-center">
          <Link href="https://github.com/yumeko1232" ><AiOutlineGithub size={30} className='cursor-pointer'/></Link>
          <Link href="https://www.instagram.com/christopoyloyyy/"><AiOutlineInstagram size={30} className='cursor-pointer'/></Link>
          <Link href="https://www.linkedin.com/in/alexandra-christopoulou-8ba4052b3/"><AiOutlineLinkedin size={30} className='cursor-pointer'/></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

