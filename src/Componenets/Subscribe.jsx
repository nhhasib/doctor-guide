import img from '../assets/images/kisspng-physician-uniform-scrubs-white-coat-medicine-foreign-doctor-material-5a68c8b33322b6 1.png'
import Button from './Button';

const Subscribe = () => {
    return (
        <div className='flex py-48 my-44 text-white items-center relative bg-[#0089BA] w-11/12 mx-auto rounded-xl'>
            <div className=''>
            <img className='absolute -top-36 left-16' src={img} alt="" />
            </div>
            <div className='absolute right-24'>
                <h1 className='font-bold text-2xl'>Subscribe Now</h1>
                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                <input className='px-10 py-3 rounded' type="text" placeholder='Your email here' />
                <Button text={'submit'}></Button>
            </div>
            
        </div>
    );
};

export default Subscribe;