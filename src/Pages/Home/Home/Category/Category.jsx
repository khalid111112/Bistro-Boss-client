import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../../assets/home/slide 1.jpeg'
import slide2 from '../../../../assets/home/slide 2.jpeg'
import slide3 from '../../../../assets/home/slide 3.jpeg'
import slide4 from '../../../../assets/home/slide 4.jpeg'
import slide5 from '../../../../assets/home/slide 5.jpeg'
import SectionTitle from "../../../../componets/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}
            >
            </SectionTitle>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{ clickable: true, }}
            // modules={[Pagination]}
            className="mySwiper mb-16"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-orange-300">Suzuki</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-orange-300">Apache</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-orange-300">FZ</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-orange-300">R-15</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-orange-300">Pulsar</h3>
            </SwiperSlide>
            
            
           
        </Swiper>
        </section>
    );
};

export default Category;