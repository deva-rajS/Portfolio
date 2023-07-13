import "./App.css";
import Nav from "./navbar";
import Intro from "./intoduction";
import ExPro from "./exprojects";
import Projects from "./projects";
import AboutMe from "./aboutme";
import Contact from "./contact";
import SideMenu from "./sidemenu";
import { useState } from "react";

function App() {
  const [slide,setSlide]=useState(false);
  const [hide,setHide]=useState(true);
  const [darkMode,setDarkMode]=useState(false);
  return (
    <>
      <Nav setHide={setHide} hide={hide} setSlide={setSlide} slide={slide} setDarkMode={setDarkMode} darkMode={darkMode}/>
      <SideMenu setHide={setHide} hide={hide} setSlide={setSlide} slide={slide} setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Intro darkMode={darkMode}/>
      <ExPro darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <AboutMe darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
    </>
  );
}

export default App;
