import { useState } from 'react';
import emailjs from 'emailjs-com';
import SectionTitle from '../../../Components/SectionTitle/SectionTittle';
import email from '../../../assets/Icons/email.png';
import whatsapp from '../../../assets/Icons/whatsapp.png';
import facebook from '../../../assets/Icons/facebook.png';
import linkedin from '../../../assets/Icons/linkedin.png';
import github from '../../../assets/Icons/github.png';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm('service_cpgewad', 'template_5tmsmsg', e.target, 'PZDHPAgBIM5YtDtMy');
            toast.success('Email sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error);
            toast.error('Failed to send email. Please try again later.');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div id="contact">
            <SectionTitle title="Contact" />
            <div className="flex gap-2 flex-col md:flex-row justify-between">
                <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" className="border rounded-lg flex-auto p-8">
                    <h2 className="text-3xl text-center">Get in Touch</h2>
                    {/* email */}
                    <div className="flex gap-4 mt-5">
                        <img src={email} alt="" />
                        <div>
                            <h5 className="text-lg">Email</h5>
                            <p>kjsarnali@gmail.com</p>
                        </div>
                    </div>
                    {/* whatsapp */}
                    <div className="flex gap-4 mt-5">
                        <img src={whatsapp} alt="" />
                        <div>
                            <h5 className="text-lg">Phone & Whatsapp</h5>
                            <p>01876621880</p>
                        </div>
                    </div>
                    {/* social */}
                    <div>
                        <h2 className="text-xl mt-10 mb-5 text-center">Follow me on</h2>
                        <div className="flex justify-center gap-5">
                            <a href="https://www.linkedin.com/in/khatuna-jannat-sarnali/" target="_blank">
                                <img src={linkedin} alt="" />
                            </a>
                            <a href="https://www.facebook.com/khatunajannatsarnali" target="_blank">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="https://github.com/sarnali3515" target="_blank">
                                <img src={github} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className="flex-auto md:ml-10">
                    <div className="card bg-gray-700 w-full shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input input-bordered bg-gray-900"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input input-bordered bg-gray-900"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Message</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="textarea textarea-bordered bg-gray-900"
                                    placeholder="Your Message"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <div className="flex justify-end">
                                    <button type="submit" className="btn w-44 bg-fuchsia-600 border-none text-white">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
