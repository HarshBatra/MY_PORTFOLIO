import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="flex justify-around bg-blue-100 py-4 items-center drop-shadow-xl">
      <div className="font-semibold text-lg text-blue-950">Harsh Batra</div>
      <div className="flex gap-2 md:gap-4 text-blue-950">
        <a href="https://twitter.com/harshbatra22">
          <BsTwitterX className="w-5 h-5 cursor-pointer hover:text-white" />
        </a>
        <a href="https://linkedin.com/in/harsh-batra-b793951ab">
          <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-white" />
        </a>
        <a href="https://github.com/HarshBatra">
          <FaGithub className="w-5 h-5 cursor-pointer hover:text-white" />
        </a>
        <a href="https://leetcode.com/Batraaaaaa">
          <SiLeetcode className="w-5 h-5 cursor-pointer hover:text-white" />
        </a>
      </div>
      <a href="https://drive.google.com/file/d/1eUIsXnATVw1GJ4OpELz4V2cKNOoshv9u/view">
        <div className="font-semibold text-white cursor-pointer rounded-lg px-4 py-2 hover:bg-white hover:text-blue-950 bg-blue-950">
          Resume
        </div>
      </a>
    </div>
  );
};

export default Navbar;
