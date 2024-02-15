import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminEnq.css';

const AdminEnq = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/enquiries/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Get enquiries response:', response.data);
      setEnquiries(response.data);
    })
    .catch(error => {
      console.error('Get enquiries error:', error);
    });
  }, [token]);

  return (
    <div className='jikh'>
      <center>
        <div className='admin-enq-container'>
          <center>
            <h2 className='nikk'>Enquiry</h2>
          </center>
          <div className='ter'>
            <table className='enq-table'>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Description</th>
                  <th>Mail ID</th>
                  <th>Enquiry Type</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enquiry, index) => (
                  <tr key={index}>
                    <td>{enquiry.courseName}</td>
                    <td>{enquiry.description}</td>
                    <td>{enquiry.mailId}</td>
                    <td>{enquiry.enquiryType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </center>
    </div>
  );
};

export default AdminEnq;
