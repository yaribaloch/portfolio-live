import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "./Testimonial.css";
import Slide from './Slide/Slide';
import Profile1 from "../../img/profile1.jpg";
import Profile2 from "../../img/profile2.jpg";
import Profile3 from "../../img/profile3.jpg";
import Profile4 from "../../img/profile4.jpg";
import Profile5 from "../../img/profile5.jpg";
import Profile6 from "../../img/profile6.jpg";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
const Testimonial = () => {

    const clients = [{
        "key": 1,
        "img": Profile1,
        "review": "Lorem epsum is simplary dummy text of printing of printing lorem epsum.<br />Lorem epsum lorem epsum lorem epsum lorem epsum.<br/>Lorem epsum is simplary dummy text of printing of printing lorem epsum.<br />Lorem epsum lorem epsum lorem epsum lorem epsum."
    },
    { 
        "key": 2,
        "img": Profile2,
        "review": "Lorem epsum is simplary dummy text of printing of printing lorem epsum.<br />Lorem epsum lorem epsum lorem epsum lorem epsum.<br/>Lorem epsum is simplary dummy text of printing of printing lorem epsum.<br />Lorem epsum lorem epsum lorem epsum lorem epsum."
    },
    { 
        "key": 3,
        "img": Profile3,
        "review": "Lorem epsum is simplary dummy text of printing of printing lorem epsum.<br />Lorem epsum lorem epsum lorem epsum lorem epsum.<br/>Lorem epsum is simplary dummy text of printing of printing lorem epsum.<br />Lorem epsum lorem epsum lorem epsum lorem epsum."
    },
    { 
        "key": 4,
        "img": Profile4,
        "review": "Lorem epsum is simplary dummy text of printing of printing lorem epsum.<br />Lorem epsum lorem epsum lorem epsum lorem epsum.<br/>Lorem epsum is simplary dummy text of printing of printing lorem epsum.<br />Lorem epsum lorem epsum lorem epsum lorem epsum."
    },
    { 
        "key": 5,
        "img": Profile5,
        "review": "Lorem epsum is simplary dummy text of printing of printing lorem epsum.<br />Lorem epsum lorem epsum lorem epsum lorem epsum.<br/>Lorem epsum is simplary dummy text of printing of printing lorem epsum.<br />Lorem epsum lorem epsum lorem epsum lorem epsum."
    },
    { 
        "key": 6,
        "img": Profile6,
        "review": "Lorem epsum is simplary dummy text of printing of printing lorem epsum.<br />Lorem epsum lorem epsum lorem epsum lorem epsum.<br/>Lorem epsum is simplary dummy text of printing of printing lorem epsum.<br />Lorem epsum lorem epsum lorem epsum lorem epsum."
    }];
    return (
        <div className='testimonial'>
            <div className='heading'>
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me...</span>
                <div className="blurDiv t-blur2" style={{background: "skyblue", top: "-18%", left: "56%"}}></div>
                <div className="blurDiv t-blur1" style={{background: "var(--purple)", top: "-18%", left: "56%"}}></div>
                </div>
           <Swiper modules={[Pagination]} slidesPerView={1} Pagination={{clickable: true}}>
                {clients.map((client) => <SwiperSlide key={client.key} ><Slide img={client.img} review={client.review}/></SwiperSlide>
                )}
             </Swiper>
        </div>
    );
}

export default Testimonial;
