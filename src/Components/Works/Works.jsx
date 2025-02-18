import React from 'react';
import  "./Works.css";
import Description from '../Services/Description/Description';
import Upwork from "../../img/Upwork.png";
import Facebook from "../../img/Facebook.png";
import Fiver from "../../img/fiverr.png";
import Shopify from "../../img/Shopify.png";
import Amazon from "../../img/amazon.png";
const Works = () => {
    return (
        <div className='works'>
        <Description hasButton="true"  title1={"Works fro All these"} title2={"Brands & Clients"} detail={"Provided services to various clients on Upwork, Fiverr, and Facebook, delivering high-quality solutions tailored to their needs. Successfully built and managed online stores on platforms like Amazon and Shopify, ensuring customer satisfaction and strong sales performance."}/>
        <div className="platforms">
            <div className='w-cirlcle'>
            <div className='cirlcles'><img src={Upwork} alt="" /></div>
            <div className='cirlcles'><img src={Fiver} alt="" /></div>
            <div className='cirlcles'><img src={Amazon} alt="" /></div>
            <div className='cirlcles'><img src={Shopify} alt="" /></div>
            <div className='cirlcles'><img src={Facebook} alt="" /></div>
            </div>
            <div className='b-cirlcle sm-cirlcle'></div>
            <div className='o-cirlcle sm-cirlcle'></div>
            <div className='logos'>

            </div>
        </div>
        </div>
    );
}

export default Works;
