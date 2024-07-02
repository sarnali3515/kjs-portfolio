import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div className="bg-gray-800 text-white">
            <Banner />
            <div className="max-w-7xl mx-auto space-y-10">
                <Skills id="skills" />
                <Projects id="projects" />
                <Education id="education" />
                <Contact id="contact" />
            </div>
        </div>
    );
};

export default Home;