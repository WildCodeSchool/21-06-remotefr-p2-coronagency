import React from "react";
import QuizHeader from "./QuizHeader";
import QuizLanding from "./QuizLanding";
import QuizFooter from "./QuizFooter";
import './Quiz.css';

function Quiz() {
  return (
    <div className="bodyQuiz">
      <QuizHeader/>
      <QuizLanding/>
      <QuizFooter/>
    </div>
  );
}

export default Quiz;
