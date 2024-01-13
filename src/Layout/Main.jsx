import { Outlet } from "react-router-dom";
import Navbar from "../component/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
            <div className="fixed w-full">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;