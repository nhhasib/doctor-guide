import React from 'react';
import img from '../assets/images/Rectangle 34.png'
import icon1 from '../assets/images/doctor.png'
import icon2 from '../assets/images/bed.png'
import icon3 from '../assets/images/trophy.png'
import icon4 from '../assets/images/smile.png'

const Banner = () => {
    return (
        <div className='my-4 relative'>
            <img src={img} alt="" />
            <div className='absolute top-0 w-full h-full bg-[#6E27E0] bg-opacity-40 flex justify-center items-center gap-20 text-center text-white'>
                <div className='justify-center flex flex-col items-center'>
                    <img className='w-24 h-24' src={icon1} alt="" />
                    <h1 className='font-bold text-2xl my-4 '>50</h1>
                    
                    <h1 className='font-bold text-2xl border-t-2'>Medical Experts</h1>
        </div>
                <div className='justify-center flex flex-col items-center'>
                    <img className='w-24 h-24' src={icon2} alt="" />
                    <h1 className='font-bold text-2xl my-4'>50</h1>
                   
                    <h1 className='font-bold text-2xl border-t-2'>Medical Experts</h1>
        </div>
                <div className='justify-center flex flex-col items-center'>
                    <img className='w-24 h-24' src={icon3} alt="" />
                    <h1 className='font-bold text-2xl my-4'>50</h1>
    
                    <h1 className='font-bold text-2xl border-t-2'>Medical Experts</h1>
        </div>
                <div className='justify-center flex flex-col items-center'>
                    <img className='w-24 h-24' src={icon4} alt="" />
                    <h1 className='font-bold text-2xl my-4'>50</h1>
                   
                    <h1 className='font-bold text-2xl border-t-2'>Medical Experts</h1>
        </div>
            </div>
        </div>
    );
};

export default Banner;