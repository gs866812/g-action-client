import { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SlidesPerView from "./ServiceSlider/SlidesPerView";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    const [swiperReady, setSwiperReady] = useState(false);
    const swiperRef = useRef(null);

    const slidePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const slideNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className='px-4'>
            <div className='lg:py-24 py-5 flex flex-col lg:flex-row mx-auto max-w-screen-2xl gap-5 lg:gap-8'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h4 className='text-[#1AD1A5] text-2xl font-semibold'>WE LOVE OUR WORK</h4>
                    <h2 className='text-2xl lg:text-[52px] font-bold lg:leading-[60px] my-4'>OUR SERVICES</h2>
                    <div className='flex gap-3'>
                        <hr className='border-[3px] border-[#1AD1A5] w-[60px] rounded-xl' />
                        <hr className='border-[3px] border-[#1AD1A5] w-[5px] rounded-xl' />
                    </div>
                    <div className="mt-10 hidden lg:block">
                        <button onClick={slidePrev} className="py-2 px-4 border border-gray-300 rounded-lg hover:bg-[#1AD1A5] hover:text-white duration-300 mr-2">
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <button onClick={slideNext} className="py-2 px-4 border border-gray-300 rounded-lg hover:bg-[#1AD1A5] hover:text-white duration-300">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                </div>
                <div className='lg:w-[70%] flex-grow'>
                    <SlidesPerView swiperRef={swiperRef} setSwiperReady={setSwiperReady} />
                </div>
            </div>
        </div>
    );
};

export default Services;
