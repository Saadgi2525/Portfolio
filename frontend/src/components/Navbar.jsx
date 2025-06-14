import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById("videoBg");
      if (videoSection) {
        const videoBottom = videoSection.getBoundingClientRect().bottom;

        if (videoBottom < 100) {
          setShowNavbar(false);
          setIsOpen(false);
          setShowScrollUp(true);
        } else {
          setShowNavbar(true);
          setShowScrollUp(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    setIsOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      {showNavbar && (
        <div className="fixed top-4 right-4 z-[100]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none transition-transform transform hover:scale-110"
          >
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      )}

      {/* Sidebar with Conical Spotlight */}
      {showNavbar && isOpen && (
        <div
          className="fixed top-0 right-0 h-screen w-64 bg-gray-900 bg-opacity-90 text-white 
          transition-transform duration-300 ease-in-out z-[100] shadow-lg backdrop-blur-lg"
        >
          

          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl hover:text-red-500 transition duration-300"
            >
              <IoMdClose />
            </button>
          </div>

          {/* Menu Items with Border */}
          <ul className="px-6 mt-4 text-xl">
          <li className="border-b border-gray-700">
              <button
                onClick={() => handleScroll("aboutme")}
                className="block py-3 hover:text-yellow-300 transition duration-200 w-full text-left"
              >
                About Me
              </button>
            </li>
            <li className="border-b border-gray-700">
              <button
                onClick={() => handleScroll("skills")}
                className="block py-3 hover:text-yellow-300 transition duration-200 w-full text-left"
              >
                Skills
              </button>
            </li>
            <li className="border-b border-gray-700">
              <button
                onClick={() => handleScroll("projects")}
                className="block py-3 hover:text-yellow-300 transition duration-200 w-full text-left"
              >
                Projects
              </button>
            </li>
            <li className="border-b border-gray-700">
              <button
                onClick={() => handleScroll("achievements")}
                className="block py-3 hover:text-yellow-300 transition duration-200 w-full text-left"
              >
                Achievements
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contactme")}
                className="block py-3 hover:text-yellow-300 transition duration-200 w-full text-left"
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-tblack text-white p-3 rounded-full shadow-lg 
          hover:bg-yellow-600 transition duration-300 z-50 animate-bounce"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </>
  );
};

export default Navbar;
