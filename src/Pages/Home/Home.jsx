import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner/Banner";
import Category from "./Home/Category/Category";
import Featured from "./Home/Featured/Featured";
import Testimonials from "./Home/Testimonials/Testimonials";
import PopularMenu from "./Home/Menu/PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>               
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;