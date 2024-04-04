import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SliderThree = () => {
    return (
        <div 
        className="flex flex-col items-center gap-5 text-white px-6 lg:py-[100px] py-10 bg-blend-darken bg-[url('https://iili.io/JwsGJWJ.jpg')] bg-no-repeat bg-top bg-cover bg-[#00000080]">
            <h2 className="lg:text-7xl text-4xl uppercase font-bold lg:w-[75%] text-center lg:leading-[80px] leading-[50px]">
                Excellent IT services for your business
            </h2>
            
            <p className="lg:text-2xl text-[18px] text-center lg:w-1/2">
                Elevate your technological infrastructure with our comprehensive suite of IT services, designed to optimize efficiency and drive success in your business operations.
            </p>

            <button className="text-xl font-semibold bg-[#1AD1A5] py-3 px-7 rounded-lg hover:bg-white hover:text-[#0C0C0C]  hover:bg-to-b from-[#1AD1A5] to-white hover:duration-1000 hover:translate-y-1 lg:mt-5 flex items-center gap-3">
                Explore More <FontAwesomeIcon icon={faCircleRight} />
                </button>
        </div>
    );
};

export default SliderThree;