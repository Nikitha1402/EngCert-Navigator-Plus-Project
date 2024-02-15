import React from 'react';
import './Sidebar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const Sidebar = ({ setActiveSection, activeSection }) => {
  const sections = [
    
   
    {
      title: '',
      path: '/UserHome',
      cName: 'nav-text'
    },
    /*{
      title: 'Profile',
      path: '/cal',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    },*/
    /*{
      title: 'Attendence Management',
      path: '/atten',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    },*/
    {
      title: 'Quiz_Categories',
      path: '/time',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Quiz_Results',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text'
    },
    {
      title: 'Certifications',
      path: '/feedback',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text'
    },
  ];

  return (
    <div className="sidebar">
      <h1>Quiz_Portal</h1>
      {sections.map((section, index) => (
        <button 
          key={index}
          className={activeSection === index ? 'active' : ''}
          onClick={() => setActiveSection(index)}
        >
          {section.icon} {/* Include the icon */}
          {section.title}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
