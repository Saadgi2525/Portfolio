import React from "react";

const SkillCard = ({ bgColor, boxSize, icon, title, children, textColor="text-white" }) => {
  return (
    <div className={`relative ${bgColor} text-white min-h-40 p-6 shadow-lg flex flex-col justify-center items-start`}>
      {/* Yellow Box with Icon */}
      <div
        className="absolute left-6 top-0 flex items-center gap-3"
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: boxSize,
            height: boxSize,
            backgroundColor: "#eeba30", // Yellow Color
          }}
        >
          <img src={icon} alt={title} className="w-12 h-12" />
        </div>
        <h3 className={`text-xl font-sm tracking-wider border-b border-white pb-1 ${textColor}`}>{title}</h3>
      </div>

      {/* Content inside the Card */}
      <div className="mt-6 w-full">{children}</div>
    </div>
  );
};

export default SkillCard;
