import React from 'react';
import QuizAnswer from './QuizAnswer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({ quiz }) => {
    const { question, correctAnswer } = quiz
    const quizAnswer = quiz.options
    const showCorrectAnswer = () => {
        toast.success(`${correctAnswer}`, { autoClose: 3000 })
    }

    const quizSolutionHandler = () => {
        console.log("clicked")
    }

    return (
        <div className='w-3/5 mx-auto border shadow-2xl m-4 p-5'>
            <div className='text-end' >
                <button className=' text-blue-400 ' onClick={showCorrectAnswer} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <ToastContainer />
                </button>
            </div>
            <h4> Quiz Question: {question}</h4>
            <div className='grid md:grid-cols-2 w-2/4 mx-auto mt-2 gap-1'>
                {
                    quizAnswer.map(ans => <QuizAnswer ans={ans} quizSolutionHandler={quizSolutionHandler()}></QuizAnswer>)
                }
            </div>

        </div>
    );
};

export default QuizQuestion;