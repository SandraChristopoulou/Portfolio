"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about" className="text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-10">
      {/* Image & Animation Container */}
      <div className="relative flex justify-center items-center w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
          className="relative flex justify-center items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
            className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
          >
            <Image
              src="/images/DevGirl2.png"
              alt="Sandra"
              fill
              className="object-contain overflow-hidden rounded-full  md:p-5 "
              priority
              quality={100}
            />
          </motion.div>

          {/* Animated Circle */}
          <motion.svg
            className="w-[280px] md:w-[360px] lg:w-[450px] xl:w-[506px] h-[280px] md:h-[360px] lg:h-[450px] xl:h-[506px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#8a62ec"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Text & Skills Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#ffffff]">
          About <span className="bg-gradient-to-r from-[#586AE2] to-[#C252E1] bg-clip-text text-transparent">Me</span>
        </h2>

        <h3 className="mt-5 text-xl font-bold bg-gradient-to-r from-[#586AE2] to-[#C252E1] bg-clip-text text-transparent">Graphic Design Skills</h3>
        <p className="text-base md:text-lg">
          Creative and detail-oriented graphic designer with strong skills in Adobe Photoshop and InDesign.
          Proficient in visual storytelling, layout design, and branding. Experienced in creating logos,
          marketing materials, and social media graphics. Solid understanding of color theory,
          typography, and design principles. Strong communication and time management skills.
        </p>

        <h3 className="mt-5 text-xl font-bold bg-gradient-to-r from-[#586AE2] to-[#C252E1] bg-clip-text text-transparent">Web Development Skills</h3>
        <p className="text-base md:text-lg">
          Actively learning and expanding expertise in programming languages like JavaScript, Node.js, and React.
          Skilled in tackling challenges with a logical and solution-oriented mindset, effectively addressing complex problems.
        </p>

        {/* Skill Progress Bars */}
        <div className="mt-6 space-y-4">
          {[
            { skill: "HTML & CSS", width: "50%" },
            { skill: "React JS", width: "50%" },
            { skill: "JavaScript", width: "50%" },
            { skill: "Next JS", width: "55%" },
          ].map(({ skill, width }, index) => (
            <div key={index}>
              <p className="text-lg">{skill}</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div className="bg-gradient-to-br from-[#2D1C7F] via-[#7546E8] to-[#C8B3F6] h-2 rounded-full" style={{ width }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Stats */}
        <div className="flex gap-8 mt-8 justify-center md:justify-start items-center">
          {[
            { value: "1+", label: "Years of Experience" },
            { value: "5+", label: "Projects Completed" },
            { value: "2+", label: "Years of Education" },
          ].map(({ value, label }, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-extrabold text-[#C8B3F6]">{value}</p>
              <p className="text-white">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
