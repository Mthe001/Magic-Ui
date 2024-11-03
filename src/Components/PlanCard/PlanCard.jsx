import { FaCircleChevronRight } from "react-icons/fa6";

const PlanCard = ({ plan, isYearly }) => {
    const { planName, price, description, features } = plan;


    const displayPrice = isYearly ? price * 10 : price;
    const priceLabel = isYearly ? "/year" : "/month";

    return (
        <div className="border-2 border-gray-900 w-[70%] p-4 hover:border-white transition duration-700 rounded-xl ">
            <div className="text-start p-7">
                <h2 className="text-2xl font-semibold">{planName}</h2>
                <h3 className="text-xl">{description}</h3>
                <h1 className="text-3xl py-6 flex items-end">
                    <span className="font-bold text-6xl">$</span>
                    <span className="text-6xl font-bold">{displayPrice}</span>
                    <span className="text-xl font-semibold">{priceLabel}</span>
                </h1>
            </div>

            <div className="py-5">
                <button className="bg-white text-black font-semibold hover:bg-gray-700 transition-colors duration-500 hover:text-white text-2xl py-2 w-[90%] rounded-lg">
                    Subscribe
                </button>
            </div>
            <div className="divider"></div>

            {/* Features List with Dots */}
            <ul className="list-disc list-inside space-y-2 text-start px-7 py-3">
                {features.map((feature, idx) => (
                    <p key={idx} className="text-lg flex items-center gap-2 font-semibold">
                        <FaCircleChevronRight />{feature}
                    </p>
                ))}
            </ul>
        </div>
    );
};

export default PlanCard;
