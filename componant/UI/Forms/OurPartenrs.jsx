import React from 'react'
// import { Marquee } from "@/components/magicui/marquee";
import Marquee from "react-fast-marquee";

function OurPartenrs() {
    const partners = [
        { name: 'Partner 1', logo: '/ershadpartners/1.png' },
        { name: 'Partner 2', logo: '/ershadpartners/2.png' },
        { name: 'Partner 3', logo: '/ershadpartners/3.png' },
        { name: 'Partner 4', logo: '/ershadpartners/4.png' },
        { name: 'Partner 1', logo: '/ershadpartners/5.png' },
        { name: 'Partner 2', logo: '/ershadpartners/6.png' },
        { name: 'Partner 3', logo: '/ershadpartners/7.png' },
        { name: 'Partner 4', logo: '/ershadpartners/8.png' },
        { name: 'Partner 1', logo: '/ershadpartners/9.png' },
        { name: 'Partner 2', logo: '/ershadpartners/10.png' },

    ];
    return (

        <div className='flex-col flex items-center justify-center w-full mt-10 mb-10'>
            <div className='bg-#000000 justify-center items-center  w-full flex bg-bgButtonNavbar py-1 my-2 rounded-lg'>
                <h1 className='text-black text-[22px]'>شركاء النجاح</h1>
            </div>
            <Marquee speed={50} gradient={false} pauseOnHover={true} reverse={true} className="w-full h-50 flex items-center justify-center ">
                {partners?.map((item, index) => {
                    return (
                        <span className="ml-4 text-lg font-semibold">
                            <img src={item?.logo} alt={item?.name} className="h-[150px] w-[150px] object-contain mx-2" /></span>
                    );
                })}


            </Marquee>



        </div>
    )
}

export default OurPartenrs