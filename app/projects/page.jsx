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
      className="w-full flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:px-8 sm:py-12 lg:px-24 lg:py-24 bg-transparent"
    >
      <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold z mb-8">
        My Projects
      </h2>
      {/* Marquee for desktop, grid for mobile */}
      <div className="w-full flex justify-center">
        {/* Desktop Marquee */}
        <div className="hidden sm:block w-full">
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            loop={0}
          >
            {filteredProjects.map((project) => (
              <div key={project.id} className="mx-6 w-[300px] md:w-[650px] flex-shrink-0">
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
        {/* Mobile Grid */}
        <div className="block sm:hidden w-full">
          <div className="flex flex-col items-center gap-8 w-full">
            {filteredProjects.map((project) => (
              <div key={project.id} className="w-full max-w-xs mx-auto">
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
    </section>
  );
};

export default ProjectsSection;