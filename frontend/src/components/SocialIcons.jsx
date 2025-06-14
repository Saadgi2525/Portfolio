import React from "react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import socialIcons from "../data/socialIcons.json";

const iconMap = {
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  SiLeetcode: SiLeetcode
};

const SocialIcons = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6">
      {socialIcons.map((item, index) => {
        const IconComponent = iconMap[item.icon];
        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-tyellow transition"
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
