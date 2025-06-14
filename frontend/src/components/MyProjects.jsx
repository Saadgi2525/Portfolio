import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import video from "../assets/recruiterbg.mp4";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import projects from "../data/projects.json"; // Import projects data

const MyProject = () => {
  const scrollRef = useRef(null);
  const [velocity, setVelocity] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const startInertia = (direction) => {
    setVelocity(direction === "left" ? -10 : 10);
    setIsScrolling(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isScrolling && scrollRef.current) {
        scrollRef.current.scrollLeft += velocity;

        if (velocity !== 0) {
          const newVelocity = velocity * 0.98;
          setVelocity(Math.abs(newVelocity) < 0.1 ? 0 : newVelocity);
        } else {
          setIsScrolling(false);
        }
      }
    }, 16);

    return () => clearInterval(interval);
  }, [velocity, isScrolling]);

  return (
    <div className="relative py-12 bg-tyellow text-center overflow-hidden">
      <SectionTitle backText="Projects" title="My Projects" />

      <div className="relative z-10 px-6">
        <div className="relative flex items-center mt-32">
          {/* Left Arrow */}
          <button
            onMouseDown={() => startInertia("left")}
            className="absolute left-0 bg-black mr-12 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 z-10"
          >
            <FaArrowAltCircleLeft size={24} />
          </button>

          {/* Scrollable Projects */}
          <motion.div ref={scrollRef} className="flex space-x-6 overflow-x-auto scrollbar-hide h-[500px] overflow-y-hidden overflow-x-hidden">
            {projects.map((project) => (
              <div key={project.id} className="relative ml-12 w-[300px] flex-shrink-0 border-b-2 border-tbrown flex flex-col h-full justify-between transition-all duration-300 ease-in-out">
                
                {/* Side Borders */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-[50%] border-l-[1px] border-r-[1px] border-tyellow"></div>
                  <div className="absolute bottom-0 left-0 w-full h-[50%] border-l-[1px] border-r-[1px] border-tbrown"></div>
                </div>

                {/* Video & ID */}
               <div className="relative w-full h-[250px] flex items-end border-2 border-tyellow border-b-0 pt-4">
  <div
    className="absolute -top-0 left-6 w-[100px] h-[100px] rounded-full bg-tbrown border-4 border-tgolden text-tgolden flex items-center justify-center font-cinzel text-6xl"
    style={{
      WebkitTextStroke: "1px #D4AF37", // optional if you want stroke effect
    }}
  >
    {project.id}
  </div>

  <video
    src={project.video}
    autoPlay
    loop
    muted
    className="w-full h-[200px] object-cover self-end"
  />
</div>

                {/* Project Details */}
                <div className="p-2 flex-grow mt-1">
                  <h3 className="text-lg font-bold text-left text-torange">{project.name}</h3>
                  <p className="text-sm text-justify text-gray-700 mt-2">{project.fullDesc}</p>
                </div>

                {/* Links (GitHub & Open Project) */}
                <div className="flex justify-center gap-4 my-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-torange hover:text-gray-700 text-2xl">
                    <FaGithub />
                  </a>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-torange hover:text-gray-700 text-xl">
                    <FaExternalLinkAlt />
                  </a>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 p-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-torange text-white px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Arrow */}
          <button
            onMouseDown={() => startInertia("right")}
            className="absolute right-0 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800 z-10"
          >
            <FaArrowAltCircleRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProject;