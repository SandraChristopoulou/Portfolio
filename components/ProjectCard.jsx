import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="w-full max-w-md flex flex-col h-full">
      <div
        className="h-52 md:h-72 rounded-xl relative group w-full overflow-hidden"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-10 bg-black/40 backdrop-blur-sm">
          <h5 className="text-2xl font-bold text-white mb-2 text-center px-2">{title}</h5>
          <p className="text-[#ADB7BE] text-center mb-4 px-4">{description}</p>
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full border border-[#ADB7BE] hover:border-white transition"
          >
            <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] group-hover:text-white" />
            <span className="text-white font-medium">GitHub</span>
          </Link>
        </div>
        {/* Image Layer */}
        <div className="absolute inset-0 z-0" />
      </div>
    </div>
  );
};

export default ProjectCard;