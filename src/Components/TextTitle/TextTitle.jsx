import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const TextTitle = () => {



    return (
        <div className="flex flex-col items-center justify-center p-10 m-4  ">
            <div className="p-4">
                <button className="flex items-center justify-center gap-1 text-gray-400 border-2 border-gray-600 bg-zinc-700 rounded-full px-10">Introducing Magic UI Template <FaLongArrowAltRight /> </button>
            </div>

            <h1 className="text-8xl text-gray-50/95 font-semibold">Magic UI <span className="text-gray-100/80">is the new way</span> </h1>
            <h3 className="p-5 text-8xl text-gray-200/70 font-semibold"><span className="text-gray-100/90">to build</span> landing pages.</h3>

            <div className="p-6 text-center text-xl">
                <p className="text-zinc-500"> Beautifully designed, animated components and templates built with</p>
                <p className="text-zinc-400"> Tailwind CSS, React, and Framer Motion</p>
            </div>

            <div>
                <button className="flex items-center justify-center gap-3 bg-slate-50 text-black font-semibold px-5 py-2 rounded-xl">Getting Started for free <FaArrowRightLong /></button>
            </div>
        </div>

    );
};

export default TextTitle;