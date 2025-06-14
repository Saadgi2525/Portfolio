import React from "react";
import { useRef } from "react";
import me from "../assets/about3.jpg";
import sunflower from "../assets/sunflower2.png";
import aboutData from "../data/about.json"; // Importing JSON data
import SectionTitle from "./SectionTitle";
import experiences from "../data/experiences.json"; // Importing experience data
import footsteps from "../assets/footsteps.png"
import lamp from "../assets/lamp.png"

const AboutMe = () => {
  const scrollRef = useRef(null);

const scroll = (direction) => {
  if (scrollRef.current) {
    const amount = 400;
    scrollRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  }
};
  return (
    <div className="relative py-12 bg-tyellow text-center overflow-hidden">
      {/* Background Text */}
      <SectionTitle backText="About" title="About Me" />

      {/* About Me Section */}
      <div className="relative z-10">
        <section className="bg-tyellow mt-12 flex flex-col md:flex-row items-center justify-center text-left">
          {/* Left Side - Profile Image */}
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              src={me}
              alt="Profile"
              className="w-auto h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Center - Description (Increased Width) */}
          <div className="w-full md:w-2/5 px-12 text-center">
            <h2 className="text-lg font-nunito mb-6 text-justify">{aboutData.description}</h2>
          </div>

          {/* Right Side - Sunflower Image */}
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              src={sunflower}
              alt="Sunflower"
              
              className="w-80 h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Education & Experience Section */}
        <div className="flex flex-col md:flex-row mt-12 bg-tgolden">
          {/* Left Side - Education */}
          <div className="w-full md:w-1/2 px-12 py-8">
            <h2 className="text-3xl font-cinzel  text-torange mb-20 text-left">
              Education
            </h2>
            <div className="space-y-4">
              {aboutData.education.map((edu, index) => (
                <div key={index} className="flex justify-between border-b pb-2">
                  <span className="font-semibold font-nunito text-white">{edu.year}</span>
                  <span className="text-tbrown font-nunito text-sm">{edu.degree}</span>
                  <span className="text-torange font-nunito font-semibold">
                    {edu.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Work Experience Timeline */}
          <div className="w-full md:w-1/2 px-12 py-4">
  <h2 className="text-3xl font-cinzel text-torange mt-4 mb-6 text-left pl-8">
    Work Experience Journey
  </h2>

  {/* Arrows */}
  <div className="flex items-center relative">
    {/* Left Arrow */}
    <button
      onClick={() => scroll("left")}
      className="absolute left-0 z-20 p-2 bg-tgolden rounded-full hover:bg-torange hover:text-white transition"
    >
      ◀
    </button>

    {/* Scrollable Experience Trail */}
    <div
      ref={scrollRef}
      className="overflow-x-hidden overflow-y-hidden w-full scrollbar-hide"
    >
      <div className="flex items-end relative ml-6 min-w-[1000px] pr-12 pb-8 w-max">
        {experiences.map((item, index) => {
          const isEven = index % 2 === 0;
          const verticalOffset = isEven ? "mt-0 mb-20" : "mt-20 mb-0";
          const rotation = isEven ? "50deg" : "15deg";
          return (
            <React.Fragment key={index}>
              <div className={`flex flex-col items-center mx-2 z-10 ${verticalOffset}`}>
                <img
                  src={item.logo}
                  alt={item.company}
                  className="w-20 h-20 rounded-full border-4 border-tbrown mb-2"
                />
                <div className="text-white font-semibold text-center text-sm">
                  {item.company}
                  <br />
                  <span className="text-xs font-normal text-tbrown">
                    {item.role}, {item.duration}
                  </span>
                </div>
              </div>

              {/* Footsteps */}
              {index !== experiences.length - 1 && (
                <div
                  className={`relative w-[250px] h-28 flex items-center justify-center ${
                    isEven ? "-mt-12" : "-mb-2"
                  }`}
                >
                  <img
                    src={footsteps}
                    alt="Footsteps"
                    style={{
                  transform: `rotate(${rotation})`,
                }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>

    {/* Right Arrow */}
    <button
      onClick={() => scroll("right")}
      className="absolute right-0 z-20 p-2 bg-tgolden  rounded-full hover:bg-torange hover:text-white transition"
    >
      ▶
    </button>
  </div>
</div>
<img
    src={lamp} // replace with your actual image
    alt="Center Decor"
    className="absolute bottom-0 left-1/2  transform -translate-x-3/4 w-52 opacity-60 pointer-events-none"
    style={{ opacity: 0.9 }} // Change this value to control transparency
  />

        </div>  
      </div>
    </div>
  );
};

export default AboutMe;
