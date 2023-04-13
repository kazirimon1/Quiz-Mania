import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Statics from './Statics';


const Static = () => {
    const data = useLoaderData();
    const allData = data.data

    return (
        <div>
            {
                allData.map(d =>
                    <Statics
                        d={d} key={d.id}
                    ></Statics>)
            }
        </div>
    );
};

export default Static;