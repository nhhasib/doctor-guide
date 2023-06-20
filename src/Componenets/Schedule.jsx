import React from 'react';
import bg from '../assets/images/Rectangle 28 (1).png';
import img from '../assets/images/5a3a791648b006 1.png'

const schedule = [
    {
        "time":'08:00',
        "title": 'General Practitioner',
        'name':'Dr. Robbert Algazali'
    },
    {
        "time":'06:00',
        "title": 'Dentist Specialist',
        'name':'Dr. Robbert Algazali'
    },
    {
        "time":'09:00',
        "title": 'General Practitioner',
        'name':'Dr. Robbert Algazali'
    },
    {
        "time":'10:00',
        "title": 'General Practitioner',
        'name':'Dr. Robbert Algazali'
    },
    {
        "time":'10:00',
        "title": 'General Practitioner',
        'name':'Dr. Robbert Algazali'
    },
    {
        "time":'10:00',
        "title": 'General Practitioner',
        'name':'Dr. Robbert Algazali'
    }
]

const Schedule = () => {
    return (
        <div className='grid grid-cols-2 w-4/5 mx-auto my-10'>
            <div>
                <h1>Doctor’s Schedule Today</h1>
                {
                    schedule.map(item => {
                        <div className='flex'>
                            <h1>{item.time}</h1>
                            <div className='flex'>
                                <h2>{item.title}</h2>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    })
}
            </div>
            <div className='relative flex'>
                <img className='absolute top-32 right-28 h-[600px]' src={bg} alt="" />
                <img className='absolute top-0' src={img} alt="" />
            </div>
        </div>
    );
};

export default Schedule;