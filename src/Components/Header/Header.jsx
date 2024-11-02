import { NavLink } from "react-router-dom";
import TextTitle from "../TextTitle/TextTitle";
import ChartPart from "../ChartPart/ChartPart";
import TrustedCompany from "../TrustedCompany/TrustedCompany";

const Header = () => {
    return (
        <div>
            {/* Sticky Navbar with Blur */}
            <div className="bg-black bg-opacity-60 backdrop-blur-md sticky top-0 z-50 flex gap-4 p-1 m-2 text-white justify-between w-[90%] mx-auto rounded-lg shadow-md">
                <NavLink to="/" className="font-semibold text-lg">Magic UI</NavLink>

                <div className="flex gap-2 items-center">
                    <NavLink to="/login" className="hover:underline">Log In</NavLink>
                    <NavLink
                        to="/signup"
                        className="bg-zinc-700 text-sm px-3 py-1 text-gray-300 rounded-[3px] hover:bg-zinc-600"
                    >
                        Sign Up
                    </NavLink>
                </div>
            </div>

            {/* Content Sections */}
            <div>
                <hr />
            </div>
            <TextTitle />
            <ChartPart />
            <TrustedCompany />
        </div>
    );
};

export default Header;
