"use client";
import React from "react";
import Image from "next/image";
import {TypeAnimation} from  "react-type-animation"
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section className="  lg:py-16 pt-32 min-h-screen overflow-hidden">
      {/* Spline 3D Animation as background */}
  
      {/* Hero content */}
      <div className=" relative z-10 grid grid-cols-1 sm:grid-cols-12 min-h-screen px-4 sm:px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start "
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold ">
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
          <p className="text-white text-weight-bold text-base sm:text-lg mb-6 lg:text-xl font-bold">
            Creative Junior Web Developer & Designer | Passionate about building functional, visually engaging digital experiences.
          </p>
          <div>
            <button className="relative overflow-hidden h-12 px-8 rounded-full bg-[#3d3a4e] text-white border-none cursor-pointer transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">
              <span className="relative z-10">Download CV</span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        ></motion.div>
      </div>
    </section>
  );
};

export default HeroSection;