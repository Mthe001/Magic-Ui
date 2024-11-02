
const ChartPart = () => {
    return (
        <div className="flex h-[1000px] items-center justify-center">

            <div className="bg-gray-900/10 h-[499px] rounded-xl">

                <div>
                    <img className="w-[55%] rounded-xl rotate-180 relative right-16 -top-3" src="/chart.png" alt="okk" />
                    <div>
                        <h2 className="text-zinc-400 relative text-5xl -top-48 left-[960px]"> <span className="text-gray-900">Style</span> In Your <span className="text-white">Way</span></h2>
                    </div>
                </div>


                <div>

                    <img className="w-[55%] rounded-xl relative left-[600px] " src="/chartpart-img.jpg" alt="okk bos" />
                    <div>
                        <h1 className="text-slate-300 text-6xl relative -top-56 px-9">Be the <span className="text-orange-600/100">Best</span> <span className="text-red-600">.</span></h1>
                        <h1 className="text-gray-200/80 text-5xl relative -top-40 right-24"><span className="text-gray-200/100">You</span> Need The <span className="text-red-600/90">Best</span> <span className="text-orange-600">.</span> </h1>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ChartPart;