import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionTittle from "../../../Components/SectionTitle/SectionTittle";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experienceData = [
    {
      company: "Oodaktar",
      position: "Frontend App Developer",
      period: "Apr 2025 - Present",
      description: [
        "Developed",
        "Implemented",
        "Collaborated with UX designers to create intuitive user interfaces",
      ],
      technologies: ["React Native", "Next.js", "React.js", "JavaScript"],
    },
    {
      company: "Nexlent",
      position: "Frontend Developer Intern",
      period: "Nov 2024 - Feb 2025",
      description: [
        "Built reusable component libraries that improved development efficiency",
        "Integrated RESTful APIs",
      ],
      technologies: ["Next.js", "React.js", "TypeScript"],
    },
  ];

  return (
    <section id="experience" className="py-12 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTittle title="Experience" />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Timeline Buttons */}
          <div className="lg:w-1/4 relative">
            <div className="absolute left-2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-fuchsia-500/70 to-violet-500/70 rounded-full hidden lg:block"></div>
            <div
              className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              {experienceData.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-5 py-3 rounded-lg text-left transition-all duration-300 backdrop-blur-lg ${
                    activeTab === index
                      ? "bg-gray-900 border border-fuchsia-500 text-fuchsia-500 shadow-lg"
                      : "bg-gray-900 border border-transparent hover:border-fuchsia-500 text-gray-200"
                  }`}
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <Briefcase size={18} /> {exp.company}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div
            className="lg:w-3/4"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1200"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-fuchsia-200 hover:border-fuchsia-500"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {experienceData[activeTab].position}
                  </h3>
                  <h4 className="text-xl text-fuchsia-500 font-semibold mt-1">
                    {experienceData[activeTab].company}
                  </h4>
                  <p className="text-gray-400 italic mt-2">
                    {experienceData[activeTab].period}
                  </p>
                </div>

                {/* <ul className="space-y-3 mb-8">
                  {experienceData[activeTab].description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-fuchsia-400 mt-1 mr-2">✔</span>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul> */}

                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">
                    Technologies Used:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {experienceData[activeTab].technologies.map((tech, idx) => (
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        key={idx}
                        className="px-3 py-1 bg-gray-950 text-fuchsia-500 rounded-full text-sm font-medium border border-fuchsia-500/50 shadow-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
