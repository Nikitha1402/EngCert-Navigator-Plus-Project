// Quiz.jsx

import React, { useState } from 'react';
import './Quiz.css';
import ResultsDisplay from './ResultsDisplay';
import Sidebar from './Sidebar';
import CertificateCard from './CertificateCard';
import QuizCard from './QuizCard';
import Navbar from './Navbar11';
const Quiz = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
<div>
<Navbar/>
    <div className="quiz-container">
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      <div className="content-container">
        {activeSection === 1 && <QuizCard />}
        {activeSection === 2 && <ResultsDisplay />}
        {activeSection === 3 && <CertificateCard />}
      </div>
    </div>
    </div>
  );
};

export default Quiz;
