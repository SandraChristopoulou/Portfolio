"use client";
import React from "react";
import Image from "next/image";
import {TypeAnimation} from  "react-type-animation"
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section id="home" className="lg:py-16 pt-16 sm:pt-20 min-h-screen overflow-hidden w-full">
  
      {/* Mobile: Centered Layout */}
      <div className="lg:hidden relative z-10 min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg text-center"
        >
          <h1 className="text-white mb-6 text-5xl sm:text-6xl md:text-7xl leading-tight font-bold">
            <span className="bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] bg-clip-text text-transparent font-extrabold">
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
              className="text-neon-white-strong"
            />
          </h1>
          <p className="text-white text-lg sm:text-xl mb-8 font-bold max-w-2xl mx-auto leading-relaxed">
            Creative Junior Web Developer & Designer | Passionate about building functional, visually engaging digital experiences.
          </p>
          <div className="flex justify-center">
            <a
              href="/images/christopoulou-cv.pdf"
              download
              className="relative overflow-hidden h-14 sm:h-16 px-10 sm:px-12 rounded-full bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] text-white cursor-pointer transition-all duration-500 flex items-center justify-center group text-base sm:text-lg font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(46,92,255,0.8),0_0_40px_rgba(46,92,255,0.6),0_0_60px_rgba(226,82,225,0.4)] hover:from-blue-900 hover:via-blue-600 hover:to-pink-500 hover:shadow-[0_0_30px_rgba(10,26,60,0.6),0_0_60px_rgba(46,92,255,0.8),0_0_90px_rgba(226,82,225,0.9)] hover:scale-105 hover:text-white"
            >
              <span className="relative z-10 transition-colors duration-500">
                Download CV
              </span>
              <span className="absolute inset-0 z-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Desktop: True Left-aligned Layout */}
      <div className="hidden lg:flex relative z-10 min-h-screen w-full pl-8 xl:pl-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-white mb-6 text-5xl xl:text-6xl 2xl:text-7xl leading-tight font-bold">
            <span className="bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] bg-clip-text text-transparent font-extrabold">
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
              className="text-neon-white-strong"
            />
          </h1>
          <p className="text-white text-lg xl:text-xl mb-8 font-bold max-w-2xl leading-relaxed">
            Creative Junior Web Developer & Designer | Passionate about building functional, visually engaging digital experiences.
          </p>
          <div className="flex justify-start">
            <a
              href="/images/christopoulou-cv.pdf"
              download
              className="relative overflow-hidden h-14 xl:h-16 px-10 xl:px-12 rounded-full bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] text-white cursor-pointer transition-all duration-500 flex items-center justify-center group text-base xl:text-lg font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(46,92,255,0.8),0_0_40px_rgba(46,92,255,0.6),0_0_60px_rgba(226,82,225,0.4)] hover:from-blue-900 hover:via-blue-600 hover:to-pink-500 hover:shadow-[0_0_30px_rgba(10,26,60,0.6),0_0_60px_rgba(46,92,255,0.8),0_0_90px_rgba(226,82,225,0.9)] hover:scale-105 hover:text-white"
            >
              <span className="relative z-10 transition-colors duration-500">
                Download CV
              </span>
              <span className="absolute inset-0 z-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;