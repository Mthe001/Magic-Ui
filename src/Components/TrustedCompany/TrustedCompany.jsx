import { FaGoogle } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const TrustedCompany = () => {


    return (
        <div className="mt-32">

            <div>
                <h2 className="text-slate-600 text-2xl text-center p-3">TRUSTED BY TEAMS FROM AROUND THE WORLD</h2>
            </div >

            <div className="flex items-center justify-center gap-24 p-5">
                <h1 className="text-gray-50 text-4xl font-sm  items-center"><a href="https://www.google.com/" className="flex"><FaGoogle />oogle</a></h1>

                <h1 className="text-gray-50 text-4xl font-sm flex items-center gap-1"><a className="flex" href="https://www.microsoft.com/en-us/"><TfiMicrosoftAlt />Microsoft</a></h1>

                <h1 className="text-gray-50 text-4xl font-sm flex items-center"><a className="flex gap-1" href="https://github.com/"><FaGithub />Github</a></h1>

                <h1 className="text-gray-50 text-4xl font-sm flex items-center"><a className="flex gap-1" href="https://www.notion.so/"><SiNotion />Notion</a></h1>
            </div>


        </div >
    );
};

export default TrustedCompany;