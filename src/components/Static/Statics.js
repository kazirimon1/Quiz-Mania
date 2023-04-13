import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Statics = ({ d }) => {
    const { id, name, total } = d;
    return (
        <div>
            <BarChart width={730} height={250} data={d}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={name} />
                <YAxis />
                <Tooltip />
                <legend />
                <Bar dataKey={id} stroke={`#8884d8`} />
                <Bar dataKey={total} fill="#82ca9d" />

            </BarChart>
        </div>
    );
};

export default Statics;