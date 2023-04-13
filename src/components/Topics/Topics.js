import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';

const Topics = () => {
    const topics = useLoaderData();
    // console.log(topics.data);
    return (
        <div className='grid md:grid-cols-4 mt-48 px-24 gap-4'>

            {
                topics.data.map(topic => <Topic topic={topic}
                    key={topic.id}></Topic>)
            }
        </div>
    );
};

export default Topics;