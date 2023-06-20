import React from 'react';
import img1 from '../assets/images/Rectangle 26 (1).png'
import img2 from '../assets/images/Rectangle 26 (2).png'
import img3 from '../assets/images/Rectangle 26 (3).png'
import img4 from '../assets/images/Rectangle 26 (4).png'
import img5 from '../assets/images/Rectangle 26 (5).png'
import img6 from '../assets/images/Rectangle 26 (6).png'
import img7 from '../assets/images/Rectangle 26 (7).png'
import img8 from '../assets/images/Rectangle 26.png'
import Button from './Button';

const MedicalCare = () => {
    return (
        <div className='w-11/12 mx-auto text-center my-20'>
            <h1 className='font-bold text-4xl'>Our Medical Care</h1>
            <p className='py-2'>Services We Provide</p>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-white text-center mb-6'>
                <div>
                    <img src={img1} alt="" />
                    <p className='bg-[#6E27E0] py-2'>Orthopedic Clinic</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <p className='bg-[#6E27E0] py-2'>Orthopedic Clinic</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <p className='bg-[#6E27E0] py-2'>Orthopedic Clinic</p>
                </div>
                <div>
                    <img src={img4} alt="" />
                    <p className='bg-[#6E27E0] py-2'>Orthopedic Clinic</p>
                </div>
                <div>
                    <img src={img5} alt="" />
                    <p className='bg-[#6E27E0] py-2'>Orthopedic Clinic</p>
                </div>
                <div>
                    <img src={img6} alt="" />
                    <p className='bg-[#6E27E0] py-2'>Orthopedic Clinic</p>
                </div>
                <div>
                    <img src={img7} alt="" />
                    <p className='bg-[#6E27E0] py-2'>Orthopedic Clinic</p>
                </div>
                <div>
                    <img src={img8} alt="" />
                    <p className='bg-[#6E27E0] py-2'>Orthopedic Clinic</p>
                </div>
            </div>
            <Button text={'LOAD MORE DEPARTMENTS'}></Button>
        </div>
    );
};

export default MedicalCare;