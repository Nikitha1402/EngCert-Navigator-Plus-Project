// ResultsDisplay.jsx

import React from 'react';
import './ResultsDisplay.css';

const ResultsDisplay = () => {
  // Dummy data, replace with actual data
  const results = [
    { category: 'Mathematics', score: 80 },
    { category: 'Science', score: 75 },
    // Add more result categories as needed
  ];

  return (
    <div className="results-container animated fadeIn">
      <h2 className="results-header">My Results</h2>
      <ul className="results-list">
        {results.map((result, index) => (
          <li key={index} className="result-item">
            <strong>{result.category}:</strong> {result.score}%
          </li>
        ))}
      </ul>
      <div className="result-details">
        <div className="result-summary">
          <p className="summary-text">
            Congratulations on completing the quiz! Below is a summary of your performance.
          </p>
          <p className="summary-text">
            You can view detailed results for each category in the list above.
          </p>
        </div>
        <div className="result-actions">
          <button className="share-button">Share Results</button>
          <button className="retry-button">Retry Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
