import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeesManagement = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [newEnquiry, setNewEnquiry] = useState({
    courseName: '',
    description: '',
    mailId: '',
    enquiryType: ''
  });
  const [editIndex, setEditIndex] = useState(-1);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEnquiry((prevEnquiry) => ({ ...prevEnquiry, [name]: value }));
  };

  const handleAddEnquiry = () => {
    if (
      newEnquiry.courseName.trim() !== '' &&
      newEnquiry.description.trim() !== '' &&
      newEnquiry.mailId.trim() !== '' &&
      newEnquiry.enquiryType.trim() !== ''
    ) {
      axios.post('http://localhost:8080/enquiries/post', newEnquiry, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        console.log('Add enquiry response:', response.data);
        setEnquiries([...enquiries, response.data]);
        setNewEnquiry({
          courseName: '',
          description: '',
          mailId: '',
          enquiryType: ''
        });
      })
      .catch(error => {
        console.error('Add enquiry error:', error);
      });
    }
  };

  const handleUpdateEnquiry = (index) => {
    axios.put(`http://localhost:8080/enquiries/put/${index}`, newEnquiry, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Update enquiry response:', response.data);
      const updatedEnquiries = [...enquiries];
      updatedEnquiries[index] = response.data;
      setEnquiries(updatedEnquiries);
      setEditIndex(-1);
      setNewEnquiry({
        courseName: '',
        description: '',
        mailId: '',
        enquiryType: ''
      });
    })
    .catch(error => {
      console.error('Update enquiry error:', error);
    });
  };

  const handleDeleteEnquiry = (index) => {
    axios.delete(`http://localhost:8080/enquiries/${index}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Delete enquiry response:', response.data);
      const updatedEnquiries = [...enquiries];
      updatedEnquiries.splice(index, 1);
      setEnquiries(updatedEnquiries);
    })
    .catch(error => {
      console.error('Delete enquiry error:', error);
    });
  };

  return (
    <div className='jikh'>
      <center>
        <div className='admin-enq-container'>
          <center>
            <h2 className='nikk'>Enquiry</h2>
          </center>
          <div className='add-enq-form'>
            <input
              type="text"
              name="courseName"
              value={newEnquiry.courseName}
              onChange={handleChange}
              placeholder="Course Name"
            />
            <br />
            <input
              type="text"
              name="description"
              value={newEnquiry.description}
              onChange={handleChange}
              placeholder="Description"
            />
            <br />
            <input
              type="text"
              name="mailId"
              value={newEnquiry.mailId}
              onChange={handleChange}
              placeholder="Mail ID"
            />
            <br />
            <input
              type="text"
              name="enquiryType"
              value={newEnquiry.enquiryType}
              onChange={handleChange}
              placeholder="Enquiry Type"
            />
            <br />
            <button className='add-btn' onClick={handleAddEnquiry}>
              Add Enquiry
            </button>
          </div>
          <div className='ter'>
            <table className='enq-table'>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Description</th>
                  <th>Mail ID</th>
                  <th>Enquiry Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enquiry, index) => (
                  <tr key={index}>
                    <td>{enquiry.courseName}</td>
                    <td>{enquiry.description}</td>
                    <td>{enquiry.mailId}</td>
                    <td>{enquiry.enquiryType}</td>
                    <td>
                      <button className='delete-btn' onClick={() => handleDeleteEnquiry(index)}>Delete</button>
                    </td>
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

export default FeesManagement;
