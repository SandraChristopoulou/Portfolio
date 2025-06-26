import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam-new";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="page-container"
    >
      <div className="content-container ">
        <div className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto bg-transparent backdrop-blur-xl rounded-3xl text-white flex flex-col items-center justify-center px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 relative">
          <BorderBeam 
            size={300}
            duration={15}
            anchor={90}
            borderWidth={4}
            colorFrom="#e252e1"
            colorTo="#2e5cff"
            delay={0}
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#ffffff] text-center mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="mb-3 text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] bg-clip-text text-transparent text-center">
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
              <h3 className="mb-3 text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] bg-clip-text text-transparent text-center">
                Web Development Skills
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center leading-relaxed">
                Actively learning and expanding expertise in programming languages like JavaScript, Node.js, and React.
                Skilled in tackling challenges with a logical and solution-oriented mindset, effectively addressing complex problems.
              </p>
            </div>
          </div>

          {/* Skill Progress Bars */}
          <div className="mt-6 md:mt-8 space-y-3 md:space-y-4 w-full">
            {[
              { skill: "HTML & CSS", width: "50%" },
              { skill: "React JS", width: "50%" },
              { skill: "JavaScript", width: "50%" },
              { skill: "Next JS", width: "55%" },
            ].map(({ skill, width }, index) => (
              <div key={index} className="w-full">
                <p className="text-sm sm:text-base md:text-lg mb-2">{skill}</p>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <div
                    className="bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] h-2 rounded-full transition-all duration-1000"
                    style={{ width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Stats */}
          <div className="flex flex-row gap-4 sm:gap-6 lg:gap-8 mt-6 md:mt-8 w-full justify-center items-center">
            {[
              { value: "1+", label: "Years of Experience" },
              { value: "5+", label: "Projects Completed" },
              { value: "2+", label: "Years of Education" },
            ].map(({ value, label }, index) => (
              <div key={index} className="text-center flex-1">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#e252e1]">{value}</p>
                <p className="text-xs sm:text-sm md:text-base text-white mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;