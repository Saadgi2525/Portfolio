import React, { useEffect, useRef, useState } from "react";
import certificates from "../data/achievements.json";
import SectionTitle from "./SectionTitle"
const WallOfFame = () => {
  const achievementsRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="  py-10 relative bg-tbrown  overflow-hidden  "
    >
      <div className="absolute inset-0 bg-[url('http://www.transparenttextures.com/patterns/white-brick-wall.png')] opacity-30 pointer-events-none"></div>
      <SectionTitle backText="Achievements" title="Wall of Achievements" backtextColor="text-[#d3a625]" titleColor="text-tyellow" />
      <div className="relative z-10 px-6 mt-32">
      <div className="flex justify-center">
</div>

      <div className="grid grid-cols-3 gap-4 z-10">
        {certificates.map((cert) => (
          <div key={cert.id} className="flex flex-col items-center">
            <div
              className="w-96 h-auto border-8 border-white bg-white shadow-md flex items-center justify-center cursor-pointer"
              onClick={() => handleImageClick(cert.image)}
            >
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover "
                  onError={(e) => console.error("Image failed to load:", e.target.src)}
                />
              ) : (
                <span className="text-lg font-semibold text-black">
                  {cert.title}
                </span>
              )}
            </div>
            <p className="mt-3 ml-5 text-tyellow text-lg font-semibold ">
              {cert.title}
            </p>
          </div>
        ))}
      </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <img
            src={selectedImage}
            alt="Selected Achievement"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default WallOfFame;