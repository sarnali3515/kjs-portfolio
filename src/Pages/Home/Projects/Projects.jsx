import SectionTittle from "../../../Components/SectionTitle/SectionTittle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaEye, FaGithub } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import project1 from '../../../assets/Images/project-1.png'
import project2 from '../../../assets/Images/project-2.png'
import project3 from '../../../assets/Images/project-3.png'
import project4 from '../../../assets/Images/project-4.png'

const Projects = () => {
    return (
        <div className="mb-8">
            <SectionTittle title="Projects"></SectionTittle>
            <div>
                <div>
                    <Swiper

                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 15 },
                            480: { slidesPerView: 2, spaceBetween: 15 },
                            768: { slidesPerView: 3, spaceBetween: 25 },
                        }}
                        modules={[FreeMode, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {/* edumosaic */}
                        <SwiperSlide >
                            <div data-aos="flip-left" data-aos-delay="50"
                                data-aos-duration="1000" className="card hover:-translate-y-4 hover:border-fuchsia-500 bg-gray-900 w-full md:h-[560px] mt-5 rounded border border-fuchsia-300 ">
                                <figure className="">
                                    <img src={project1} alt="Shoes" className="p-3 rounded h-72 w-full" />
                                </figure>

                                <div className="p-3 text-left text-white ">
                                    <h2 className="font-semibold text-2xl">EduMosaic</h2>
                                    <p className='text-base mt-2'>An educational management platform</p>
                                    <p className='text-base mt-2'><span className="text-fuchsia-600 font-medium">Technology Stack: </span><br /> React, JavaScript, Node.js, Express.js, MongoDB, Firebase, JWT, TanStack Query, Tailwind,
                                        HTML, CSS.</p>

                                    <div className='flex justify-between mt-5'>
                                        <a className="btn hover:bg-fuchsia-600 m-0 px-2 border-fuchsia-500 bg-gray-950 text-white" href="https://edu-mosaic-275a3.web.app" target="_blank"><FaEye></FaEye> Live Site</a>
                                        <a className="btn hover:bg-fuchsia-600 m-0 px-2 border-fuchsia-500 bg-gray-950 text-white" href="https://github.com/sarnali3515/edu-mosaic-client" target="_blank"><FaGithub></FaGithub> Client Github</a>
                                        <a className="btn hover:bg-fuchsia-600 m-0 px-2 border-fuchsia-500 bg-gray-950 text-white" href="https://github.com/sarnali3515/edu-mosaic-server" target="_blank"><FaGithub></FaGithub> Server Github</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* query nest */}
                        <SwiperSlide >
                            <div data-aos="flip-left" data-aos-delay="50"
                                data-aos-duration="1000" className="card hover:-translate-y-4 hover:border-fuchsia-500 bg-gray-900 w-full md:h-[560px] mt-5 rounded border border-fuchsia-300 ">
                                <figure className="">
                                    <img src={project2} alt="Shoes" className="p-3 rounded h-72 w-full" />
                                </figure>

                                <div className="p-3 text-left text-white ">
                                    <h2 className="font-semibold text-2xl">QueryNest</h2>
                                    <p className='text-base mt-2'>An alternative product information system</p>
                                    <p className='text-base mt-2'><span className="text-fuchsia-600 font-medium">Technology Stack: </span><br /> React, JavaScript, Node.js, Express.js, MongoDB, Firebase, JWT, Tailwind, HTML, CSS.</p>

                                    <div className='flex justify-between mt-5'>
                                        <a className="btn hover:bg-fuchsia-600 m-0 px-2 border-fuchsia-500 bg-gray-950 text-white" href="https://query-nest.web.app" target="_blank"><FaEye></FaEye> Live Site</a>
                                        <a className="btn hover:bg-fuchsia-600 m-0 px-2 border-fuchsia-500 bg-gray-950 text-white" href="https://github.com/sarnali3515/query-nest-client" target="_blank"><FaGithub></FaGithub> Client Github</a>
                                        <a className="btn hover:bg-fuchsia-600 m-0 px-2 border-fuchsia-500 bg-gray-950 text-white" href="https://github.com/sarnali3515/query-nest-server" target="_blank"><FaGithub></FaGithub> Server Github</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Travel Trails */}
                        <SwiperSlide >
                            <div data-aos="flip-left" data-aos-delay="50"
                                data-aos-duration="1000" className="card hover:-translate-y-4 hover:border-fuchsia-500 bg-gray-900 w-full md:h-[560px] mt-5 rounded border border-fuchsia-300 ">
                                <figure className="">
                                    <img src={project3} alt="Shoes" className="p-3 rounded h-72 w-full" />
                                </figure>

                                <div className="p-3 text-left text-white ">
                                    <h2 className="font-semibold text-2xl">Travel Trails</h2>
                                    <p className='text-base mt-2'>A Tourism Management Website</p>
                                    <p className='text-base mt-2'><span className="text-fuchsia-600 font-medium">Technology Stack: </span><br /> React, JavaScript, MongoDB, Firebase, Tailwind, HTML, CSS.</p>

                                    <div className='flex justify-between mt-5'>
                                        <a className="btn hover:bg-fuchsia-600 m-0 px-2 border-fuchsia-500 bg-gray-950 text-white" href="https://tourism-management-trails.web.app" target="_blank"><FaEye></FaEye> Live Site</a>
                                        <a className="btn hover:bg-fuchsia-600 m-0 px-2 border-fuchsia-500 bg-gray-950 text-white" href="https://github.com/sarnali3515/tourism-management-client" target="_blank"><FaGithub></FaGithub> Client Github</a>
                                        <a className="btn hover:bg-fuchsia-600 m-0 px-2 border-fuchsia-500 bg-gray-950 text-white" href="https://github.com/sarnali3515/tourism-management-server" target="_blank"><FaGithub></FaGithub> Server Github</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Urban Charm */}
                        <SwiperSlide >
                            <div data-aos="flip-left" data-aos-delay="50"
                                data-aos-duration="1000" className="card hover:-translate-y-4 hover:border-fuchsia-500 bg-gray-900 w-full md:h-[560px] mt-5 rounded border border-fuchsia-300 ">
                                <figure className="">
                                    <img src={project4} alt="Shoes" className="p-3 rounded h-72 w-full" />
                                </figure>

                                <div className="p-3 text-left text-white ">
                                    <h2 className="font-semibold text-2xl">Urban Charm</h2>
                                    <p className='text-base mt-2'>A Real Estate Website</p>
                                    <p className='text-base mt-2'><span className="text-fuchsia-600 font-medium">Technology Stack: </span><br /> React, JavaScript, Firebase, Tailwind, HTML, CSS.</p>

                                    <div className='flex justify-between mt-5'>
                                        <a className="btn hover:bg-fuchsia-600 m-0 px-2 border-fuchsia-500 bg-gray-950 text-white" href="https://assignment-9-real-estate-c9a0b.web.app/" target="_blank"><FaEye></FaEye> Live Site</a>
                                        <a className="btn hover:bg-fuchsia-600 m-0 px-2 border-fuchsia-500 bg-gray-950 text-white" href="https://github.com/sarnali3515/real-estate-a9" target="_blank"><FaGithub></FaGithub> Client Github</a>
                                        <a className="btn hover:bg-fuchsia-600 m-0 px-2 border-fuchsia-500 bg-gray-950 text-white" href="https://github.com/sarnali3515/real-estate-a9" target="_blank"><FaGithub></FaGithub> Server Github</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Projects;