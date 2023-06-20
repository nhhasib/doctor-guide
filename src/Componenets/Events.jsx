import React from 'react';
import img1 from '../assets/images/Rectangle 42.png'
import img2 from '../assets/images/Rectangle 42 (2).png'
import Button from './Button';
import { FaBeer, FaCalendar, FaCalendarAlt, FaClock, FaLocationArrow } from 'react-icons/fa';

const Events = () => {
    return (
        <div className='my-10 w-11/12 mx-auto'>
            <h1 className='font-bold text-4xl text-center'>Upcoming Events</h1>
            <p className='text-center my-6 w-3/5 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='border-4 flex flex-col lg:flex-row items-center gap-8'>
                <img className='w-[551px]' src={img1} alt="" />
                <div className='px-8'>
                    <h1 className='font-bold text-2xl uppercase'>How to lead a good healthy life</h1>
                    <div className='flex gap-4 items-center my-4'>
                        <FaCalendarAlt />
                        <p>15 Oct, 2019</p>
                        <FaClock></FaClock>
                        <p>8:00 AM - 5:00 PM</p>
                        <FaLocationArrow></FaLocationArrow>
                        <p>Uttara, TX 70240</p>
                    </div>

                    <p className='my-6'>Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.</p>
                    <div className='flex gap-6'>
                    <Button text={'book now'}></Button>
                    <button className='btn btn-outline'>10 Available</button>
                    </div>
                </div>

            </div>
            <div className='border-4 flex flex-col lg:flex-row items-center gap-8 my-6'>
                <div className='px-8'>
                    <h1 className='font-bold text-2xl uppercase'>How to lead a good healthy life</h1>
                    <div className='flex gap-4 items-center my-4'>
                        <FaCalendarAlt />
                        <p>15 Oct, 2019</p>
                        <FaClock></FaClock>
                        <p>8:00 AM - 5:00 PM</p>
                        <FaLocationArrow></FaLocationArrow>
                        <p>Uttara, TX 70240</p>
                    </div>

                    <p className='my-6'>Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.</p>
                    <div className='flex gap-6'>
                    <Button text={'book now'}></Button>
                    <button className='btn btn-outline'>10 Available</button>
                    </div>
                </div>
                <img className='w-[551px]' src={img2} alt="" />

            </div>
        </div>
    );
};

export default Events;