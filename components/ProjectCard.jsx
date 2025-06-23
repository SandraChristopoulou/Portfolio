import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="w-full max-w-md flex flex-col h-full rounded-2xl overflow-hidden shadow-lg relative group">
      {/* Image */}
      <div
        className="h-52 md:h-72 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
      {/* Text below image with background */}
      <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-[#0a1a3c] via-[#2e5cff] to-[#e252e1] backdrop-blur rounded-b-2xl">
        <h5 className="text-2xl font-bold text-white mb-2 text-center px-2">{title}</h5>
        <p className="text-[#ADB7BE] text-center mb-4 px-4">{description}</p>
      </div>
      {/* Hover Overlay with GitHub Link */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <Link
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full border border-[#ADB7BE] hover:border-white transition"
        >
          <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] group-hover:text-white" />
          <span className="text-white font-medium">View on GitHub</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;