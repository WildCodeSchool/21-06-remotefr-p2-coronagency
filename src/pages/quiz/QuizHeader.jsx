import React from 'react'

const QuizHeader = () => {
    return (
        <header>
            <div className="banner-container">
                <h1 className="quizTitle"><a href="/quizz">Corona Quiz</a></h1>
            </div>
            <div className="return">
                <button className="btnHome">
                    <a className="return_a" href="/">Home</a>
                </button>
            </div>
        </header>
    )
}

export default QuizHeader
