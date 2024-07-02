
import Marquee from 'react-fast-marquee';
import SectionTittle from "../../../Components/SectionTitle/SectionTittle";
import SkillCard from "./SkillCard";
import reactImg from '../../../assets/Icons/react-icon.png';
import nodeImg from '../../../assets/Icons/node-js.png';
import expressImg from '../../../assets/Icons/express-js.png';
import mongodbImg from '../../../assets/Icons/mongodb.png';
import firebaseImg from '../../../assets/Icons/firebase.png';
import tailwindImg from '../../../assets/Icons/tailwind.png';
import javascriptImg from '../../../assets/Icons/javascript.png';
import cssImg from '../../../assets/Icons/css3.png';
import htmlImg from '../../../assets/Icons/html-5.png';

const Skills = () => {
    return (
        <div id="skills" className='py-5'>
            <SectionTittle title="My Skills"></SectionTittle>
            <Marquee gradient={false} pauseOnHover={true} speed={60} className="flex space-x-4">
                <SkillCard skill="React js" img={reactImg}></SkillCard>
                <SkillCard skill="Node Js" img={nodeImg}></SkillCard>
                <SkillCard skill="Express js" img={expressImg}></SkillCard>
                <SkillCard skill="Mongodb" img={mongodbImg}></SkillCard>
                <SkillCard skill="Firebase" img={firebaseImg}></SkillCard>
                <SkillCard skill="Javascript" img={javascriptImg}></SkillCard>
                <SkillCard skill="Tailwind" img={tailwindImg}></SkillCard>
                <SkillCard skill="CSS3" img={cssImg}></SkillCard>
                <SkillCard skill="HTML5" img={htmlImg}></SkillCard>
            </Marquee>
        </div>
    );
};

export default Skills;
