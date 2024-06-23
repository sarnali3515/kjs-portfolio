import SectionTittle from "../../../Components/SectionTitle/SectionTittle";
import diuLogo from '../../../assets/Icons/diu.png'
import cgwcLogo from '../../../assets/Icons/cgwc.png'
import cgghsLogo from '../../../assets/Icons/cgghss.png'


const Education = () => {
    return (
        <div className="my-10">
            <SectionTittle title="Education"></SectionTittle>
            <div className="flex justify-between">
                <div data-aos="fade-up" data-aos-delay="50"
                    data-aos-duration="1200" className="border hover:border-fuchsia-500 w-[400px] rounded-lg p-5">
                    <div className="flex justify-center">
                        <img src={diuLogo} alt="" className="h-56" />
                    </div>
                    <h2 className="text-2xl font-semibold">Bachelor of Computer Science and Engineering</h2>
                    <h5 className="text-lg text-fuchsia-500">Daffodil International University</h5>
                    <p>2020-2023</p>
                </div>
                <div data-aos="fade-down" data-aos-delay="50"
                    data-aos-duration="1200" className="border hover:border-fuchsia-500 w-[400px] rounded-lg p-5">
                    <div className="flex justify-center mb-4">
                        <img src={cgwcLogo} alt="" className="h-52" />
                    </div>
                    <h2 className="text-2xl font-semibold">Higher Secondary Certificate</h2>
                    <h5 className="text-lg text-fuchsia-500">Chittagong Government Women College</h5>
                    <p>2018</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="50"
                    data-aos-duration="1200" className="border hover:border-fuchsia-500 w-[400px] rounded-lg p-5">
                    <div className="flex justify-center">
                        <img src={cgghsLogo} alt="" className="h-56" />
                    </div>
                    <h2 className="text-2xl font-semibold">Secondary School Certificate</h2>
                    <h5 className="text-lg text-fuchsia-500">Chittagong Government Girls High School</h5>
                    <p>2016</p>
                </div>
            </div>
        </div>
    );
};

export default Education;