import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="w-full max-w-md flex flex-col h-full">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group w-full"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-0 bg-gradient-to-r from-[#586AE2]/80 to-[#C252E1]/80 py-6 px-4 flex-1 flex flex-col justify-between min-h-[120px]">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;