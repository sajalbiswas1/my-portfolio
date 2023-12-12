import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoIosContact } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const About = () => {
    return (
        <div className="max-w-7xl m-auto">
            <div className="mt-10">
            <hr className="border-2 border-red-500"/>
            <p className="font-bold text-xl italic">Nice to meet you!</p>
            <h2 className="text-5xl font-bold mt-2">WELCOME TO...</h2>
            <div className="grid grid-cols-3 mt-7">
                <div className="col-span-1">
                    <img className="rounded-full m-auto" src="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.18169-9/31398183_2126794280885682_8111418394896645662_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_ohc=QNolHU2QItQAX_7bEYq&_nc_ht=scontent.fdac22-1.fna&oh=00_AfBxHyzd6xESHUpWqZIJkiLkGI6vAUIYOD8cbLajoFns6A&oe=659F753A" alt="" />
                    <h3 className="text-center text-5xl mt-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-red-500 to-pink-500">SAJAL BISWAS</h3>
                    <p className="text-2xl text-center font-bold mt-3">Web Designer based in USA</p>                 
                </div>
                <div className="col-span-2">
                    <p>Born in 2000, AB type living in USA. We provide on-screen design for websites and apps, as well as front-end implementation. We will continue to pursue a wide range of expressions and better code by pursuing our “likes”.</p>
                    <div className="md:grid grid-cols-2 mt-4 text-xl font-medium">
                        <div>
                            <p className="flex items-center gap-3"> <HiOutlineDevicePhoneMobile className="text-2xl"/> +8801760053868</p>
                            <p className="mt-3 flex items-center gap-3"><MdOutlineEmail className="text-2xl"/>sajalb1899@gmail.com</p>
                        </div>
                        <div>
                        <p className="flex items-center gap-3"><IoIosContact className="text-2xl"/>Sajal Biswas</p>
                        <p className="mt-3 flex items-center gap-3"><CiLocationOn className="text-2xl"></CiLocationOn>Barihsal,Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;