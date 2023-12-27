import AboutUs from "./AboutUs";
import Banner from "./Banner";
import NewsBody from "./NewsBody";
import NewsSlider from "./NewsSlider";

const HomeLayout = () => {
    return (
        <div>

            <Banner />
            <NewsSlider />
            <NewsBody />
            <AboutUs />
        </div>
    );
};

export default HomeLayout;