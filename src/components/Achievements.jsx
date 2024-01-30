import React from "react";
import { FaLink } from "react-icons/fa";

const achieves = [
  {
    title:
      "Solved 700+ problems on platforms like Leetcode, GeeksForGeeks, Coding Ninjas, etc.",
  },
  {
    title: "Google UX Design Specialization",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/7YXTPXC4JTPB",
  },
  {
    title: "School Topper in Physics in CBSE Board Class XII (2019-2020)",
  },
  {
    title:
      "SILVER MEDALIST at National Science Olympiad 2019 conducted by Science Olympiad Foundation",
    link: "https://drive.google.com/file/d/1D4N-dfmupIEy5JzZdrW8YrO20OjzKHHZ/view",
  },
  {
    title: "2nd Prize Winner at Zonal Level Science Exhibition 2018",
    desc: "Built an Arduino UNO-based Line Following Robot Car with IR sensor & Motor Drive module, programmed via Arduino IDE, & explored its applications in medicine, industry, & home automation under the theme of Transportation & Communication.",
    link: "https://drive.google.com/file/d/1VOsMlIJTuI5rhIBDbjH0jy0dQeBHcw8T/view",
    link2: "https://github.com/HarshBatra/ArduinoUNO_Line_Follower_Robot",
  },
];

const AchieveCard = ({ title, desc, link, link2 }) => {
  return (
    <div className="px-4 py-2 self-center bg-white drop-shadow-md m-4 rounded-lg w-fit flex flex-col gap-2 max-w-5xl">
      <div className="font-semibold text-blue-900">🏆 {title}</div>
      {desc && <div className="text-sm text-gray-600">{desc}</div>}
      <div className="flex gap-4">
        {link && (
          <a href={link}>
            <div className="flex">
              Certificate: <FaLink className="w-5 h-5 ml-2 text-red-700" />
            </div>
          </a>
        )}
        {link2 && (
          <a href={link2}>
            <div className="flex">
              Link: <FaLink className="w-5 h-5 ml-2 text-red-700" />
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="flex flex-col px-10 justify-center py-10 md:py-20">
      <div className="font-bold text-2xl md:text-5xl text-center text-yellow-700 mb-6">
        Achievements & Certifications:
      </div>
      {achieves.map((achieve) => {
        return (
          <AchieveCard
            title={achieve?.title}
            desc={achieve?.desc}
            link={achieve?.link}
            link2={achieve?.link2}
          />
        );
      })}
    </div>
  );
};

export default Achievements;
