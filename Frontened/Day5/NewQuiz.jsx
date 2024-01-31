import React, { useState } from 'react';
import './NewQuiz.css'; // Update the CSS file import accordingly
import CertificateCard from './CertificateCard';
import Sidebar from './Sidebar';

const NewQuiz = () => {
  // ... (Your existing code)
  const questions = [
    {
      id: 1,
      question: 'What is the capital of the United Kingdom?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correctAnswer: 'London',
    },
    {
      id: 2,
      question: 'Which river runs through London?',
      options: ['Thames', 'Seine', 'Danube', 'Tiber'],
      correctAnswer: 'Thames',
    },
    {
      id: 3,
      question: 'Who is the current monarch of the United Kingdom?',
      options: ['Queen Elizabeth II', 'King Charles III', 'Prince William', 'Queen Victoria'],
      correctAnswer: 'Queen Elizabeth II',
    },
    // Add more questions as needed
  ];

  // State to manage quiz progress
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Function to handle user selection
  const handleOptionSelect = (selectedOption) => {
    setUserAnswers([...userAnswers, selectedOption]);

    // Move to the next question or show results if it's the last question
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  // Function to restart the quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  // Display quiz results
  if (showResults) {
    const correctAnswers = userAnswers.filter(
      (answer, index) => answer === questions[index].correctAnswer
    ).length;

    const passPercentage = (correctAnswers / questions.length) * 100;
    const passThreshold = 50;
    }

  return (
    <div className="quiz-container">
      <Sidebar setActiveSection={() => {}} activeSection={1} />
      <div className="quiz">
        {currentQuestionData ? (
          <>
            <h2>{currentQuestionData.question}</h2>
            <div className="options">
              {currentQuestionData.options.map((option) => (
                <button key={option} onClick={() => handleOptionSelect(option)}>
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <h2>No more questions. Quiz completed!</h2>
        )}
      </div>
      {showResults && (
        <div className="quiz-results">
          <h2>Quiz Results</h2>
          {/* ... Your existing result display ... */}
          {passPercentage >= passThreshold ? (
            <div>
              <p>Congratulations! You have passed the quiz and earned a certification.</p>
              <CertificateCard />
            </div>
          ) : (
            <p>Unfortunately, you did not pass the quiz. Better luck next time!</p>
          )}
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default NewQuiz;
