import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const About = () => {
    return (
        <div className='px-4 py-2 flex flex-col lg:flex-row gap-7 lg:gap-14 flex-col-reverse text-[#0C0C0C] mb-12 justify-between mx-auto max-w-screen-2xl'>
            <div className=' lg:w-[50%] relative'>
                <img src='https://iili.io/JN0DzSp.jpg' alt="" />
                <img src='https://iili.io/JN0DxlR.jpg' alt="" className='lg:absolute right-0 top-40 border-t-[20px] lg:border-l-[20px] border-white' />
            </div>

            <div className='lg:w-[46%] flex flex-col lg:gap-10 gap-5'>
                <h4 className='text-[#1AD1A5] text-2xl font-semibold'>FEW WORDS ABOUT US</h4>
                <h2 className='text-2xl lg:text-[52px] font-bold lg:w-[65%] lg:leading-[60px]'>WE ARE LEADERS IN IT SOLUTIONS</h2>

                <div className='flex gap-3'>
                    <hr className='border-[3px] border-[#1AD1A5] w-[60px] rounded-xl' /> 
                    <hr className='border-[3px] border-[#1AD1A5] w-[5px] rounded-xl' />
                </div>

                <p className='font-sans font-normal text-[#4E4E4E] leading-[30px]'>
                Aliquam a diam gravida, pretium justo non, facilisis eros. Integer posuere semper condimentum. Praesent tortor dui, auctor a condimentum vitae, aliquam at quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat lacus a sapien pretium, sit amet finibus ex.
                </p>

                <div className='flex flex-col lg:gap-5 gap-3 lg:mt-7 mt-4'>
                    <div className='flex flex-col lg:flex-row lg:gap-5 gap-3 text-[18px]'>
                        <p className='text-[#0C0C0C] font-bold flex items-center gap-3'>
                            <FontAwesomeIcon className='text-[#1AD1A5] text-2xl font-bold' icon={faCheck} /> 
                            Quisque metus felis in dictum
                            </p>
                        <p className='text-[#0C0C0C] font-bold flex items-center gap-3'>
                        <FontAwesomeIcon className='text-[#1AD1A5] text-2xl font-bold' icon={faCheck} />
                            Sed ac ligula nec felis modo</p>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:gap-5 gap-3 text-[18px]'>
                    <p className='text-[#0C0C0C] font-bold flex items-center gap-3'>
                            <FontAwesomeIcon className='text-[#1AD1A5] text-2xl font-bold' icon={faCheck} /> 
                            Quisque metus felis in dictum
                            </p>
                        <p className='text-[#0C0C0C] font-bold flex items-center gap-3'>
                        <FontAwesomeIcon className='text-[#1AD1A5] text-2xl font-bold' icon={faCheck} />
                            Sed ac ligula nec felis modo</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default About;