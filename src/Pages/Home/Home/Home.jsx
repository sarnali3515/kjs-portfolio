import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="bg-gray-800 text-white">
      <Banner />
      <Skills id="skills" />
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto space-y-10 px-3">

        <Projects id="projects" />
        <Experience />
        <Education id="education" />
        <Contact id="contact" />
      </div>
    </div>
  );
};

export default Home;
