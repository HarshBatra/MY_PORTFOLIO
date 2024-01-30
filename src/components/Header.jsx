import React from "react";

const Header = () => {
  return (
    <div className="relative md:mb-40">
      <img
        alt="mandala"
        className="w-full opacity-20 absolute -z-10"
        src={require("../assets/images/mandala.png")}
      />
      <div className="flex md:flex-row flex-col-reverse justify-center md:justify-around md:py-20 py-10">
        <div className="md:py-10 self-center">
          <div className="text-blue-950 text-2xl md:text-5xl font-bold text-center md:text-left">
            Hello!
          </div>
          <div className="text-blue-900 text-xl md:text-3xl font-bold text-center md:text-left">
            I'm Harsh Batra!
          </div>
          <div className="my-10">
            <div className="px-4 py-2 bg-white drop-shadow-lg text-blue-950 rounded-xl m-4 text-center font-semibold">
              Software Developer
            </div>
            <div className="px-4 py-2 bg-white drop-shadow-lg text-blue-950 rounded-xl m-4 text-center font-semibold">
              Programming Enthusiast
            </div>
            <div className="px-4 py-2 bg-white drop-shadow-lg text-blue-950 rounded-xl m-4 text-center font-semibold">
              MERN Stack Web Developer
            </div>
            <div className="px-4 py-2 bg-white drop-shadow-lg text-blue-950 rounded-xl m-4 text-center font-semibold">
              UI/UX Designer
            </div>
          </div>
        </div>
        <div className="bg-blue-100 border-8 border-white drop-shadow-2xl h-fit w-1/2 md:w-1/4 self-center">
          <img
            alt="Harsh"
            className="border-8 border-white drop-shadow-2xl rotate-6"
            src={require("../assets/images/photo.jpg")}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
