import React from "react";

const SectionTitle = ({ backText, title, backtextColor = "text-[#ae0001]", titleColor="text-[#740001]" }) => {
  return (
    <div className="mt-12">
      <div className="relative flex flex-col items-center justify-center text-center">
        {/* Background Text (Centered Behind the Title) */}
        <h2 className={`absolute font-nunito text-[6rem] sm:text-[8rem] md:text-[10rem] font-black  opacity-[0.08] uppercase tracking-widest select-none ${backtextColor}`}>
          {backText}
        </h2>

        {/* Main Title (Perfectly Centered on BackText, Dynamic Color) */}
        <h2 className={`relative text-7xl font-semibold font-cinzel  ${titleColor}`}>{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
