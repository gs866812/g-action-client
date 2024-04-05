

const Company = () => {
    return (
        <div className="bg-[#01254D] px-4">
            <div className=" lg:py-24 py-5 flex flex-col lg:flex-row gap-7 lg:gap-14 flex-col-reverse mx-auto max-w-screen-2xl">
            <div className=' lg:w-[50%] relative'>
                <img src='https://iili.io/JNSK2pe.jpg' alt="" />
                <div className="absolute bg-[#1AD1A5] rounded-md p-5 text-white flex items-center gap-2 right-0 bottom-0 lg:-right-8 lg:bottom-1/4">
                    <h2 className="text-5xl lg:text-7xl font-bold">10+</h2>
                    <p className="text-xl font-bold uppercase">Years <br /> of experience</p>
                </div>
                
            </div>

            <div className='lg:w-[46%] flex flex-col lg:gap-7 gap-5 items-start'>
                <h4 className='text-[#1AD1A5] text-2xl font-semibold'>FEW WORDS ABOUT US</h4>
                <h2 className='text-2xl lg:text-[52px] font-bold lg:w-[65%] lg:leading-[60px] text-white'>WE ARE LEADERS IN IT SOLUTIONS</h2>

                <div className='flex gap-3'>
                    <hr className='border-[3px] border-[#1AD1A5] w-[60px] rounded-xl' /> 
                    <hr className='border-[3px] border-[#1AD1A5] w-[5px] rounded-xl' />
                </div>

                <p className='font-sans font-normal text-[#4E4E4E] leading-[30px] text-white'>
                Integer ac lacus molestie, semper erat at, aliquam leo. Sed bibendum vitae orci nec viverra. In lacus odio, ultrices et tincidunt ut, pellentesque quis magna. Donec tempus ipsum at vestibulum dapibus. In dapibus eros ut sollicitudin fermentum.
                </p>

                {/* <button className="border border-white py-3 px-7 text-white rounded-md font-bold hover:bg-white hover:text-[#0C0C0C] transition-[background-color] before:bg-[#0C0C0C] before:transition-transform before:translate-y-5 hover:duration-1000">VIEW MORE</button> */}

                <button className="custom-button">VIEW MORE</button>

            </div>
        </div>
        </div>
    );
};

export default Company;