import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={'---From 11:00am to 10:00pm---'}
            heading={'ORDER ONLINE'}
            />
                <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper max-h-[400px] "
      >
        <SwiperSlide><div>
        <img src={slide1} alt="" />
        <h1 className='text-3xl text-white  font-bold text-center -mt-24 uppercase'>Salad</h1>
        </div>
        </SwiperSlide>
        <SwiperSlide><div>
        <img src={slide2} alt="" />
        <h1 className='text-3xl text-white  font-bold text-center -mt-24 uppercase'>Pizza </h1>
        </div>
        </SwiperSlide>
        <SwiperSlide><div>
        <img src={slide3} alt="" />
        <h1 className='text-3xl text-white  font-bold text-center -mt-24 uppercase'>Soup </h1>
        </div>
        </SwiperSlide>
        <SwiperSlide><div>
        <img src={slide4} alt="" />
        <h1 className='text-3xl text-white  font-bold text-center -mt-24 uppercase'>dessert </h1>
        </div>
        </SwiperSlide>
    
    

      
      </Swiper>
        </section>
    );
};

export default Category;