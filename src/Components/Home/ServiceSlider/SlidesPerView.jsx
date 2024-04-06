import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SlidesPerView = ({ swiperRef, setSwiperReady }) => {
  const [learnMore, setLearMore] = useState(false);
  const [learnMore1, setLearMore1] = useState(false);
  const [learnMore2, setLearMore2] = useState(false);
  const [learnMore3, setLearMore3] = useState(false);

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

  const showButton = (swiper) => {
    setLearMore(true);
  };
  const hideButton = () => {
    setLearMore(false);
  };

  const showButton1 = () => {
    setLearMore1(true);
  };
  const hideButton1 = () => {
    setLearMore1(false);
  };
  const showButton2 = () => {
    setLearMore2(true);
  };
  const hideButton2 = () => {
    setLearMore2(false);
  };
  const showButton3 = () => {
    setLearMore3(true);
  };
  const hideButton3 = () => {
    setLearMore3(false);
  };

  return (
    <div>
      <div className="hidden lg:block">
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          speed={700}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination]}
          className="mySwiper"
          onSwiper={() => setSwiperReady(true)}
        >
          <SwiperSlide className="w-full static">
            <div
              onMouseEnter={showButton}
              onMouseLeave={hideButton}
              className="py-5 px-5 flex flex-col gap-5 items-start shadow-md w-[800px] rounded-lg m-2"
            >
              <div className="mx-auto w-[25%] hover:rotate-[360deg] duration-1000">
                <img src="https://iili.io/JNZtsYQ.png" alt="" />
              </div>
              <a href="" className="text-xl font-bold hover:text-[#1AD1A5]">
                Website Development
              </a>

              <div className="space-y-2">
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
              </div>

              {learnMore && (
                <button
                  className={`uppercase bg-[#1AD1A5] text-white py-2 px-4 rounded-sm w-full hover:bg-[#01254D] duration-500`}
                >
                  Learn More
                </button>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div
              onMouseEnter={showButton1}
              onMouseLeave={hideButton1}
              className="py-5 px-5 flex flex-col gap-5 items-start shadow-md w-[800px] rounded-lg m-2"
            >
              <div className="mx-auto w-[25%] hover:rotate-[360deg] duration-1000">
                <img src="https://iili.io/JNZtQyB.png" alt="" />
              </div>
              <a href="" className="text-xl font-bold hover:text-[#1AD1A5]">
                Product Design
              </a>

              <div className="space-y-2">
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
              </div>

              {learnMore1 && (
                <button className="uppercase bg-[#1AD1A5] text-white py-2 px-4 rounded-sm w-full hover:bg-[#01254D] duration-500">
                  Learn More
                </button>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div
              onMouseEnter={showButton2}
              onMouseLeave={hideButton2}
              className="py-5 px-5 flex flex-col gap-5 items-start shadow-md w-[800px] rounded-lg m-2"
            >
              <div className="mx-auto w-[25%] hover:rotate-[360deg] duration-1000">
                <img src="https://iili.io/JNZtLvV.png" alt="" />
              </div>
              <a href="" className="text-xl font-bold hover:text-[#1AD1A5]">
                Cloud Migration
              </a>

              <div className="space-y-2">
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
              </div>

              {learnMore2 && (
                <button className="uppercase bg-[#1AD1A5] text-white py-2 px-4 rounded-sm w-full hover:bg-[#01254D] duration-500">
                  Learn More
                </button>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div
              onMouseEnter={showButton3}
              onMouseLeave={hideButton3}
              className="py-5 px-5 flex flex-col gap-5 items-start shadow-md w-[800px] rounded-lg m-2"
            >
              <div className="mx-auto w-[25%] hover:rotate-[360deg] duration-1000">
                <img src="https://iili.io/JNZttTP.png" alt="" />
              </div>
              <a href="" className="text-xl font-bold hover:text-[#1AD1A5]">
                Data Analytics
              </a>

              <div className="space-y-2">
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
              </div>

              {learnMore3 && (
                <button className="uppercase bg-[#1AD1A5] text-white py-2 px-4 rounded-sm w-full hover:bg-[#01254D] duration-500">
                  Learn More
                </button>
              )}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* for mobile */}
      <div className="lg:hidden">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          speed={700}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          onSwiper={() => setSwiperReady(true)}
        >
          <SwiperSlide className="w-full">
            <div
              onMouseEnter={showButton}
              onMouseLeave={hideButton}
              className="py-5 px-5 flex flex-col gap-5 items-center shadow-md w-[800px] rounded-lg m-2 border border-gray-300 pb-10"
            >
              <div className="mx-auto w-[25%] hover:rotate-[360deg] duration-1000">
                <img src="https://iili.io/JNZtsYQ.png" alt="" />
              </div>
              <a href="" className="text-xl font-bold hover:text-[#1AD1A5]">
                Website Development
              </a>

              <div className="space-y-2">
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
              </div>

              {learnMore && (
                <button
                  className={`uppercase bg-[#1AD1A5] text-white py-2 px-4 rounded-sm w-full hover:bg-[#01254D] duration-500`}
                >
                  Learn More
                </button>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div
              onMouseEnter={showButton1}
              onMouseLeave={hideButton1}
              className="py-5 px-5 flex flex-col gap-5 items-center shadow-md w-[800px] rounded-lg m-2 border border-gray-300 pb-10"
            >
              <div className="mx-auto w-[25%] hover:rotate-[360deg] duration-1000">
                <img src="https://iili.io/JNZtQyB.png" alt="" />
              </div>
              <a href="" className="text-xl font-bold hover:text-[#1AD1A5]">
                Product Design
              </a>

              <div className="space-y-2">
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
              </div>

              {learnMore1 && (
                <button className="uppercase bg-[#1AD1A5] text-white py-2 px-4 rounded-sm w-full hover:bg-[#01254D] duration-500">
                  Learn More
                </button>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div
              onMouseEnter={showButton2}
              onMouseLeave={hideButton2}
              className="py-5 px-5 flex flex-col gap-5 items-center shadow-md w-[800px] rounded-lg m-2 border border-gray-300 pb-10"
            >
              <div className="mx-auto w-[25%] hover:rotate-[360deg] duration-1000">
                <img src="https://iili.io/JNZtLvV.png" alt="" />
              </div>
              <a href="" className="text-xl font-bold hover:text-[#1AD1A5]">
                Cloud Migration
              </a>

              <div className="space-y-2">
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
              </div>

              {learnMore2 && (
                <button className="uppercase bg-[#1AD1A5] text-white py-2 px-4 rounded-sm w-full hover:bg-[#01254D] duration-500">
                  Learn More
                </button>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div
              onMouseEnter={showButton3}
              onMouseLeave={hideButton3}
              className="py-5 px-5 flex flex-col gap-5 items-center shadow-md w-[800px] rounded-lg m-2 border border-gray-300 pb-10"
            >
              <div className="mx-auto w-[25%] hover:rotate-[360deg] duration-1000">
                <img src="https://iili.io/JNZttTP.png" alt="" />
              </div>
              <a href="" className="text-xl font-bold hover:text-[#1AD1A5]">
                Data Analytics
              </a>

              <div className="space-y-2">
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
                <p className="font-sans font-normal flex items-center gap-2 text-sm text-[#4E4E4E]">
                  <FontAwesomeIcon
                    className="text-[#1AD1A5] text-2xl font-bold"
                    icon={faCheck}
                  />
                  Lorem ipsum dolor sit amet
                </p>
              </div>

              {learnMore3 && (
                <button className="uppercase bg-[#1AD1A5] text-white py-2 px-4 rounded-sm w-full hover:bg-[#01254D] duration-500">
                  Learn More
                </button>
              )}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SlidesPerView;
