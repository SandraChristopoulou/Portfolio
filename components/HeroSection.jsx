"use client";
import React from "react";
import Image from "next/image";
import {TypeAnimation} from  "react-type-animation"
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section id="home" className="lg:py-16 pt-16 sm:pt-20 min-h-screen overflow-hidden w-full">
  
      {/* Hero content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start px-4 sm:px-0"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl lg:leading-normal font-extrabold">
            <span className="text-white sm:bg-gradient-to-r sm:from-[#0a1a3c] sm:via-[#2e5cff] sm:to-[#e252e1] sm:bg-clip-text sm:text-transparent font-extrabold">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sandra",
                1000,
                "Web Developer",
                1000,
                "Web Designer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-weight-bold text-sm sm:text-base lg:text-lg xl:text-xl mb-6 font-bold max-w-2xl">
            Creative Junior Web Developer & Designer | Passionate about building functional, visually engaging digital experiences.
          </p>
          <div className="flex justify-center sm:justify-start">
            <a
              href="/christopoulou-cv.pdf"
              download
              className="relative overflow-hidden h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-[#3d3a4e] text-white border-none cursor-pointer transition-all duration-500 flex items-center justify-center group text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center w-full h-full">
                Download CV
              </span>
              <span className="absolute inset-0 z-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] opacity-80"></span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 hidden sm:block"
        ></motion.div>
      </div>
    </section>
  );
};

export default HeroSection;