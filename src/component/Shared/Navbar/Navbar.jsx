// import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
    const navList = <>
        <Link to='home'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:bg-slate-200 px-3 py-1 rounded-lg">Home</Link>
        <Link to='about'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:bg-slate-200 px-3 py-1 rounded-lg">About Me</Link>
        <Link to='service'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:bg-slate-200 px-3 py-1 rounded-lg">Service</Link>
        <Link to='project'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:bg-slate-200 px-3 py-1 rounded-lg">Projects</Link>
        <Link to='skill'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:bg-slate-200 px-3 py-1 rounded-lg">Skill</Link>
        <Link to='contact'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:bg-slate-200 px-3 py-1 rounded-lg">Contact</Link>
    </>
    return (
        <div className=" w-full">
            <div className="navbar max-w-7xl mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">SAJAL</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <div className="hidden lg:block">
                            <div className="flex">
                                {navList}
                            </div>
                        </div>
                        <li className="lg:hidden md:block">
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div tabIndex={0} role="button" className=""><IoMenuSharp /></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                                    {navList}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <hr />
        </div>
    );
};

export default Navbar;