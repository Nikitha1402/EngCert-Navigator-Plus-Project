// QuizContainer.jsx (new file)
import React from 'react';
import QuizCard from './QuizCard'; // Import your QuizCard component
import './QuizContainer.css';

function QuizContainer() {
  return (
    <div className="quiz-container">
      <QuizCard />
    </div>
  );
}

export default QuizContainer;
