import React from 'react';

const Contact = () => {
  return (
    <div 
      style={{
        padding: '50px 20px',
        backgroundColor: '#FFD700',  // Gold background color
        textAlign: 'center',
      }}
    >
      <h1 
        style={{
          fontSize: '2rem',
          marginBottom: '20px',
          color: '#333',
        }}
      >
        Contact Us
      </h1>
      <p 
        style={{
          fontSize: '1rem',
          marginBottom: '30px',
          color: '#666',
        }}
      >
        Feel free to reach out to us for any inquiries.
      </p>
      <div
        style={{
          backgroundColor: 'white',  // White background for the contact info box
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'inline-block',
        }}
      >
        <p 
          style={{
            fontSize: '1.2rem',
            margin: '10px 0',
            color: '#333',
          }}
        >
          <strong>Email:</strong> huztech@example.com
        </p>
        <p 
          style={{
            fontSize: '1.2rem',
            margin: '10px 0',
            color: '#333',
          }}
        >
          <strong>Phone:</strong> 0333333333
        </p>
      </div>
    </div>
  );
};

export default Contact;
