import Plans from "../Plans/Plans";


const PricingPage = () => {

    return (

        <div className="mt-28 w-[99%] mx-auto py-5 text-center">
            <h1 className="text-slate-100 text-2xl font-semibold">Pricing</h1>

            <div className="p-5">
                <h1 className="text-6xl">Simple pricing for everyone <span className="text-orange-500 font-bold">.</span></h1>
                <h4 className="text-xl w-[50%] mx-auto py-5 ">Choose an affortable plan that's pcaked with the best features for engaging your audience, creating customer loyalty, and driving sales</h4>

            </div>

            <Plans></Plans>

        </div>
    );
};

export default PricingPage;