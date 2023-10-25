import React from "react";
import AboutMe from "./AboutMe";
import IntroPage from "./IntroPage";
import Projects from "./Projects";

const Main = () => {
  return (
    <main className="flex flex-col gap-10 py-4">
      <IntroPage />
      <Projects />
      <AboutMe />
    </main>
  );
};

export default Main;
