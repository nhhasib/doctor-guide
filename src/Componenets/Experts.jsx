import React from 'react';
import img1 from '../assets/images/Rectangle 13.png'
import img2 from '../assets/images/Rectangle 108.png'
import Button from './Button';

const Experts = () => {
    return (
        <div className='my-8'>
            <h1 className='font-bold text-4xl text-center'>Our Medical Experts
            </h1>
            <p className='lg:w-1/2 w-11/12 my-4 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-4/5 lg:w-11/12 mx-auto'>
            <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Dr. Emrul Kayes</h2>
    <p>MBBS, FCFS, BCS, BSCBS</p>
    <div className="card-actions justify-end grid grid-cols-2 items-center">
                            <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                            <Button text={'Book now'}></Button>
    </div>
  </div>
</div>
            <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={img2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Dr. Emrul Kayes</h2>
    <p>MBBS, FCFS, BCS, BSCBS</p>
    <div className="card-actions justify-end grid grid-cols-2 items-center">
                            <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                            <Button text={'Book now'}></Button>
    </div>
  </div>
</div>
            <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Dr. Emrul Kayes</h2>
    <p>MBBS, FCFS, BCS, BSCBS</p>
                        <div className="card-actions justify-end grid grid-cols-2 items-center">
                            <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                            <Button text={'Book now'}></Button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Experts;