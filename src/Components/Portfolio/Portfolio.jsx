import React from 'react';
import "./Portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Musicapp from "../../img/musicapp.png";
import HOC from "../../img/hoc.png";
const Portfolio = () => {
    return (
        <div className='portfolio'>
            <span>Recent Projects</span>
            <span>Portfolio</span>
            <Swiper 
            spaceBetween={30}
            slidesPerView={3} 
            grabCursor={true} 
            className='portfolio-slider'>
                <SwiperSlide ><img src={Ecommerce} alt='img'/></SwiperSlide>
                <SwiperSlide ><img src={Musicapp} alt='img'/></SwiperSlide>
                <SwiperSlide ><img src={Sidebar} alt='img'/></SwiperSlide>
                <SwiperSlide ><img src={HOC} alt='img'/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Portfolio;
