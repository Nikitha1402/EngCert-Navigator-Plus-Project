import React, { useState, useEffect } from 'react';
import './AdminCourse.css';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios'; // Import axios for making HTTP requests

const AdminCourse = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ name: '', duration: '', fee: '' });
  const [editingCourseId, setEditingCourseId] = useState(null);
  const token = localStorage.getItem('token'); // Get the bearer token from localStorage

  useEffect(() => {
    // Fetch courses when the component mounts
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/courses/', {
        headers: {
          Authorization: `Bearer ${token}`, // Include the bearer token in the request headers
        },
      });
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const addCourse = async () => {
    try {
      await axios.post('http://localhost:8080/courses/post', newCourse, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the bearer token in the request headers
        },
      });
      fetchCourses(); // Refresh courses after adding a new one
      setNewCourse({ name: '', duration: '', fee: '' });
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const editCourse = (id) => {
    setEditingCourseId(id);
    const courseToEdit = courses.find((course) => course.id === id);
    setNewCourse(courseToEdit);
  };

  const updateCourse = async () => {
    try {
      await axios.put(`http://localhost:8080/courses/put/${editingCourseId}`, newCourse, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the bearer token in the request headers
        },
      });
      fetchCourses(); // Refresh courses after updating
      setEditingCourseId(null);
      setNewCourse({ name: '', duration: '', fee: '' });
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the bearer token in the request headers
        },
      });
      fetchCourses(); // Refresh courses after deleting
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className='luj'>
      <div className="admin-course-container">
        <center>  <h2 className='pin'>Course Management</h2></center>
        <table className="course-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Duration</th>
              <th>Fee</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.duration}</td>
                <td>{course.fee}</td>
                <td>
                  <button onClick={() => editCourse(course.id)}>
                    <AiOutlineEdit />
                  </button>
                  <button onClick={() => deleteCourse(course.id)}>
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-course-form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newCourse.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            value={newCourse.duration}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Fee"
            name="fee"
            value={newCourse.fee}
            onChange={handleInputChange}
          />
          {editingCourseId ? (
            <button className="update-btn" onClick={updateCourse}>
              Update Course
            </button>
          ) : (
            <button className="add-btn" onClick={addCourse}>
              Add Course
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCourse;
