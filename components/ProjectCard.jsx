import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="card relative">
      {/* Face 1 - Front face with background image */}
      <div 
        className="face face1 relative bg-[#333] flex justify-center items-center z-10"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="content opacity-20 transition-all duration-500 text-center">
          <h3 className="text-white text-base text-center font-normal">{title}</h3>
        </div>
      </div>

      {/* Face 2 - Back face with description and button */}
      <div className="face face2 relative bg-[whitesmoke] flex items-center justify-center p-5 box-border">
        <div className="content">
          <p className="text-[#333] text-[10pt] m-0 p-0">
            {description}
          </p>
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-black box-border border border-dashed border-[#333] p-2.5 mt-4 inline-block transition-all duration-300 hover:bg-[#333] hover-gradient-text hover:shadow-inset text-[10pt]"
          >
            Git Hub Repository
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;