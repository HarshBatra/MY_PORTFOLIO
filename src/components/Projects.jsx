import React from "react";
import { FaLink } from "react-icons/fa";

const projects = [
  {
    name: "Social Hub",
    desc: "SocialHub is a full-stack social media application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The app provides users with features such as Authentication, Likes, Making Friends, Adding Posts, Viewing other people's Posts, and Light/Dark Mode.",
    // img: require(""),
    githubLink: "https://github.com/HarshBatra/SocialHub",
    liveLink: "",
  },
  {
    name: "Bloggify",
    desc: "Bloggify is a full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides users with the ability to register, login, create, edit, and delete blog posts, as well as comment on posts. The application uses JWT for user authentication, bcrypt for password hashing, multer for handling images.",
    // img: require(""),
    githubLink: "https://github.com/HarshBatra/Bloggify",
    liveLink: "",
  },
  {
    name: "Youtube Clone",
    desc: "YouTube Clone, a frontend project that replicates the functionalities of YouTube's main features including video browsing, search suggestions, video watching, comment section, and live chat. This project is built with a focus on clean UI design and efficient data management, utilizing YouTube's Live API data.",
    // img: require(""),
    githubLink: "https://github.com/HarshBatra/youtube_clone",
    liveLink: "https://youtube-clone-harsh-batra.vercel.app/",
  },
  {
    name: "DocOnCall",
    desc: "DocOnCall is a telemedicine platform that provides patients with a convenient way to access healthcare services remotely. The platform is built using React.js, Tailwind CSS, Firebase for Authentication, and Google Cloud for hosting and managing the backend. This documentation provides an overview of the platform and describes the steps involved in setting up and using DocOnCall.",
    // img: require(""),
    githubLink: "https://github.com/HarshBatra/DocOnCall",
    liveLink: "https://doc-on-call.vercel.app/",
  },
];

const ProjectCard = ({ name, desc, img, githubLink, liveLink }) => {
  return (
    <div className="bg-white drop-shadow-lg m-2 self-center w-3/4 flex flex-col md:flex-row items-center rounded-xl md:px-10 py-5">
      {img && <img className="md:w-1/4" alt={name} src={img} />}
      <div className="flex flex-col justify-center text-center md:justify-start md:text-left gap-2">
        <div className="font-bold text-xl">{name}</div>
        <div className="text-sm text-justify leading-5 tracking-wide">
          {desc}
        </div>
        <div className="font-bold flex gap-4">
          {githubLink && (
            <div className="flex items-center gap-2">
              GitHub Link:
              <a href={githubLink}>
                <FaLink />
              </a>
            </div>
          )}
          {liveLink && (
            <div className="flex items-center gap-2">
              Live Link:
              <a href={liveLink}>
                <FaLink />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-col my-10 px-10 justify-center gap-4 bg-blue-50 py-10">
      <div className="font-bold text-2xl md:text-5xl text-center text-blue-700 mb-4">
        Projects:
      </div>
      {projects.map((project) => {
        return (
          <ProjectCard
            name={project?.name}
            desc={project?.desc}
            img={project?.img}
            githubLink={project?.githubLink}
            liveLink={project?.liveLink}
          />
        );
      })}
    </div>
  );
};

export default Projects;
