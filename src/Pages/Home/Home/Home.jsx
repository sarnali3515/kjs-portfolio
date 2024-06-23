import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div className="bg-gray-800 text-white">
            <Banner></Banner>
            <div className="max-w-7xl mx-auto space-y-10">
                <Skills></Skills>
                <Projects></Projects>
                <Education></Education>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;