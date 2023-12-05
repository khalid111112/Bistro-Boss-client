import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../../assets/home/01.jpg'
import img2 from '../../../../assets/home/02.jpeg';
import img3 from '../../../../assets/home/03.jpeg';
import img4 from '../../../../assets/home/04.jpeg';
import img5 from '../../../../assets/home/05.jpeg';
import img6 from '../../../../assets/home/06.jpeg';


const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} className='' alt="" />
            </div>
            <div>
                <img src={img2} alt="" />
            </div>
            <div>
                <img src={img3} alt="" />
            </div>
            <div>
                <img src={img4} alt="" />
            </div>
            <div>
                <img src={img5} alt="" />
            </div>
            <div>
                <img src={img6} alt="" />
            </div>
           
        </Carousel>
    );
};

export default Banner;