import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderOne from "./Home/Slider/SliderOne";
import SliderTwo from "./Home/Slider/SliderTwo";
import SliderThree from "./Home/Slider/SliderThree";

const Slider = () => {
  return (
    <div className="relative">
        <Carousel 
                showArrows={true} 
                autoPlay 
                infiniteLoop 
                stopOnHover 
                showThumbs={false} 
                className=" mx-auto max-w-screen-2xl">
            <div>
                <SliderOne/>
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <SliderTwo/>
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <SliderThree/>
                {/* <p className="legend">Legend 1</p> */}
            </div>
        
        </Carousel>
        <div className="absolute bottom-5 left-5 text-white hidden lg:block space-x-3">
            <a href="#">FACEBOOK</a>
            <a href="#">INSTAGRAM</a>   
            <a href="#">TWITTER</a>
        </div>
    </div>
  );
};

export default Slider;
