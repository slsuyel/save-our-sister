import { Link } from 'react-router-dom';
import Slider from "react-slick";
import newsBaner from '../../../assets/images/bk-news.png'
const items = [];

for (let i = 1; i <= 20; i++) {
    items.push(i);
}
const NewsSlider = () => {
    const settings = {
        // variableWidth: true,
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className="w-100 mx-auto container-fluid">
            <div className="mb-1 mx-auto  w-100">
                <h3 className="border-2 border-bottom border-danger">
                    <span className="fs-5 primary-bg  py-1 text-nowrap ">
                        নিয়মিত ঘটনাঃ
                    </span>
                </h3>
            </div>
            <div style={{ width: '99%', height: '100%' }} className="mx-auto container-fluid">
                <Slider {...settings}>
                    {items.map((item) => (
                        <div key={item.index} className="position-relative">
                            {/* Use Link instead of a */}
                            <Link to="/news/12 ">
                                <div className="img-contain rounded-0">
                                    <img
                                        src={newsBaner}
                                        alt="Zoomable Image"
                                    />
                                    <div className="overlay border border-2 border-bottom-0 border-top-0" />
                                </div>
                            </Link>
                            <div className="position-absolute title-text">

                                <Link to="/news/12 "
                                    className="text-decoration-none text-white"

                                >
                                    <h5 className="">
                                        কনটেইনার টার্মিনাল নির্মাণে মার্সকের প্রস্তাব বিবেচনা করবে সরকার
                                    </h5>
                                    {/* <p className='mb-0'><i className="fas fa-clock me-1 opacity-75"></i>
                                        ডিসেম্বর ২৪, ২০২৩</p> */}
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default NewsSlider;