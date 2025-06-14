import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Skills from "../components/MySkills";
import Projects from "../components/MyProjects";
import Achievements from "../components/MyAchievements";
import ContactMe from "../components/ContactMe";
import SocialIcons from "../components/SocialIcons";
import recruiterbg from "../assets/recruiterbg.mp4";
import tornbg from "../assets/yellowtorn.png";
import SP from "../assets/SP.png";
import SD from "../assets/SD.png";
import Footer from "../components/Footer";

const RecruiterHome = () => {
  const velocityRef = useRef(0);
  const isScrollingRef = useRef(false);
  const words = ["Softwares", "Interactive Websites", "Creative UI/UX", "Amazing Machine Learning Models"];
  const [wordIndex, setWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 100 : 50;

  useEffect(() => {
    const handleWheel = (event) => {
      const scrollAmount = event.deltaY * 0.05;
      velocityRef.current += scrollAmount;
      isScrollingRef.current = true;
    };

    const applyInertia = () => {
      if (isScrollingRef.current) {
        window.scrollBy(0, velocityRef.current);
        velocityRef.current *= 0.98;

        if (Math.abs(velocityRef.current) < 0.5) {
          velocityRef.current = 0;
          isScrollingRef.current = false;
        }
      }
      requestAnimationFrame(applyInertia);
    };

    window.addEventListener("wheel", handleWheel);
    applyInertia();

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    let currentWord = words[wordIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedWord((prev) => prev.slice(0, -1));
        if (typedWord === "") {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedWord((prev) => currentWord.slice(0, prev.length + 1));
        if (typedWord === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedWord, wordIndex, isDeleting]);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Navbar - Always on Top */}
      <Navbar />

      {/* Video Background */}
      <div id="videoBg" className="relative w-full h-screen">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none">
          <source src={recruiterbg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* All Content on Top */}
        <div className="absolute inset-0 z-50 flex flex-col items-start justify-center text-white ">
          {/* SP Image & "Hello! I'm ..." */}
          <div className="flex items-center mb-4">
            <p className="text-white text-4xl font-caveat font-semibold ml-8">Hello! I'm</p>
            <p className="text-tgolden text-8xl font-harry  tracking-wider ml-8">Saadgi Pandey</p>
            {/* <img src={SP} alt="SP Image" className="w-[300px] h-auto ml-2 mr-2" /> */}
            <p className="text-white text-4xl font-caveat font-semibold">and</p>
          </div>

          {/* Torn Paper with SD Image */}
          <div className="relative left-0">
            <img src={tornbg} alt="Torn Paper" className="w-[530px] h-auto" />
            <img src={SD} alt="SD Image" className="absolute top-[40%] left-[38%] mt-6 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-auto" />
          </div>

          {/* Typing Effect Text */}
          <div className="mt-4 ml-8 text-left">
            <p className="text-white text-xl font-tektur flex items-center">
              <span className="text-white">&lt;</span>
              <span className="text-tyellow">code</span>
              <span className="text-white">&gt;</span>&nbsp;I build&nbsp;
              <span className="text-tyellow">{typedWord}</span>
              <span className="text-white">&lt;/</span>
              <span className="text-tyellow">code</span>
              <span className="text-white">&gt;</span>
            </p>
          </div>

          {/* Social Icons */}
          <SocialIcons />
        </div>
      </div>

      {/* Sections */}
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="contactme">
        <ContactMe />
      </div>
      <div><Footer/></div>    </div>
  );
};

export default RecruiterHome;
