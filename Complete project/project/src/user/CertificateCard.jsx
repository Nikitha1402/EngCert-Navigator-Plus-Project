// CertificateCard.jsx

import React, { useState } from 'react';
import './CertificateCard.css'; // Add your styling

const CertificateCard = () => {
  const [showCelebration, setShowCelebration] = useState(false);

  const handleDownload = () => {
    // Logic to generate and download the certificate
    // ...

    // Create a sample certificate content (you can replace this with the actual certificate content)
    const certificateContent = `
      Certificate of Completion

      This is to certify that

      NIKHITA R S

      has successfully completed the quiz on:

      Quiz Title

      Issued by:

      EduVerify Hub
    `;

    // Convert the certificate content to a Blob
    const certificateBlob = new Blob([certificateContent], { type: 'text/plain' });

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(certificateBlob);
    downloadLink.download = 'Certificate_of_Completion.txt';

    // Trigger a click on the download link
    downloadLink.click();

    // Clean up the URL object after the download link is clicked
    URL.revokeObjectURL(downloadLink.href);

    // After generating the certificate, trigger the celebration animation
    setShowCelebration(true);

    // You can also set a timeout to remove the celebration after a certain duration
    setTimeout(() => {
      setShowCelebration(false);
    }, 3000); // Adjust the duration as needed
  };

  return (
    <div className={`certificate-card ${showCelebration ? 'celebrate' : ''}`}>
      <h2>Certificate of Completion</h2>
      <p>This is to certify that</p>
      <h3>NIKHITA R S</h3>
      <p>has successfully completed the quiz on:</p>
      <p>Quiz Title</p>
      <p>Issued by:</p>
      <h4>EduVerify Hub</h4>
      <button onClick={handleDownload}>Download Certificate</button>
    </div>
  );
};

export default CertificateCard;
