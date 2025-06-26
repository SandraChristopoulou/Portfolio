import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden shadow-lg relative group bg-[#0a1a3c]/90 backdrop-blur-md">
      {/* Image */}
      <div
        className="h-40 sm:h-48 md:h-52 lg:h-56 xl:h-64 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
      {/* Text below image with background */}
      <div className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] backdrop-blur rounded-b-2xl flex-grow">
        <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 text-center px-2 leading-tight">{title}</h5>
        <p className="text-[#ADB7BE] text-center text-sm sm:text-base px-2 leading-relaxed">{description}</p>
      </div>
      {/* Hover Overlay with GitHub Link */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <Link
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 hover:bg-white/20 rounded-full border border-[#ADB7BE] hover:border-white transition text-sm sm:text-base"
        >
          <CodeBracketIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#ADB7BE] group-hover:text-white" />
          <span className="text-white font-medium">View on GitHub</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;