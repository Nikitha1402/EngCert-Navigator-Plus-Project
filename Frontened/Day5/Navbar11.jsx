// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar11.css';

function Navbar() {
  return (
    <div className="navbar11">
      <h1 className='hed'>EduVerify Hub</h1>
      <button className="navbar-button"><Link to="/UserHome">Home</Link></button>

      <button className="navbar-button"><Link to="/coursecard">Courses</Link></button>
      <button className="navbar-button"><Link to="/quiz">Quiz</Link></button>
      <button className="navbar-button"><Link to="/fees">Enquiry</Link></button>

      <div className="dropdown">
        <button className="dropbtn">Settings
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <button className="dropdown-button"><Link to="/contactus">Contact us</Link></button>
          <button className="dropdown-button"><Link to="/">Log-out</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
