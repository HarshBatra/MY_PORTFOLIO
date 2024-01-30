import React from "react";

const About = () => {
  return (
    <div className="justify-center md:justify-around flex md:flex-row flex-col md:p-10">
      <div className="bg-red-100 border-8 border-white drop-shadow-2xl h-fit w-1/2 md:w-1/4 self-center">
        <img
          alt="Harsh"
          className="border-8 border-white drop-shadow-2xl -rotate-6"
          src={require("../assets/images/photo2.jpg")}
        />
      </div>
      <div className="md:w-1/2 p-10">
        <div className="font-bold text-2xl md:text-5xl text-center md:text-left text-red-700">
          About Me:
        </div>
        <div className="text-blue-950 text-justify my-4 leading-5 tracking-wide">
          Currently in my 4th year of B.Tech. at Delhi Technological University,
          I possess proficiency in programming languages like C and C++,
          allowing me to solve complex problems using data structures and
          algorithms effectively. I have practical experience in various web
          technologies such as JavaScript, Tailwind, HTML, CSS, ReactJS, NodeJS,
          Express, and Typescript, enabling me to develop clean, efficient, and
          well-designed code. With hands-on experience in RESTful API design and
          implementation, as well as database technologies like MongoDB and
          MySQL, and version control systems like Git and GitHub, I am
          well-prepared to contribute to full-stack development tasks.
          Additionally, I am an analytical problem-solver with a strong work
          ethic, capable of working both independently and collaboratively
          within a team. I have a strong interest in the development of scalable
          systems and a passion for continuous learning and understanding how
          scalable software is built. With a solid foundation in computer
          science fundamentals, exposure to design patterns, and strong critical
          thinking and analytical skills, I am confident in my ability to excel
          as a Software Engineer. Furthermore, my internship and freelance
          experience have provided me with valuable insights and the ability to
          deliver quality results in a professional environment.
        </div>
        <div className="text-blue-950 text-justify my-4 leading-5 tracking-wide">
          Besides, I bring creativity to the digital realm through my skills in
          Digital Art, Graphic Design, and UI/UX Design. In my leisure time, I
          indulge in reading fiction books, and I have a knack for delivering
          impactful presentations that can influence minds. As a valuable asset,
          I have contributed to numerous teams and societies, showcasing
          leadership, teamwork, and the ability to excel in high-pressure
          situations.
        </div>
      </div>
    </div>
  );
};

export default About;
