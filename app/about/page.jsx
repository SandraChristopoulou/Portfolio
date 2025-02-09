import { Image } from "lucide-react";


const AboutMe = () => {
  return (
    <section id="about" className=" text-white min-h-screen flex items-left justify-center px-6 md:px-16 mb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        
        {/* Image Section */}
        <div className="flex justify-center">
          <div className="w-72 h-96 rounded-lg overflow-hidden shadow-lg">
         
          </div>
        </div>

        {/* Text & Skills Section */}
        <div>
          <h2 className="text-5xl font-extrabold text-[#2D1C7F]] ">
            About <span className="text-[#C8B3F6]">Me</span>
          </h2>
      
            <h3 className=" mt-5 text-xl font-bold text-[#C8B3F6] text-left">Graphic Design Skills</h3>
          <p>  Creative and detail-oriented graphic designer with strong skills in Adobe Photoshop and InDesign..
           Proficient in visual storytelling, layout design, and branding . Experienced in creating logos, 
           marketing materials, and social media graphics. Solid understanding of color theory, 
           typography, and design principle.. Strong communication and time management skills to meet project deadlines effectively."</p>
        
            <h3 className=" mt-5 text-xl font-bold text-[#C8B3F6] text-left">Web Development Skills</h3>
            <p>Actively learning and expanding expertise in programming languages like JavaScript, Node.js, and React.. 
            Skilled in tackling challenges with a logical and solution-oriented mindset, effectively addressing even the most intricate problems.
            </p>
        

          {/* Skill Progress Bars */}
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-lg">HTML & CSS</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div className="bg-gradient-to-br from-[#2D1C7F] via-[#7546E8] to-[#C8B3F6] h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
            <div>
              <p className="text-lg">React JS</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div className="bg-gradient-to-br from-[#2D1C7F] via-[#7546E8] to-[#C8B3F6] h-2 rounded-full w-[85%]"></div>
              </div>
            </div>
            <div>
              <p className="text-lg">JavaScript</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div className="bg-gradient-to-br from-[#2D1C7F] via-[#7546E8] to-[#C8B3F6] h-2 rounded-full w-[80%]"></div>
              </div>
            </div>
            <div>
              <p className="text-lg">Next JS</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div className="bg-gradient-to-br from-[#2D1C7F] via-[#7546E8] to-[#C8B3F6] h-2 rounded-full w-[75%]"></div>
              </div>
            </div>
          </div>

          {/* Experience Stats */}
          <div className="flex gap-8 mt-8">
            <div>
              <p className="text-3xl font-extrabold text-[#C8B3F6]">1+</p>
              <p className="text-white">Years of Experience</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#C8B3F6]">5+</p>
              <p className="text-white">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#C8B3F6]">2+</p>
              <p className="text-white">Years of Education</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
