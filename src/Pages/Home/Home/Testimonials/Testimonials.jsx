import SectionTitle from "../../../../componets/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
// import { navigation } from "swiper";

import "swiper/css";
import "swiper/css";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setRiviews] = useState([]);

    useEffect(() => {
        fetch('reviws.json')
        .then(res => res.json())
        .then(data => setRiviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle 
            subHeading="What Our Client Say"
            heading="Testimonials"
            >
            </SectionTitle>
            <Swiper navigation={true} 
            // modules={[NavigationPreloadManager]}
             className="mySwiper">
                {
                    reviews.map(review =><SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                            />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;