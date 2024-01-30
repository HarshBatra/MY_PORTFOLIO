import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div className="px-10 flex md:flex-row flex-col gap-4 justify-center md:justify-around bg-black py-10 text-white items-center">
      <img
        className="w-1/4"
        src={require("../assets/images/mandala2.png")}
        alt="mandala"
      />
      <div className="font-bold text-xl md:text-3xl text-center md:w-1/4">
        Wanna Hire me? Or just wanna discuss a cool project to collab on?
      </div>
      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="font-bold">New Delhi, Delhi, India</div>
        <a href="mailto:harshbat22@gmail.com">
          <div>
            <span className="font-bold">Email:</span> harshbat22@gmail.com
          </div>
        </a>
        <div>
          <span className="font-bold">Phone:</span> +91 7217860377
        </div>
        <div className="flex gap-2 md:gap-5 mt-4 self-center md:self-start">
          <a href="https://twitter.com/harshbatra22">
            <BsTwitterX className="w-5 h-5 cursor-pointer text-white" />
          </a>
          <a href="https://linkedin.com/in/harsh-batra-b793951ab">
            <FaLinkedin className="w-5 h-5 cursor-pointer text-white" />
          </a>
          <a href="https://github.com/HarshBatra">
            <FaGithub className="w-5 h-5 cursor-pointer text-white" />
          </a>
          <a href="https://leetcode.com/Batraaaaaa">
            <SiLeetcode className="w-5 h-5 cursor-pointer text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
