
import React, { useState} from 'react';
import './QuestionContaint.scss';

function QuestionContaint() {
    const questions = [
		{
			questionText: 'Que veut dire «Coronavirus ?',
			answerOptions: [
				{ answerText: 'Virus à couronne.', isCorrect: true },
				{ answerText: "Virus à houblon.", isCorrect: false },
				{ answerText: "Virus coronaire.", isCorrect: false },
				{ answerText: "Virus de la ville de Corona.", isCorrect: false },
			],
		},
		{
			questionText: "Pourquoi appelle-t-on cette maladie «Covid-19» ?",
			answerOptions: [
				{ answerText: "Car c'est la 19ème versions.", isCorrect: false },
				{ answerText: "Car il y a eu 19 premiers cas en même temps.", isCorrect: false },
				{ answerText: "Car elle a été découverte en 2019.", isCorrect: true },
				{ answerText: "Car 19 est le nombre préféré de celui qui a découvert cette maladie.", isCorrect: false },
			],
		},
		{
			questionText: "Quels sont les gestes barrières ? (plusieurs réponses)",
			answerOptions: [
				{ answerText: "Se laver régulièrement les mains ou utiliser une solution hydro-alcoolique", isCorrect: true },
				{ answerText: "Tousser ou éternuer sur un humain", isCorrect: false},
				{ answerText: "Saluer en serrant la main ou en s'embrassant", isCorrect: false },
				
			],
		}
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Votre score est de {score} sur {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
   
}

export default QuestionContaint
