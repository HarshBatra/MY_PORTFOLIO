import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/harsh-batra-b793951ab/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/entangled_brushes/">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://github.com/HarshBatra">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
