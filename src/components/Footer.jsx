import React from "react";
import { FaLink } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-white px-10 py-4 flex md:flex-row flex-col justify-center md:justify-around font-bold">
      <div>@{year} Harsh Batra | All rights reserved.</div>
      <div className="flex gap-2 items-center">
        This Portfolio's GitHub Link:{" "}
        <a href="https://github.com/HarshBatra/MY_PORTFOLIO">
          <FaLink />
        </a>
      </div>
    </div>
  );
};

export default Footer;
