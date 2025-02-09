"use client";
import React from "react";
import Image from "next/image";
import {TypeAnimation} from  "react-type-animation"
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="lg:py-16 pt-32 min-h-screen h-screen ">
      <div className="grid grid-cols-1 sm:grid-cols-12 min-h-screen pl-12 pr-12 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start "
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold ">
            <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary- text-[#b6a0e5]">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
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
          <p className="text-white text-weight-bold text-left text-base sm:text-lg mb-6 lg:text-xl font-bold">
          A Web Designer & Developer specializing in creating visually stunning, user-centric, and high-performance websites. With a keen eye for design and expertise in modern web technologies, I craft seamless digital experiences that elevate brands and engage audiences.
          </p>
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#2D1C7F] to-[#C8B3F6] hover:bg-slate-200 text-white  "
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full  hover:bg-slate-800 text-white mt-3"
            >
              </Link>
             <Link
           href="/"
            className="px-6 py-3 inline-block w-full sm:w-fit rounded-full text-white text-center bg-gradient-to-br from-[#2D1C7F] to-[#C8B3F6]">
           Download CV
            </Link>
       
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;