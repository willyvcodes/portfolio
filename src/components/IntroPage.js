import React from "react";
import profileImage from "../assets/images/profile_image.png";

const IntroPage = () => {
  return (
    <section
      id="intro"
      className="grid grid-cols-1 lg:grid-cols-2 lg:items-center min-h-screen"
    >
      <div className="flex flex-col text-center lg:text-start lg:ml-10 gap-4 lg:gap-6">
        <h2 className="font-semibold text-2xl sm:text-4xl md:text-6xl">
          Hi! I'm
          <span className="text-cyan-400"> William </span>
          Valido
          <br />
          Fullstack
          <span className="text-cyan-400"> Developer</span>
        </h2>
        <p className="text-xl sm:text-2xl">
          My <span className="text-cyan-400">tech stack</span> includes React,
          SvelteKit, TailwindCSS, Node.JS, PostgreSQL and MongoDB
        </p>
        <button
          className="bg-white rounded-full text-black px-6 py-3 mx-auto lg:mr-auto lg:ml-0 sm:text-xl md:text-2xl hover:bg-cyan-400 hover:text-white duration-200"
          href="https://www.linkedin.com/in/willyvalido"
          target="_blank"
          rel="noreferrer"
        >
          Get in Touch <b>&rarr;</b>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center max-h-[40vh] sm:max-h-[60vh]">
        <img
          src={profileImage}
          alt="William Valido Profile"
          className="max-h-[40vh] sm:max-h-[60vh] rounded-full bg-white shadow-2xl"
        />
      </div>
    </section>
  );
};

export default IntroPage;
