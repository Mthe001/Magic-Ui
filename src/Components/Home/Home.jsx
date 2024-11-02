import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import PricingPage from '../PricingPage/PricingPage';


const Home = () => {
    const navigation = useNavigation();
    return (

        <div className="text-white">
            <Header></Header>
            <PricingPage></PricingPage>

            {
                navigation.state === "loading.." ? <p>Loading</p> : <Outlet></Outlet>
            }




        </div>



    );
};

export default Home;