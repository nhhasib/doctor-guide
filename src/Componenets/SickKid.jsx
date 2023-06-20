import React from 'react';
import img from '../assets/images/kisspng-physician-nursing-medicine-health-care-foreign-doctor-5a6b98c3c69386.png'
import bg from '../assets/images/Rectangle 46.png'
import medical from '../assets/images/medical.png'

const SickKid = () => {
    return (
        <div className='w-4/5 flex mx-auto items-center mt-[600px] gap-12'>
            <div className='items-center relative'>
                <img className='' src={bg} alt="" />
                <img className='w-[436px] h-[614px] absolute -top-48 left-20' src={img} alt="" />
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Sick Kid? How to Deal with a <br />Child’s Fever: 4 Steps</h1>
                <div className='flex gap-4 my-4 items-center'>
                    <img src={medical} alt="" />
                    <h1>Cras sit sed nec a nunc</h1>
                </div>
                <div className='flex gap-4 my-4 items-center'>
                    <img src={medical} alt="" />
                    <h1>Tempor mauris mauris in</h1>
                </div>
                <div className='flex gap-4 my-4 items-center'>
                    <img src={medical} alt="" />
                    <h1>Nibh turpis praesent pretium</h1>
                </div>
                <div className='flex gap-4 my-4 items-center'>
                    <img src={medical} alt="" />
                    <h1>Cras sit sed nec a nunc</h1>
                </div>
            </div>
        </div>
    );
};

export default SickKid;