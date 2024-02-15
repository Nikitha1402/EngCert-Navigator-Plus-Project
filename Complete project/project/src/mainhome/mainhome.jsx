import React from 'react';
import { Link } from 'react-router-dom';
import video from '../ideo/video.mp4';


import './mainhome.css';

function MainHome() {
  return (
    <div>
      <video autoPlay muted loop id="myVideo">
        <source src="rain.mp4" type="video/mp4" />
      </video>
      <div className="navbar">
      <h1 className='hed'>EduVerify Hub</h1>

        <button className="navbar-button"><Link to="/AdminLogin">Admin Login</Link></button>
        <button className="navbar-button"><Link to="/UserLogin">User Login</Link></button>
        <button className="navbar-button"><Link to="/About">About</Link></button>
        <button className="navbar-button"><Link to="/contactus">Contact_Us</Link></button>
        
</div>
      <div className='bgContainer'>
        <div className='overlay11'>
          <video src={video} autoPlay loop muted />
          <div className="video-overlay-text">
            <h2>Better Education For Better Future</h2>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default MainHome;
