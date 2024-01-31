// AdminPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/course-details">Course Details</Link></li>
          <li><Link to="/admin/enquiry">Enquiry</Link></li>
          <li><Link to="/admin/logout">Logout</Link></li>
        </ul>
      </div>

      <div className="content">
        {/* Your admin page content goes here */}
        <h1>Welcome to the Admin Panel</h1>
        {/* Add other admin page content */}
      </div>
    </div>
  );
};

export default AdminPage;
