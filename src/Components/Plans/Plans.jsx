
import Plan from "../Plan/Plan";


const Plans = () => {





    return (

        <div>
            <h3>Plans :{plans.length} </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {
                    plans.map(plan => <Plan key={plan.id} plan={plan}></Plan>)
                }

            </div>

        </div>
    );
};

export default Plans;