"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../../components/ProjectCard";
import { motion, useInView } from "framer-motion";

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
    description: " A Meme Generator API Project in JavaScript",
    image: "/images/meme-generator.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SandraChristopoulou/Meme-Generator.git",

  },
  {
    id: 5,
    title: "Weather App Project",
    description: "A Weather App Project created with Javascript & HTML CSS",
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      className=" min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 space-y-6 md:space-y-8 w-full scroll-mt-28 bg-gradient-to-b from-[#000000] via-[#2A2356] to-[#000000] "
      id="projects"
    >
      {/* Title */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        My Projects
      </h2>

      {/* Project Grid */}
      <div className="justify-center w-full ">
      <motion.ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-12 w-full justify-center items-center"
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={{
          animate: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            layout
          >
            <ProjectCard 
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
           
            />
          </motion.li>
        ))}
      </motion.ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
