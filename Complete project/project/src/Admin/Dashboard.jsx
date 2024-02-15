import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="dashboard-stats">
        <div className="stat-card users">
          <h2>Total Users</h2>
          <p>1,200</p>
        </div>
        <div className="stat-card courses">
          <h2>Total Courses</h2>
          <p>40</p>
        </div>
        <div className="stat-card categories">
          <h2>Course Categories</h2>
          <ul>
            <li>Language Learning: 15</li>
            <li>Business Skills: 10</li>
            <li>Technology: 8</li>
            <li>Health & Wellness: 7</li>
          </ul>
        </div>
        <div className="stat-card requests">
          <h2>Enrollment Requests</h2>
          <p>50</p>
        </div>
      </div>
      <div className="dashboard-recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          <li>User John Doe completed the "Advanced Grammar" course.</li>
          <li>New course "Business English Essentials" added to the platform.</li>
          <li>Enrollment request received for the "IELTS Preparation" course.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
