import React from 'react';
import logo from '../assets/images/logo.png'
import logotext from '../assets/images/Doctor Guide.png'
import icon1 from '../assets/images/Frame 144.png'
import icon2 from '../assets/images/Frame 145.png'
import icon3 from '../assets/images/Frame 146.png'
import icon4 from '../assets/images/Vector.png'
import icon5 from '../assets/images/Vector (1).png'
import icon6 from '../assets/images/Vector (2).png'
import Button from './Button';

const Footer = () => {
    return (
        <div className='bg-[#273240]'>
            <div className='grid lg:grid-cols-4 py-8 px-10 gap-8 border-b-2'>
            <div>
                <div className='flex items-center gap-4'>
                <img src={logo} alt="" />
                <img className='h-6' src={logotext} alt="" />
                </div>
                <p className='my-8 text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut cras velit senectus id tellus aliquam enim felis. Sed commodo cursus tellus sapien, viverra imperdiet morbi dignissim. Consequat in metus arcu eget.   
                </p>
                <div className='flex gap-6'>
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                </div>
            </div>
            <div className='text-white'>
                <h1 className='font-bold text-2xl mb-6'>Our Services</h1>
                <p className='border-b-2 w-1/2 my-2 pb-2'>
                Bills & Insurance
                </p>
                <p className='border-b-2 w-1/2 my-2 pb-2'>
                Cancer Screening
                </p>
                <p className='border-b-2 w-1/2 my-2 pb-2'>
                Cardiac Surgery
                </p>
                <p className='border-b-2 w-1/2 my-2 pb-2'>
                Neurology
                </p>
                <p className='border-b-2 w-1/2 my-2 pb-2'>
                Covid-19 Vaccine
                </p>
            </div>
            <div className='text-white'>
                <h1 className='font-bold text-2xl mb-6'>Contact Us</h1>
                <div>
                    <div className='flex items-center gap-6'>
                        <img src={icon4} alt="" />
                        <p>1234 Uttara Khal Pahr, Image Osman Center,
Sonargao, Janapath,</p>
                    </div>
                    <div className='flex items-center gap-6 my-4'>
                        <img src={icon5} alt="" />
                        <p>+09876543211</p>
                    </div>
                    <div className='flex items-center gap-6'>
                        <img src={icon6} alt="" />
                        <p>doctorguide@example.com</p>
                    </div>
                </div>
            </div>
            <div className='text-white'>
                <h1 className='font-bold text-2xl mb-6'>
                Doctors Schedule
                </h1>
                <p className='my-6'>
                At vero eos et accusam et justou dolores et ea rebum tet clita kasd gubergren no sea takimata.
                </p>
                <Button text={'View Schedule'}></Button>
            </div>
            </div>
            <div className='flex gap-10 justify-between w-4/5 mx-auto text-white py-6'>
                <p>Copyright © 2022. All Rights Reserved. Made with  by Solutya.</p>
                <div className='flex flex-col lg:flex-row gap-8'>
                    <p>Latest news</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    </div>
                
            </div>
        </div>
    );
};

export default Footer;