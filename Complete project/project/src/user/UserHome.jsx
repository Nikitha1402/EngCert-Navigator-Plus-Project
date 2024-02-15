import React from 'react';
import { Link } from 'react-router-dom';
import BgVideo from '../ideo/BgVideo';
import video from '../ideo/video.mp4';
import Quiz from './Quiz';

import './UserHome.css';

function UserHome() {
  return (
    <div>
      <div className="navbar">
      <h1 className='hed'>EduVerify Hub</h1>
        <button className="navbar-button"><Link to="/coursecard">Courses</Link></button>
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

      <div className='bgContainer'>
        <div className='overlay11'>
          <video src={video} autoPlay loop muted />
          <div className="video-overlay-text">
            <h2>Knowledge That Inspires, Courses That Transform.</h2>
          </div>

        </div>
      </div>
    </div>
  );
}

export default UserHome;
