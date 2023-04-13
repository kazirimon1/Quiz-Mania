import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from './QuizQuestion';

const Quiz = () => {

    const quizs = useLoaderData();
    const topicName = quizs.data.name
    const allQuizs = quizs.data.questions;
    // console.log(allQuizs)
    return (
        <div>
            <h1 className='text-3xl text-yellow-500 mt-4 font-bold '>This is quiz of {topicName}</h1>
            {
                allQuizs.map(quiz => <QuizQuestion
                    quiz={quiz}
                    key={quiz.id}
                ></QuizQuestion>)
            }
        </div>
    );
};

export default Quiz;