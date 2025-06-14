import React from "react";
import skillsData from "../data/skillsdata.json";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="relative py-14 bg-tyellow text-center overflow-hidden">
      {/* Section Title */}
      <SectionTitle backText="Skills" title="My Skills" />

      {/* Skills Section */}
      <div className="relative z-10">
        <div className="grid grid-cols-3 gap-8 px-16 mt-32">
          {skillsData.map((skill) => {
            const frontendTech = skill.technologies?.filter((tech) => tech.category === "frontend");
            const backendTech = skill.technologies?.filter((tech) => tech.category === "backend");
            const databaseTech = skill.technologies?.filter((tech) => tech.category === "database");

            return (
              <SkillCard
                key={skill.id}
                bgColor="bg-tbrown"
                boxSize="64px"
                icon={skill.icon}
                title={skill.title}
              >
                {/* Special Layout for Web Development */}
                <div className="mt-6 w-full">
                  {skill.title === "Web Development" ? (
                    <div className="flex flex-col justify-start gap-4 mt-2 pt-4">
                      {/* Frontend Section */}
                      {frontendTech.length > 0 && (
                        <div className="w-full">
                          <h4 className="text-sm font-semibold text-white mb-1">Frontend Technologies</h4>
                          <div className="flex flex-wrap justify-start gap-2 w-full">
                            {frontendTech.map((tech) => (
                              <div
                                key={tech.id}
                                className="flex items-center bg-white px-2 py-1 rounded-lg gap-2 shadow-md hover:bg-gray-600 transition-all"
                              >
                                <img src={tech.image} alt={tech.name} className="w-auto h-4 bg-white rounded-lg" />
                                <span className="text-xs text-black">{tech.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Backend Section */}
                      {backendTech.length > 0 && (
                        <div className="w-full">
                          <h4 className="text-sm font-semibold text-white mb-1">Backend Technologies</h4>
                          <div className="flex flex-wrap justify-start gap-2 w-full">
                            {backendTech.map((tech) => (
                              <div
                                key={tech.id}
                                className="flex items-center bg-white px-2 py-1 rounded-lg gap-2 shadow-md hover:bg-gray-600 transition-all"
                              >
                                <img src={tech.image} alt={tech.name} className="w-auto h-4 bg-white rounded-lg" />
                                <span className="text-xs text-black">{tech.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Database Section */}
                      {databaseTech.length > 0 && (
                        <div className="w-full">
                          <h4 className="text-sm font-semibold text-white mb-1">Database Management</h4>
                          <div className="flex flex-wrap justify-start gap-2 w-full">
                            {databaseTech.map((tech) => (
                              <div
                                key={tech.id}
                                className="flex items-center bg-white px-2 py-1 rounded-lg gap-2 shadow-md hover:bg-gray-600 transition-all"
                              >
                                <img src={tech.image} alt={tech.name} className="w-auto h-4 bg-white rounded-lg" />
                                <span className="text-xs text-black">{tech.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Regular Layout for Other Skills */
                    <div className="flex flex-wrap justify-start gap-2 mt-6 w-full">
                      {skill.technologies?.map((tech) => (
                        <div
                          key={tech.id}
                          className="flex items-center bg-white px-2 py-2 rounded-lg gap-2 shadow-md hover:bg-gray-600 transition-all"
                        >
                          <img src={tech.image} alt={tech.name} className="w-auto h-8 bg-white rounded-lg" />
                          <span className="text-sm text-black">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </SkillCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
