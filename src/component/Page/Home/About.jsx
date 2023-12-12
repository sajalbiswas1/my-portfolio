import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoIosContact } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const About = () => {
    return (
        <div className="max-w-7xl m-auto">
            <div className="mt-10">
                {/* <h2 className="text-5xl font-bold mt-10 ">About</h2>
                <hr className="border-2 w-80 mt-3  border-red-500" /> */}
                {/* <p className="font-bold text-xl italic mt-7 text-center">Nice to meet you!</p> */}
                  <h2 className="text-5xl font-bold mt-10 text-center max-w-min m-auto bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-pink-500">About</h2>
                <hr className="border-2 w-52 mt-3 m-auto border-red-500" />
                {/* <h2 className="text-5xl font-bold mt-2 text-center">About</h2> */}
                <div className="grid grid-cols-3 mt-7 items-center">
                    <div className="col-span-1">
                        <img className="rounded-full m-auto h-72" src="https://i.ibb.co/XZFGjYx/Untitled-design-46.png" alt="" />
                        <h3 className="text-center text-5xl mt-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-red-500 to-pink-500">SAJAL BISWAS</h3>
                        <p className="text-2xl text-center font-bold mt-3">Web Designer in Bangladesh</p>
                    </div>
                    <div className="col-span-2">
                        <p>Born in 2000, AB type living in USA. We provide on-screen design for websites and apps, as well as front-end implementation. We will continue to pursue a wide range of expressions and better code by pursuing our “likes”.</p>
                        <div className="md:grid grid-cols-2 mt-9 mb-7 text-xl font-medium">
                            <div>
                                <p className="flex items-center gap-3"> <HiOutlineDevicePhoneMobile className="text-2xl" /> +8801760053868</p>
                                <p className="mt-3 flex items-center gap-3"><MdOutlineEmail className="text-2xl" />sajalb1899@gmail.com</p>
                            </div>
                            <div>
                                <p className="flex items-center gap-3"><IoIosContact className="text-2xl" />Sajal Biswas</p>
                                <p className="mt-3 flex items-center gap-3"><CiLocationOn className="text-2xl"></CiLocationOn>Barishal,Bangladesh</p>
                            </div>

                        </div>
                        <hr />
                        <div className="grid grid-cols-2 mt-8">
                            <div className="flex items-center gap-3">
                                <p className="text-5xl font-bold">1+ </p>
                                <p>Year <br /> Experience...</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="text-5xl font-bold">10+ </p>
                                <p>Projects <br /> Ready...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;