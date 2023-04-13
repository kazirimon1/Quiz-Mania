import React from 'react';

const QuizAnswer = ({ ans, quizSolutionHandler }) => {
    return (
        <div className=' flex  gap-2 border border-lime-200 p-3 hover:bg-slate-400 ' >

            <input id="draft" className="peer/draft" type="radio" name="status" checked />
            <h4 onClick={() => quizSolutionHandler}>{ans}</h4>

        </div>
    );
};

export default QuizAnswer;