import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-black flex justify-between items-center '>
            <div className='m-4'><h2 className='text-3xl text-white'>Quiz Mania</h2></div>
            <div>
                <ul className='text-white flex justify-evenly gap-8 mr-12 '>
                    <li className='hover:text-yellow-300'><Link to='/'>Home</Link></li>
                    <li className='hover:text-yellow-300'><Link to='topics'>Topics</Link></li>
                    <li className='hover:text-yellow-300'><Link to='statics'>Statics</Link></li>
                    <li className='hover:text-yellow-300'><Link to='blog'>Blog</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;