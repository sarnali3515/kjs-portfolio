

const Footer = () => {
    return (
        <div className="text-white bg-gray-900 border-t border-gray-500 p-5 mt-10">

            <div className="flex gap-5 justify-center items-center mb-6">


                <ul className="menu menu-horizontal px-1 flex">
                    <li className="font-semibold text-base hover:underline hover:text-fuchsia-600"><a href="#home">Home</a></li>
                    <li className="font-semibold text-base hover:underline hover:text-fuchsia-600"><a href="#skills">Skills</a></li>

                    <li className="font-semibold text-base hover:underline hover:text-fuchsia-600"><a href="#projects">Projects</a></li>

                </ul>
            </div>
            <p className="md:text-lg text-center md:font-semibold">© Copyright 2024, All Rights Reserved by Khatuna Jannat Sarnali</p>
        </div>
    );
};

export default Footer;