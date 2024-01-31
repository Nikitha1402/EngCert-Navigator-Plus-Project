// QuizApp.jsx
import React, { useState } from 'react';
import './QuizApp.css';
import Sidebar from './Sidebar';
import Subcategories from './Subcategories';

const QuizApp = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="app-container">
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      <Subcategories activeSection={activeSection} />
    </div>
  );
};

export default QuizApp;
