


const Plan = ({ plan }) => {
    const { name, description, price } = plan;
    return (

        <div className="border-2 border-gray-400 bg-black text-white">
            <h3 className="text-xl">{name}</h3>
            <h4>{description}</h4>
            <div className="flex items-center">
                {price}
                <span>/month</span>
            </div>
        </div>
    );
};

export default Plan;