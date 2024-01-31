import React, { useState, useEffect } from 'react';
import './AdminEnq.css';

const AdminEnq = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [newEnquiry, setNewEnquiry] = useState({
    courseName: '',
    description: '',
    mailId: '',
    enquiryType: ''
  });
  const [editIndex, setEditIndex] = useState(-1);

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
      // Placeholder for add enquiry Axios request
      console.log('Add enquiry:', newEnquiry);

      // Update local storage
      const updatedEnquiries = [...enquiries, newEnquiry];
      setEnquiries(updatedEnquiries);
      localStorage.setItem('enquiries', JSON.stringify(updatedEnquiries));

      setNewEnquiry({
        courseName: '',
        description: '',
        mailId: '',
        enquiryType: ''
      });
    }
  };
  const handleUpdateEnquiry = (index) => {
    // Placeholder for update enquiry Axios request
    console.log('Update enquiry:', enquiries[index]);

    // Update local storage
    const updatedEnquiries = [...enquiries];
    updatedEnquiries[index] = newEnquiry;
    setEnquiries(updatedEnquiries);
    localStorage.setItem('enquiries', JSON.stringify(updatedEnquiries));

    setEditIndex(-1);
    setNewEnquiry({
      courseName: '',
      description: '',
      mailId: '',
      enquiryType: ''
    });
  };

  const handleDeleteEnquiry = (index) => {
    // Update local storage after deleting an enquiry
    const updatedEnquiries = [...enquiries];
    updatedEnquiries.splice(index, 1);
    setEnquiries(updatedEnquiries);
    localStorage.setItem('enquiries', JSON.stringify(updatedEnquiries));
  };


  // Other functions (handleUpdateEnquiry, handleDeleteEnquiry) remain the same

  useEffect(() => {
    // Fetch data from local storage when the component mounts
    const storedEnquiries = JSON.parse(localStorage.getItem('enquiries')) || [];
    setEnquiries(storedEnquiries);
  }, []);

  return (

   <center> <div className='admin-enq-container'>
      <center> <h2 className='nikk'>Enquiry</h2></center>
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
          {editIndex === -1 ? (
            <button className='add-btn' onClick={handleAddEnquiry}>
              Add Enquiry
            </button>
          ) : (
            <button className='update-btn' onClick={() => handleUpdateEnquiry(editIndex)}>
              Update Enquiry
            </button>
          )}
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
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        name="courseName"
                        value={newEnquiry.courseName}
                        onChange={handleChange}
                      />
                    ) : (
                      enquiry.courseName
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        name="description"
                        value={newEnquiry.description}
                        onChange={handleChange}
                      />
                    ) : (
                      enquiry.description
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        name="mailId"
                        value={newEnquiry.mailId}
                        onChange={handleChange}
                      />
                    ) : (
                      enquiry.mailId
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        name="enquiryType"
                        value={newEnquiry.enquiryType}
                        onChange={handleChange}
                      />
                    ) : (
                      enquiry.enquiryType
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <>
                        <button className='save-btn' onClick={() => handleUpdateEnquiry(index)}>Save</button>
                        <button className='cancel-btn' onClick={() => setEditIndex(-1)}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button className='update-btn' onClick={() => setEditIndex(index)}>Update</button>
                        <button className='delete-btn' onClick={() => handleDeleteEnquiry(index)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </center>
  );
};

export default AdminEnq;
