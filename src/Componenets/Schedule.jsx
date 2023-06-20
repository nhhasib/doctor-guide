import React from 'react';
import bg from '../assets/images/Rectangle 28 (1).png';
import img from '../assets/images/5a3a791648b006 1.png'

const schedule = [
    {"id":1,
        "time":'08:00',
        "title": 'General Practitioner',
        'name':'Dr. Robbert Algazali'
    },
    {"id":2,
        "time":'06:00',
        "title": 'Dentist Specialist',
        'name':'Dr. Robbert Algazali'
    },
    {"id":3,
        "time":'09:00',
        "title": 'General Practitioner',
        'name':'Dr. Robbert Algazali'
    },
    {"id":4,
        "time":'10:00',
        "title": 'General Practitioner',
        'name':'Dr. Robbert Algazali'
    },
    {"id":5,
        "time":'10:00',
        "title": 'General Practitioner',
        'name':'Dr. Robbert Algazali'
    },
    {"id":6,
        "time":'10:00',
        "title": 'General Practitioner',
        'name':'Dr. Robbert Algazali'
    }
]

const Schedule = () => {
    return (
        <div className='grid grid-cols-2 w-4/5 mx-auto items-center mt-28'>
            <div>
                <h1 className='font-bold text-4xl'>Doctor’s Schedule Today</h1>
                <>
                {
                    schedule.map(item => 
                        <div key={item.id} className='flex items-center gap-6 my-4 border-b-2 w-1/2'>
                            <h1 className='text-red-600 font-bold my-4'>{item.time}</h1>
                            <div className='my-4'>
                                <h2 className='font-bold'>{item.title}</h2>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    )
}
                </>
            </div>
            <div className='relative flex'>
                <img className='absolute -top-[250px] right-28 h-[600px]' src={bg} alt="" />
                <img className='absolute -top-[380px]' src={img} alt="" />
            </div>
        </div>
    );
};

export default Schedule;