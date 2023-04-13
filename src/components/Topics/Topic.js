import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    console.log(topic)
    const { name, logo } = topic
    return (
        <div className='p-5'>
            <div className='bg-white shadow-lg'>
                <img src={logo} alt="" srcset="" className='block mx-auto bg-slate-300 ' />
                <div className='flex justify-between m-3 items-center' >
                    <h2 className='text-start text-2xl text-blue-500 mx-1'>{name}</h2>
                    <Link to={`../quiz/${topic.id}`} topic={topic}><button className='bg-green-400 p-2 text-white rounded-md mb-2 flex'>Start Practice <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;