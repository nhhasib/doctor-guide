import React from 'react';
import img from '../assets/images/Rectangle 34.png'
import bg from '../assets/images/Rectangle 41.png'
import imgProfile from '../assets/images/Ellipse 7.png'

const Feedback = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 px-16 top-1/2 items-center bg-[#6E27E0] bg-opacity-80 h-full w-full text-white">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <div className='flex gap-8 items-center w-4/5 mx-auto'>
                            <img src={imgProfile} alt="" />
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p className='font-bold uppercase my-4'>
                                TOM COOPPER
                                </p>
                                <p className='text-red-300'>
                                Managing Director Or Art
                                </p>
                            </div>
                            </div>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={img} className="w-full" />
  <div className="absolute flex justify-between transform -translate-y-1/2 px-16 top-1/2 items-center bg-[#6E27E0] bg-opacity-80 h-full w-full text-white">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <div className='flex gap-8 items-center w-4/5 mx-auto'>
                            <img src={imgProfile} alt="" />
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p className='font-bold uppercase my-4'>
                                TOM COOPPER
                                </p>
                                <p className='text-red-300'>
                                Managing Director Or Art
                                </p>
                            </div>
                            </div>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={img} className="w-full" />
  <div className="absolute flex justify-between transform -translate-y-1/2 px-16 top-1/2 items-center bg-[#6E27E0] bg-opacity-80 h-full w-full text-white">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <div className='flex gap-8 items-center w-4/5 mx-auto'>
                            <img src={imgProfile} alt="" />
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p className='font-bold uppercase my-4'>
                                TOM COOPPER
                                </p>
                                <p className='text-red-300'>
                                Managing Director Or Art
                                </p>
                            </div>
                            </div>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Feedback;