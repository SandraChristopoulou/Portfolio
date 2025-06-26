"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../../components/ProjectCard";
import { motion, useInView } from "framer-motion";
import 'swiper/css';
import Marquee from "react-fast-marquee";



const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "A responsive Website created with Next.js & Tailwind CSS",
    image: "/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yumeko1232/Portfolio.git",
  },
  {
    id: 2,
    title: "Calculator",
    description: "A simple Calculator created with Next.js & Tailwind CSS",
    image: "/images/calculator.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yumeko1232/Calculator.git",
  },
  {
    id: 3,
    title: "Job-Finder Project",
    description: "A Job-Finder Project created with Next.js & Tailwind CSS",
    image: "/images/job-find.png",
    tag: ["All", "Web"],
    gitUrl: "/",
  },
  {
    id: 4,
    title: "Meme Generator Project",
    description: "A Meme Generator API Project in JavaScript",
    image: "/images/meme-generator.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SandraChristopoulou/Meme-Generator.git",
  },
  {
    id: 5,
    title: "Breathe Pilates Booking App",
    description: "Α PWA & NEXT JS",
    image: "/images/weather-app.png",
    tag: ["All", "Web"],
    gitUrl: "/",
  },
  {
    id: 6,
    title: "Currency Converter ",
    description: "A Currency Converter in Vite & React",
    image: "/images/currency-converter.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SandraChristopoulou/Currency-Converter.git",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section
      id="projects"
      className="page-container"
    >
      <div className="w-full max-w-none px-0">
        <div className="px-4 sm:px-6 lg:px-8 mb-4 md:mb-8">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(46,92,255,1)]">
            My Projects
          </h2>
        </div>
        
        {/* Marquee for desktop, grid for mobile */}
        <div className="w-full">
          {/* Desktop Marquee - Full width overflow */}
          <div className="hidden md:block marquee-container">
            <Marquee
              gradient={true}
              gradientColor="transparent"
              gradientWidth={100}
              speed={35}
              pauseOnHover={true}
              loop={0}
              className="py-6"
            >
              {filteredProjects.map((project) => (
                <div key={project.id} className="mx-6 lg:mx-8 flex-shrink-0">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                  />
                </div>
              ))}
            </Marquee>
          </div>
          
          {/* Mobile and Tablet Grid */}
          <div className="block md:hidden w-full px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="flex justify-center">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      imgUrl={project.image}
                      gitUrl={project.gitUrl}
                      previewUrl={project.previewUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;