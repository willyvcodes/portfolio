import React, { useEffect, useState } from "react";
import "./App.css";
// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col bg-blue-900 min-h-screen">
      <Header y={scrollY} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
