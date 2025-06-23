import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
    
      className=" flex flex-col items-center justify-center page-container "
    >
      <div 
        id="about"
      className="w-full max-w-md sm:max-w-2xl md:max-w-3xl bg-[#0a1a3c]/90 backdrop-blur-md rounded-3xl text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-6 sm:py-10 md:py-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#ffffff] text-center">
          About{" "}
          <span className="bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <h3 className="mt-5 text-lg sm:text-xl font-bold bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] bg-clip-text text-transparent text-center">
          Graphic Design Skills
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-center">
          Creative and detail-oriented graphic designer with strong skills in Adobe Photoshop and InDesign.
          Proficient in visual storytelling, layout design, and branding. Experienced in creating logos,
          marketing materials, and social media graphics. Solid understanding of color theory,
          typography, and design principles. Strong communication and time management skills.
        </p>

        <h3 className="mt-5 text-lg sm:text-xl font-bold bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] bg-clip-text text-transparent text-center">
          Web Development Skills
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-center">
          Actively learning and expanding expertise in programming languages like JavaScript, Node.js, and React.
          Skilled in tackling challenges with a logical and solution-oriented mindset, effectively addressing complex problems.
        </p>

        {/* Skill Progress Bars */}
        <div className="mt-6 space-y-4 w-full">
          {[
            { skill: "HTML & CSS", width: "50%" },
            { skill: "React JS", width: "50%" },
            { skill: "JavaScript", width: "50%" },
            { skill: "Next JS", width: "55%" },
          ].map(({ skill, width }, index) => (
            <div key={index}>
              <p className="text-base sm:text-lg">{skill}</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div
                  className="bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] h-2 rounded-full"
                  style={{ width }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Stats */}
        <div className="flex flex-row gap-4 sm:gap-8 mt-6 mb-6 justify-center items-center w-full">
          {[
            { value: "1+", label: "Years of Experience" },
            { value: "5+", label: "Projects Completed" },
            { value: "2+", label: "Years of Education" },
          ].map(({ value, label }, index) => (
            <div key={index} className="text-center flex-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#e252e1]">{value}</p>
              <p className="text-xs sm:text-base text-white">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;