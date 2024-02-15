// EnquiryManagement.js
import React, { useState } from 'react';
import FeesManagement from './FeesManagement';
import AdminEnq from './AdminEnq';

const EnquiryManagement = () => {
  const [enquiries, setEnquiries] = useState([]);

  const addEnquiry = (newEnquiry) => {
    setEnquiries([...enquiries, newEnquiry]);
  };

  return (
    <div>
      <FeesManagement addEnquiry={addEnquiry} />
      <AdminEnq enquiries={enquiries} />
    </div>
  );
};

export default EnquiryManagement;
