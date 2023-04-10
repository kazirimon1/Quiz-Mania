import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const topics = useLoaderData()
    return (
        <div>
            <h2 className='bg-white'>This is topic {topics.length}</h2>
        </div>
    );
};

export default Topics;