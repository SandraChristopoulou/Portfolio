"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../../components/ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "A responsive Website created with Next.js & Tailwind CSS",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yumeko1232/My-Portfolio.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Calculator",
    description: "A simple Calculator created with Next.js & Tailwind CSS",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yumeko1232/Calculator.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
      className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 space-y-6 md:space-y-8 w-full scroll-mt-28 bg-gradient-to-b from-[#05060b] via-[#2A2356] to-[#05060b] "
      id="projects"
    >
      {/* Title */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        My Projects
      </h2>

      {/* Project Grid */}
      <motion.ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-12 w-full"
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
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProjectsSection;
