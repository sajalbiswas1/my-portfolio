import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <div className="hidden lg:block">
                    <div className="flex">
                    <NavLink className="hover:bg-slate-200 px-3 py-1 rounded-lg">Home</NavLink>
                    <NavLink className="hover:bg-slate-200 px-3 py-1 rounded-lg">About Me</NavLink>
                    <NavLink className="hover:bg-slate-200 px-3 py-1 rounded-lg">Service</NavLink>
                    <NavLink className="hover:bg-slate-200 px-3 py-1 rounded-lg">Blog</NavLink>
                    <NavLink className="hover:bg-slate-200 px-3 py-1 rounded-lg">Skill</NavLink>
                    <NavLink className="hover:bg-slate-200 px-3 py-1 rounded-lg">Contact</NavLink>
                    </div>
                    </div>
                    <li className="lg:hidden md:block">
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="">Click</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">
                                <li><a>Item 1 amar sonar bangla ami tomai valobasi</a></li>
                                <li><a>Item 2</a></li>
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