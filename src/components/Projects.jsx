import React from "react";
import { FaLink } from "react-icons/fa";

const projects = [
  {
    name: "Bloggify",
    desc: "Bloggify is a full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides users with the ability to register, login, create, edit, and delete blog posts, as well as comment on posts. The application uses JWT for user authentication, bcrypt for password hashing, multer for handling images.",
    img: require("../assets/images/bloggify.png"),
    githubLink: "https://github.com/HarshBatra/Bloggify",
    liveLink: "https://bloggify.vercel.app/",
  },
  {
    name: "PayTM Clone",
    desc: "Developed PayTM Clone project aiming to replicate core functionalities of the PayTM platform incorporating features including Account Balance Viewing, User Search, and Money Transfer functionalities. Implemented User Authentication & Authorization using JWT & bcrypt for secure access. Utilized MERN stack (MongoDB, Express.js, React.js, and Node.js), ensuring robust and scalable performance and employed MongoDB Transactions to enforce ACID properties, guaranteeing data consistency and reliability throughout transactions.",
    img: require("../assets/images/paytmclone.png"),
    githubLink: "https://github.com/HarshBatra/paytm-clone",
    liveLink: "https://paytm-clone-mern.vercel.app/",
  },
  {
    name: "Youtube Clone",
    desc: "YouTube Clone, a frontend project that replicates the functionalities of YouTube's main features including video browsing, search suggestions, video watching, comment section, and live chat. This project is built with a focus on clean UI design and efficient data management, utilizing YouTube's Live API data.",
    img: require("../assets/images/ytclone.png"),
    githubLink: "https://github.com/HarshBatra/youtube_clone",
    liveLink: "https://youtube-clone-harsh-batra.vercel.app/",
  },
  {
    name: "MovieFlix-GPT",
    desc: "MovieFlixGPT is a Netflix clone project that mimics the UI and functionality of Netflix. It is made using React.js, Tailwind CSS & Redux Toolkit, effectively managing the UI and data layers to provide users with a seamless movie recommendation experience. The project features a fully-responsive UI, authentication and authorization system powered by Firebase, movie recommendations fetched via the TMDB API, and a unique GPT movie suggestion feature powered by the OpenAI API.",
    img: require("../assets/images/movieflixgpt.png"),
    githubLink: "https://github.com/HarshBatra/MovieFlixGPT",
    liveLink: "https://movie-flix-gpt.vercel.app/",
  },
];

const ProjectCard = ({ name, desc, img, githubLink, liveLink }) => {
  return (
    <div className="bg-white drop-shadow-lg m-2 self-center w-3/4 flex flex-col gap-4 md:flex-row items-center rounded-xl p-5 md:p-10">
      {img && <img className="md:w-1/2 mx-4 border" alt={name} src={img} />}
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
    <div className="flex flex-col my-10 md:px-10 justify-center gap-4 bg-blue-50 py-10">
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
