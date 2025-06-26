"use client";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="page-container"
    >
      <div className="content-container ">
        {/* Neon Glow Card */}
        <div className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto relative">
          {/* Outer glow - static */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] rounded-3xl blur-2xl opacity-75"></div>
          
          {/* Main card */}
          <div className="relative bg-gray-900 backdrop-blur-xl rounded-3xl text-white flex flex-col items-center justify-center px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 border-2 border-[#2e5cff] shadow-[0_0_50px_rgba(46,92,255,0.8)]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 relative z-10">
            <span className="bg-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(46,92,255,1)]">About</span>{" "}
            <span className="bg-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(226,82,225,1)]">Me</span>
          </h2>

          <div className="space-y-6 md:space-y-8 relative z-10">
            <div>
              <h3 className="mb-3 text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#2e5cff] to-[#e252e1] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(46,92,255,0.8)] text-center">
                Graphic Design Skills
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center leading-relaxed">
                Creative and detail-oriented graphic designer with strong skills in Adobe Photoshop and InDesign.
                Proficient in visual storytelling, layout design, and branding. Experienced in creating logos,
                marketing materials, and social media graphics. Solid understanding of color theory,
                typography, and design principles. Strong communication and time management skills.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#2e5cff] to-[#e252e1] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(46,92,255,0.8)] text-center">
                Web Development Skills
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center leading-relaxed">
                Actively learning and expanding expertise in programming languages like JavaScript, Node.js, and React.
                Skilled in tackling challenges with a logical and solution-oriented mindset, effectively addressing complex problems.
              </p>
            </div>
          </div>

          {/* Skill Progress Bars */}
          <div className="mt-6 md:mt-8 space-y-3 md:space-y-4 w-full relative z-10">
            {[
              { skill: "HTML & CSS", width: "50%" },
              { skill: "React JS", width: "50%" },
              { skill: "JavaScript", width: "50%" },
              { skill: "Next JS", width: "55%" },
            ].map(({ skill, width }, index) => (
              <div key={index} className="w-full">
                <p className="text-sm sm:text-base md:text-lg mb-2">{skill}</p>
                <div className="w-full bg-gray-800 h-2 rounded-full border border-gray-700">
                  <div
                    className="bg-gradient-to-r from-[#2e5cff] to-[#e252e1] h-2 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(46,92,255,0.7)]"
                    style={{ width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Stats */}
          <div className="flex flex-row gap-4 sm:gap-6 lg:gap-8 mt-6 md:mt-8 w-full justify-center items-center relative z-10">
            {[
              { value: "1+", label: "Years of Experience" },
              { value: "5+", label: "Projects Completed" },
              { value: "2+", label: "Years of Education" },
            ].map(({ value, label }, index) => (
              <div key={index} className="text-center flex-1">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#2e5cff] to-[#e252e1] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(46,92,255,1)]">{value}</p>
                <p className="text-xs sm:text-sm md:text-base text-white mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutMe;