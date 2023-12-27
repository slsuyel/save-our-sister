import banner from '../../../assets/images/banner.png'
const Banner = () => {
    return (
        <div className='w-100 mx-auto text-center'>
            <img src={banner} alt="" className='img-fluid w-100' draggable={false} />
        </div>
    );
};

export default Banner;