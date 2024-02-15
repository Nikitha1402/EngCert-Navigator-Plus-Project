import React, { useState } from 'react';
import './Regis.css';
import Navbar from './Navbar11';
import axios from 'axios'; // Import axios for making HTTP requests

const CourseRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    selectedCourse: '',
    gender: '',
    birthDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // Get the bearer token from localStorage

    try {
      const response = await axios.post(
        'http://localhost:8080/registration/submit',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the bearer token in the request headers
          },
        }
      );

      console.log('Course Registration submitted:', response.data);
    } catch (error) {
      console.error('Error submitting course registration:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <div className="registration-form">
          <form onSubmit={handleSubmit}>
            <h2>Course Registration</h2>
            <label>
              Full Name:
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Mobile Number:
              <input
                type="number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Select Course:
              <select
                name="selectedCourse"
                value={formData.selectedCourse}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select a course</option>
                <option value="Verbal">Verbal Course</option>
                <option value="Communication">Communication Course</option>
                <option value="PassiveActiveVoice">Passive and Active Voice Course</option>
                <option value="Idioms">Idioms Course</option>
              </select>
            </label>
            <label>
              Birth Date:
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Select Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </label>
            <button type="submit">Submit Registration</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseRegistrationForm;
