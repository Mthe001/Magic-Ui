import { useEffect, useState } from "react";
import PlanCard from "../PlanCard/PlanCard";
import "./plans.css";

const Plans = () => {
    const [plans, setPlans] = useState([]);
    const [isYearly, setIsYearly] = useState(false);

    useEffect(() => {
        fetch('./plans.json')
            .then(res => res.json())
            .then(data => setPlans(data))
            .catch(err => console.log(err));
    }, []);

    const handleToggle = () => {
        setIsYearly(prev => !prev);
    };

    return (
        <div className="w-11/12 mx-auto">
            <div className="flex items-center justify-center text-xl p-5">

                <label className="toggle-switch">
                    <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={isYearly}
                        onChange={handleToggle}
                    />
                    <span className="toggle-slider"></span>
                    <span className="toggle-label"> Annual</span>
                </label>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {plans.map(plan => (
                    <PlanCard key={plan.planId} plan={plan} isYearly={isYearly} />
                ))}
            </div>
        </div>
    );
};

export default Plans;
