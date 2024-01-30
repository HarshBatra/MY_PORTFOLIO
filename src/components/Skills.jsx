import React from "react";

const skills = [
  {
    name: "HTML",
    img: require("../assets/icons/html.png"),
  },
  {
    name: "CSS",
    img: require("../assets/icons/css.png"),
  },
  {
    name: "JavaScript",
    img: require("../assets/icons/js.png"),
  },
  {
    name: "React.js",
    img: require("../assets/icons/react.png"),
  },
  {
    name: "Redux Toolkit",
    img: require("../assets/icons/redux.png"),
  },
  {
    name: "Tailwind CSS",
    img: require("../assets/icons/tailwind.png"),
  },
  {
    name: "Node.js",
    img: require("../assets/icons/node.png"),
  },
  {
    name: "Express.js",
    img: require("../assets/icons/express.png"),
  },
  {
    name: "MongoDB",
    img: require("../assets/icons/mongo.png"),
  },
  {
    name: "MySQL",
    img: require("../assets/icons/sql.png"),
  },
  {
    name: "JWT",
    img: require("../assets/icons/jwt.png"),
  },
  {
    name: "Git",
    img: require("../assets/icons/git.png"),
  },
  {
    name: "GitHub",
    img: require("../assets/icons/github.png"),
  },
  {
    name: "Figma",
    img: require("../assets/icons/figma.png"),
  },
  {
    name: "Material UI",
    img: require("../assets/icons/mui.png"),
  },
];

const SkillCard = ({ name, img }) => {
  return (
    <div className="flex flex-col justify-center md:m-8 m-4 gap-4">
      <div className="p-4 w-fit h-full flex items-center cursor-pointer hover:scale-110">
        <img alt={name} src={img} className="md:w-20 w-10 drop-shadow-md" />
      </div>
      <div className="text-blue-950 text-sm text-center">{name}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="">
      <div className="font-bold text-2xl md:text-5xl text-center text-green-700">
        Skills:
      </div>
      <div className="md:px-20 px-5 flex flex-wrap justify-center">
        {skills.map((skill) => {
          return <SkillCard name={skill.name} img={skill.img} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
