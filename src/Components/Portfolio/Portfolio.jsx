import React from 'react';
import "./Portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import PostfolioStarter from "../../img/ps.png";
import ChopRecipe from "../../img/cr.png";
import KeeperApp from "../../img/ka.png";
import HOC from "../../img/hoc.png";
const Portfolio = () => {
    return (
        <div className='portfolio' id='Portfolio'>
            <span>Recent Projects</span>
            <span>Portfolio</span>
            <Swiper 
            spaceBetween={30}
            slidesPerView={2}
             
            grabCursor={true} 
            className='portfolio-slider'>
                <SwiperSlide ><img src={ChopRecipe} alt='img'/></SwiperSlide>
                <SwiperSlide ><img src={KeeperApp} alt='img'/></SwiperSlide>
                <SwiperSlide ><img src={PostfolioStarter} alt='img'/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Portfolio;
