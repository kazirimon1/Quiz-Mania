import React from 'react';
import photo from '../../picture/photo.png'


const Home = () => {
    return (
        <div>
            <div>
                <img src={photo} alt="" srcset="" className='w-full relative' />
                <p className='bg-yellow-900 text-slate-200 md:w-2/4  absolute md:top-96 border border-emerald-300 rounded-xl ml-4'>The term quiz is a capacious one: it can refer to a single game consisting of just a few questions, or it can refer to a large-scale event involving dozens or hundreds of people. Quizzes may be held on a variety of subjects, or they may be on just one. Quiz formats also vary widely, ranging from weekly quizzes at a local pub, with participants competing for glory (and perhaps a few free pints), to widely broadcast television game shows such as Who Wants to Be a Millionaire, with enormous cash prizes on offer.</p>
            </div>

        </div>
    );
};

export default Home;