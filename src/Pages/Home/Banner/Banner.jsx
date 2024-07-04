/* eslint-disable react/no-unescaped-entities */
import { Typewriter } from 'react-simple-typewriter';
import img from '../../../assets/Images/profile.png'
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto text-white'>
            <div className="flex flex-col-reverse md:flex-row justify-between">
                <div data-aos="fade-right" data-aos-delay="50"
                    data-aos-duration="1000" className='pt-10 md:pl-16 md:w-1/2'>
                    <h2 className="text-xl mb-3">Hello, this is</h2>
                    <h1 className='text-4xl font-bold'> <span>Khatuna Jannat Sarnali</span></h1>
                    <h1 className="my-5 text-fuchsia-500 text-xl md:text-3xl font-semibold">
                        <Typewriter
                            words={['Web Developer', 'Front End Developer', 'Mern Stack Developer', 'React Developer']}
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={80}
                            delaySpeed={2000}
                            className="text-3xl"
                            onType={(text) => (
                                <h1 className="my-5 text-5xl font-bold" style={{ fontSize: '3rem' }}>{text}</h1>
                            )}
                        />
                    </h1>
                    <p>
                        I am a dedicated Web Developer passionate about creating seamless, responsive websites. Skilled in modern web technologies and innovative solutions. I aim to deliver high-quality, user-friendly applications and continually expand my expertise to drive impactful digital experiences.
                    </p>
                    <a href='/Sarnali-Resume-frontend.pdf' target='_blank' download="Sarnali-Resume-frontend.pdf" className="btn bg-fuchsia-800 text-white border-none mt-6 hover:bg-fuchsia-600">Download Resume</a>
                </div>
                <div data-aos="fade-left" data-aos-delay="50"
                    data-aos-duration="1000">
                    <img data-aos="zoom-in" className='md:h-[450px]' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;