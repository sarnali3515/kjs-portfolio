

const Navbar = () => {
    const navLists = <>
        <li className="font-semibold text-base hover:text-fuchsia-600"><a>Home</a></li>
        <li className="font-semibold text-base hover:text-fuchsia-600"><a>Skills</a></li>
        <li className="font-semibold text-base hover:text-fuchsia-600"><a>Services</a></li>
        <li className="font-semibold text-base hover:text-fuchsia-600"><a>Projects</a></li>
        <li className="font-semibold text-base hover:text-fuchsia-600"><a>Education</a></li>
        <li className="font-semibold text-base hover:text-fuchsia-600"><a>Contact</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-gray-900 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLists}
                        </ul>
                    </div>
                    <a className="btn btn-ghost md:text-2xl text-fuchsia-300">Khatuna Jannat Sarnali</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLists}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='/Sarnali-Resume-front.pdf' target='_blank' download="Sarnali-Resume-front.pdf" className="btn text-fuchsia-500 text-lg hover:bg-fuchsia-600 hover:text-white font-medium border-fuchsia-500 bg-transparent md:mr-4">Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;